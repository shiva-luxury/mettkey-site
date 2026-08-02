'use client'

import { requestShowTab } from '../lib/tabEvents'

export default function SelfEmployedSplit() {
  return (
    <div className="split sec-bg">
      <div className="split-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format&fit=crop" alt="Modern California home" />
      </div>
      <div className="split-txt">
        <span className="ey">Self-Employed Borrowers</span>
        <h2 className="sec-h">Your write-offs built your business. They shouldn&apos;t cost you your home.</h2>
        <p className="sec-sub">California has more self-employed workers than almost any other state. The traditional mortgage system was built for W-2 earners — bank statement loans were built for you.</p>
        <a href="#loans" onClick={() => requestShowTab('bankstmt')} className="btn btn-navy btn-lg">Learn About Bank Statement Loans →</a>
      </div>
    </div>
  )
}
