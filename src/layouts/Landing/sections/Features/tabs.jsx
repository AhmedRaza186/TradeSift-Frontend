import { TABS } from "./constants";

const Tabs = ({ activeTab, setActiveTab }) => {
   return (
      <div className="flex h-auto w-full flex-wrap items-center justify-center gap-1 rounded-[37px] border border-white/10 bg-white/[0.03] p-1 sm:h-[50px] sm:flex-nowrap">
         {TABS.map((tab) => {
            const active = activeTab === tab.key;
            const Icon = tab.icon;

            return (
               <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-[37px] px-5 py-2.5 text-sm font-medium transition ${
                     active
                        ? "bg-white text-[#000205]"
                        : "text-white/60 hover:text-white"
                  }`}
               >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                     <Icon active={active} />
                  </svg>

                  {tab.key}
               </button>
            );
         })}
      </div>
   );
};

export default Tabs;