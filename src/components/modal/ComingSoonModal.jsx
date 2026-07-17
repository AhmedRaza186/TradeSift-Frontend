import { useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const FEATURES = [
  'Interactive AI workspace & autonomous agents',
  'Document uploads with real-time AI analysis',
  'User authentication & organization workspaces',
  'TradeShield compliance engine',
  'Enterprise dashboard & live workflows',
]
// ─── Animation Variants ────────────────────────────────────────────────────

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit:   { opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } },
}

const panelVariants = {
  hidden:  { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1,    y: 0,  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, scale: 0.96, y: 12, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } },
}

// ─── Component ─────────────────────────────────────────────────────────────

const ComingSoonModal = ({ isOpen, onClose }) => {
  const shouldReduceMotion = useReducedMotion()
  const panelRef = useRef(null)
  const closeBtnRef = useRef(null)

useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }

  return () => {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }
}, [isOpen])
  // Focus trap + ESC close
  useEffect(() => {
    if (!isOpen) return

    const timeout = setTimeout(() => {
      closeBtnRef.current?.focus()
    }, 50)

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab') return

      const panel = panelRef.current
      if (!panel) return

      const focusable = Array.from(
        panel.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      )
      if (!focusable.length) return

      const first = focusable[0]
      const last  = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus() }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      clearTimeout(timeout)
    }
  }, [isOpen, onClose])

  // Backdrop click-outside
  const handleBackdropClick = useCallback(
    (e) => { if (e.target === e.currentTarget) onClose() },
    [onClose]
  )

  // Reduced-motion overrides
  const bvars = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
    : backdropVariants

  const pvars = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
    : panelVariants

  return (
    <AnimatePresence>
      {isOpen && (
        /* ── Backdrop ─────────────────────────────────────────────────── */
        <motion.div
          key="coming-soon-backdrop"
          variants={bvars}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-title"
          aria-describedby="coming-soon-description"
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-x-hidden overflow-y-auto p-4"
          style={{
            backgroundColor: 'rgba(4, 5, 9, 0.80)',
            WebkitBackdropFilter: 'blur(8px)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {/* ── Panel ────────────────────────────────────────────────── */}
          <motion.div
            key="coming-soon-panel"
            ref={panelRef}
            variants={pvars}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-lg max-w-[560px] overflow-y-hidden px-7 pb-8 pt-9 sm:px-9 sm:pb-10 sm:pt-11 overflow-x-hidden"
            style={{
              maxHeight: 'min(90vh,700px)',
              background: 'linear-gradient(160deg, rgba(20,24,40,0.97) 0%, rgba(10,12,22,0.99) 100%)',
              border: '1px solid rgba(255,255,255,0.11)',
              borderRadius: '26px',
              WebkitBackdropFilter: 'blur(24px)',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.05) inset',
            }}
          >
            {/* Top accent line */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(242,144,47,0.7) 40%, rgba(242,144,47,0.7) 60%, transparent 100%)',
                borderRadius: '26px 26px 0 0',
              }}
            />

            {/* Close button */}
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full text-white/40 transition-all duration-200 hover:bg-white/10 hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </button>

            {/* ── Content ──────────────────────────────────────────── */}
            <div className="px-7 pb-8 pt-9 sm:px-9 sm:pb-10 sm:pt-11">

              {/* Headline */}
              <div className="mb-6 flex flex-col gap-2">
                <span className="text-2xl" role="img" aria-label="Construction sign">🚧</span>
                <h2
                  id="coming-soon-title"
                  className="font-geist text-[26px] font-bold leading-tight tracking-[-0.5px] text-white sm:text-[28px]"
                >
                  TradeSift is Coming Soon
                </h2>
              </div>

              {/* Body */}
              <div
                id="coming-soon-description"
                className="mb-7 space-y-4 text-sm leading-[1.7] text-white/55 sm:text-[15px]"
              >
                <p>
                  Thank you for visiting TradeSift. You&apos;re currently viewing an early
                  preview of our product. This website showcases our vision and interface,
                  while the complete platform is actively under development.
                </p>

                <div>
                  <p className="mb-3 font-medium text-white/70">Upcoming features include:</p>
                  <ul className="space-y-2" role="list">
                    {FEATURES.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: '#f2902f' }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Divider */}
              <div
                aria-hidden="true"
                className="mb-6 h-px w-full"
                style={{ background: 'rgba(255,255,255,0.07)' }}
              />

              {/* CTAs */}
              <div className="flex flex-col gap-3 sm:flex-row">

                {/* Primary */}
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 rounded-[14px] px-5 py-3 text-sm font-semibold tracking-wide text-black transition-all duration-200 hover:brightness-110 focus:outline-none"
                  style={{
                    backgroundColor: '#f2902f',
                    boxShadow: '0 0 24px rgba(242,144,47,0.30)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0 0 0 2px rgba(242,144,47,0.55), 0 0 24px rgba(242,144,47,0.30)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 24px rgba(242,144,47,0.30)'
                  }}
                >
                  Explore Preview
                </button>

                {/* Secondary – disabled */}
                <div className="relative flex-1">
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="w-full cursor-not-allowed rounded-[14px] border px-5 py-3 text-sm font-medium tracking-wide"
                    style={{
                      borderColor: 'rgba(255,255,255,0.10)',
                      color: 'rgba(255,255,255,0.25)',
                      background: 'transparent',
                    }}
                  >
                    Notify Me
                  </button>
                  {/* "Soon" badge */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-1 -top-2.5 rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide"
                    style={{
                      background: 'rgba(242,144,47,0.14)',
                      color: '#f2902f',
                      border: '1px solid rgba(242,144,47,0.28)',
                    }}
                  >
                    Soon
                  </span>
                </div>
              </div>

              {/* Footer note */}
              <p className="mt-5 text-center text-xs text-white/25">
                Preview Version&nbsp;•&nbsp;Interactive features are not yet available.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ComingSoonModal
