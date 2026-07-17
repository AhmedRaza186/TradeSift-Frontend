import { motion } from 'framer-motion'
import { fadeInOpacityOnly } from '../../../../animations/variants.js'
import Logo from '../../../../../assets/LogoWithText.png'


const FOOTER_COLUMNS = [
  {
    title: 'Modules',
    links: ['TradeShield', 'TaxReconcile', 'FreightSync', 'TenderWin'],
  },
  {
    title: 'Solutions',
    links: ['Customs Brokers', 'Importers', 'Enterprises', 'Banks'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Insights', 'API', 'Changelog'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Contact'],
  },
]

const Footer = () => {
  return (
    <motion.footer
      id="footer"
      data-nav-theme="dark"
      data-nav-variant="glass"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInOpacityOnly}
      className="border-t border-white/10 bg-black px-6 py-12 sm:py-16 lg:px-20"
    >
      {/* Top */}
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 lg:flex-row lg:justify-between">
        {/* Logo */}
        <div className="flex flex-col items-center text-center gap-5 lg:max-w-xs lg:items-start lg:text-left">
          <a href="#top">
            <img
              src={Logo}
              alt="TradeSift"
              className="h-14 sm:h-16 lg:h-18 w-auto object-contain"
            />
          </a>

          <p className="max-w-sm text-sm leading-7 text-white/50">
            The AI operating system for trade — customs, tax and logistics,
            unified.
          </p>
        </div>

        {/* Links */}
        <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h5 className="font-jetBrainsMono text-sm font-semibold text-white">
                {column.title}
              </h5>

              {column.links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-white/50 transition hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-12 flex max-w-[1280px] flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-center text-sm text-white/40 md:flex-row md:text-left">
        <p className="font-inter">
          © {new Date().getFullYear()} TradeSift. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 md:justify-end">
          <a href="" className="transition hover:text-white">
            Privacy
          </a>

          <a href="" className="transition hover:text-white">
            Terms
          </a>

          <a href="" className="transition hover:text-white">
            Security
          </a>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer