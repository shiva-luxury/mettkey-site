'use client'

import { useEffect, useRef, useState } from 'react'
import { zap } from '../lib/webhook'

const SESSION_KEY = 'mettkey_popup_shown'
const DELAY_MS = 8000

export default function Popup() {
  const [visible, setVisible] = useState(false)
  const [closed, setClosed] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const shownRef = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem(SESSION_KEY)) {
      shownRef.current = true
      return
    }

    const show = () => {
      if (shownRef.current) return
      shownRef.current = true
      sessionStorage.setItem(SESSION_KEY, '1')
      setVisible(true)
    }

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show()
    }

    document.addEventListener('mouseleave', onMouseLeave)
    const timer = setTimeout(show, DELAY_MS)

    return () => {
      document.removeEventListener('mouseleave', onMouseLeave)
      clearTimeout(timer)
    }
  }, [])

  if (!visible || closed) return null

  const submit = () => {
    if (!firstName.trim() || !lastName.trim()) { alert('Please enter your first and last name.'); return }
    if (!email.trim() || !email.includes('@')) { alert('Please enter a valid email.'); return }
    zap({ source: 'popup', first_name: firstName, last_name: lastName, email })
    setSubmitted(true)
    setTimeout(() => setClosed(true), 2200)
  }

  return (
    <div className="pop-mask show">
      <div className="pop-box">
        <div className="pop-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80&auto=format&fit=crop" alt="California home" />
          <div className="pop-ov"></div>
          <div className="pop-txt">
            <h3>Stay Ahead of the Market</h3>
            <p>Free — unsubscribe anytime</p>
          </div>
          <button className="pop-close" onClick={() => setClosed(true)}>✕</button>
        </div>
        <div className="pop-body">
          <p>Sign up for market updates, mortgage news and rate alerts.</p>
          {!submitted ? (
            <div className="pop-form">
              <input type="text" placeholder="First name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <input type="text" placeholder="Last name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
              <input type="email" placeholder="Email address" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <button onClick={submit}>Sign Me Up →</button>
            </div>
          ) : (
            <div className="pop-ok show">✓ You&apos;re signed up! For informational purposes only. Not an offer to lend.</div>
          )}
          <p className="pop-disc" style={{ fontSize: '.66rem', color: 'var(--ink4)', marginTop: 10, lineHeight: 1.5 }}>
            Mettkey is an educational resource, not a lender, broker, or mortgage company. NMLS #2779492 | CA DRE #02251909.
          </p>
          {!submitted && <p className="pop-skip" onClick={() => setClosed(true)}>No thanks, I&apos;ll figure it out on my own</p>}
        </div>
      </div>
    </div>
  )
}
