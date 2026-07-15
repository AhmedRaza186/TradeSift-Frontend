import {
   TradeShieldIcon,
   TaxReconcileIcon,
   FreightSyncIcon,
   TenderWinIcon,
   FileSecurityIcon,
   InvestmentIcon
} from "./icons";
import TradeGradient from "../../../../../assets/TradeGradient.svg";
import TaxGradient from "../../../../../assets/TaxGradient.svg";
import FreightGradient from "../../../../../assets/FreightGradient.svg";
import TenderGradient from "../../../../../assets/TradeGradient.svg";


export const TABS = [
   {
      key: "TradeShield",
      icon: TradeShieldIcon,
   },
   {
      key: "TaxReconcile",
      icon: TaxReconcileIcon,
   },
   {
      key: "FreightSync",
      icon: FreightSyncIcon,
   },
   {
      key: "TenderWin",
      icon: TenderWinIcon,
   },
];

export const MODULE_CARDS = [
  {
    key: 'TradeShield',
    tag: 'AI Customs',
    title: 'TradeShield',
    description: 'AI customs verification that cross-checks invoices, HS codes and SROs before you file',
    span: 'lg:col-span-1',
    icon: FileSecurityIcon,
            gradient: TradeGradient,
      gradientClass: "right-[30px] top-0 w-[80%] h-full",
  },
  {
    key: 'TaxReconcile',
    tag: 'Tax Engine',
    title: 'TaxReconcile',
    description: 'Recover tax credits automatically. Reconciled against FBR, SRB and bank feeds.',
    span: 'lg:col-span-2',
    icon: InvestmentIcon,
    gradient: TaxGradient,

        gradientClass: "right-0 top-0 w-[55%] h-full",

  },
  {
    key: 'FreightSync',
    tag: 'Logistics',
    title: 'FreightSync',
    description: 'Real-time logistics orchestration across carriers, ports and last-mile fleets.',
    span: 'lg:col-span-2',
    icon: InvestmentIcon,
      gradient: FreightGradient,
    gradientClass: "right-0 top-0 w-[55%] h-full",
  },
  {
    key: 'TenderWin',
    tag: 'Bidding AI',
    title: 'TenderWin',
    description: 'Government bidding intelligence — tender discovery, scoring and proposal drafting.',
    span: 'lg:col-span-1',
    icon: FileSecurityIcon,
        gradient: TenderGradient,
    gradientClass: "right-0 top-0 w-[60%] h-full",
  },
]