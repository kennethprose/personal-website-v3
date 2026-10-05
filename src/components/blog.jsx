import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { posts } from '../posts/posts'

const pageStyle = 'mx-auto min-h-full w-full px-3 mt-14 mb-14'
const headingStyle = 'text-4xl text-primary dark:text-dark_primary'
const linkStyle = 'text-accent dark:text-dark_accent underline underline-offset-4'

function PublishedDate({ date }) {
  if (!date) return null
  const label = new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  })
  return <time dateTime={date} className='block text-base text-secondary dark:text-dark_secondary'>Published {label}</time>
}

export default function Blog() {
  return (
    <main className={pageStyle}>
      <h1 className={`px-2 ${headingStyle}`}>Blog</h1>
      <div className='divider before:bg-slate-200 after:bg-slate-200 dark:before:bg-slate-800 dark:after:bg-slate-800' />
      {posts.length ? (
        <ul className='space-y-6'>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                to={`/blog/${encodeURIComponent(post.slug)}`}
                className='card bg-foreground dark:bg-dark_foreground md:drop-shadow-lg hover:ring-2 hover:ring-accent dark:hover:ring-dark_accent focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-dark_accent'
              >
                <div className='card-body'>
                  <h2 className='text-3xl text-primary dark:text-dark_primary'>{post.title}</h2>
                  <PublishedDate date={post.publishedDate} />
                  <p className='mt-3 text-accent dark:text-dark_accent'>Read article &rarr;</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className='px-2 text-xl text-secondary dark:text-dark_secondary'>No articles published yet. Check back soon!</p>
      )}
    </main>
  )
}

export function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((entry) => entry.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  return (
    <main className={pageStyle}>
      <Link to='/blog' className={linkStyle}>&larr; All articles</Link>
      {post ? (
        <article className='blog-article mt-6 rounded-box bg-foreground dark:bg-dark_foreground p-6 md:p-10 md:drop-shadow-lg text-lg text-secondary dark:text-dark_secondary'>
          {!post.hasHeading && <h1>{post.title}</h1>}
          {!post.hasHeading && <PublishedDate date={post.publishedDate} />}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              table: ({ node, ...props }) => <div className='overflow-x-auto'><table {...props} /></div>,
              h1: ({ node, ...props }) => (
                <>
                  <h1 {...props} />
                  {node.position?.start.offset === post.headingOffset && (
                    <PublishedDate date={post.publishedDate} />
                  )}
                </>
              ),
            }}
          >
            {post.markdown}
          </ReactMarkdown>
        </article>
      ) : (
        <div className='mt-8'>
          <h1 className={headingStyle}>Article not found</h1>
          <p className='mt-5 text-xl text-secondary dark:text-dark_secondary'>This article may have moved or is no longer published.</p>
        </div>
      )}
    </main>
  )
}
