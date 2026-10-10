---
date: 2026-10-10
---

# Redirect to Uptime Kuma on the Free Cloudflare Tier

If you are anything like me, the self-hosting addiction has sunk its teeth deep into you and you now have tons of hosted services and maybe even an uptime/service status monitoring tool such as [Uptime Kuma](https://uptimekuma.co/) running to stay on top of them all. 

The issue is that your users are probably not aware of your monitoring page, and even if they are, they may not think to check it during potential downtime. Being able to redirect failing requests to that service can communicate to your users that the issue is not on their end, limit the number of complaints/requests you get, and add some polish to your self-hosted stack.

Sounds nice, but how can we achieve this? Cloudflare actually has a feature called Custom Error Pages that you can set up to redirect to another site for specific error codes. This, however, is only available on the paid tiers. Instead, with a little extra effort, we can achieve the same functionality for free using Cloudflare Workers. 

The main premise is that we will create a worker that runs on Cloudflare's servers and acts as a middleman between the user's request and the destination server. When a request comes in, the worker tries to fetch the response itself. We can add in some simple error handling to detect a failed request, and change the response to the user to be a redirect to the monitoring service. 

## Requirements

- A domain managed through Cloudflare
- A running uptime monitoring service (such as Uptime Kuma)

> **Note:** This will only work on domains and subdomains that are proxied through Cloudflare. "DNS Only" domains will not work.

## Setup Steps

### 1. Create the Worker

1. Log into Cloudflare.
2. Go to **Compute > Workers & Pages**, then click **Create application**.
3. Click **Start with Hello World!**.
4. Name the worker (optional) and click **Deploy**.

### 2. Add the Redirect Code

1. On the newly created worker, click **Edit code**.
2. Replace the contents with the code below, changing `https://yourdomain.com` to the actual URL of your uptime monitoring service (both occurrences).
3. Click **Deploy**.

```javascript
export default {
  async fetch(request, env, ctx) {
    try {
      // 1. Forward the incoming request to your origin web server
      const response = await fetch(request);

      // 2. Intercept 502 Bad Gateway (or add other 5xx errors if desired)
      if (response.status === 502) {
        // Change the URL below to your maintenance page or external status site
        return Response.redirect("https://yourdomain.com", 302);
      }

      // If everything is healthy, return the normal response
      return response;

    } catch (error) {
      // 3. Catch edge-case connection drops where fetch completely fails
      return Response.redirect("https://yourdomain.com", 302);
    }
  }
};
```

### 3. Add a Route

1. Back on the worker page, click **Domains**, then **Add route**.
2. Select the **zone** and **domain name** for the pages you want redirected when they go down.
3. Set the **failure mode** to **Fail Open** (see recommendations below).
4. Click **Add route**.

- Only add routes for pages tracked in your uptime monitoring dashboard.
- To cover your whole domain and all subdomains, use a wildcard route such as `*.yourdomain.com/*`.
- Use Fail Open as the failure mode. Otherwise, if you hit the free plan's request limit, all requests will fail. The limit is large, but it's better to be safe.

## Recommendations

> **Set "Max. Redirects" in Uptime Kuma to 0.** The default behavior will accept the redirect to the status page and keep the site marked as online, defeating the purpose of the uptime monitoring.

## Testing

Once the route is added, you're done. It's worth testing with a site that is currently down or an unused domain to confirm the redirect works.
