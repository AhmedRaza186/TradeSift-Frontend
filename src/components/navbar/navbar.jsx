import { useState } from 'react'

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

  return (
    <header className="relative z-20 w-full mb-3">
      <nav className="mx-auto flex max-w-360 items-center justify-between px-6 py-7.5 lg:px-20">
        <a href="#top" className="flex items-center gap-2.75 text-white">
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.88 0c.36 1.89-.1 3.98-1.23 5.56-1.12 1.55-2.98 2.45-4.87 2.78-.8.14-1.62.16-2.43.16-2.96-.01-4.75-.25-7.33 1.56-.74.52-1.46 1.14-2.06 1.81-.19.22-.86 1.12-1.02 1.2l-.03-.03c.02-.14.15-.36.2-.53.37-1.1.81-2.44.08-3.5-.31-.44-1-.78-1.56-.84-1.93-.2-4.39.25-5.98 1.37-.42.3-.82.66-1.15 1.04-.12.14-.34.49-.45.57-.1-.06 0-.65 0-.78.12-1.42.62-2.83 1.4-4.03C2.65 4.53 4.62 3.39 6.77 2.97c.25-.05 1.11-.19 1.37-.19.4.08 1.2.02 1.64.03.25.01 1.89.04 2 .03.21-.07 2.1.01 2.43.02l4.2.06c3.15.03 7.08.17 9.19-2.53.1-.12.19-.24.28-.36Z"
              fill="white"
            />
            <path
              d="M16.61 9.73c.16.18.19 1.18.2 1.45.02 1.73-.59 3.4-1.5 4.87-1.6 2.58-5.02 5.46-4.82 8.66.1 1.44.92 2.36 1.99 3.28-1.33 0-2.57-.12-3.78-.72-1.1-.55-2.1-1.48-2.55-2.62-1.63-4.17 1.47-8.33 4.37-11.16.41-.4.79-.78 1.23-1.15.73-.6 1.52-1.14 2.35-1.6.52-.29 1.12-.53 1.68-.73.27-.1.52-.15.79-.26Z"
              fill="white"
            />
          </svg>
          <span className="font-geist text-xl font-medium">TradeSift</span>
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
      </nav>

      {menuOpen && (
        <div className="mx-6 mb-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur lg:hidden">
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
        </div>
      )}
    </header>
  )
}

export default Navbar
