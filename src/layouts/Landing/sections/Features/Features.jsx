import { useState } from "react";
import { motion, useReducedMotion } from 'framer-motion'
import DashboardPreview from "../../../../components/dashboard/DashboardPreview";
import Tabs from "./tabs"
import ModuleCards from "./ModuleCards";
import { fadeLeft, fadeRight } from '../../../../animations/variants'

const Features = () => {
  const shouldReduceMotion = useReducedMotion()
  const [activeTab, setActiveTab] = useState("TaxReconcile");

  return (
    <>
      {/* Features Section */}
      <section
        id="features-dark"
        data-nav-theme="dark"
        data-nav-variant="glass"
        className="bg-[#040509] px-6 py-24 lg:px-20"
      >
        <div className="mx-auto flex max-w-[820px] flex-col items-center gap-5 text-center">
          <span className="font-mono text-xs uppercase tracking-[2.4px] text-white">
            The Problem
          </span>

          <h2 className="font-geist text-[32px] font-bold leading-[1.1] tracking-[-1.4px] text-white sm:text-[44px] lg:text-[56px]">
            Trade is still managed through spreadsheets, manual filing and
            fragmented government systems.
          </h2>

          <p className="text-base leading-[1.6] text-white/55 sm:text-lg">
            TradeSift unifies customs, finance and logistics into one
            intelligent operating system.
          </p>
        </div>

        <motion.div
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
          className="mx-auto mt-24 flex max-w-[751px] flex-col items-center gap-8 text-center"
        >
          <h3 className="font-geist text-[40px] font-bold leading-[0.9] tracking-[-1.4px] text-white sm:text-[54px] lg:text-[68px]">
            Everything in one place
          </h3>

          <p className="max-w-[672px] text-base leading-[1.55] text-white/60 sm:text-lg">
            Four AI engines. One command center. Track shipments, reconcile
            taxes, win tenders and stay compliant — without switching tabs.
          </p>

          <Tabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeRight}
          className="relative z-2 mx-auto mt-16 max-w-6xl"
        >
          <div className="absolute left-1/2 -translate-x-1/2 sm:bottom-[80%] lg:bottom-[70%] w-[130%] lg:w-[140%] h-[12%] bg-[linear-gradient(180deg,#060402_0%,#060402_8.68%,#060402_6.44%,#b45309_67.03%,rgba(251,191,36,1)_99.9%)]
z-0 pointer-events-none"></div>
          <DashboardPreview theme="light" />
        </motion.div>
      </section>

      {/* Module Cards */}
      <section
        id="features-light"
        data-nav-theme="light"
        data-nav-variant="glass"
        className="-mt-[600px] bg-white px-6 pt-[850px] pb-24 lg:px-20 "
      >
        <div className="mx-auto flex max-w-[820px] flex-col items-center gap-5 text-center">
          <h3 className="font-geist text-[40px] font-bold leading-[0.9] tracking-[-1.4px] text-black sm:text-[54px] lg:text-[68px]">
            Unified Trade Operations
          </h3>

          <p className="max-w-[672px] text-base leading-[1.55] text-[#03030A]/80 sm:text-lg">
            From customs verification to tax recovery and logistics
            orchestration, TradeSift centralizes trade workflows into a single
            AI-powered workspace.
          </p>
        </div>

        <ModuleCards />
      </section>
    </>
  );
};

export default Features;