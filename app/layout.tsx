import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Popup from '../components/Popup'
import { SITE_URL, BRAND, NMLS } from '../lib/constants'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['300', '400', '500', '600', '700', '800'] })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', weight: ['600', '700'], style: ['normal', 'italic'] })

const HOME_TITLE = `${BRAND} — California Mortgage Resource`
const HOME_DESCRIPTION = `Your portal to California mortgage information, market trends, and loan programs for home buyers, investors, and self-employed borrowers. ${NMLS}`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${BRAND}`,
  },
  description: HOME_DESCRIPTION,
  keywords: [
    'California mortgage resource',
    'California mortgage rates',
    'bank statement loan California',
    'DSCR loan California',
    'CalHFA programs',
    'first time home buyer California',
    'FHA loan California',
    'jumbo loan California',
  ],
  openGraph: {
    type: 'website',
    siteName: BRAND,
    title: HOME_TITLE,
    description: 'Your California mortgage resource — information and market trends for home buyers, first-time buyers, self-employed borrowers, and investors. Not a lender — informational only.',
    url: SITE_URL,
    images: [`${SITE_URL}/og-image.jpg`],
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: 'Your California mortgage resource — information and market trends for home buyers, first-time buyers, self-employed borrowers, and investors.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
}

const FINANCIAL_SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Mettkey',
  url: 'https://mettkey.com/',
  description: 'California mortgage resource — information on loan programs and market trends. Not a lender, broker, or mortgage company — for informational purposes only.',
  areaServed: { '@type': 'State', name: 'California' },
  employee: {
    '@type': 'Person',
    name: 'Shiva T. Mettke',
    identifier: [
      { '@type': 'PropertyValue', name: 'NMLS', value: '2779492' },
      { '@type': 'PropertyValue', name: 'CA DRE', value: '02251909' },
    ],
  },
}

const GLOSSARY_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Mortgage Glossary',
  description: 'Plain-English definitions of common California mortgage terms.',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'APR (Annual Percentage Rate)', description: 'True cost of borrowing including fees and interest. Always higher than the rate. Use APR to compare loans apples-to-apples.' },
    { '@type': 'DefinedTerm', name: 'DTI (Debt-to-Income Ratio)', description: 'Total monthly debts divided by gross monthly income. Most lenders cap at 43-50%. Primary qualification metric for most loan types.' },
    { '@type': 'DefinedTerm', name: 'LTV (Loan-to-Value)', description: 'Loan amount divided by property value. 80% LTV equals 20% down. Higher LTV means more lender risk, which means higher rates or PMI.' },
    { '@type': 'DefinedTerm', name: 'PMI / MIP', description: 'Mortgage insurance required when LTV exceeds 80% on conventional (PMI) or FHA loans (MIP).' },
    { '@type': 'DefinedTerm', name: 'Non-QM Loan', description: 'Non-Qualified Mortgage, outside standard CFPB guidelines. Includes bank statement, DSCR, and asset depletion loans.' },
    { '@type': 'DefinedTerm', name: 'DSCR', description: 'Debt Service Coverage Ratio. Gross rent divided by PITIA. Used to qualify investment loans without personal income.' },
    { '@type': 'DefinedTerm', name: 'Escrow', description: 'Neutral third party managing funds and documents in a California transaction. Also the monthly impound for property taxes and insurance.' },
    { '@type': 'DefinedTerm', name: 'Rate Lock', description: 'Lender commitment to hold your rate for 30-60 days. Protects against rate increases during underwriting.' },
    { '@type': 'DefinedTerm', name: 'PITIA', description: 'Principal, Interest, Taxes, Insurance, and HOA. The full monthly housing cost used in DTI and DSCR calculations.' },
    { '@type': 'DefinedTerm', name: 'Clear to Close (CTC)', description: 'All underwriting conditions satisfied. Lender is ready to fund. Final step before your signing appointment.' },
    { '@type': 'DefinedTerm', name: 'Deed of Trust', description: "California's version of a mortgage. A third-party trustee holds title during the loan." },
    { '@type': 'DefinedTerm', name: 'Loan Estimate (LE)', description: '3-page disclosure required within 3 business days of application. Used to compare lenders on rate, fees, and cash to close.' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FINANCIAL_SERVICE_SCHEMA) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(GLOSSARY_SCHEMA) }} />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <Popup />
      </body>
    </html>
  )
}
