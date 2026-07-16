import { motion } from 'framer-motion'
import { fadeUp } from '../../../../animations/variants'

const CTA = () => {
  return (
    <section className="bg-white px-6 py-24 lg:px-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-[36px] border border-gray-300 shadow-md bg-white px-8 py-20 text-center shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
      >
        {/* Main Heading */}
        <h2 className="max-w-2xl font-geist text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-[44px] md:leading-[1.15]">
          Ready to modernize your trade operations?
        </h2>
        
        {/* Subparagraph */}
        <p className="max-w-lg text-sm leading-relaxed text-gray-500 sm:text-base">
          Join customs brokers, importers and enterprises already automating
          compliance with TradeSift.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <motion.a
            href="#get-started"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-full bg-black px-8 py-3.5 text-xs font-bold tracking-wider text-white transition-all duration-200 hover:bg-black/95"
          >
            GET STARTED
          </motion.a>
          <motion.a
            href="#signin"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-full border border-gray-200 bg-white px-8 py-3.5 text-xs font-semibold tracking-wider text-black transition-all duration-200 hover:bg-gray-50 hover:border-gray-300"
          >
            SIGN IN
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default CTA