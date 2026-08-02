'use client'

import { useEffect, useState } from 'react'
import { LoanTabId, SHOW_TAB_EVENT } from '../lib/tabEvents'

const TAB_ORDER: { id: LoanTabId; label: string }[] = [
  { id: 'conventional', label: 'Conventional' },
  { id: 'fha', label: 'FHA' },
  { id: 'va', label: 'VA' },
  { id: 'jumbo', label: 'Jumbo' },
  { id: 'bankstmt', label: 'Bank Statement' },
  { id: 'dscr', label: 'DSCR / Investor' },
  { id: 'cashout', label: 'Cash-Out Refi' },
  { id: 'calhfa', label: 'CalHFA' },
]

export default function LoanTabs() {
  const [active, setActive] = useState<LoanTabId>('conventional')

  useEffect(() => {
    const onShowTab = (e: Event) => {
      const detail = (e as CustomEvent<LoanTabId>).detail
      if (detail) {
        setActive(detail)
        document.getElementById('loans')?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    window.addEventListener(SHOW_TAB_EVENT, onShowTab)
    return () => window.removeEventListener(SHOW_TAB_EVENT, onShowTab)
  }, [])

  return (
    <div className="sec" id="loans">
      <div className="sec-max">
        <span className="ey">Loan Types Explained</span>
        <h2 className="sec-h">Every California loan type — plain English</h2>
        <div className="lt-nav">
          {TAB_ORDER.map((t) => (
            <button key={t.id} className={`lt-btn${active === t.id ? ' active' : ''}`} onClick={() => setActive(t.id)}>
              {t.label}
            </button>
          ))}
        </div>

        <div className={`lt-pane${active === 'conventional' ? ' active' : ''}`}>
          <div className="lt-text">
            <h3>Conventional Loan</h3>
            <p>The most common loan in California. Backed by Fannie Mae or Freddie Mac — not the government. Best rates for W-2 borrowers with solid credit. PMI cancels automatically when you hit 20% equity.</p>
            <div className="chips"><span className="chip">Min 620 Credit</span><span className="chip">3–20% Down</span><span className="chip chip-g">Best Rates</span><span className="chip">PMI Removable</span></div>
            <div className="lt-facts">
              <div className="fact"><div className="fact-dot"></div><div><b>CA Conforming Limit 2026</b><span>$766,550 most counties. LA, SF, OC up to $1,149,825. Above that is jumbo territory.</span></div></div>
              <div className="fact"><div className="fact-dot"></div><div><b>Best for</b><span>W-2 employees with 620+ credit, stable income, and savings for a down payment.</span></div></div>
              <div className="fact"><div className="fact-dot"></div><div><b>Self-employed watch out</b><span>Conventional uses adjusted gross income from tax returns. Write-offs that reduce taxes also reduce your qualifying income — bank statement loans fix that.</span></div></div>
            </div>
          </div>
          <div className="lt-img">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=80&auto=format&fit=crop" alt="California home" /></div>
        </div>

        <div className={`lt-pane${active === 'fha' ? ' active' : ''}`}>
          <div className="lt-text">
            <h3>FHA Loan</h3>
            <p>Government-backed with flexible credit requirements — the go-to for first-time buyers with limited savings. FHA MIP is required for the life of the loan if you put less than 10% down. Factor that long-term cost in before assuming FHA is cheaper.</p>
            <div className="chips"><span className="chip chip-g">Min 580 Credit</span><span className="chip">3.5% Down</span><span className="chip chip-g">First-Time Buyers</span><span className="chip">Flexible Underwriting</span></div>
            <div className="lt-facts">
              <div className="fact"><div className="fact-dot"></div><div><b>The MIP trap</b><span>FHA MIP doesn&apos;t cancel if you put less than 10% down. Exit: refinance to conventional once you hit 20% equity.</span></div></div>
              <div className="fact"><div className="fact-dot"></div><div><b>CA FHA Limits 2026</b><span>$498,257 most counties. Up to $1,149,825 in high-cost counties like LA and SF.</span></div></div>
            </div>
          </div>
          <div className="lt-img">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop" alt="Family home" /></div>
        </div>

        <div className={`lt-pane${active === 'va' ? ' active' : ''}`}>
          <div className="lt-text">
            <h3>VA Loan</h3>
            <p>One of the most powerful mortgage benefits available. Zero down, no PMI ever, competitive rates. For active duty, veterans, and eligible surviving spouses. California has one of the highest VA loan volumes in the country.</p>
            <div className="chips"><span className="chip chip-g">0% Down</span><span className="chip chip-g">No PMI Ever</span><span className="chip">Military / Veterans Only</span></div>
            <div className="lt-facts">
              <div className="fact"><div className="fact-dot"></div><div><b>VA Funding Fee</b><span>One-time fee (1.25–3.3%) replacing PMI — rolls into the loan. Waived for veterans with service-connected disabilities.</span></div></div>
              <div className="fact"><div className="fact-dot"></div><div><b>Who qualifies</b><span>Active duty (90 days wartime / 181 peacetime), veterans, National Guard (6 yrs+), surviving spouses. Get a COE at va.gov first.</span></div></div>
            </div>
          </div>
          <div className="lt-img">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80&auto=format&fit=crop" alt="Home" /></div>
        </div>

        <div className={`lt-pane${active === 'jumbo' ? ' active' : ''}`}>
          <div className="lt-text">
            <h3>Jumbo Loan</h3>
            <p>Any loan above the conforming limit is jumbo — and in California that includes a massive portion of the market. Westside LA, Malibu, Venice, Beverly Hills: nearly every transaction here requires jumbo financing. Stricter reserves and credit, but completely standard for these markets.</p>
            <div className="chips"><span className="chip">$766K+ Loan</span><span className="chip">Min 700 Credit</span><span className="chip">12 Mo Reserves</span><span className="chip">LA / Coastal</span></div>
            <div className="lt-facts">
              <div className="fact"><div className="fact-dot"></div><div><b>Key difference</b><span>Jumbo lenders set their own guidelines — not Fannie/Freddie backed. Expect 10–20% down, 700+ credit, 6–12 months reserves.</span></div></div>
              <div className="fact"><div className="fact-dot"></div><div><b>High-cost CA limits</b><span>LA, OC, SF, San Mateo up to $1,149,825 conforming. Above that = non-conforming jumbo.</span></div></div>
            </div>
          </div>
          <div className="lt-img">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=700&q=80&auto=format&fit=crop" alt="Luxury home" /></div>
        </div>

        <div className={`lt-pane${active === 'bankstmt' ? ' active' : ''}`}>
          <div className="lt-text">
            <h3>Bank Statement Loan</h3>
            <p>Built for self-employed borrowers whose tax returns don&apos;t reflect real income due to legitimate write-offs. Qualify on 12–24 months of bank deposits. No tax returns, no Schedule C, no W-2. Extremely common in LA&apos;s entrepreneur, creative, and entertainment industries.</p>
            <div className="chips"><span className="chip">Self-Employed</span><span className="chip">No Tax Returns</span><span className="chip">Non-QM</span><span className="chip chip-g">12–24 Mo Statements</span></div>
            <div className="lt-facts">
              <div className="fact"><div className="fact-dot"></div><div><b>How it works</b><span>Lenders average deposits over 12–24 months. Business accounts: ~50% expense ratio applied. Personal accounts: full deposits used.</span></div></div>
              <div className="fact"><div className="fact-dot"></div><div><b>Rate premium</b><span>Expect 0.5–1.5% above conventional — the tradeoff for qualifying on actual income instead of taxable income.</span></div></div>
            </div>
          </div>
          <div className="lt-img">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80&auto=format&fit=crop" alt="Professional" /></div>
        </div>

        <div className={`lt-pane${active === 'dscr' ? ' active' : ''}`}>
          <div className="lt-text">
            <h3>DSCR / Investor Loan</h3>
            <p>Qualify on the property&apos;s rental income — not your personal income. No W-2, no tax returns, no employment verification. The property pays for itself on paper, and that&apos;s what counts. How serious CA investors build portfolios.</p>
            <div className="chips"><span className="chip">Investors</span><span className="chip chip-g">Rental Income Qualifies</span><span className="chip">No W-2 Needed</span><span className="chip">LLC Vesting OK</span></div>
            <div className="lt-facts">
              <div className="fact"><div className="fact-dot"></div><div><b>The formula</b><span>Gross monthly rent ÷ PITIA = DSCR. Most lenders want 1.1–1.25+. A DSCR of 1.0 means the property breaks even.</span></div></div>
              <div className="fact"><div className="fact-dot"></div><div><b>CA use case</b><span>Inland Empire, San Fernando Valley, Long Beach — markets where rent-to-price ratios still support positive cash flow.</span></div></div>
            </div>
          </div>
          <div className="lt-img">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80&auto=format&fit=crop" alt="Investment property" /></div>
        </div>

        <div className={`lt-pane${active === 'cashout' ? ' active' : ''}`}>
          <div className="lt-text">
            <h3>Cash-Out Refinance</h3>
            <p>Tap existing equity by refinancing into a larger loan. Proceeds for renovations, down payments on investment properties, or debt payoff. California&apos;s appreciation has left many homeowners with massive untapped equity — knowing how to access it intelligently matters.</p>
            <div className="chips"><span className="chip">Tap Equity</span><span className="chip">Max 80% LTV</span><span className="chip">Refi + Cash</span></div>
            <div className="lt-facts">
              <div className="fact"><div className="fact-dot"></div><div><b>Break-even math</b><span>A cash-out refi replaces your existing rate. If today&apos;s rate is higher, model the full cost — not just the cash you receive.</span></div></div>
              <div className="fact"><div className="fact-dot"></div><div><b>HELOC alternative</b><span>A Home Equity Line lets you tap equity without replacing your first mortgage rate — often smarter in a high-rate environment.</span></div></div>
            </div>
          </div>
          <div className="lt-img">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80&auto=format&fit=crop" alt="Home renovation" /></div>
        </div>

        <div className={`lt-pane${active === 'calhfa' ? ' active' : ''}`}>
          <div className="lt-text">
            <h3>CalHFA Programs</h3>
            <p>The California Housing Finance Agency offers state-backed programs for first-time buyers — most with income and purchase price limits. Stacking CalHFA with FHA or conventional can cover your down payment AND closing costs in a single package.</p>
            <div className="chips"><span className="chip chip-g">First-Time Buyers</span><span className="chip chip-g">Down Payment Help</span><span className="chip">Income Limits Apply</span><span className="chip">CA Residents Only</span></div>
            <div className="lt-facts">
              <div className="fact"><div className="fact-dot"></div><div><b>MyHome Assistance</b><span>Deferred junior loan up to 3.5% of purchase price. No monthly payment — repaid only when you sell or refinance.</span></div></div>
              <div className="fact"><div className="fact-dot"></div><div><b>Dream For All</b><span>State covers 20% down as a shared appreciation loan. Waitlists fill fast — check calhfa.ca.gov for availability.</span></div></div>
            </div>
          </div>
          <div className="lt-img">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=700&q=80&auto=format&fit=crop" alt="Keys" /></div>
        </div>
      </div>
    </div>
  )
}
