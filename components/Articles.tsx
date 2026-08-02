'use client'

import { requestShowTab } from '../lib/tabEvents'

const ARTICLES = [
  { href: '/blog/ca-mortgage-rates-2026', img: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80&auto=format&fit=crop', cat: 'RATES', title: "CA Mortgage Rates 2026: What's Actually Moving Them", desc: 'The 10-year Treasury, Fed policy, and your credit score all pull in different directions. Here\'s how they interact.' },
  { href: '/blog/bank-statement-loans-self-employed-playbook', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&auto=format&fit=crop', cat: 'SELF-EMPLOYED', title: 'Bank Statement Loans: The Self-Employed Playbook', desc: 'Write-offs reduce your taxes and kill your mortgage qualification. Bank statement loans fix that.' },
  { href: '/blog/how-to-buy-in-la-with-less-than-10-percent-down', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80&auto=format&fit=crop', cat: 'FIRST-TIME BUYERS', title: 'How to Buy in LA With Less Than 10% Down', desc: 'CalHFA, FHA, and conventional compared side-by-side. Real numbers on a $750K purchase.' },
  { href: '/blog/dscr-loans-qualify-on-rent-not-w2-income', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&auto=format&fit=crop', cat: 'INVESTORS', title: 'DSCR Loans: Qualify on Rent, Not W-2 Income', desc: "Building a rental portfolio? DSCR loans let the property do the qualifying. Here's the math." },
  { href: '/blog/pre-qualified-vs-pre-approved-why-it-matters', img: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&q=80&auto=format&fit=crop', cat: 'PRE-APPROVAL', title: 'Pre-Qualified vs Pre-Approved: Why It Matters', desc: "In a multiple-offer situation, a weak pre-qual is ignored. Here's what actually matters." },
  { href: '/blog/calhfa-programs-explained', img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80&auto=format&fit=crop', cat: 'CA PROGRAMS', title: 'CalHFA Programs Explained: MyHome, ZIP, and Dream For All', desc: 'State-backed down payment help most California buyers never think to check for.' },
]

export default function Articles() {
  return (
    <div className="sec sec-bg" id="learn">
      <div className="sec-max">
        <span className="ey">Guides</span>
        <h2 className="sec-h">What every CA borrower should read first</h2>
        <p className="sec-sub">The highest-traffic mortgage guide topics — California-specific, no upsell.</p>
        <div className="art-grid">
          {ARTICLES.map((a) => (
            <a href={a.href} className="art" key={a.href}>
              <div className="art-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.img} alt={a.cat} />
                <div className="art-cat">{a.cat}</div>
              </div>
              <div className="art-body">
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <div className="art-more">Read Guide →</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
