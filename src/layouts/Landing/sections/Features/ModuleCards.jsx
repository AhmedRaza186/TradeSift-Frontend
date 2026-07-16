import { MODULE_CARDS } from "./constants";
import { MoveRight } from "lucide-react";
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../../../animations/variants'

const ModuleCards = () => {
  const shouldReduceMotion = useReducedMotion()

   return (
      <motion.div
         initial={shouldReduceMotion ? 'visible' : 'hidden'}
         whileInView="visible"
         viewport={{ once: true, amount: 0.2 }}
         variants={staggerContainer}
         className="mx-auto mt-16 grid max-w-[1160px] grid-cols-1 gap-5 lg:grid-cols-3"
      >
         {MODULE_CARDS.map((card) => {
            const Icon = card.icon;

            return (
               <motion.div
                  key={card.key}
                  variants={fadeUp}
                  whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)' }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex min-h-[284px] flex-col justify-between gap-8 overflow-hidden rounded-[24px] border border-black/10 bg-[#040509] p-8 ${card.span}`}
               >
                  <div className="absolute -right-12 -top-12 h-[220px] w-[220px] rounded-full bg-[#F2902F]/10 blur-[90px]" />

                  <div className="relative flex flex-col gap-3 z-2 ">
                     <div className="flex items-center gap-2  text-[#F2902F]">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black">
                           <svg
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                           >
                              <Icon />
                           </svg>
                        </span>

                        <span className="text-[12px] font-medium text-[#F2902F]">{card.tag}</span>
                     </div>

                     <h2 className="font-geist text-[36px] font-semibold leading-none tracking-[-1px] text-white">{card.title}</h2>
                  </div>

                  <div className="mt-3 max-w-[360px] text-[15px] leading-[1.45] text-white/70">
                     <p>{card.description}</p>

                     <a href={`#${card.title.toLowerCase()}`} className="mt-8 flex  gap-2  items-center font-medium text-white hover:text-[#F2902F] hover:translate-x-[9px] transition-transform ease-in-out 3s delay-75 z-3 relative">
                        Learn more
                        <MoveRight className="size-4 flex" />
                     </a>
                  </div>
                  {/* Gradient */}
                  <div className={`absolute ${card.gradientClass} `}>
                     <img
                        src={card.gradient}
                        alt=""
                        className="h-full w-full object-cover z-1 left-[40px] relative"
                     />
                  </div>
               </motion.div>
            );
         })}

      </motion.div>
   );
};

export default ModuleCards;