const TERMS = [
  { term: 'APR (Annual Percentage Rate)', def: 'True cost of borrowing including fees and interest. Always higher than the rate. Use APR to compare loans apples-to-apples.' },
  { term: 'DTI (Debt-to-Income Ratio)', def: 'Total monthly debts ÷ gross monthly income. Most lenders cap at 43–50%. Primary qualification metric for most loan types.' },
  { term: 'LTV (Loan-to-Value)', def: 'Loan amount ÷ property value. 80% LTV = 20% down. Higher LTV = more lender risk = higher rates or PMI.' },
  { term: 'PMI / MIP', def: 'Mortgage insurance required when LTV exceeds 80% on conventional (PMI) or FHA loans (MIP). Adds $50–$400/mo depending on loan size.' },
  { term: 'Non-QM Loan', def: 'Non-Qualified Mortgage — outside standard CFPB guidelines. Includes bank statement, DSCR, asset depletion. Not subprime — just different criteria.' },
  { term: 'DSCR', def: 'Debt Service Coverage Ratio. Gross rent ÷ PITIA. Used to qualify investment loans without personal income. Most lenders want 1.1–1.25+.' },
  { term: 'Escrow (CA-Specific)', def: 'Neutral third party managing funds and docs in a CA transaction. Also the monthly impound for property taxes and insurance in your payment.' },
  { term: 'Rate Lock', def: 'Lender commitment to hold your rate for 30–60 days. Protects against rate increases during underwriting — expires if closing is delayed.' },
  { term: 'PITIA', def: 'Principal + Interest + Taxes + Insurance + HOA. The full monthly housing cost used in DTI and DSCR calculations.' },
  { term: 'Clear to Close (CTC)', def: 'All underwriting conditions satisfied. Lender is ready to fund. Final step before your signing appointment.' },
  { term: 'Deed of Trust', def: "California's version of a mortgage. A third-party trustee holds title during the loan — standard in CA, changes nothing for you." },
  { term: 'Loan Estimate (LE)', def: '3-page disclosure required within 3 business days of application. Use it to compare lenders on rate, fees, and cash to close.' },
]

export default function Glossary() {
  return (
    <div className="sec sec-bg">
      <div className="sec-max">
        <span className="ey">Glossary</span>
        <h2 className="sec-h">Terms worth knowing before you apply</h2>
        <p className="sec-sub">Lenders love acronyms. Here&apos;s plain English for the ones you&apos;ll actually encounter.</p>
        <div className="gloss">
          {TERMS.map((t) => (
            <div className="gl" key={t.term}>
              <h4>{t.term}</h4>
              <p>{t.def}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
