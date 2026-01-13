import {
  Calculator, BookOpen, DollarSign, FileText, Users, Building,
  Briefcase, TrendingUp, Wallet, CreditCard, ShoppingCart,
  Rocket, Code, Bitcoin, BarChart3, Brain, Landmark, Shield,
  PieChart, UserCheck, Laptop, Cloud, LucideIcon
} from "lucide-react";

export interface ServiceTheme {
  primaryColor: string;
  gradient: string;
  accentColor: string;
  bgGradient: string;
  iconBg: string;
  borderColor: string;
  glowColor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  path: string;
  icon: LucideIcon;
  category: string;
  theme: ServiceTheme;
}

export const serviceCategories = [
  "All Services",
  "CFO Services",
  "Finance Teams",
  "Industry Finance",
  "Accounting & Bookkeeping",
  "Business Setup",
  "AI & Technology"
];

export const servicesData: ServiceItem[] = [
  // CFO Services
  {
    id: "part-time-cfo",
    title: "Part-Time CFO",
    description: "Strategic financial leadership on a flexible, part-time basis for growing businesses",
    path: "/part-time-cfo",
    icon: Briefcase,
    category: "CFO Services",
    theme: {
      primaryColor: "emerald",
      gradient: "from-emerald-500 to-teal-600",
      accentColor: "emerald-400",
      bgGradient: "from-slate-900 via-emerald-900/20 to-slate-900",
      iconBg: "bg-emerald-500/20",
      borderColor: "border-emerald-500/50",
      glowColor: "shadow-emerald-500/30"
    }
  },
  {
    id: "fractional-cfo",
    title: "Fractional CFO Services",
    description: "Dedicated CFO expertise at a fraction of the cost of a full-time hire",
    path: "/fractional-cfo-services",
    icon: PieChart,
    category: "CFO Services",
    theme: {
      primaryColor: "blue",
      gradient: "from-blue-500 to-indigo-600",
      accentColor: "blue-400",
      bgGradient: "from-slate-900 via-blue-900/20 to-slate-900",
      iconBg: "bg-blue-500/20",
      borderColor: "border-blue-500/50",
      glowColor: "shadow-blue-500/30"
    }
  },
  {
    id: "virtual-cfo",
    title: "Virtual CFO Services",
    description: "Remote CFO support with real-time insights and strategic guidance",
    path: "/virtual-cfo-services",
    icon: Cloud,
    category: "CFO Services",
    theme: {
      primaryColor: "cyan",
      gradient: "from-cyan-500 to-blue-600",
      accentColor: "cyan-400",
      bgGradient: "from-slate-900 via-cyan-900/20 to-slate-900",
      iconBg: "bg-cyan-500/20",
      borderColor: "border-cyan-500/50",
      glowColor: "shadow-cyan-500/30"
    }
  },
  {
    id: "interim-cfo",
    title: "Interim CFO Services",
    description: "Temporary CFO leadership during transitions or special projects",
    path: "/interim-cfo-services",
    icon: UserCheck,
    category: "CFO Services",
    theme: {
      primaryColor: "violet",
      gradient: "from-violet-500 to-purple-600",
      accentColor: "violet-400",
      bgGradient: "from-slate-900 via-violet-900/20 to-slate-900",
      iconBg: "bg-violet-500/20",
      borderColor: "border-violet-500/50",
      glowColor: "shadow-violet-500/30"
    }
  },
  {
    id: "on-demand-cfo",
    title: "On-Demand CFO Services",
    description: "Access CFO expertise exactly when you need it, on your terms",
    path: "/on-demand-cfo-services",
    icon: TrendingUp,
    category: "CFO Services",
    theme: {
      primaryColor: "amber",
      gradient: "from-amber-500 to-orange-600",
      accentColor: "amber-400",
      bgGradient: "from-slate-900 via-amber-900/20 to-slate-900",
      iconBg: "bg-amber-500/20",
      borderColor: "border-amber-500/50",
      glowColor: "shadow-amber-500/30"
    }
  },
  {
    id: "outsourced-cfo",
    title: "Outsourced CFO Services",
    description: "Complete CFO function outsourced to experienced professionals",
    path: "/outsourced-cfo-services",
    icon: Building,
    category: "CFO Services",
    theme: {
      primaryColor: "rose",
      gradient: "from-rose-500 to-pink-600",
      accentColor: "rose-400",
      bgGradient: "from-slate-900 via-rose-900/20 to-slate-900",
      iconBg: "bg-rose-500/20",
      borderColor: "border-rose-500/50",
      glowColor: "shadow-rose-500/30"
    }
  },
  {
    id: "startup-cfo",
    title: "Startup CFO Services",
    description: "CFO expertise tailored for early-stage and growth startups",
    path: "/startup-cfo-services",
    icon: Rocket,
    category: "CFO Services",
    theme: {
      primaryColor: "fuchsia",
      gradient: "from-fuchsia-500 to-pink-600",
      accentColor: "fuchsia-400",
      bgGradient: "from-slate-900 via-fuchsia-900/20 to-slate-900",
      iconBg: "bg-fuchsia-500/20",
      borderColor: "border-fuchsia-500/50",
      glowColor: "shadow-fuchsia-500/30"
    }
  },
  {
    id: "sme-cfo",
    title: "SME CFO Services",
    description: "Financial leadership designed for small and medium enterprises",
    path: "/sme-cfo-services",
    icon: BarChart3,
    category: "CFO Services",
    theme: {
      primaryColor: "teal",
      gradient: "from-teal-500 to-cyan-600",
      accentColor: "teal-400",
      bgGradient: "from-slate-900 via-teal-900/20 to-slate-900",
      iconBg: "bg-teal-500/20",
      borderColor: "border-teal-500/50",
      glowColor: "shadow-teal-500/30"
    }
  },
  {
    id: "part-time-cfo-services",
    title: "Part-Time CFO Services",
    description: "Flexible CFO engagement for businesses needing periodic strategic support",
    path: "/part-time-cfo-services",
    icon: Briefcase,
    category: "CFO Services",
    theme: {
      primaryColor: "lime",
      gradient: "from-lime-500 to-green-600",
      accentColor: "lime-400",
      bgGradient: "from-slate-900 via-lime-900/20 to-slate-900",
      iconBg: "bg-lime-500/20",
      borderColor: "border-lime-500/50",
      glowColor: "shadow-lime-500/30"
    }
  },

  // Finance Teams
  {
    id: "remote-cfo-finance-team",
    title: "Remote CFO & Finance Team",
    description: "Complete remote finance team with CFO leadership",
    path: "/remote-cfo-finance-team",
    icon: Laptop,
    category: "Finance Teams",
    theme: {
      primaryColor: "sky",
      gradient: "from-sky-500 to-blue-600",
      accentColor: "sky-400",
      bgGradient: "from-slate-900 via-sky-900/20 to-slate-900",
      iconBg: "bg-sky-500/20",
      borderColor: "border-sky-500/50",
      glowColor: "shadow-sky-500/30"
    }
  },
  {
    id: "fractional-finance-team",
    title: "Fractional Finance Team",
    description: "Access an entire finance department at a fraction of the cost",
    path: "/fractional-finance-team",
    icon: Users,
    category: "Finance Teams",
    theme: {
      primaryColor: "indigo",
      gradient: "from-indigo-500 to-purple-600",
      accentColor: "indigo-400",
      bgGradient: "from-slate-900 via-indigo-900/20 to-slate-900",
      iconBg: "bg-indigo-500/20",
      borderColor: "border-indigo-500/50",
      glowColor: "shadow-indigo-500/30"
    }
  },
  {
    id: "part-time-finance-team",
    title: "Part-Time Finance Team",
    description: "Flexible finance team support tailored to your schedule",
    path: "/part-time-finance-team",
    icon: Users,
    category: "Finance Teams",
    theme: {
      primaryColor: "purple",
      gradient: "from-purple-500 to-violet-600",
      accentColor: "purple-400",
      bgGradient: "from-slate-900 via-purple-900/20 to-slate-900",
      iconBg: "bg-purple-500/20",
      borderColor: "border-purple-500/50",
      glowColor: "shadow-purple-500/30"
    }
  },
  {
    id: "virtual-finance-team",
    title: "Virtual Finance Team",
    description: "Cloud-based finance team accessible from anywhere",
    path: "/virtual-finance-team",
    icon: Cloud,
    category: "Finance Teams",
    theme: {
      primaryColor: "blue",
      gradient: "from-blue-500 to-cyan-600",
      accentColor: "blue-400",
      bgGradient: "from-slate-900 via-blue-900/20 to-slate-900",
      iconBg: "bg-blue-500/20",
      borderColor: "border-blue-500/50",
      glowColor: "shadow-blue-500/30"
    }
  },
  {
    id: "startup-finance-services",
    title: "Startup Finance Services",
    description: "Financial foundations for speed, scale & fundraising",
    path: "/startup-finance-services",
    icon: Rocket,
    category: "Finance Teams",
    theme: {
      primaryColor: "teal",
      gradient: "from-teal-500 to-emerald-600",
      accentColor: "teal-400",
      bgGradient: "from-slate-900 via-teal-900/20 to-slate-900",
      iconBg: "bg-teal-500/20",
      borderColor: "border-teal-500/50",
      glowColor: "shadow-teal-500/30"
    }
  },

  // Industry Finance
  {
    id: "crypto-web3-finance",
    title: "Crypto & Web3 Finance",
    description: "Institutional-grade financial control for blockchain companies",
    path: "/crypto-web3-finance",
    icon: Bitcoin,
    category: "Industry Finance",
    theme: {
      primaryColor: "orange",
      gradient: "from-orange-500 to-amber-600",
      accentColor: "orange-400",
      bgGradient: "from-slate-900 via-orange-900/30 to-slate-900",
      iconBg: "bg-orange-500/20",
      borderColor: "border-orange-500/50",
      glowColor: "shadow-orange-500/30"
    }
  },
  {
    id: "ecommerce-finance",
    title: "Ecommerce Finance Services",
    description: "Financial management tailored for online retail businesses",
    path: "/ecommerce-finance-services",
    icon: ShoppingCart,
    category: "Industry Finance",
    theme: {
      primaryColor: "green",
      gradient: "from-green-500 to-emerald-600",
      accentColor: "green-400",
      bgGradient: "from-slate-900 via-green-900/20 to-slate-900",
      iconBg: "bg-green-500/20",
      borderColor: "border-green-500/50",
      glowColor: "shadow-green-500/30"
    }
  },
  {
    id: "fintech-finance",
    title: "Fintech Finance Services",
    description: "Specialized finance for financial technology companies",
    path: "/fintech-finance",
    icon: Wallet,
    category: "Industry Finance",
    theme: {
      primaryColor: "violet",
      gradient: "from-violet-500 to-purple-600",
      accentColor: "violet-400",
      bgGradient: "from-slate-900 via-violet-900/20 to-slate-900",
      iconBg: "bg-violet-500/20",
      borderColor: "border-violet-500/50",
      glowColor: "shadow-violet-500/30"
    }
  },
  {
    id: "saas-finance",
    title: "SaaS Finance Services",
    description: "Financial operations for software-as-a-service businesses",
    path: "/saas-finance",
    icon: Cloud,
    category: "Industry Finance",
    theme: {
      primaryColor: "blue",
      gradient: "from-blue-500 to-indigo-600",
      accentColor: "blue-400",
      bgGradient: "from-slate-900 via-blue-900/20 to-slate-900",
      iconBg: "bg-blue-500/20",
      borderColor: "border-blue-500/50",
      glowColor: "shadow-blue-500/30"
    }
  },
  {
    id: "tech-business-finance",
    title: "Tech Business Finance",
    description: "Financial solutions for technology-driven companies",
    path: "/tech-business-finance",
    icon: Code,
    category: "Industry Finance",
    theme: {
      primaryColor: "cyan",
      gradient: "from-cyan-500 to-teal-600",
      accentColor: "cyan-400",
      bgGradient: "from-slate-900 via-cyan-900/20 to-slate-900",
      iconBg: "bg-cyan-500/20",
      borderColor: "border-cyan-500/50",
      glowColor: "shadow-cyan-500/30"
    }
  },
  {
    id: "tech-startup-accounting",
    title: "Tech Startup Accounting",
    description: "Accounting services designed for technology startups",
    path: "/accounting-for-tech-start-ups-companies",
    icon: Laptop,
    category: "Industry Finance",
    theme: {
      primaryColor: "pink",
      gradient: "from-pink-500 to-rose-600",
      accentColor: "pink-400",
      bgGradient: "from-slate-900 via-pink-900/20 to-slate-900",
      iconBg: "bg-pink-500/20",
      borderColor: "border-pink-500/50",
      glowColor: "shadow-pink-500/30"
    }
  },
  {
    id: "ecommerce-accounting",
    title: "Ecommerce Accounting",
    description: "Specialized accounting for online retail and marketplaces",
    path: "/ecommerce-accounting-services",
    icon: ShoppingCart,
    category: "Industry Finance",
    theme: {
      primaryColor: "amber",
      gradient: "from-amber-500 to-yellow-600",
      accentColor: "amber-400",
      bgGradient: "from-slate-900 via-amber-900/20 to-slate-900",
      iconBg: "bg-amber-500/20",
      borderColor: "border-amber-500/50",
      glowColor: "shadow-amber-500/30"
    }
  },

  // Accounting & Bookkeeping
  {
    id: "accounting",
    title: "Accounting Services",
    description: "Comprehensive accounting solutions for businesses of all sizes",
    path: "/accounting-services-in-singapore",
    icon: Calculator,
    category: "Accounting & Bookkeeping",
    theme: {
      primaryColor: "slate",
      gradient: "from-slate-500 to-gray-600",
      accentColor: "slate-400",
      bgGradient: "from-slate-900 via-slate-800/50 to-slate-900",
      iconBg: "bg-slate-500/20",
      borderColor: "border-slate-500/50",
      glowColor: "shadow-slate-500/30"
    }
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping Services",
    description: "Accurate and timely bookkeeping to keep your finances in order",
    path: "/bookkeeping-services-in-singapore",
    icon: BookOpen,
    category: "Accounting & Bookkeeping",
    theme: {
      primaryColor: "emerald",
      gradient: "from-emerald-500 to-green-600",
      accentColor: "emerald-400",
      bgGradient: "from-slate-900 via-emerald-900/20 to-slate-900",
      iconBg: "bg-emerald-500/20",
      borderColor: "border-emerald-500/50",
      glowColor: "shadow-emerald-500/30"
    }
  },
  {
    id: "outsourced-bookkeeping",
    title: "Outsourced Bookkeeping",
    description: "Professional bookkeeping managed by experienced specialists",
    path: "/outsourced-bookkeeping",
    icon: BookOpen,
    category: "Accounting & Bookkeeping",
    theme: {
      primaryColor: "teal",
      gradient: "from-teal-500 to-cyan-600",
      accentColor: "teal-400",
      bgGradient: "from-slate-900 via-teal-900/20 to-slate-900",
      iconBg: "bg-teal-500/20",
      borderColor: "border-teal-500/50",
      glowColor: "shadow-teal-500/30"
    }
  },
  {
    id: "payroll",
    title: "Payroll Services",
    description: "Complete payroll management and compliance solutions",
    path: "/payroll-services-in-singapore",
    icon: DollarSign,
    category: "Accounting & Bookkeeping",
    theme: {
      primaryColor: "green",
      gradient: "from-green-500 to-emerald-600",
      accentColor: "green-400",
      bgGradient: "from-slate-900 via-green-900/20 to-slate-900",
      iconBg: "bg-green-500/20",
      borderColor: "border-green-500/50",
      glowColor: "shadow-green-500/30"
    }
  },
  {
    id: "outsourced-payroll",
    title: "Outsourced Payroll",
    description: "End-to-end payroll outsourcing with compliance assurance",
    path: "/outsourced-payroll",
    icon: DollarSign,
    category: "Accounting & Bookkeeping",
    theme: {
      primaryColor: "orange",
      gradient: "from-orange-500 to-red-600",
      accentColor: "orange-400",
      bgGradient: "from-slate-900 via-orange-900/20 to-slate-900",
      iconBg: "bg-orange-500/20",
      borderColor: "border-orange-500/50",
      glowColor: "shadow-orange-500/30"
    }
  },
  {
    id: "taxation",
    title: "Taxation & Compliance",
    description: "Tax planning, filing, and regulatory compliance services",
    path: "/taxation",
    icon: FileText,
    category: "Accounting & Bookkeeping",
    theme: {
      primaryColor: "red",
      gradient: "from-red-500 to-rose-600",
      accentColor: "red-400",
      bgGradient: "from-slate-900 via-red-900/20 to-slate-900",
      iconBg: "bg-red-500/20",
      borderColor: "border-red-500/50",
      glowColor: "shadow-red-500/30"
    }
  },
  {
    id: "cash-flow",
    title: "Cash Flow Modelling",
    description: "Strategic cash flow analysis and forecasting",
    path: "/cash-flow-services-in-singapore",
    icon: TrendingUp,
    category: "Accounting & Bookkeeping",
    theme: {
      primaryColor: "blue",
      gradient: "from-blue-500 to-indigo-600",
      accentColor: "blue-400",
      bgGradient: "from-slate-900 via-blue-900/20 to-slate-900",
      iconBg: "bg-blue-500/20",
      borderColor: "border-blue-500/50",
      glowColor: "shadow-blue-500/30"
    }
  },

  // Business Setup
  {
    id: "incorporation",
    title: "Incorporation Services",
    description: "Company registration and business setup in Singapore",
    path: "/incorporation",
    icon: Building,
    category: "Business Setup",
    theme: {
      primaryColor: "indigo",
      gradient: "from-indigo-500 to-blue-600",
      accentColor: "indigo-400",
      bgGradient: "from-slate-900 via-indigo-900/20 to-slate-900",
      iconBg: "bg-indigo-500/20",
      borderColor: "border-indigo-500/50",
      glowColor: "shadow-indigo-500/30"
    }
  },
  {
    id: "incorporation-foreigner",
    title: "Incorporation for Foreigners",
    description: "Business setup assistance for international entrepreneurs",
    path: "/incorporation/foreigner",
    icon: Building,
    category: "Business Setup",
    theme: {
      primaryColor: "purple",
      gradient: "from-purple-500 to-violet-600",
      accentColor: "purple-400",
      bgGradient: "from-slate-900 via-purple-900/20 to-slate-900",
      iconBg: "bg-purple-500/20",
      borderColor: "border-purple-500/50",
      glowColor: "shadow-purple-500/30"
    }
  },
  {
    id: "esop-advisory",
    title: "ESOP Advisory Services",
    description: "Employee stock option plan design and implementation",
    path: "/esop-advisory-singapore",
    icon: Users,
    category: "Business Setup",
    theme: {
      primaryColor: "fuchsia",
      gradient: "from-fuchsia-500 to-pink-600",
      accentColor: "fuchsia-400",
      bgGradient: "from-slate-900 via-fuchsia-900/20 to-slate-900",
      iconBg: "bg-fuchsia-500/20",
      borderColor: "border-fuchsia-500/50",
      glowColor: "shadow-fuchsia-500/30"
    }
  },
  {
    id: "esop-valuation",
    title: "ESOP Valuation Services",
    description: "Professional valuation for employee stock options",
    path: "/esop-valuation-singapore",
    icon: BarChart3,
    category: "Business Setup",
    theme: {
      primaryColor: "rose",
      gradient: "from-rose-500 to-red-600",
      accentColor: "rose-400",
      bgGradient: "from-slate-900 via-rose-900/20 to-slate-900",
      iconBg: "bg-rose-500/20",
      borderColor: "border-rose-500/50",
      glowColor: "shadow-rose-500/30"
    }
  },
  {
    id: "banking-solutions",
    title: "Banking Solutions",
    description: "Simplified business banking and financial solutions",
    path: "/simplified-banking-solutions",
    icon: Landmark,
    category: "Business Setup",
    theme: {
      primaryColor: "sky",
      gradient: "from-sky-500 to-blue-600",
      accentColor: "sky-400",
      bgGradient: "from-slate-900 via-sky-900/20 to-slate-900",
      iconBg: "bg-sky-500/20",
      borderColor: "border-sky-500/50",
      glowColor: "shadow-sky-500/30"
    }
  },
  {
    id: "valuation",
    title: "Business Valuation",
    description: "Professional company valuation services",
    path: "/valuation-services-singapore",
    icon: CreditCard,
    category: "Business Setup",
    theme: {
      primaryColor: "amber",
      gradient: "from-amber-500 to-orange-600",
      accentColor: "amber-400",
      bgGradient: "from-slate-900 via-amber-900/20 to-slate-900",
      iconBg: "bg-amber-500/20",
      borderColor: "border-amber-500/50",
      glowColor: "shadow-amber-500/30"
    }
  },

  // AI & Technology
  {
    id: "ai-cfo-services",
    title: "AI CFO Services",
    description: "AI-powered CFO insights and automated financial intelligence",
    path: "/ai-cfo-services",
    icon: Brain,
    category: "AI & Technology",
    theme: {
      primaryColor: "violet",
      gradient: "from-violet-500 to-purple-600",
      accentColor: "violet-400",
      bgGradient: "from-slate-900 via-violet-900/30 to-slate-900",
      iconBg: "bg-violet-500/20",
      borderColor: "border-violet-500/50",
      glowColor: "shadow-violet-500/30"
    }
  },
  {
    id: "ai-finance-workflow",
    title: "AI Finance Workflow",
    description: "Automated finance workflows powered by artificial intelligence",
    path: "/ai-finance-workflow-singapore",
    icon: Brain,
    category: "AI & Technology",
    theme: {
      primaryColor: "cyan",
      gradient: "from-cyan-500 to-blue-600",
      accentColor: "cyan-400",
      bgGradient: "from-slate-900 via-cyan-900/20 to-slate-900",
      iconBg: "bg-cyan-500/20",
      borderColor: "border-cyan-500/50",
      glowColor: "shadow-cyan-500/30"
    }
  },
  {
    id: "ai-risk-compliance",
    title: "AI Risk & Compliance",
    description: "AI-driven risk assessment and compliance monitoring",
    path: "/ai-risk-compliance-singapore",
    icon: Shield,
    category: "AI & Technology",
    theme: {
      primaryColor: "red",
      gradient: "from-red-500 to-orange-600",
      accentColor: "red-400",
      bgGradient: "from-slate-900 via-red-900/20 to-slate-900",
      iconBg: "bg-red-500/20",
      borderColor: "border-red-500/50",
      glowColor: "shadow-red-500/30"
    }
  },
];

export const defaultTheme: ServiceTheme = {
  primaryColor: "slate",
  gradient: "from-slate-600 to-gray-700",
  accentColor: "slate-400",
  bgGradient: "from-slate-900 via-slate-800 to-slate-900",
  iconBg: "bg-slate-500/20",
  borderColor: "border-slate-500/30",
  glowColor: "shadow-slate-500/20"
};
