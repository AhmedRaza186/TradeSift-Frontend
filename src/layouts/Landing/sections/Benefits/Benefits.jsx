const BENEFITS = [
  {
    title: 'Agentic Workflows',
    description: 'AI agents draft, verify and submit filings end-to-end.',
    viewBox: '0 0 30 30',
    icon: (
      <>
        <path
          d="M17.96 7H12.54c-.65 0-1.3.13-1.9.38a4.9 4.9 0 0 0-1.62 1.08 5 5 0 0 0-1.11 1.62 4.9 4.9 0 0 0-.37 1.9v5.42a5 5 0 0 0 1.44 3.51 4.9 4.9 0 0 0 3.5 1.44h5.42a4.9 4.9 0 0 0 3.51-1.44 5 5 0 0 0 1.44-3.51v-5.42a5 5 0 0 0-1.44-3.5A4.9 4.9 0 0 0 17.96 7Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M22.86 18.28h1.62c.27 0 .53-.11.72-.3.2-.2.3-.45.3-.72v-5.13c0-.27-.1-.53-.3-.72a1 1 0 0 0-.72-.3h-1.62M7.65 18.28H6.03a1 1 0 0 1-.73-.31 1 1 0 0 1-.3-.72v-5.13c0-.27.1-.53.3-.72a1 1 0 0 1 .73-.3h1.62"
          stroke="white"
          strokeWidth="1.5"
        />
        <path d="M6.02 11.1V7M24.48 11.1l-.01-4.1M12.17 11.45v2.7M18.32 11.45v2.7M13.19 18.28h4.1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Compliance First',
    description: 'SBP, FBR and WeBOC-native controls out of the box.',
    viewBox: '0 0 15 15',
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.28 5.81V5c0-1.12.45-2.19 1.24-2.98A4.22 4.22 0 0 1 7.5.78c1.12 0 2.19.45 2.98 1.24.79.79 1.24 1.86 1.24 2.98v.81c.14.01.28.03.4.05.57.07 1.04.23 1.42.6.38.38.54.85.61 1.42.07.54.07 1.23.07 2.08v.07c0 .85 0 1.54-.07 2.08-.07.57-.23 1.04-.61 1.42-.38.38-.85.54-1.41.61-.54.07-1.23.07-2.08.07H4.97c-.85 0-1.54 0-2.08-.07-.57-.07-1.04-.23-1.42-.6a2.32 2.32 0 0 1-.61-1.42A15.65 15.65 0 0 1 .78 10v-.07c0-.85 0-1.54.07-2.08.08-.56.24-1.04.62-1.42.38-.37.85-.53 1.41-.6.13-.02.26-.04.4-.05Zm.94-.81c0-.87.35-1.7.97-2.32A3.28 3.28 0 0 1 7.5 1.72c.87 0 1.7.34 2.32.96.61.62.96 1.45.96 2.32v.78c-.23 0-.48-.01-.75-.01H4.97c-.26 0-.51 0-.75.01V5Zm-2.09 2.13c.17-.18.42-.29.87-.35.47-.06 1.1-.06 2-.06h5c.9 0 1.53 0 2 .06.46.07.7.18.87.35.18.17.29.41.35.87.06.47.06 1.1.06 2 0 .9 0 1.53-.06 2-.07.46-.18.7-.35.87-.17.18-.41.29-.86.35-.48.07-1.1.07-2 .07H5c-.9 0-1.53 0-2-.07-.46-.07-.7-.18-.87-.35a1.66 1.66 0 0 1-.35-.87A15.16 15.16 0 0 1 1.72 10c0-.9 0-1.53.06-2 .07-.46.19-.7.36-.87Z"
        fill="white"
      />
    ),
  },
  {
    title: 'Deep Integrations',
    description: 'ERPs, banks, brokers and carriers — pre-wired.',
    viewBox: '0 0 15 15',
    icon: (
      <>
        <path
          d="M3.75 5.94c.5 0 .97-.2 1.33-.55.35-.35.55-.83.55-1.33 0-.5-.2-.97-.55-1.33a1.88 1.88 0 0 0-2.66 0c-.35.36-.55.83-.55 1.33 0 .5.2.98.55 1.33.36.35.83.55 1.33.55Zm1.56 3.75H2.19v3.13h3.13V9.69Z"
          stroke="white"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
        <path d="M8.03 4.06h5.1v7.19H7.81" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Live Analytics',
    description: 'Duty exposure, cycle time and audit risk in real time.',
    viewBox: '0 0 15 15',
    icon: (
      <>
        <path d="M1.88.94H.94v12.19c0 .25.1.48.28.66.17.18.4.28.66.28h12.19v-.94H1.88V.94Z" fill="white" />
        <path
          d="M14.06 4.22h-3.28v.94h1.68l-3.56 3.56-2-2.01a.63.63 0 0 0-.89 0l-3.4 3.4.66.66 3.1-3.09 2.01 2.02c.09.09.19.16.3.2.11.05.23.07.35.07a.9.9 0 0 0 .35-.06c.11-.05.22-.12.3-.2l3.9-3.9v1.68h.94V4.22Z"
          fill="white"
        />
      </>
    ),
  },
  {
    title: 'Multi-Country',
    description: 'Pakistan first. UAE, KSA and Bangladesh rolling out.',
    viewBox: '0 0 16 16',
    icon: (
      <>
        <path
          d="M2.4 6h11.2M2.4 10h11.2M2 8c0 .79.16 1.57.46 2.3.3.73.75 1.39 1.3 1.94.55.56 1.21 1 1.94 1.3.73.3 1.51.46 2.3.46.79 0 1.57-.16 2.3-.46a6 6 0 0 0 3.24-3.24c.3-.73.46-1.51.46-2.3 0-1.59-.63-3.12-1.76-4.24A6 6 0 0 0 8 2a6 6 0 0 0-6 6Z"
          stroke="white"
          strokeWidth="1.33"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M7.67 2C6.54 3.8 5.95 5.88 5.95 8s.6 4.2 1.72 6M8.33 2c1.13 1.8 1.72 3.88 1.72 6s-.6 4.2-1.72 6" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Sub-Second Filing',
    description: 'GD submission in under a second from validated data.',
    viewBox: '0 0 16 16',
    icon: (
      <path
        d="M7.03 12.13 10.48 8H7.82l.48-3.78-3.09 4.45h2.32l-.5 3.47ZM5.33 14.67 6 10H2.67l6-8.67h1.33l-.67 5.34h4l-6.67 8h-1.33Z"
        fill="white"
      />
    ),
  },
]

const Benefits = () => {
  return (
    <section className="bg-white px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-4">
          <h2 className="font-geist text-[36px] font-bold leading-none text-black sm:text-[52px] lg:text-[68px]">
            Unified Trade Operations
          </h2>
          <p className="max-w-[785px] font-geist text-base leading-[1.25] text-[#03030A]">
            From customs verification to tax recovery and logistics operations, TradeSift centralizes
            Pakistan&apos;s trade workflows into a single AI-powered workspace.
          </p>
        </div>

        <h3 className="mt-20 font-geist text-[32px] font-bold leading-none text-black sm:text-[46px] lg:text-[68px]">
          Enterprise-grade by default.
        </h3>

        <div className="mt-8 grid grid-cols-1 gap-[21px] sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col gap-[18px] rounded-lg border-[0.4px] border-black/80 px-[21px] py-[18px]"
            >
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-black">
                <svg width="15" height="15" viewBox={benefit.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                  {benefit.icon}
                </svg>
              </span>
              <h4 className="font-geist text-2xl font-medium leading-none text-black">{benefit.title}</h4>
              <p className="text-lg leading-[1.13] text-black/60">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
