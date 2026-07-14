const FOOTER_COLUMNS = [
  {
    title: 'Solutions',
    links: ['TradeShield', 'TaxReconcile', 'FreightSync', 'TenderWin'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Guides', 'API Reference', 'Support'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Contact'],
  },
]

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#040509] px-6 py-16 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4 lg:max-w-xs">
          <a href="#top" className="flex items-center gap-2 text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
              TS
            </span>
            <span className="font-geist text-lg font-medium">TradeSift</span>
          </a>
          <p className="text-sm text-white/50">
            The AI operating system for trade — customs, tax and logistics, unified.
          </p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <h5 className="text-sm font-semibold text-white">{column.title}</h5>
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

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/40">
        © {new Date().getFullYear()} TradeSift.ai. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
