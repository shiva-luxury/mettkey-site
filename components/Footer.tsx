import { LEGAL_DISCLAIMER } from '../lib/constants'
import FooterTabLink from './FooterTabLink'

export default function Footer() {
  return (
    <footer>
      <div className="ft-top">
        <div>
          <span className="ft-logo">Mett<span>key</span></span>
          <p className="ft-about">California mortgage education and information resource. Helping home buyers, investors, and self-employed borrowers understand their loan options before they ever talk to a lender. We do not originate loans or take applications.</p>
        </div>
        <div>
          <div className="ft-h">Learn</div>
          <ul className="ft-ul">
            <li><a href="/#loans">Loan Types</a></li>
            <li><a href="/#programs">CA Programs</a></li>
            <li><a href="/#calculator">Calculator</a></li>
            <li><a href="/#learn">Articles</a></li>
            <li><a href="/#guides">Free Playbook</a></li>
            <li><a href="/#newsletter">Newsletter</a></li>
          </ul>
        </div>
        <div>
          <div className="ft-h">Loan Types</div>
          <ul className="ft-ul">
            <li><FooterTabLink tab="conventional">Conventional</FooterTabLink></li>
            <li><FooterTabLink tab="fha">FHA</FooterTabLink></li>
            <li><FooterTabLink tab="va">VA</FooterTabLink></li>
            <li><FooterTabLink tab="jumbo">Jumbo</FooterTabLink></li>
            <li><FooterTabLink tab="bankstmt">Bank Statement</FooterTabLink></li>
            <li><FooterTabLink tab="dscr">DSCR / Investor</FooterTabLink></li>
          </ul>
        </div>
        <div>
          <div className="ft-h">Topics</div>
          <ul className="ft-ul">
            <li><a href="/#programs">CalHFA Programs</a></li>
            <li><a href="/#calculator">Affordability Calc</a></li>
            <li><a href="/#learn">Self-Employed Loans</a></li>
            <li><a href="/#learn">First-Time Buyers</a></li>
            <li><a href="/#learn">Investor Guides</a></li>
            <li><a href="/#learn">Rate Insights</a></li>
          </ul>
        </div>
      </div>
      <div className="ft-bot">
        <div className="ft-legal"><strong>Important Disclosures.</strong> {LEGAL_DISCLAIMER.replace('Important Disclosures. ', '')}</div>
        <div className="ft-nmls">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, justifyContent: 'flex-end', marginBottom: 6 }} title="Equal Housing Opportunity">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}><path d="M3 12l9-9 9 9M5 10v10h14V10" /></svg>
            Equal Housing Opportunity
          </span><br />
          Shiva T. Mettke<br />
          NMLS #2779492<br />
          CA DRE #02251909<br />
          © 2026 Mettkey
        </div>
      </div>
    </footer>
  )
}
