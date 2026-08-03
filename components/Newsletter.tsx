'use client'

import { useState } from 'react'
import { zap } from '../lib/webhook'

export default function Newsletter() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = () => {
    if (!firstName.trim() || !lastName.trim()) { alert('Please enter your first and last name.'); return }
    if (!email.trim() || !email.includes('@')) { alert('Please enter a valid email.'); return }
    zap({ source: 'newsletter', first_name: firstName, last_name: lastName, email })
    setFirstName('')
    setLastName('')
    setEmail('')
    setSubscribed(true)
  }

  return (
    <div className="sec">
      <div className="sec-max" id="newsletter">
        <div className="nl-wrap">
          <span className="nl-ey">Stay Informed</span>
          <h2 className="nl-h">CA mortgage updates, free</h2>
          <p className="nl-sub">Get mortgage market updates, rate alerts, and new blog posts delivered free. No spam, no lender pitches — ever.</p>
          <div className="nl-form">
            <input className="nl-inp" type="text" placeholder="First name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input className="nl-inp" type="text" placeholder="Last name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input className="nl-inp" type="email" placeholder="your@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className="nl-btn" onClick={subscribe}>Subscribe Free</button>
          </div>
          <p className="nl-note">Unsubscribe anytime. Informational content only. Mettkey is not a lender, broker, or mortgage company. NMLS #2779492.</p>
          {subscribed && <div className="nl-ok show">✓ Subscribed — first issue coming soon. For informational purposes only. Not an offer to lend.</div>}
        </div>
      </div>
    </div>
  )
}
