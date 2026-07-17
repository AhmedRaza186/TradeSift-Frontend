import Hero from './Landing/sections/Hero/Hero'
import Features from './Landing/sections/Features/Features'
import Benefits from './Landing/sections/Benefits/Benefits'
import CTA from './Landing/sections/CTA/CTA'
import Footer from './Landing/sections/Footer/Footer'
import FAQ from './Landing/sections/FAQs/FAQ'
import { NavThemeProvider } from '../context/NavThemeContext'

const Home = () => {
  return (
    <NavThemeProvider>
      <div className='overflow-hidden'>
        <Hero />
        <Features />
        <Benefits />
        <FAQ/>
        <CTA />
        <Footer />
      </div>
    </NavThemeProvider>
  )
}

export default Home
