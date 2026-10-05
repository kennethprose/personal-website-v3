## Publishing a blog post

Drop a `.md` file directly into `src/posts/`. Every file in that folder is published automatically: no imports, registration, or front matter are required. The list is sorted by title.

Use a descriptive filename such as `my-homelab.md`; it becomes `/blog/my-homelab`. Start with a level-one heading for the article title. If you omit it, the filename is used instead.

To include a publication date, add this optional metadata block at the very beginning of the file:

```markdown
---
date: 2026-10-04
---

# My homelab

The article starts here.
```

Use `YYYY-MM-DD`. The date appears in the article list and below the article title as “Published October 4, 2026”. Dates stay the same in every timezone. Posts without a date still work; invalid dates are omitted. The list remains sorted by title. The metadata block is removed from the rendered article; only the `date` field is used.

Standard Markdown plus GitHub-style tables, task lists, strikethrough, and footnotes are supported. Code blocks preserve their formatting. Raw HTML is not rendered; use Markdown syntax instead.

For local images, put them in `public/blog/` and reference them with an absolute path, for example `![My server](/blog/server.jpg)`. Link to another article using `/blog/its-filename`.
