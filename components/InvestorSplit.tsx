'use client'

import { requestShowTab } from '../lib/tabEvents'

export default function InvestorSplit() {
  return (
    <div className="split">
      <div className="split-txt">
        <span className="ey ey-green">Real Estate Investors</span>
        <h2 className="sec-h">Build your CA rental portfolio without W-2 income.</h2>
        <p className="sec-sub">DSCR loans let the property qualify itself. If the rent covers the mortgage — you qualify. No personal income docs, no tax return drama.</p>
        <a href="#loans" onClick={() => requestShowTab('dscr')} className="btn btn-gold btn-lg">Learn About DSCR Loans →</a>
      </div>
      <div className="split-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80&auto=format&fit=crop" alt="Investment property" />
      </div>
    </div>
  )
}
