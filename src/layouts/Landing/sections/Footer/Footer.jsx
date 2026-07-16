import { motion } from 'framer-motion'
import { fadeInOpacityOnly } from '../../../../animations/variants'

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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInOpacityOnly}
      className="border-t border-black/10 bg-black px-6 py-16 lg:px-20"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4 lg:max-w-xs">
          <a href="#top" className="flex items-center gap-2 text-white">
            <img className="flex h-8 w-8 items-center justify-center text-white" src="../../../../../assets/Logo.png">

            </img>
            <span className="font-geist text-lg font-bold tracking-tight">TradeSift</span>
          </a>
          <p className="text-sm text-white/50">
            The AI operating system for trade — customs, tax and logistics, unified.
          </p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <h5 className="text-sm font-semibold font-jetBrainsMono text-white">{column.title}</h5>
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

      <div className="mx-auto mt-12 max-w-[1280px] border-t border-white/10 pt-6 text-sm text-white/40 flex justify-between">
       <div className="font-inter text-1xl"> © {new Date().getFullYear()} TradeSift.ai. All rights reserved.</div>
       <div className="flex gap-6 ">
        <a href="" className="transition hover:text-white">Privacy</a>
        <a href="" className="transition hover:text-white">Terms</a>
        <a href="" className="transition hover:text-white">Secuirty</a>
       </div>
      </div>
    </motion.footer>
  )
}

export default Footer
