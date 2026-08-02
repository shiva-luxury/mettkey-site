'use client'

import { useState } from 'react'
import { zap } from '../lib/webhook'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = () => {
    if (!email.trim() || !email.includes('@')) { alert('Please enter a valid email.'); return }
    zap({ source: 'newsletter', email })
    setEmail('')
    setSubscribed(true)
  }

  return (
    <div className="sec">
      <div className="sec-max" id="newsletter">
        <div className="nl-wrap">
          <span className="nl-ey">Stay Informed</span>
          <h2 className="nl-h">CA mortgage updates, free</h2>
          <p className="nl-sub">Weekly rate movements, new CA program announcements, and plain-English market breakdowns. No spam, no lender pitches — ever.</p>
          <div className="nl-form">
            <input className="nl-inp" type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className="nl-btn" onClick={subscribe}>Subscribe Free</button>
          </div>
          <p className="nl-note">Unsubscribe anytime. Educational content only. Mettkey is not a lender, broker, or mortgage company. NMLS #2779492.</p>
          {subscribed && <div className="nl-ok show">✓ Subscribed — first issue coming soon.</div>}
        </div>
      </div>
    </div>
  )
}
