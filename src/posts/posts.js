// Vite includes every post automatically, both during development and in builds.
const files = import.meta.glob('./*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export const posts = Object.entries(files)
  .map(([path, markdown]) => {
    const slug = path.split('/').pop().replace(/\.md$/, '')
    const metadata = markdown.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
    const dateValue = metadata?.[1].match(/^date:[ \t]*["']?(\d{4}-\d{2}-\d{2})["']?[ \t]*\r?$/m)?.[1]
    const date = dateValue && new Date(`${dateValue}T00:00:00Z`)
    const publishedDate = date && !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === dateValue
      ? dateValue
      : null
    if (metadata) markdown = markdown.slice(metadata[0].length)
    const heading = markdown.match(/^#\s+(.+?)\s*#*\s*$/m)
    return {
      slug,
      title: heading ? heading[1] : slug.replace(/[-_]/g, ' '),
      markdown,
      hasHeading: Boolean(heading),
      headingOffset: heading?.index,
      publishedDate,
    }
  })
  .sort((a, b) => a.title.localeCompare(b.title))
