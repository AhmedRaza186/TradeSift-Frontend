import Hero from './Landing/sections/Hero/Hero'
import Features from './Landing/sections/Features/Features'
import Benefits from './Landing/sections/Benefits/Benefits'
import CTA from './Landing/sections/CTA/CTA'
import Footer from './Landing/sections/Footer/Footer'
import FAQ from './Landing/sections/FAQs/FAQ'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Benefits />
      <FAQ/>
      <CTA />
      <Footer />
    </div>
  )
}

export default Home
