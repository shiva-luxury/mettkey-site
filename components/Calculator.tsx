'use client'

import { useState } from 'react'

function fmt(n: number) {
  return n >= 1e6 ? '$' + (n / 1e6).toFixed(2) + 'M' : '$' + Math.round(n).toLocaleString()
}

function pmt(loan: number, ratePct: number, months: number) {
  const m = ratePct / 100 / 12
  return m === 0 ? loan / months : (loan * (m * Math.pow(1 + m, months))) / (Math.pow(1 + m, months) - 1)
}

export default function Calculator() {
  const [calcType, setCalcType] = useState<'pay' | 'aff'>('pay')

  // Monthly payment tab
  const [price, setPrice] = useState(850000)
  const [downPct, setDownPct] = useState(20)
  const [rate, setRate] = useState(6.62)
  const [term, setTerm] = useState(30)

  // Affordability tab
  const [income, setIncome] = useState(150000)
  const [monthlyDebt, setMonthlyDebt] = useState(500)
  const [downAvail, setDownAvail] = useState(100000)
  const [rate2, setRate2] = useState(6.62)

  const downAmt = Math.round((price * downPct) / 100)
  const loan = price - downAmt
  const monthlyPI = pmt(loan, rate, term * 12)
  const estTax = Math.round((price * 0.011) / 12)
  const estTotal = Math.round(monthlyPI) + estTax + 150

  const maxMonthly = (income / 12) * 0.43 - monthlyDebt
  const maxLoan = maxMonthly > 0 ? Math.round(maxMonthly / pmt(1, rate2, 360)) : 0
  const maxPrice = Math.max(0, maxLoan + downAvail)

  return (
    <div className="sec sec-bg" id="calculator">
      <div className="sec-max">
        <span className="ey">Tools</span>
        <h2 className="sec-h">See your real numbers before you apply</h2>
        <p className="sec-sub">Estimate monthly payment or home affordability in seconds.</p>
        <div className="calc-card">
          <div className="calc-grid">
            <div className="calc-l">
              <div className="calc-tabs">
                <button className={`ctab${calcType === 'pay' ? ' active' : ''}`} onClick={() => setCalcType('pay')}>Monthly Payment</button>
                <button className={`ctab${calcType === 'aff' ? ' active' : ''}`} onClick={() => setCalcType('aff')}>Affordability</button>
              </div>

              {calcType === 'pay' && (
                <div>
                  <span className="c-lbl">Home Price</span><span className="c-val">{fmt(price)}</span>
                  <input type="range" min={300000} max={3000000} step={25000} value={price} onChange={(e) => setPrice(+e.target.value)} />
                  <div className="c-mm"><span>$300K</span><span>$3M</span></div>

                  <span className="c-lbl">Down Payment</span><span className="c-val">{downPct}% — {fmt(downAmt)}</span>
                  <input type="range" min={3} max={40} step={1} value={downPct} onChange={(e) => setDownPct(+e.target.value)} />
                  <div className="c-mm"><span>3%</span><span>40%</span></div>

                  <span className="c-lbl">Interest Rate</span><span className="c-val">{rate.toFixed(2)}%</span>
                  <input type="range" min={4.0} max={10.0} step={0.05} value={rate} onChange={(e) => setRate(+e.target.value)} />
                  <div className="c-mm"><span>4.0%</span><span>10.0%</span></div>

                  <span className="c-lbl">Loan Term</span>
                  <select className="c-sel" value={term} onChange={(e) => setTerm(+e.target.value)}>
                    <option value={30}>30 Years</option>
                    <option value={20}>20 Years</option>
                    <option value={15}>15 Years</option>
                    <option value={10}>10 Years</option>
                  </select>

                  <div className="calc-res">
                    <div className="cr-lbl">Est. Monthly Payment (P&amp;I)</div>
                    <div className="cr-amt">{fmt(Math.round(monthlyPI))}</div>
                    <div className="cr-rows">
                      <div className="cr-row"><span>Loan Amount</span><span>{fmt(loan)}</span></div>
                      <div className="cr-row"><span>Est. Property Tax/mo</span><span>{fmt(estTax)}</span></div>
                      <div className="cr-row"><span>Est. Total Monthly</span><span>~{fmt(estTotal)}</span></div>
                    </div>
                    <div className="cr-note">P&amp;I only. Add tax, insurance, HOA for full picture. Educational use only.</div>
                  </div>
                </div>
              )}

              {calcType === 'aff' && (
                <div>
                  <span className="c-lbl">Annual Household Income</span><span className="c-val">{fmt(income)}/yr</span>
                  <input type="range" min={40000} max={600000} step={5000} value={income} onChange={(e) => setIncome(+e.target.value)} />
                  <div className="c-mm"><span>$40K</span><span>$600K</span></div>

                  <span className="c-lbl">Monthly Debts</span><span className="c-val">{fmt(monthlyDebt)}/mo</span>
                  <input type="range" min={0} max={5000} step={50} value={monthlyDebt} onChange={(e) => setMonthlyDebt(+e.target.value)} />
                  <div className="c-mm"><span>$0</span><span>$5,000</span></div>

                  <span className="c-lbl">Down Payment Available</span><span className="c-val">{fmt(downAvail)}</span>
                  <input type="range" min={10000} max={500000} step={5000} value={downAvail} onChange={(e) => setDownAvail(+e.target.value)} />
                  <div className="c-mm"><span>$10K</span><span>$500K</span></div>

                  <span className="c-lbl">Est. Interest Rate</span><span className="c-val">{rate2.toFixed(2)}%</span>
                  <input type="range" min={4.0} max={10.0} step={0.05} value={rate2} onChange={(e) => setRate2(+e.target.value)} />
                  <div className="c-mm"><span>4.0%</span><span>10.0%</span></div>

                  <div className="calc-res">
                    <div className="cr-lbl">Est. Max Home Price</div>
                    <div className="cr-amt">{fmt(maxPrice)}</div>
                    <div className="cr-rows">
                      <div className="cr-row"><span>Max Loan (43% DTI)</span><span>{fmt(maxLoan)}</span></div>
                      <div className="cr-row"><span>Max Monthly P&amp;I</span><span>{fmt(Math.round(maxMonthly))}</span></div>
                    </div>
                    <div className="cr-note">Based on 43% DTI. Actual approval depends on credit, reserves, and lender guidelines.</div>
                  </div>
                </div>
              )}
            </div>

            <div className="calc-r">
              <div className="info-c"><strong>What is DTI?</strong><span>Debt-to-Income: monthly debts ÷ gross income. Most lenders cap at 43–50%. Self-employed: bank statement loans use a different income calculation.</span></div>
              <div className="info-c gr"><strong>CA Conforming Limits 2026</strong><span>$766,550 baseline. High-cost counties (LA, SF, OC) up to $1,149,825. Above that = jumbo with stricter guidelines.</span></div>
              <div className="info-c"><strong>PMI — When You Pay It</strong><span>Conventional under 20% down requires PMI (~0.5–1.5%/yr). FHA has MIP for life if under 10% down. VA and USDA: no PMI ever.</span></div>
              <div className="info-c gr"><strong>CA Property Tax</strong><span>Prop 13 caps at 1% of purchase price + 2%/yr. Budget 1.1–1.25% annually for most LA/Valley properties.</span></div>
              <div className="info-c"><strong>Rate Lock</strong><span>30–60 day locks are standard. Lock when the payment works — not when you think rates are at a perfect low.</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
