import type { Metadata } from 'next'
import { BRAND } from '../../lib/constants'
import BlogGrid from './BlogGrid'

const BLOG_INDEX_TITLE = 'Blog — California Mortgage Resource'
const BLOG_INDEX_DESCRIPTION = `Plain-English guides on California mortgage rates, loan types, and down payment programs from ${BRAND}. Informational only — not a lender.`

export const metadata: Metadata = {
  title: BLOG_INDEX_TITLE,
  description: BLOG_INDEX_DESCRIPTION,
  alternates: { canonical: '/blog' },
  openGraph: { title: BLOG_INDEX_TITLE, description: BLOG_INDEX_DESCRIPTION },
  twitter: { card: 'summary_large_image', title: BLOG_INDEX_TITLE, description: BLOG_INDEX_DESCRIPTION },
}

export default function BlogIndexPage() {
  return (
    <main>
      <div className="blog-hero">
        <h1>The Mettkey Blog</h1>
        <p>Straight-talk California mortgage guidance — no upsell, no lender pitch.</p>
      </div>
      <div className="sec">
        <div className="sec-max">
          <BlogGrid />
        </div>
      </div>
    </main>
  )
}
