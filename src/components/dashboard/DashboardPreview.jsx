const Icon = ({ children, viewBox = '0 0 19 19', className = '' }) => (
  <svg
    width="18"
    height="18"
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
  >
    {children}
  </svg>
)

const NAV_ITEMS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    active: true,
    icon: (stroke) => (
      <>
        <rect x="2.32" y="2.32" width="5.43" height="6.97" rx="0.77" stroke={stroke} strokeWidth="1.55" />
        <rect x="10.85" y="2.32" width="5.42" height="3.87" rx="0.77" stroke={stroke} strokeWidth="1.55" />
        <rect x="10.85" y="9.3" width="5.42" height="6.97" rx="0.77" stroke={stroke} strokeWidth="1.55" />
        <rect x="2.32" y="12.4" width="5.43" height="3.87" rx="0.77" stroke={stroke} strokeWidth="1.55" />
      </>
    ),
  },
  {
    key: 'tradeshield',
    label: 'TradeShield',
    icon: (stroke) => (
      <path
        d="M15.494 10.07c0 3.87-2.71 5.81-5.934 6.93a1 1 0 0 1-.52 0c-3.23-1.12-5.94-3.05-5.94-6.93V4.65c0-.4.31-.78.77-.78 1.55 0 3.49-.93 4.84-2.1a1 1 0 0 1 1.19 0c1.36 1.18 3.29 2.1 4.84 2.1.46 0 .77.38.77.78v5.42Z"
        stroke={stroke}
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    key: 'taxreconcile',
    label: 'TaxReconcile',
    icon: (stroke) => (
      <>
        <path
          d="M3.1 1.55v15.5l1.55-.78 1.55.78 1.55-.78 1.55.78 1.55-.78 1.55.78 1.55-.78 1.55.78V1.55l-1.55.78-1.55-.78-1.55.78-1.55-.78-1.55.78-1.55-.78-1.55.78L3.1 1.55Z"
          stroke={stroke}
          strokeWidth="1.55"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.4 6.2H7.75c-.41 0-.81.16-1.1.46-.3.29-.46.68-.46 1.1 0 .41.16.8.46 1.1.29.29.68.46 1.1.46h3.1c.41 0 .8.16 1.1.46.29.29.45.68.45 1.1 0 .41-.16.8-.45 1.1-.3.29-.69.46-1.1.46H6.2M9.3 13.56V5.03"
          stroke={stroke}
          strokeWidth="1.55"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    key: 'freightsync',
    label: 'FreightSync',
    icon: (stroke) => (
      <>
        <path
          d="M10.85 13.94V4.65c0-.41-.16-.8-.46-1.1-.29-.29-.68-.45-1.1-.45H3.1c-.41 0-.8.16-1.1.45-.29.3-.45.69-.45 1.1v8.52c0 .2.08.4.23.55.15.14.35.23.55.23h1.55"
          stroke={stroke}
          strokeWidth="1.55"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M11.62 13.94H6.97" stroke={stroke} strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M14.72 13.94h1.55c.2 0 .4-.08.55-.23a.77.77 0 0 0 .23-.55v-2.83a.77.77 0 0 0-.17-.48l-2.7-3.37a.77.77 0 0 0-.6-.29h-2.73"
          stroke={stroke}
          strokeWidth="1.55"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="13.17" cy="13.94" r="1.55" stroke={stroke} strokeWidth="1.55" />
        <circle cx="5.42" cy="13.94" r="1.55" stroke={stroke} strokeWidth="1.55" />
      </>
    ),
  },
  {
    key: 'tenderwin',
    label: 'TenderWin',
    icon: (stroke) => (
      <>
        <path
          d="M4.65 6.97H3.49a1.94 1.94 0 0 1 0-3.88h1.16M13.94 6.97h1.17a1.94 1.94 0 0 0 0-3.88h-1.17M3.1 17.04h12.4"
          stroke={stroke}
          strokeWidth="1.55"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.75 11.36v1.81c0 .43-.37.76-.75.94-.91.42-1.58 1.57-1.58 2.93M10.85 11.36v1.81c0 .43.36.76.75.94.91.42 1.57 1.57 1.57 2.93"
          stroke={stroke}
          strokeWidth="1.55"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.94 1.55H4.65v5.42a4.65 4.65 0 0 0 9.29 0V1.55Z"
          stroke={stroke}
          strokeWidth="1.55"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
]

const SECONDARY_ITEMS = ['Reports', 'Notifications', 'Settings', 'Integrations', 'Help Center', 'User Management', 'Billing', 'Logout']

const STATS = [
  {
    label: 'Documents Processed',
    value: '58,321',
    change: '+12.4%',
    bg: 'bg-brand/10',
    sparkline: 'M0 27.27 9.92 23.47 19.83 24.53 29.75 20.89 39.66 18.31 49.58 13.29 59.5 9.65 69.41 7.37 79.33 3.88 89.24 2.48',
    icon: (
      <>
        <path
          d="M10.85 1.45H4.34c-.77 0-1.45.6-1.45 1.44v11.57c0 .77.6 1.44 1.44 1.44h8.68c.77 0 1.44-.6 1.44-1.44V5.06l-3.6-3.6Z"
          stroke="#F2902F"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.12 1.45v2.89c0 .38.15.75.42 1.02.27.27.64.42 1.02.42h2.9M7.23 6.51H5.78M11.57 9.4H5.78M11.57 12.29H5.78"
          stroke="#F2902F"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    label: 'Discrepancy Alerts',
    value: '8',
    change: '-3.2%',
    bg: 'bg-[#FF6900]/10',
    sparkline: 'M0 2.48 9.92 9.92 19.83 12.39 29.75 4.96 39.66 14.87 49.58 19.83 59.5 22.31 69.41 17.35 79.33 24.79 89.24 27.27',
    icon: (
      <>
        <path
          d="M15.71 13.02 9.93 2.89a1.53 1.53 0 0 0-2.53 0L1.63 13.02a1.53 1.53 0 0 0 1.26 2.17h11.57a1.53 1.53 0 0 0 1.25-2.17Z"
          stroke="#FF8904"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8.68 6.51v2.89M8.68 12.29h.01" stroke="#FF8904" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'Tax Credits Recovered',
    value: 'Rs 12.5M',
    change: '+8.7%',
    bg: 'bg-brand/10',
    sparkline: 'M0 27.27 9.92 24.46 19.83 23.06 29.75 19.32 39.66 16.98 49.58 13.71 59.5 10.43 69.41 7.62 79.33 4.82 89.24 2.48',
    icon: (
      <>
        <path
          d="M15.91 5.06 9.76 11.21 6.15 7.59 1.45 12.29"
          stroke="#F2902F"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M11.57 5.06h4.34v4.34" stroke="#F2902F" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'Open Tenders',
    value: '24',
    change: '+2 new',
    bg: 'bg-brand/10',
    sparkline: 'M0 27.27 9.92 23.14 19.83 19.01 29.75 23.14 39.66 14.87 49.58 19.01 59.5 10.74h9.92l9.92-4.13 9.92-4.13',
    icon: (
      <>
        <path
          d="M7.95 15.71a1.53 1.53 0 0 0 1.45.2l5.06-2.9a1.53 1.53 0 0 0 .73-1.33V5.78a1.53 1.53 0 0 0-.73-1.33L9.4 1.64a1.53 1.53 0 0 0-1.45 0l-5.06 2.9a1.53 1.53 0 0 0-.73 1.33v5.9a1.53 1.53 0 0 0 .73 1.33l5.06 2.9Z"
          stroke="#F2902F"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.68 15.91V8.68M2.38 5.06l6.3 3.62 6.3-3.62M5.42 3.09l6.51 3.72"
          stroke="#F2902F"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
]

const ROWS = [
  { ref: 'REF-2026-8821', module: 'TradeShield', color: '#FF8904', date: 'Jul 13, 2026', user: 'Kamran A.', status: 'Approved', statusColor: '#05DF72', statusBg: 'bg-[#00C950]/10' },
  { ref: 'REF-2026-8820', module: 'TaxReconcile', color: '#51A2FF', date: 'Jul 13, 2026', user: 'Sana M.', status: 'Processing', statusColor: '#51A2FF', statusBg: 'bg-[#2B7FFF]/10' },
  { ref: 'REF-2026-8819', module: 'FreightSync', color: '#00D5BE', date: 'Jul 12, 2026', user: 'Ahmed R.', status: 'Action Required', statusColor: '#FF8904', statusBg: 'bg-[#FF6900]/10' },
  { ref: 'REF-2026-8818', module: 'TenderWin', color: '#C27AFF', date: 'Jul 12, 2026', user: 'Zara K.', status: 'Pending', statusColor: '#FDC700', statusBg: 'bg-[#F0B100]/10' },
  { ref: 'REF-2026-8817', module: 'TradeShield', color: '#FF8904', date: 'Jul 11, 2026', user: 'Imran T.', status: 'Cleared', statusColor: '#00D492', statusBg: 'bg-[#00BC7D]/10' },
  { ref: 'REF-2026-8816', module: 'TaxReconcile', color: '#51A2FF', date: 'Jul 11, 2026', user: 'Farah N.', status: 'Failed', statusColor: '#FF6467', statusBg: 'bg-[#FB2C36]/10' },
]

const initials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')

const DashboardPreview = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark'
  const palette = isDark
    ? {
        shell: 'bg-[#090909]',
        sidebar: 'bg-[#111111] border-white/[0.06]',
        header: 'bg-[#090909] border-white/[0.06]',
        card: 'bg-[#171717] border-white/[0.06]',
        border: 'border-white/[0.06]',
        text: 'text-white',
        muted: 'text-[#A1A1AA]',
        input: 'bg-[#171717] border-white/[0.06]',
      }
    : {
        shell: 'bg-[#F7F7F7]',
        sidebar: 'bg-white border-[#E8E8E8]',
        header: 'bg-[#F7F7F7] border-[#E8E8E8]',
        card: 'bg-white border-[#E8E8E8]',
        border: 'border-[#E8E8E8]',
        text: 'text-[#111111]',
        muted: 'text-[#666666]',
        input: 'bg-white border-[#E8E8E8]',
      }
  const navMuted = isDark ? '#A1A1AA' : '#666666'

  return (
    <div className={`flex w-full overflow-hidden rounded-[22px] border ${palette.border} ${palette.shell} shadow-2xl`}>
      {/* Sidebar */}
      <aside className={`hidden w-[220px] shrink-0 flex-col border-r ${palette.sidebar} md:flex`}>
        <div className={`flex h-[70px] items-center gap-3 border-b px-5 ${palette.border}`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
            TS
          </span>
          <span className="font-geist text-lg font-semibold">
            <span className={palette.text}>TradeSift</span>
            <span className="text-brand">.ai</span>
          </span>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-hidden p-4">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.key}
              className={`flex items-center gap-3 rounded-full px-4 py-2.5 text-sm font-medium ${
                item.active ? 'bg-brand/10 text-brand' : `${palette.muted}`
              }`}
            >
              <Icon>{item.icon(item.active ? '#F2902F' : navMuted)}</Icon>
              <span className="flex-1 text-left">{item.label}</span>
              {item.active && <span className="h-1.5 w-1.5 rounded-full bg-brand" />}
            </div>
          ))}
          <div className={`my-3 h-px w-full ${isDark ? 'bg-white/[0.06]' : 'bg-[#E8E8E8]'}`} />
          {SECONDARY_ITEMS.map((label) => (
            <div key={label} className={`rounded-full px-4 py-2.5 text-sm font-medium ${palette.muted}`}>
              {label}
            </div>
          ))}
        </nav>

        <div className={`flex items-center gap-3 border-t px-5 py-4 ${palette.border}`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/15 text-xs font-bold text-brand">
            KA
          </span>
          <div className="flex flex-col overflow-hidden">
            <span className={`truncate text-sm font-medium ${palette.text}`}>Kamran Aslam</span>
            <span className={`truncate text-xs ${palette.muted}`}>Senior Customs Broker</span>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className={`flex h-[70px] items-center justify-between gap-4 border-b px-5 ${palette.header} ${palette.border}`}>
          <div className="hidden items-center gap-2 text-sm sm:flex">
            <span className={palette.muted}>TradeSift</span>
            <span className={`${palette.muted} opacity-40`}>/</span>
            <span className={`font-medium ${palette.text}`}>Dashboard</span>
          </div>
          <div className={`flex h-10 flex-1 max-w-[280px] items-center gap-2 rounded-2xl border px-4 ${palette.input}`}>
            <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
              <circle cx="6.82" cy="6.82" r="4.96" stroke={navMuted} strokeWidth="1.24" />
              <path d="m13.02 13.02-2.67-2.67" stroke={navMuted} strokeWidth="1.24" strokeLinecap="round" />
            </svg>
            <span className={`truncate text-xs ${palette.muted}`}>Search invoices, shipments, tenders&hellip;</span>
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <span className={`flex h-9 items-center gap-2 rounded-2xl border px-3 text-sm ${palette.border} ${palette.muted}`}>
              Activity
            </span>
            <span className={`flex h-9 items-center gap-2 rounded-2xl border px-3 text-sm ${palette.border} ${palette.text}`}>
              <span className="flex h-5 w-5 items-center justify-center rounded bg-brand/15 text-[11px] font-bold text-brand">
                PK
              </span>
              Karachi Customs
            </span>
          </div>
        </header>

        <div className="flex-1 overflow-hidden p-6">
          <h3 className={`font-geist text-xl font-semibold sm:text-2xl ${palette.text}`}>Trade Operations Center</h3>
          <p className={`mt-1.5 max-w-xl text-sm sm:text-base ${palette.muted}`}>
            Monitor customs, finance, logistics and procurement operations from one intelligent platform.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className={`rounded-3xl border p-5 ${palette.card}`}>
                <div className="flex items-start justify-between">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full ${stat.bg}`}>
                    <Icon viewBox="0 0 18 18">{stat.icon}</Icon>
                  </span>
                  <span className="rounded-full bg-[#00C950]/10 px-2.5 py-1 font-mono text-xs font-medium text-[#05DF72]">
                    {stat.change}
                  </span>
                </div>
                <p className={`mt-5 font-mono text-2xl font-bold sm:text-[27px] ${palette.text}`}>{stat.value}</p>
                <p className={`mt-1 text-xs sm:text-sm ${palette.muted}`}>{stat.label}</p>
                <svg width="90" height="30" viewBox="0 0 90 30" fill="none" className="mt-4">
                  <polyline points={stat.sparkline} stroke="#F2902F" strokeWidth="1.86" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9" />
                </svg>
              </div>
            ))}
          </div>

          <div className={`mt-6 hidden overflow-hidden rounded-3xl border ${palette.card} lg:block`}>
            <div className={`flex items-center justify-between border-b px-6 py-5 ${palette.border}`}>
              <div>
                <h4 className={`font-geist text-lg font-semibold ${palette.text}`}>Recent Activities</h4>
                <p className={`mt-0.5 text-sm ${palette.muted}`}>Last 7 days across all modules</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`rounded-2xl border px-4 py-2 text-sm ${palette.border} ${palette.muted}`}>Filter</span>
                <span className={`rounded-2xl border px-4 py-2 text-sm ${palette.border} ${palette.muted}`}>Export</span>
              </div>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className={`border-b text-xs uppercase tracking-widest ${palette.border} ${palette.muted}`}>
                  <th className="px-6 py-4 font-medium">Reference ID</th>
                  <th className="px-6 py-4 font-medium">Module</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">User</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.ref} className={`border-b last:border-0 ${isDark ? 'border-white/[0.03]' : 'border-[#E8E8E8]/50'}`}>
                    <td className={`px-6 py-4 font-mono text-sm font-medium ${palette.text}`}>{row.ref}</td>
                    <td className="px-6 py-4 text-sm font-medium" style={{ color: row.color }}>
                      {row.module}
                    </td>
                    <td className={`px-6 py-4 font-mono text-sm ${palette.muted}`}>{row.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-[11px] font-bold text-brand">
                          {initials(row.user)}
                        </span>
                        <span className={`text-sm ${palette.muted}`}>{row.user}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${row.statusBg}`}
                        style={{ color: row.statusColor }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: row.statusColor }} />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPreview
