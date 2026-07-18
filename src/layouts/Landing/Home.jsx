import Hero from './sections/Hero/Hero'
import Features from './sections/Features/Features'
import Benefits from './sections/Benefits/Benefits'
import CTA from './sections/CTA/CTA'
import Footer from './sections/Footer/Footer'
import FAQ from './sections/FAQs/FAQ'
import { NavThemeProvider } from '../../context/NavThemeContext'

const Home = () => {
  return (
    <NavThemeProvider>
      <div className='overflow-hidden'>
        <Hero />
        <Features />
        <Benefits />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </NavThemeProvider>
  )
}

export default Home
