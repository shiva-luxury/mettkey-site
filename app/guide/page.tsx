import type { Metadata } from 'next'
import EbookForm from '../../components/EbookForm'
import { BRAND, SITE_URL } from '../../lib/constants'

const GUIDE_TITLE = `Free California Home Loan Playbook | ${BRAND}`
const GUIDE_DESCRIPTION = 'Download the free 42-page California Home Loan Playbook — every CA loan type, CalHFA programs, rate lock strategy, and a full mortgage glossary. No credit pull, no lender calls.'

export const metadata: Metadata = {
  title: GUIDE_TITLE,
  description: GUIDE_DESCRIPTION,
  alternates: { canonical: '/guide' },
  openGraph: {
    title: GUIDE_TITLE,
    description: GUIDE_DESCRIPTION,
    url: `${SITE_URL}/guide`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: GUIDE_TITLE, description: GUIDE_DESCRIPTION },
}

export default function GuidePage() {
  return (
    <main>
      <div className="blog-hero">
        <h1>The Free California Home Loan Playbook</h1>
        <p>42 pages. Every CA loan type, program, and red flag explained in plain English.</p>
      </div>
      <EbookForm />
    </main>
  )
}
