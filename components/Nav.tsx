'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { requestShowTab } from '../lib/tabEvents'

export default function Nav() {
  const [open, setOpen] = useState<string | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  const toggle = (id: string) => setOpen((cur) => (cur === id ? null : id))
  const close = () => setOpen(null)

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) close()
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  const goTab = (tab: Parameters<typeof requestShowTab>[0]) => {
    requestShowTab(tab)
    close()
  }

  return (
    <div className="nav-wrap" ref={rootRef}>
      <nav>
        <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" alt="Mettkey" width={35} height={40} style={{ height: 40, width: 'auto' }} priority />
        </a>
        <div className="nav-items">

          <div className={`ni${open === 'buy' ? ' open' : ''}`}>
            <button onClick={() => toggle('buy')}>Buy a Home <span className="chev">▾</span></button>
            <div className="drop">
              <div className="dl">Loan Types</div>
              <a href="/#loans" onClick={() => goTab('conventional')}><div className="di">🏠</div>Conventional</a>
              <a href="/#loans" onClick={() => goTab('fha')}><div className="di">🏛️</div>FHA Loans</a>
              <a href="/#loans" onClick={() => goTab('va')}><div className="di">🎖️</div>VA Loans</a>
              <a href="/#loans" onClick={() => goTab('jumbo')}><div className="di">💎</div>Jumbo Loans</a>
              <div className="dl">Resources</div>
              <a href="/#calculator" onClick={close}><div className="di">📊</div>Affordability Calculator</a>
              <a href="/#programs" onClick={close}><div className="di">🏦</div>CA Programs</a>
            </div>
          </div>

          <div className={`ni${open === 'inv' ? ' open' : ''}`}>
            <button onClick={() => toggle('inv')}>Investors <span className="chev">▾</span></button>
            <div className="drop">
              <a href="/#loans" onClick={() => goTab('dscr')}><div className="di">📈</div>DSCR Loans</a>
              <a href="/#loans" onClick={() => goTab('bankstmt')}><div className="di">💼</div>Bank Statement</a>
              <a href="/#loans" onClick={() => goTab('cashout')}><div className="di">🔄</div>Cash-Out Refi</a>
            </div>
          </div>

          <div className={`ni${open === 'ref' ? ' open' : ''}`}>
            <button onClick={() => toggle('ref')}>Refinance <span className="chev">▾</span></button>
            <div className="drop">
              <a href="/#loans" onClick={() => goTab('cashout')}><div className="di">💵</div>Cash-Out Refinance</a>
              <a href="/#calculator" onClick={close}><div className="di">🧮</div>Refi Calculator</a>
            </div>
          </div>

          <div className="ni"><a href="/#calculator">Calculator</a></div>
          <div className="ni"><a href="/#programs">CA Programs</a></div>
          <div className="ni"><a href="/#learn">Learn</a></div>
          <div className="ni"><a href="/market-trends">Market Trends</a></div>
          <div className="ni"><a href="/blog">Blog</a></div>

        </div>
        <div className="nav-r">
          <a href="/guide" className="btn btn-outline">Free Guide</a>
          <a href="/#guides" className="btn btn-gold">Get Started</a>
        </div>
      </nav>
    </div>
  )
}
