import { motion, useReducedMotion } from 'framer-motion'
import Navbar from '../../../../components/navbar/navbar'
import DashboardPreview from '../../../../components/dashboard/DashboardPreview'
import heroImage from '../../../../../assets/hero-image.png'
import { fadeUp, scaleIn, staggerContainer } from '../../../../animations/variants'
import { Link } from 'react-router-dom'

const MotionLink = motion(Link)

const Hero = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      data-nav-theme="dark"
      data-nav-variant="transparent"
      className="relative overflow-hidden pt-26 sm:pt-32 lg:pt-40"
    >
      <Navbar />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-20 pt-8 sm:pt-10 lg:pt-[50px] pb-16 sm:pb-20 lg:pb-[90px]">
        <div className="relative flex flex-col items-center text-center gap-10 lg:flex-row lg:items-center lg:text-left lg:gap-4">
          <motion.div
            initial={shouldReduceMotion ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="relative z-20 flex w-full max-w-[620px] flex-col items-center text-center gap-6 lg:items-start lg:text-left"
          >
            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80"
            >
              AI-Native Operating System for Trade
            </motion.span>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-geist text-[2.4rem] leading-[1.05] sm:text-[3rem] md:text-[3.5rem] lg:text-[64px] font-bold text-white sm:text-6xl "
            >
              The AI Operating System for Trade.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="max-w-[560px] text-[15px] leading-7 text-white/70 sm:text-base lg:text-lg "
            >
              TradeSift helps customs brokers, importers and enterprises automate compliance, eliminate
              filing errors with autonomous AI workflows.
            </motion.p>

            <MotionLink
              to="/signup"
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#FAF0CB] px-8 py-4 text-base font-semibold text-black transition hover:bg-white"
            >
              SEE IN ACTION
              <span aria-hidden="true">&rarr;</span>
            </MotionLink>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn}
            className=" absolute inset-0 flex items-center justify-center pointer-events-none z-0
 lg:inset-auto lg:flex-none lg:block lg:right-[-80px] lg:top-1/2 lg:w-[848px] lg:-translate-y-1/2">
            <img
              src={heroImage}
              alt="TradeSift Hero"
              className=" w-[140%] max-w-[700px] h-auto object-contain opacity-100 sm:w-[120%] sm:opacity-20 md:w-[100%] md:max-w-[760px] md:opacity-30 lg:w-full lg:max-w-none lg:opacity-100 select-none"
            />
          </motion.div>
        </div>

        <div className="relative z-10 mt-25 lg:mt-24 ">
          <DashboardPreview theme="dark" />
        </div>
      </div>
    </section>
  )
}

export default Hero
