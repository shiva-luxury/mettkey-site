const PROGRAMS = [
  { icon: '🏦', title: 'CalHFA MyHome Assistance', desc: 'Deferred junior loan up to 3.5% of purchase price. No monthly payment — repaid only when you sell or refinance.', tag: 'Zero Monthly Cost' },
  { icon: '🎓', title: 'CalHFA ZIP Program', desc: 'Zero-Interest Program covering closing costs. Pairs with a CalPLUS first mortgage. Fully deferred, no interest, no payment.', tag: 'No Interest Ever' },
  { icon: '🔑', title: 'California Dream For All', desc: 'State covers 20% down as a shared appreciation loan. Designed for first-generation buyers — waitlists fill extremely fast.', tag: '20% Down Covered' },
  { icon: '📚', title: 'Extra Credit Teacher Home', desc: 'For K-12 teachers, administrators, and classified staff in high-priority CA schools. Below-market rates plus down payment assistance.', tag: 'Education Professionals' },
  { icon: '🎖️', title: 'CalVet Home Loans', desc: "California's own veteran loan — separate from federal VA benefits. Competitive fixed rates with additional CA-specific protections.", tag: 'Veterans Only' },
  { icon: '🌆', title: 'LACDA — LA County DPA', desc: "LA County's own down payment assistance for qualifying buyers in unincorporated areas. Income limits apply.", tag: 'LA County Specific' },
]

export default function Programs() {
  return (
    <div className="sec" id="programs">
      <div className="sec-max">
        <span className="ey ey-green">California-Specific</span>
        <h2 className="sec-h">Down payment programs most buyers don&apos;t know exist</h2>
        <p className="sec-sub">California has some of the strongest first-time buyer assistance in the country. Most people assume they don&apos;t qualify — they never check.</p>
        <div className="prog-grid">
          {PROGRAMS.map((p) => (
            <div className="prog" key={p.title}>
              <span className="prog-ic">{p.icon}</span>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <span className="prog-tag">{p.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
