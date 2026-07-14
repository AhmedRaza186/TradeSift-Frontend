import { useState } from 'react'

const TABS = [
  {
    key: 'TradeShield',
    icon: (active) => (
      <path
        d="M13.32 8.66c0 3.33-2.73 5-5.5 5.96a.9.9 0 0 1-.55 0c-2.77-.96-5.5-2.63-5.5-5.96V4c0-.18.07-.35.2-.48.13-.13.3-.2.48-.2 1.34 0 3-.8 4.16-1.99a.83.83 0 0 1 1.18 0c1.17 1.19 2.84 1.99 4.16 1.99.18 0 .35.07.48.2.13.13.2.3.2.48v4.66Z"
        stroke={active ? '#000205' : 'white'}
        strokeOpacity={active ? 1 : 0.6}
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    key: 'TaxReconcile',
    icon: (active) => (
      <>
        <path
          d="M9.16 11.82a4 4 0 0 1-7.68-2.19M9.99 4h.67v2.66"
          stroke={active ? '#000205' : 'white'}
          strokeOpacity={active ? 1 : 0.6}
          strokeWidth="1.33"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m4.09 9.84.58-.34 1.33 2.3"
          stroke={active ? '#000205' : 'white'}
          strokeOpacity={active ? 1 : 0.6}
          strokeWidth="1.33"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="10.66"
          cy="5.33"
          r="4"
          stroke={active ? '#000205' : 'white'}
          strokeOpacity={active ? 1 : 0.6}
          strokeWidth="1.33"
        />
      </>
    ),
  },
  {
    key: 'FreightSync',
    icon: (active) => (
      <>
        <path
          d="M9.33 11.99V4a1.33 1.33 0 0 0-1.33-1.33H2.66A1.33 1.33 0 0 0 1.33 4v7.33c0 .18.07.35.2.48.13.13.3.2.48.2h1.33"
          stroke={active ? '#000205' : 'white'}
          strokeOpacity={active ? 1 : 0.6}
          strokeWidth="1.33"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9.99 11.99H5.99" stroke={active ? '#000205' : 'white'} strokeOpacity={active ? 1 : 0.6} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M12.66 11.99h1.33c.18 0 .35-.07.48-.2.13-.13.2-.3.2-.48V8.89a.67.67 0 0 0-.15-.42l-2.16-2.7a.67.67 0 0 0-.52-.25H9.33"
          stroke={active ? '#000205' : 'white'}
          strokeOpacity={active ? 1 : 0.6}
          strokeWidth="1.33"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="11.33" cy="11.99" r="1.33" stroke={active ? '#000205' : 'white'} strokeOpacity={active ? 1 : 0.6} strokeWidth="1.33" />
        <circle cx="4.66" cy="11.99" r="1.33" stroke={active ? '#000205' : 'white'} strokeOpacity={active ? 1 : 0.6} strokeWidth="1.33" />
      </>
    ),
  },
  {
    key: 'TenderWin',
    icon: (active) => (
      <>
        <path
          d="M1.33 12.24 4.99 8.6l3.13 3.14L14.24 5.6M10.66 5.6h3.58v3.58"
          stroke={active ? '#000205' : 'white'}
          strokeOpacity={active ? 1 : 0.6}
          strokeWidth="1.33"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
]

const MODULE_CARDS = [
  {
    key: 'TradeShield',
    tag: 'AI Customs',
    title: 'TradeShield',
    description: 'AI customs verification that cross-checks invoices, HS codes and SROs before you file',
    icon: (
      <path
        d="M13.67 8.17V7.25c0-.56 0-.84-.1-1.09-.1-.26-.3-.45-.68-.85L9.73 2.03c-.33-.34-.5-.51-.7-.62a1.55 1.55 0 0 0-.14-.06 3 3 0 0 0-.9-.06c-2.16 0-3.24 0-3.98.6-.15.13-.28.27-.4.42C3 3.06 3 4.18 3 6.42v3.13c0 2.6 0 3.9.78 4.71.78.8 2.04.8 4.55.8M9 1.62v.35c0 1.95 0 2.92.58 3.53.59.6 1.53.6 3.42.6h.33"
        stroke="#F2902F"
        strokeWidth="0.83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    key: 'TaxReconcile',
    tag: 'Tax Engine',
    title: 'TaxReconcile',
    description: 'Recover tax credits automatically. Reconciled against FBR, SRB and bank feeds.',
    icon: (
      <path
        d="M8.05 11.28c.28 0 .5-.23.5-.5v-.25h.17c.83 0 1.53-.68 1.53-1.5 0-.83-.68-1.5-1.53-1.5H7.42c-.28 0-.53-.23-.53-.5s.23-.5.53-.5h2.08c.28 0 .5-.23.5-.5s-.23-.5-.5-.5H8.55v-.25c0-.27-.22-.5-.5-.5s-.5.23-.5.5v.25H7.42c-.83 0-1.53.68-1.53 1.5 0 .83.68 1.5 1.53 1.5h1.3c.28 0 .5.23.5.5s-.23.5-.53.5H6.57c-.28 0-.5.23-.5.5s.22.5.5.5h.95v.25c.02.28.25.5.53.5Z M2.1 7.93c.13 0 .23-.05.3-.1l1.78-1.4c.22-.18.25-.48.07-.7-.18-.23-.48-.25-.7-.08l-.9.73C3.28 3.83 5.55 2.05 8.15 2.05c2.63 0 4.9 1.78 5.55 4.33.08.27.35.42.6.35.28-.08.43-.35.35-.6C13.9 3.13 11.2 1.03 8.13 1.03c-3.05 0-5.7 2.05-6.48 5l-.55-.78c-.17-.22-.47-.28-.7-.1-.22.17-.27.47-.1.7l1.4 1.87c.08.1.2.18.33.2Z M15.75 11.2 14.78 9.08c-.05-.13-.15-.23-.3-.28-.13-.05-.28-.03-.4.02l-2.03 1c-.25.13-.35.43-.22.68.12.25.42.35.67.23l1-.48c-.85 2.22-2.95 3.7-5.35 3.7-2.48 0-4.63-1.58-5.4-3.93-.08-.25-.38-.4-.63-.32-.25.07-.4.37-.32.62.9 2.75 3.45 4.6 6.35 4.6 2.77 0 5.25-1.7 6.25-4.28l.42.96c.08.17.28.3.45.3.08 0 .15-.03.2-.05.3-.1.4-.4.28-.65Z"
        fill="#F2902F"
      />
    ),
  },
  {
    key: 'FreightSync',
    tag: 'Logistics',
    title: 'FreightSync',
    description: 'Real-time logistics orchestration across carriers, ports and last-mile fleets.',
    icon: (
      <path
        d="M8.05 11.28c.28 0 .5-.23.5-.5v-.25h.17c.83 0 1.53-.68 1.53-1.5 0-.83-.68-1.5-1.53-1.5H7.42c-.28 0-.53-.23-.53-.5s.23-.5.53-.5h2.08c.28 0 .5-.23.5-.5s-.23-.5-.5-.5H8.55v-.25c0-.27-.22-.5-.5-.5s-.5.23-.5.5v.25H7.42c-.83 0-1.53.68-1.53 1.5 0 .83.68 1.5 1.53 1.5h1.3c.28 0 .5.23.5.5s-.23.5-.53.5H6.57c-.28 0-.5.23-.5.5s.22.5.5.5h.95v.25c.02.28.25.5.53.5Z"
        fill="#F2902F"
      />
    ),
  },
  {
    key: 'TenderWin',
    tag: 'Bidding AI',
    title: 'TenderWin',
    description: 'Government bidding intelligence — tender discovery, scoring and proposal drafting.',
    icon: (
      <path
        d="M13.67 8.17V7.25c0-.56 0-.84-.1-1.09-.1-.26-.3-.45-.68-.85L9.73 2.03c-.33-.34-.5-.51-.7-.62a1.55 1.55 0 0 0-.14-.06 3 3 0 0 0-.9-.06c-2.16 0-3.24 0-3.98.6-.15.13-.28.27-.4.42C3 3.06 3 4.18 3 6.42v3.13c0 2.6 0 3.9.78 4.71.78.8 2.04.8 4.55.8M9 1.62v.35c0 1.95 0 2.92.58 3.53.59.6 1.53.6 3.42.6h.33"
        stroke="#F2902F"
        strokeWidth="0.83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
]

const Features = () => {
  const [activeTab, setActiveTab] = useState('TaxReconcile')

  return (
    <section className="bg-[#040509] px-6 py-24 lg:px-20">
      <div className="mx-auto flex max-w-[820px] flex-col items-center gap-5 text-center">
        <span className="font-mono text-xs uppercase tracking-[2.4px] text-white">The Problem</span>
        <h2 className="font-geist text-[32px] font-bold leading-[1.1] tracking-[-1.4px] text-white sm:text-[44px] lg:text-[56px]">
          Trade is still managed through spreadsheets, manual filing and fragmented government
          systems.
        </h2>
        <p className="text-base leading-[1.6] text-white/55 sm:text-lg">
          TradeSift unifies customs, finance and logistics into one intelligent operating system.
        </p>
      </div>

      <div className="mx-auto mt-24 flex max-w-[751px] flex-col items-center gap-8 text-center">
        <h3 className="font-geist text-[40px] font-bold leading-[0.9] tracking-[-1.4px] text-white sm:text-[54px] lg:text-[68px]">
          Everything in one place
        </h3>
        <p className="max-w-[672px] text-base leading-[1.55] text-white/60 sm:text-lg">
          Four AI engines. One command center. Track shipments, reconcile taxes, win tenders and stay
          compliant — without switching tabs.
        </p>

        <div className="flex h-auto w-full flex-wrap items-center justify-center gap-1 rounded-[37px] border border-white/10 bg-white/[0.03] p-1 sm:h-[50px] sm:flex-nowrap">
          {TABS.map((tab) => {
            const active = activeTab === tab.key
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-[37px] px-5 py-2.5 text-sm font-medium transition ${
                  active ? 'bg-white text-[#000205] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]' : 'text-white/60 hover:text-white'
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  {tab.icon(active)}
                </svg>
                {tab.key}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-2">
        {MODULE_CARDS.map((card) => (
          <div
            key={card.key}
            className={`relative flex min-h-[284px] flex-col justify-between gap-8 overflow-hidden rounded-[14px] bg-[#040509] p-8 ring-1 transition ${
              activeTab === card.key ? 'ring-brand' : 'ring-white/10'
            }`}
          >
            <div
              className="pointer-events-none absolute -right-16 -top-24 h-[400px] w-[300px] rounded-full opacity-40 blur-[60px]"
              style={{ background: 'radial-gradient(circle, #E06D09 0%, rgba(224,109,9,0) 70%)' }}
            />
            <div className="relative flex flex-col gap-3">
              <div className="flex items-center gap-1.5">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                  {card.icon}
                </svg>
                <span className="text-sm font-light text-brand">{card.tag}</span>
              </div>
              <h4 className="font-geist text-[28px] font-medium leading-none text-white sm:text-[34px]">
                {card.title}
              </h4>
            </div>
            <div className="relative flex flex-col gap-6">
              <p className="text-base leading-tight text-white sm:text-lg">{card.description}</p>
              <a href={`#${card.title.toLowerCase()}`} className="flex items-center gap-2 text-base text-white sm:text-lg">
                Learn more
                <svg width="13" height="9" viewBox="0 0 13 9" fill="none">
                  <path d="M13 4.01 8.13 0v3.25H0v1.63h8.13V8.1L13 4.01Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
