'use client'

import { useState } from 'react'
import { zap } from '../lib/webhook'

function HeroEbookPromo() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [coverMissing, setCoverMissing] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!firstName.trim() || !lastName.trim()) { alert('Please enter your first and last name.'); return }
    if (!email.trim() || !email.includes('@')) { alert('Please enter a valid email.'); return }
    zap({ source: 'ebook', first_name: firstName, last_name: lastName, email })
    setSubmitted(true)
  }

  return (
    <div className="hero-ebook">
      <div className="hero-ebook-cover">
        {!coverMissing ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/ebook-cover.png"
            alt="California Home Loan Playbook cover"
            onError={() => setCoverMissing(true)}
          />
        ) : (
          <div className="hero-ebook-cover-placeholder">Drop ebook-cover.png into /public</div>
        )}
      </div>
      <div className="hero-ebook-body">
        <span className="hero-ebook-eyebrow">Free Download</span>
        <p className="hero-ebook-title">The California Home Loan Playbook</p>
        {!submitted ? (
          <form className="hero-ebook-form" onSubmit={submit}>
            <input type="text" placeholder="First name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="email" placeholder="Email address" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" className="btn btn-gold">Download Free →</button>
          </form>
        ) : (
          <p className="hero-ebook-ok">✅ Check your inbox! For informational purposes only. Not an offer to lend.</p>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <div className="hero-badge">📍 California Mortgage Resource · NMLS #2779492</div>
          <h1>Know your loan options <em>before</em> you call a lender</h1>
          <p className="hero-p">Your California mortgage resource — information and market trends for home buyers, first-time buyers, self-employed borrowers, and investors. No sales pitch. Just clarity.</p>
          <div className="hero-btns">
            <a href="#guides" className="btn btn-gold btn-lg">Get the Free Playbook</a>
            <a href="#calculator" className="btn btn-outline btn-lg">Try the Calculator</a>
          </div>
          <HeroEbookPromo />
          <div className="hero-stats">
            <div className="hs-item"><span className="hs-n">9+</span><span className="hs-l">Loan Types</span></div>
            <div className="hs-item"><span className="hs-n">6</span><span className="hs-l">CA Programs</span></div>
            <div className="hs-item"><span className="hs-n">Free</span><span className="hs-l">Home Loan Playbook</span></div>
            <div className="hs-item"><span className="hs-n">$0</span><span className="hs-l">No Cost, No Catch</span></div>
          </div>
        </div>
        <div className="hero-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85&auto=format&fit=crop" alt="California home" />
        </div>
      </div>
    </section>
  )
}
