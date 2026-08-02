'use client'

import { useState } from 'react'
import { zap } from '../lib/webhook'

const INTEREST_OPTIONS = [
  'Buying my first home',
  'Buying as an investor / DSCR',
  'Refinancing my home',
  'Self-employed / bank statement loans',
  'Jumbo loans',
  'Just learning for now',
]

export default function EbookForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [interest, setInterest] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    zap({ source: 'ebook', first_name: firstName, last_name: lastName, email, phone, interest })
    setSubmitted(true)
  }

  return (
    <div className="sec" id="guides">
      <div className="sec-max">
        <div className="guide">
          <div className="guide-l">
            <span className="g-ey">Free Download — 2026</span>
            <h2>California Home Loan Playbook</h2>
            <ul className="guide-list">
              <li>Every CA loan type in plain English</li>
              <li>CalHFA &amp; programs most buyers miss</li>
              <li>How lenders calculate what you can borrow</li>
              <li>Self-employed &amp; investor loan options compared</li>
              <li>7 documents every lender will ask for</li>
              <li>Rate lock strategy — when to lock, when to float</li>
              <li>Red flags in your Loan Estimate to never ignore</li>
              <li>Full mortgage glossary — 28 terms defined</li>
            </ul>
            <div className="guide-meta">42 pages · PDF · Instant Download · 100% Free</div>
          </div>
          <div className="guide-r">
            <h3>Get your free copy</h3>
            <p>No lender calls. No credit pull. Just the guide California buyers actually need.</p>
            {!submitted ? (
              <form id="ebookForm" onSubmit={onSubmit}>
                <div className="f2">
                  <div className="ff"><label>First Name</label><input type="text" placeholder="First name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} /></div>
                  <div className="ff"><label>Last Name</label><input type="text" placeholder="Last name" required value={lastName} onChange={(e) => setLastName(e.target.value)} /></div>
                </div>
                <div className="ff"><label>Email</label><input type="email" placeholder="you@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                <div className="ff"><label>Phone (optional)</label><input type="tel" placeholder="(310) 000-0000" value={phone} onChange={(e) => setPhone(e.target.value)} /></div>
                <div className="ff">
                  <label>I&apos;m most interested in...</label>
                  <select value={interest} onChange={(e) => setInterest(e.target.value)}>
                    <option value="">Select one</option>
                    {INTEREST_OPTIONS.map((opt) => <option key={opt}>{opt}</option>)}
                  </select>
                </div>
                <button type="submit" className="f-btn">Send Me the Free Playbook →</button>
              </form>
            ) : (
              <div className="f-ok show">✅ <strong>Check your inbox!</strong> The California Home Loan Playbook is on its way.</div>
            )}
            <p className="f-disc">Mettkey is an educational resource — not a lender, broker, or mortgage company. NMLS #2779492 | Shiva T. Mettke.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
