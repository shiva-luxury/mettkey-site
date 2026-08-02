import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import LoanTabs from '../components/LoanTabs'
import SelfEmployedSplit from '../components/SelfEmployedSplit'
import Programs from '../components/Programs'
import Calculator from '../components/Calculator'
import InvestorSplit from '../components/InvestorSplit'
import Articles from '../components/Articles'
import EbookForm from '../components/EbookForm'
import Glossary from '../components/Glossary'
import Newsletter from '../components/Newsletter'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <LoanTabs />
      <SelfEmployedSplit />
      <Programs />
      <Calculator />
      <InvestorSplit />
      <Articles />
      <EbookForm />
      <Glossary />
      <Newsletter />
    </main>
  )
}
