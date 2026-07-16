import React, { useState } from 'react';

// Mock data based on your UI
const categories = ['General', 'Integrations', 'Compliance', 'Pricing'];

const faqData = [
  {
    id: 1,
    category: 'General',
    question: 'How fast can we go live?',
    answer: 'Most importers, exporters, and manufacturers can be onboarded within 2–3 weeks. Our team assists with setup, document workflows, and configuration to ensure a smooth transition.',
    icon: (
      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 2,
    category: 'General',
    question: 'Who is TradeSift designed for?',
    answer: 'TradeSift is built for importers, exporters, customs brokers, freight forwarders, manufacturers, trade consultants, and enterprise compliance teams managing international trade.',
    icon: (
      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    category: 'General',
    question: 'Does TradeSift replace customs professionals?',
    answer: 'No. TradeSift assists your team with AI-powered analysis and recommendations while keeping humans in control of every compliance and declaration decision.',
    icon: (
      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7 12a5 5 0 1110 0 5 5 0 01-10 0z" />
      </svg>
    ),
  },

  {
    id: 4,
    category: 'Integrations',
    question: 'Can TradeSift integrate with ERP systems?',
    answer: 'Yes. TradeSift is designed to integrate with ERP, accounting, and supply chain systems to streamline document management and trade compliance workflows.',
    icon: (
      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
      </svg>
    ),
  },
  {
    id: 5,
    category: 'Integrations',
    question: 'Do you support Pakistan Single Window (PSW)?',
    answer: 'TradeSift is designed to assist users throughout the PSW filing process while helping validate trade documents and identify compliance risks before submission.',
    icon: (
      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    ),
  },
  {
    id: 6,
    category: 'Integrations',
    question: 'Can multiple team members collaborate?',
    answer: 'Yes. Teams can collaborate on documents, compliance reviews, and approval workflows with centralized access and role-based permissions.',
    icon: (
      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2M7 20H2v-2a3 3 0 015.356-1.857" />
      </svg>
    ),
  },

  {
    id: 7,
    category: 'Compliance',
    question: 'How does TradeSift improve compliance?',
    answer: 'TradeSift uses AI to analyze trade documents, detect inconsistencies, identify customs risks, and recommend actions before declarations are submitted.',
    icon: (
      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 8,
    category: 'Compliance',
    question: 'Does TradeSift guarantee regulatory compliance?',
    answer: 'No. TradeSift provides AI-powered recommendations and risk insights, but all final compliance and customs decisions remain with your organization.',
    icon: (
      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M5.07 19h13.86L12 4 5.07 19z" />
      </svg>
    ),
  },
  {
    id: 9,
    category: 'Compliance',
    question: 'What documents can TradeSift analyze?',
    answer: 'TradeSift supports common international trade documents such as commercial invoices, packing lists, certificates of origin, bills of lading, and other customs documentation.',
    icon: (
      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 2h8l5 5v15H7V2z" />
      </svg>
    ),
  },

  {
    id: 10,
    category: 'Pricing',
    question: 'Is there a free trial available?',
    answer: 'Yes. You can request a free demo or trial to explore how TradeSift fits your trade compliance workflows before selecting a plan.',
    icon: (
      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
      </svg>
    ),
  },
  {
    id: 11,
    category: 'Pricing',
    question: 'Do you offer enterprise pricing?',
    answer: 'Yes. Enterprise plans are tailored based on company size, document volume, integrations, and compliance requirements.',
    icon: (
      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-4 0-7 2-7 5s3 5 7 5 7-2 7-5-3-5-7-5z" />
      </svg>
    ),
  },
  {
    id: 12,
    category: 'Pricing',
    question: 'Can I upgrade my plan as my business grows?',
    answer: 'Absolutely. You can upgrade your subscription at any time to access additional users, higher document limits, advanced AI capabilities, and enterprise features.',
    icon: (
      <svg
    className="w-5 h-5 text-gray-700"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7 17L17 7M17 7H9M17 7V15"
    />
  </svg>
    ),
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('General');
  const [openFaqId, setOpenFaqId] = useState(1); // Default first one open like the screenshot

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  // Filter FAQs based on selected tab
  const filteredFaqs = faqData.filter(faq => faq.category === activeCategory);

  return (
    <section className="w-full mx-auto px-4 py-16 font-sans bg-white flex-col justify-center">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-black tracking-tight mb-4">
          Frequently asked questions
        </h2>
        <p className="text-gray-500 text-lg">
          These are the most commonly asked questions about TradeSift. Can't find
          what you're looking for?{' '}
          <a href="#" className="text-gray-900 underline font-medium hover:text-black">
            Chat to our friendly team!
          </a>
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
              activeCategory === category
                ? 'bg-black text-white border-black'
                : 'bg-white text-gray-800 border-gray-200 hover:border-gray-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Accordion / FAQ List */}
      <div className="space-y-4 max-w-5xl w-5xl justify-self-center">
        {filteredFaqs.map((faq) => {
          const isOpen = openFaqId === faq.id;
          return (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-2xl bg-white overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  {/* Icon Wrapper */}
                  <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center">
                    {faq.icon}
                  </div>
                  <span className="font-semibold text-gray-900 text-base">
                    {faq.question}
                  </span>
                </div>
                
                {/* Arrow Icon */}
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    isOpen ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Expandable Content Block */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-[76px] pr-6 pb-6 text-gray-500 text-sm leading-relaxed max-w-3xl">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}