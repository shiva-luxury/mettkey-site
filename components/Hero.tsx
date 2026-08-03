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
