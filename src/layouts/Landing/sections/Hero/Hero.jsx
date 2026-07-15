import Navbar from '../../../../components/navbar/navbar'
import DashboardPreview from '../../../../components/dashboard/DashboardPreview'
import heroImage from '../../../../../assets/hero-image.png'

const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#040509] bg-[linear-gradient(180deg,#040509_0%,#040509_48.68%,#040509_86.44%,#313E6F_97.03%,rgba(255,255,255,0.5)_99.9%)]"
    >
      <Navbar />

      <div className="relative mx-auto max-w-[1440px] px-6 pb-[90px] pt-[50px] lg:px-20">
        <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-4">
          <div className="flex max-w-[590px] flex-col items-start gap-[22px]">
            <span className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80">
              AI-Native Operating System for Trade
            </span>

            <h1 className="font-geist text-[40px] font-bold leading-[1.05] text-white sm:text-6xl lg:text-[64px]">
              The AI Operating System for Trade.
            </h1>

            <p className="max-w-[520px] text-base text-white/70 sm:text-lg">
              TradeSift helps customs brokers, importers and enterprises automate compliance, eliminate
              filing errors with autonomous AI workflows.
            </p>

            <a
              href="#get-started"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#FAF0CB] px-8 py-4 text-base font-semibold text-black transition hover:bg-white"
            >
              SEE IN ACTION
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <div className="pointer-events-none relative -mx-6 mt-4 w-[calc(100%+3rem)] lg:absolute lg:right-[-80px] lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[848px] lg:-translate-y-1/2">
            <img
              src={heroImage}
              alt="Global trade network illustration showing a plane, cargo ship and truck connected by glowing routes"
              className="w-full select-none"
              loading="lazy"
            />
          </div>
        </div>

        <div className="relative z-10 mt-16 lg:mt-24">
          <DashboardPreview theme="dark" />
        </div>
      </div>
    </section>
  )
}

export default Hero
