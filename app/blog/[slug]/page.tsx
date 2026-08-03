import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS, getPost } from '../../../lib/blog'
import { AGENT_NAME, BLOG_DISCLAIMER, SITE_URL } from '../../../lib/constants'
import ShareButtons from '../../../components/ShareButtons'

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: post.metaTitle.replace(/\s*\|\s*Mettkey\s*$/i, ''),
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
    twitter: { card: 'summary_large_image', title: post.metaTitle, description: post.metaDescription },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) return notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: AGENT_NAME },
    publisher: { '@type': 'Organization', name: 'Mettkey' },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    isFamilyFriendly: true,
    about: 'California mortgage resource',
    genre: 'Educational',
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <article className="blog-post">
        <span className="art-cat">{post.category.toUpperCase()}</span>
        <h1>{post.title}</h1>
        <span className="blog-date">
          {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </span>

        {post.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}

        {post.internalLinks.length > 0 && (
          <div className="blog-links">
            {post.internalLinks.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>
        )}

        <ShareButtons url={`${SITE_URL}/blog/${post.slug}`} title={post.title} />

        <div className="blog-disclaimer">{BLOG_DISCLAIMER}</div>
      </article>
    </main>
  )
}
