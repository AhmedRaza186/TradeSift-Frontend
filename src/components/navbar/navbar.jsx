import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { fadeDown } from '../../animations/variants'

const NAV_LINKS = [
  { label: 'Solutions', hasChevron: true },
  { label: 'Resources', hasChevron: true },
  { label: 'About', hasChevron: false },
  { label: 'Contact', hasChevron: false },
]

const Chevron = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.54 5.54a.72.72 0 0 1-1.06 0L.23 1.29A.76.76 0 0 1 .76 0a.76.76 0 0 1 .53.23l3.72 3.72L8.73.23a.76.76 0 0 1 1.06 1.06L5.54 5.54Z"
      fill="currentColor"
    />
  </svg>
)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full ">
      <motion.nav
        initial={shouldReduceMotion ? 'visible' : 'hidden'}
        animate="visible"
        variants={fadeDown}
        className="mx-auto flex max-w-360 items-center justify-between px-6 py-7.5 lg:px-20"
      >
        <a href="#top" className="flex items-center gap-2.75 text-white ">
      
          <img src="../../../assets/Logo.png" alt="" className='w-15 h-15 object-contain'/>
          <span className="font-geist text-xl font-bold pt-1.5 ">TradeSift</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={`#${link.label.toLowerCase()}`}
              className="flex items-center gap-1.5 text-base font-medium tracking-wide text-white/90 transition hover:text-white"
            >
              {link.label}
              {link.hasChevron && <Chevron />}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4.25 lg:flex font-inter">
          <a
            href="#signin"
            className="rounded-[18px] border border-white/50 bg-[rgba(3,4,5,0.2)] px-4 py-2 text-base font-medium text-[14px] leading-5.5 tracking-[4%] text-white transition hover:bg-white/10"
          >
            SIGN IN
          </a>
          <a
            href="#get-started"
            className="rounded-[18px] bg-[#FAF0CB] px-3 py-2 text-base font-medium text-[14px] leading-5.5 tracking-[0.64px] text-black transition hover:bg-white"
          >
            GET STARTED
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-6 mb-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur lg:hidden"
          >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={`#${link.label.toLowerCase()}`}
              className="text-base font-medium text-white/90"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="#signin"
              className="rounded-full border border-white/50 bg-black/20 px-3 py-2 text-center text-base font-medium text-white"
            >
              SIGN IN
            </a>
            <a
              href="#get-started"
              className="rounded-full bg-[#FAF0CB] px-3 py-2 text-center text-base font-medium text-black"
            >
              GET STARTED
            </a>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
