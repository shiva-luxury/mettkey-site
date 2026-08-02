import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '../../lib/blog'
import { BRAND, LEGAL_DISCLAIMER, SITE_URL } from '../../lib/constants'

const TRENDS_TITLE = `California Mortgage Market Trends & Rates | ${BRAND}`
const TRENDS_DESCRIPTION = 'Your portal to current California mortgage market trends — rate context, conforming loan limits, and the latest rate-related guides. Informational only, not a rate lock or commitment.'

export const metadata: Metadata = {
  title: TRENDS_TITLE,
  description: TRENDS_DESCRIPTION,
  alternates: { canonical: '/market-trends' },
  openGraph: {
    title: TRENDS_TITLE,
    description: TRENDS_DESCRIPTION,
    url: `${SITE_URL}/market-trends`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TRENDS_TITLE, description: TRENDS_DESCRIPTION },
}

const ratePosts = [...BLOG_POSTS].reverse().filter((p) => p.category === 'Rates')

export default function MarketTrendsPage() {
  return (
    <main>
      <div className="blog-hero">
        <h1>California Mortgage Market Trends</h1>
        <p>Your portal to current market trends — rate context and CA-specific guides, updated as conditions change.</p>
      </div>

      <div className="sec">
        <div className="sec-max">
          <span className="ey">Rate Overview</span>
          <h2 className="sec-h">Where rates and limits stand right now</h2>
          <p className="sec-sub">A quick-reference snapshot of the numbers that shape most California loan quotes. Use the calculator on the homepage to run your own scenario.</p>
          <div className="calc-r" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            <div className="info-c"><strong>Sample 30-Year Fixed</strong><span>Around 6.62% for a well-qualified borrower on a conforming loan. Your actual rate depends on credit, down payment, and property type.</span></div>
            <div className="info-c gr"><strong>CA Conforming Limits 2026</strong><span>$766,550 baseline. High-cost counties (LA, SF, OC) up to $1,149,825. Above that = jumbo with stricter guidelines.</span></div>
            <div className="info-c"><strong>Non-QM Rate Premium</strong><span>Bank statement and DSCR loans typically run 0.5–1.5% above conventional pricing, reflecting a different underwriting model.</span></div>
            <div className="info-c gr"><strong>Rate Lock Window</strong><span>30–60 day locks are standard. Lock when the payment works for you — not when trying to time a market bottom.</span></div>
          </div>
        </div>
      </div>

      <div className="sec sec-bg">
        <div className="sec-max">
          <span className="ey">Latest Rate Guides</span>
          <h2 className="sec-h">Rate-focused reading</h2>
          <p className="sec-sub">Plain-English breakdowns of what actually moves California mortgage rates.</p>
          <div className="blog-grid">
            {ratePosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <span className="art-cat">{post.category.toUpperCase()}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="blog-date">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="sec-max">
          <div className="blog-disclaimer">{LEGAL_DISCLAIMER}</div>
        </div>
      </div>
    </main>
  )
}
