export type BlogCategory = 'Rates' | 'First-Time Buyers' | 'Investors' | 'Self-Employed' | 'Refinancing' | 'CA Programs'

export type BlogPost = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  keyword: string
  date: string
  category: BlogCategory
  excerpt: string
  body: string[]
  internalLinks: { label: string; href: string }[]
}

const DISCLAIMER = 'Educational purposes only. Mettkey is not a lender or broker. NMLS #2779492 | Shiva T. Mettke.'

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'ca-mortgage-rates-2026',
    title: "CA Mortgage Rates 2026: What's Actually Moving Them",
    metaTitle: 'CA Mortgage Rates 2026 Explained | Mettkey',
    metaDescription: "A plain-English breakdown of what actually drives California mortgage rates in 2026 — the 10-year Treasury, Fed policy, and your own credit profile.",
    keyword: 'CA mortgage rates 2026',
    date: '2026-06-02',
    category: 'Rates',
    excerpt: 'The Fed does not set your mortgage rate. Here is what actually does, and why the gap between "the rate" and your rate keeps surprising people.',
    internalLinks: [
      { label: 'Try the affordability calculator', href: '/#calculator' },
      { label: 'See CA conforming loan limits', href: '/#loans' },
    ],
    body: [
      'Every time the Federal Reserve makes a headline-grabbing rate announcement, a predictable wave of confusion follows: buyers assume their mortgage rate moved in lockstep. It usually did not. The Fed sets the overnight federal funds rate, which governs short-term borrowing between banks — not the 30-year fixed mortgage rate that actually determines a California buyer\'s monthly payment. The two are related, but the relationship is looser and slower than most headlines suggest.',
      'The single biggest driver of mortgage rates is the yield on the 10-year U.S. Treasury note. Mortgage-backed securities compete with Treasuries for the same pool of investor capital, so when Treasury yields rise, mortgage rates tend to follow within days, not months. Treasury yields move on inflation expectations, federal deficit spending, and how much confidence investors have in the broader economy — all of which can shift well ahead of, or independent from, any Fed meeting.',
      'Inflation data specifically deserves attention because it works in two directions at once. High inflation readings tend to push mortgage rates up, since bond investors demand a higher yield to offset the eroding value of future fixed payments. But inflation readings that come in cooler than expected can pull rates down quickly, sometimes producing more rate movement in a single data release than a Fed meeting produces in a quarter.',
      'The mortgage-backed securities market itself adds another layer. Lenders bundle loans and sell them to investors, and the spread between MBS yields and Treasury yields — which widens during periods of economic uncertainty and narrows when markets are calm — directly affects the rate a lender can offer. This spread is a real, if less visible, contributor to why advertised rates sometimes move even when Treasury yields barely budge.',
      'None of this explains why the rate you are quoted differs from the "average rate" reported in the news. That gap comes down to individually priced risk factors: credit score, loan-to-value ratio, occupancy type, property type, and loan program all shift your specific rate up or down from the baseline. A borrower with a 780 credit score putting 25% down on a primary residence will consistently see a meaningfully better rate than a borrower with a 640 score putting 5% down on an investment property — even on the exact same day, from the exact same lender.',
      'For California specifically, the conforming loan limit matters more than in most states. For 2026, the baseline conforming limit is $766,550, with high-cost counties like Los Angeles, San Francisco, and Orange County allowed up to $1,149,825. Loans that fall within these limits typically get better pricing than jumbo loans above them, because Fannie Mae and Freddie Mac backing reduces investor risk. A borrower whose loan amount sits just above the conforming limit sometimes benefits from a slightly larger down payment specifically to stay under the line and access conforming pricing.',
      'Self-employed and investor borrowers see a different rate picture entirely. Non-QM products like bank statement loans and DSCR loans typically carry a rate premium of roughly 0.5% to 1.5% over conventional financing, reflecting the different — not necessarily riskier — underwriting model. That premium has stayed relatively stable through 2026\'s rate environment because it is priced off investor income risk rather than macro rate movement.',
      'The practical takeaway for anyone shopping in 2026 is to stop trying to time the market around Fed announcements and instead focus on the factors within actual control: credit score improvements, down payment size, and comparing Loan Estimates across multiple lenders on the same day, since day-to-day rate movement can be as large as the difference between lenders. Rate locks typically run 30 to 60 days, which is usually enough runway to shop seriously without gambling on where broader rates head next.',
      DISCLAIMER,
    ],
  },
  {
    slug: 'bank-statement-loans-self-employed-playbook',
    title: 'Bank Statement Loans: The Self-Employed Playbook',
    metaTitle: 'Bank Statement Loans for Self-Employed Borrowers | Mettkey',
    metaDescription: 'How bank statement loans work for California self-employed borrowers whose tax write-offs make their real income invisible to conventional underwriting.',
    keyword: 'bank statement loans self-employed California',
    date: '2026-06-09',
    category: 'Self-Employed',
    excerpt: 'Your accountant did their job. Now your tax returns say you earn less than you do — and conventional underwriting believes them.',
    internalLinks: [
      { label: 'See the Bank Statement loan tab', href: '/#loans' },
      { label: 'Get the free CA Loan Playbook', href: '/#guides' },
    ],
    body: [
      'Every self-employed Californian eventually runs into the same contradiction: the write-offs that make a good accountant worth their fee are the exact same write-offs that make a mortgage underwriter think you earn less than you actually do. Conventional loans qualify borrowers on adjusted gross income from tax returns — after deductions. Bank statement loans were built specifically to fix that mismatch.',
      'The mechanics are more straightforward than most self-employed borrowers expect. Instead of tax returns, a lender reviews 12 to 24 months of bank statements and calculates qualifying income directly from actual deposits. For business bank accounts, most lenders apply a standard expense ratio — commonly around 50% — to account for business costs mixed into the deposit stream. For personal accounts used for business income, some lenders will count deposits closer to their full value, since business expenses typically do not flow through a personal account in the same way.',
      'The choice between 12-month and 24-month statement programs is not just a paperwork preference — it changes the numbers. A 24-month average smooths out a slow month or a seasonal dip, which can help borrowers whose income fluctuates. A 12-month program reflects only the most recent year, which helps borrowers whose income has been trending upward and want the underwriting to reflect that improvement rather than average it against a weaker prior year.',
      'Because bank statement loans fall under the Non-QM category — outside standard Consumer Financial Protection Bureau qualified-mortgage guidelines — pricing runs higher than conventional financing, typically by 0.5% to 1.5% depending on credit profile, down payment, and the specific program. That premium is not a penalty; it reflects that the underwriting model itself carries different risk assumptions than a documented-income conventional loan, and lenders price accordingly.',
      'Down payment requirements tend to run higher too, commonly starting around 10% and often landing in the 15% to 25% range depending on credit score and loan amount, especially for loan amounts that push into jumbo territory given California\'s home prices. Credit score matters just as much here as in conventional lending — a strong score can meaningfully offset the rate premium that comes with the Non-QM label.',
      'One detail that surprises first-time bank statement borrowers: which 12 or 24 months get used matters, and the choice is not always automatic. Borrowers who had one unusually strong or unusually weak stretch should ask their loan officer how the statement window is selected, since a program using a rolling recent window versus a fixed calendar year can produce meaningfully different qualifying income for the same borrower.',
      'This loan type is especially common across Los Angeles\'s entrepreneur, creative, and entertainment industries, where 1099 income, LLC pass-through earnings, and irregular payment schedules are the norm rather than the exception. A production consultant paid per-project, a boutique agency owner running payroll through an S-corp, or a real estate investor with LLC-held rental income all tend to look "underqualified" on paper under conventional rules despite genuinely strong cash flow.',
      'The document list is shorter than most self-employed borrowers expect: bank statements for the qualifying period, a CPA letter or business license confirming self-employment, and standard credit and asset documentation. No tax returns, no Schedule C, no year-to-date profit and loss statement in most cases — though some lenders will request one if deposits look inconsistent month to month.',
      'For self-employed California borrowers who have been told by a conventional lender that their income "doesn\'t qualify," a bank statement loan is often less a workaround and more a more accurate reflection of what the business actually generates. The math is different, not lesser.',
      DISCLAIMER,
    ],
  },
  {
    slug: 'dscr-loans-qualify-on-rent-not-w2-income',
    title: 'DSCR Loans: Qualify on Rent, Not W-2 Income',
    metaTitle: 'DSCR Loans Explained for California Investors | Mettkey',
    metaDescription: 'How DSCR loans let California real estate investors qualify using rental income instead of personal income — the formula, the thresholds, and where it works.',
    keyword: 'DSCR loans California investors',
    date: '2026-06-16',
    category: 'Investors',
    excerpt: 'The property either pays for itself or it does not. DSCR underwriting cares about that math and almost nothing else.',
    internalLinks: [
      { label: 'See the DSCR loan tab', href: '/#loans' },
      { label: 'Read the cash-out refinance breakdown', href: '/#loans' },
    ],
    body: [
      'Debt Service Coverage Ratio loans exist for a simple reason: serious real estate investors often have complicated, high-write-off, or multi-entity income structures that make conventional debt-to-income underwriting a poor fit, even when the actual investment math is excellent. DSCR loans sidestep the personal income question entirely and ask a different one — does the property\'s rent cover its own debt obligation?',
      'The formula sits at the center of everything: DSCR equals gross monthly rental income divided by PITIA, which stands for Principal, Interest, Taxes, Insurance, and HOA dues. A property generating $3,000 a month in rent against a $2,500 monthly PITIA has a DSCR of 1.20. A property where rent exactly equals PITIA sits at a DSCR of 1.0 — breaking even on paper, with no cushion for vacancy or maintenance.',
      'Most DSCR lenders want to see a ratio somewhere between 1.10 and 1.25, though thresholds vary by lender and loan program. Below 1.0, the property is technically cash-flow negative relative to its own debt, which many lenders will still finance but typically with a larger down payment, a rate adjustment, or both to offset the added risk. Above 1.25 generally unlocks the most competitive pricing available in the DSCR space.',
      'What DSCR underwriting explicitly does not require is almost as important as what it does. No W-2s, no tax returns, no personal income verification, and no employment history review. The property\'s income statement, not the borrower\'s, drives the approval decision. This is precisely why DSCR loans have become the standard financing tool for investors scaling a rental portfolio past the point where conventional debt-to-income limits would otherwise cap them out.',
      'LLC vesting is typically allowed and, for many investors, preferred — DSCR loans are commonly used specifically because they accommodate purchasing and holding property inside an LLC for liability separation, something conventional owner-occupant financing generally does not support. Borrowers should confirm vesting requirements with their lender early, since some DSCR programs have specific entity documentation requirements.',
      'Geography matters enormously to DSCR math in California. Coastal and Westside Los Angeles markets often carry purchase prices high enough that achieving a strong DSCR requires substantial rent growth assumptions or a larger-than-typical down payment. Inland Empire, San Fernando Valley, and Long Beach submarkets, by contrast, frequently offer rent-to-price ratios that support a comfortable DSCR with more conventional down payment levels — one reason these markets have become popular among investors specifically using DSCR financing to scale.',
      'Rate structure for DSCR loans reflects Non-QM classification, generally running above conventional owner-occupant pricing, with the exact premium shaped by DSCR ratio, credit score, down payment, and loan amount. Investors with a track record of ratios comfortably above 1.20 across a portfolio often see meaningfully better pricing than a borrower at 1.0 on a single property, since the ratio itself functions as the primary risk signal lenders are pricing against.',
      'Short-term and vacation rental income can sometimes qualify under DSCR programs using projected or historical rental data, though underwriting for this use case is more lender-specific and often requires additional documentation like a rent schedule or platform income history, given the added income volatility relative to a standard 12-month lease.',
      'For an investor evaluating a potential purchase, running the DSCR math before making an offer — not after — is the difference between an efficient acquisition process and a financing surprise mid-escrow. A property that pencils well on a simple cap-rate calculation can still fail to clear a lender\'s minimum DSCR threshold if property taxes, insurance, or HOA dues are higher than a first-pass estimate assumed.',
      DISCLAIMER,
    ],
  },
  {
    slug: 'how-to-buy-in-la-with-less-than-10-percent-down',
    title: 'How to Buy in LA With Less Than 10% Down',
    metaTitle: 'Buy a Home in LA With Less Than 10% Down | Mettkey',
    metaDescription: 'A real-numbers comparison of CalHFA, FHA, and conventional low-down-payment paths for Los Angeles buyers, using a $750,000 purchase as the working example.',
    keyword: 'buy home Los Angeles less than 10 percent down',
    date: '2026-06-23',
    category: 'First-Time Buyers',
    excerpt: 'A 20% down payment on an LA home is a myth most buyers believe and almost nobody actually pays. Here is what the real paths look like.',
    internalLinks: [
      { label: 'Explore CA down payment programs', href: '/#programs' },
      { label: 'Run your own numbers on the calculator', href: '/#calculator' },
    ],
    body: [
      'The assumption that buying a home requires 20% down is one of the most persistent myths in California real estate, and it quietly keeps qualified buyers renting years longer than necessary. In reality, several well-established paths exist for putting down less than 10% on a Los Angeles purchase — each with a different tradeoff worth understanding before choosing one.',
      'Take a $750,000 purchase as a working example, a realistic mid-range price point across much of the LA basin outside the most expensive coastal pockets. A conventional loan with 5% down requires $37,500 upfront, leaving a $712,500 loan amount. Because the down payment sits below 20%, private mortgage insurance applies until the loan reaches 20% equity, typically adding somewhere in the range of $250 to $500 per month depending on credit score and coverage level.',
      'FHA financing on the same $750,000 purchase requires just 3.5% down — $26,250 — for borrowers with credit scores of 580 or above, making it the lowest upfront-cash option of the three for many buyers. The tradeoff is Mortgage Insurance Premium, which under current FHA rules does not cancel for the life of the loan when the down payment is below 10%. That MIP typically runs higher than conventional PMI on a comparable loan amount, so the lower entry cost carries a real long-term cost that should be weighed against the smaller upfront cash requirement.',
      'CalHFA programs change the math again by addressing the down payment itself rather than just the loan structure. The MyHome Assistance Program provides a deferred junior loan of up to 3.5% of the purchase price — on a $750,000 home, up to roughly $26,250 — with no monthly payment, repaid only when the home is sold, refinanced, or the first mortgage is paid off. Paired with a CalHFA first mortgage and the ZIP program covering closing costs, a qualifying buyer can realistically approach the closing table needing very little cash beyond reserves, though income and purchase price limits apply and vary by county.',
      'California Dream For All takes this further for eligible first-generation buyers, covering the full 20% down payment as a shared appreciation loan — the state recoups its share of any future appreciation when the home is sold or refinanced rather than charging monthly interest. This program has generated intense demand since launch, and waitlists or funding rounds fill quickly, so buyers interested in it should confirm current availability directly with CalHFA well before house-hunting seriously.',
      'The side-by-side comparison on a $750,000 home makes the tradeoffs concrete: conventional 5% down means $37,500 upfront plus PMI that cancels at 20% equity. FHA 3.5% down means $26,250 upfront plus MIP that does not cancel below 10% down. CalHFA-stacked financing can bring upfront cash needed down to near-zero for qualifying buyers, in exchange for income limits, purchase price caps, and a second lien that gets repaid later.',
      'Credit score requirements differ meaningfully across these paths too. Conventional loans typically want 620 or better for the most competitive low-down-payment pricing. FHA is more forgiving, accepting scores as low as 580 for the 3.5% down tier. CalHFA programs generally follow the credit requirements of whichever first mortgage they are paired with, so the underlying FHA or conventional guidelines still apply.',
      'None of these paths is universally "best" — the right choice depends on how long a buyer plans to hold the home, how quickly they expect to reach 20% equity, whether they qualify for CalHFA\'s income and purchase price limits, and how much monthly payment flexibility they have for PMI or MIP. Running the actual numbers on a specific target price and comparing all three paths side by side, rather than defaulting to whichever option a single lender happens to offer, is the step most first-time LA buyers skip and later wish they had not.',
      DISCLAIMER,
    ],
  },
  {
    slug: 'pre-qualified-vs-pre-approved-why-it-matters',
    title: 'Pre-Qualified vs Pre-Approved: Why It Matters',
    metaTitle: 'Pre-Qualified vs Pre-Approved Explained | Mettkey',
    metaDescription: 'The real difference between a mortgage pre-qualification and a pre-approval, and why the distinction decides whether a competitive offer gets taken seriously.',
    keyword: 'pre-qualified vs pre-approved mortgage',
    date: '2026-06-30',
    category: 'First-Time Buyers',
    excerpt: 'A pre-qualification letter and a pre-approval letter can look nearly identical on the page. In a competitive offer situation, only one of them means anything.',
    internalLinks: [
      { label: 'See what documents lenders verify', href: '/#guides' },
      { label: 'Compare loan types before applying', href: '/#loans' },
    ],
    body: [
      'Two mortgage terms get used almost interchangeably by buyers and, occasionally, sloppily by agents — pre-qualification and pre-approval. They are not the same thing, and in a competitive California market where desirable listings routinely draw multiple offers, confusing the two can cost a buyer a home they were genuinely qualified to purchase.',
      'Pre-qualification is fast and largely self-reported. A borrower shares estimated income, debts, assets, and credit range, either verbally or through a quick online form, and a lender runs that information through basic guidelines to produce a rough estimate of what the borrower might qualify for. No documentation is verified. No credit report is typically pulled in detail. It takes minutes and is genuinely useful for a very early "am I in the right price range" gut check — and essentially nothing more.',
      'Pre-approval is a different process entirely. It involves an actual mortgage application, a hard credit pull, and verification of income through pay stubs, W-2s or tax returns, and bank statements for assets. An underwriter — not just a loan officer doing quick math — reviews the file and issues a conditional approval up to a specific loan amount, subject to conditions like an appraisal and title work on the eventual property. This is real underwriting, just without a specific address attached yet.',
      'The practical consequence shows up the moment an offer gets submitted. Listing agents in competitive markets routinely screen offers by financing strength before even discussing price, and a pre-qualification letter is treated as close to meaningless — it verifies nothing and carries no real weight in negotiations. A pre-approval letter signals that a lender has actually reviewed real documentation and is prepared to fund, which is precisely why sellers and their agents take it seriously.',
      'This gap matters most in exactly the situations where it is easiest to overlook: a buyer who "already talked to a lender" and assumes they are ready to write offers, when what actually happened was a five-minute pre-qualification conversation. Discovering the difference after falling in love with a property and losing out to a buyer with a real pre-approval is one of the most avoidable frustrations in the home-buying process.',
      'Getting pre-approved before house-hunting seriously also surfaces problems while there is still time to fix them. A credit report pulled during pre-approval can reveal an error worth disputing, a debt that needs paying down to improve DTI, or a documentation gap — like recently changed jobs or irregular deposits — that a lender needs explained before, not during, a tight escrow timeline.',
      'For self-employed borrowers specifically, pre-approval is where the income-documentation conversation should happen — whether qualification will run through tax returns, bank statement analysis, or a DSCR structure for investment property. Sorting this out during pre-approval, rather than discovering mid-transaction that the wrong loan program was assumed, prevents a scramble that can blow past a purchase contract\'s financing contingency deadline.',
      'One caveat worth understanding: pre-approval is conditional, not a guarantee. Changes between pre-approval and closing — a new credit card, a large undocumented deposit, a job change, or taking on new debt like a car loan — can affect final approval. Lenders typically re-verify employment and sometimes credit shortly before closing, so the safest approach during an active transaction is to keep financial life as boring and unchanged as possible until keys are in hand.',
      'The short version: pre-qualification is a useful early estimate and nothing more. Pre-approval is what actually makes an offer competitive. Any buyer planning to write an offer in the next few months should be working from the latter, not the former.',
      DISCLAIMER,
    ],
  },
  {
    slug: 'calhfa-programs-explained',
    title: 'CalHFA Programs Explained: MyHome, ZIP, and Dream For All',
    metaTitle: 'CalHFA Programs Explained: MyHome, ZIP, Dream For All | Mettkey',
    metaDescription: 'A plain-English breakdown of California\'s three major CalHFA down payment and closing cost assistance programs, and how they stack together.',
    keyword: 'CalHFA programs explained',
    date: '2026-07-07',
    category: 'CA Programs',
    excerpt: 'California has some of the most generous first-time buyer assistance in the country, and most eligible buyers never check whether they qualify.',
    internalLinks: [
      { label: 'See all CA-specific programs', href: '/#programs' },
      { label: 'Read the under-10%-down guide', href: '/blog/how-to-buy-in-la-with-less-than-10-percent-down' },
    ],
    body: [
      'The California Housing Finance Agency runs several state-backed programs designed to close the gap between what a qualified buyer earns and what a California down payment actually costs. Three of them come up constantly in first-time buyer conversations — MyHome Assistance, the ZIP program, and Dream For All — and understanding how they differ, and how they stack, changes what is realistically possible for a lot of buyers who assume they do not qualify for any assistance at all.',
      'MyHome Assistance Program is the most flexible of the three. It provides a deferred junior loan of up to 3.5% of a home\'s purchase price, usable toward down payment or closing costs. Deferred means exactly what it sounds like — no monthly payment is due on this second loan. It simply sits behind the first mortgage and gets repaid, principal only in most standard scenarios, when the home is sold, refinanced, or the first mortgage is paid off. For a buyer stretched thin on upfront cash but comfortable with the ongoing monthly payment on a fully documented first mortgage, MyHome closes exactly the gap that matters most at the closing table.',
      'The ZIP program — Zero Interest Program — solves a different piece of the puzzle: closing costs, which routinely run 2% to 5% of the purchase price and catch buyers off guard even after they have saved diligently for a down payment. ZIP pairs specifically with a CalPLUS first mortgage and provides a fully deferred, zero-interest loan to cover those costs. No monthly payment, no interest accruing — repaid under the same triggering events as MyHome. Buyers using CalPLUS with ZIP are trading a very slightly higher first-mortgage rate, built into the CalPLUS structure, for eliminating closing costs as a cash requirement entirely.',
      'Dream For All represents a more ambitious approach than either program above. Rather than a modest percentage toward closing costs or a partial down payment, it is designed to cover the full 20% down payment as a shared appreciation loan. Instead of the state charging interest, it takes a proportional share of the home\'s appreciation when the buyer eventually sells or refinances — aligning the state\'s return with the buyer\'s own home equity gains rather than functioning like a traditional loan. This structure specifically targets first-generation homebuyers, and because the appreciation-sharing model is genuinely attractive relative to a standard second mortgage, demand has consistently outpaced available funding, meaning waitlists or application windows can close faster than buyers expect.',
      'Stacking is where these programs become genuinely powerful rather than just incrementally helpful. A buyer using a CalHFA first mortgage paired with MyHome Assistance for a down payment and ZIP for closing costs can, in the right circumstances, approach a purchase with minimal cash required beyond standard reserves. This is precisely the kind of layered structure many buyers do not realize exists, because each program is often marketed and discussed independently rather than as parts of a combinable system.',
      'Every one of these programs comes with real qualifying constraints that determine whether the layered approach above is actually available to a given buyer. Income limits vary by county and household size and are generally tied to area median income figures that CalHFA updates periodically. Purchase price limits apply and are set per county, which matters enormously in a state where a "starter home" price varies wildly between, say, the Inland Empire and the Westside of Los Angeles. First-time buyer status is typically required, defined as not having owned a primary residence in the past three years, though some programs carve out exceptions for specific circumstances.',
      'Credit score and debt-to-income requirements generally follow whichever first mortgage program — CalHFA conventional, FHA, or CalPLUS — the assistance is paired with, rather than imposing entirely separate standards. A buyer who already qualifies for FHA or conventional financing on paper is usually most of the way toward CalHFA program eligibility as well, assuming they fall within the income and purchase price caps.',
      'The most common reason eligible buyers never use these programs is simply not knowing they exist, or assuming — often incorrectly — that income limits exclude them. Because limits are set relative to area median income and vary significantly by county, a buyer who assumes they earn "too much" for state assistance in one California county might actually qualify comfortably in an adjacent one. Checking current limits directly against a specific target area, rather than relying on general assumptions, is worth the ten minutes it takes before ruling any of these programs out.',
      DISCLAIMER,
    ],
  },
]

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export const BLOG_CATEGORIES: BlogCategory[] = ['Rates', 'First-Time Buyers', 'Investors', 'Self-Employed', 'Refinancing', 'CA Programs']
