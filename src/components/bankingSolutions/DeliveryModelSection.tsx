import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Settings,
  PlayCircle,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";
import { Button } from "../ui/button";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Assess",
    description:
      "Map revenue model, payment flows, currencies, and compliance needs.",
    color: "from-blue-500 to-blue-600",
    lightColor: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "hover:border-blue-200",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    description:
      "Choose banking partners, payment rails, card policies, and reconciliation logic.",
    color: "from-purple-500 to-purple-600",
    lightColor: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "hover:border-purple-200",
  },
  {
    icon: Settings,
    step: "03",
    title: "Implement",
    description:
      "Prepare KYC documents, open accounts, configure gateways, connect feeds.",
    color: "from-amber-500 to-orange-500",
    lightColor: "bg-orange-50",
    iconColor: "text-orange-600",
    borderColor: "hover:border-orange-200",
  },
  {
    icon: PlayCircle,
    step: "04",
    title: "Run",
    description:
      "Train your team, automate reconciliation, monitor exceptions, and report cash.",
    color: "from-emerald-500 to-emerald-600",
    lightColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "hover:border-emerald-200",
  },
  {
    icon: TrendingUp,
    step: "05",
    title: "Improve",
    description:
      "Add entities, cards, and rules as you scale. Refresh limits and controls regularly.",
    color: "from-cyan-500 to-cyan-600",
    lightColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
    borderColor: "hover:border-cyan-200",
  },
];

const DeliveryModelSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-600 text-[11px] font-bold uppercase tracking-wider mb-5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
            </span>
            Our Process
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Delivery Model
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A structured, end-to-end approach to getting your banking
            infrastructure right from day one.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-7xl mx-auto mb-16">
          {/* Connector line (Desktop) */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 bg-gray-100 rounded-full z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-orange-100 to-emerald-100 opacity-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group h-full"
              >
                {/* Connector Dot (Desktop) */}
                <div className="hidden lg:block absolute top-[2.5rem] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-gray-200 z-10 group-hover:border-gray-400 transition-colors duration-300" />

                {/* Step card */}
                <div
                  className={`
                  ${step.lightColor} 
                  h-full rounded-2xl p-6 pt-12 relative z-10 
                  border border-transparent ${step.borderColor}
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow
                `}
                >
                  {/* Floating Icon */}
                  <div
                    className={`
                    absolute -top-8 left-1/2 -translate-x-1/2
                    w-16 h-16 rounded-2xl 
                    bg-gradient-to-br ${step.color} 
                    shadow-lg shadow-gray-200/50
                    flex items-center justify-center 
                    group-hover:scale-110 transition-transform duration-300
                  `}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Step number badge */}
                  <div className="absolute top-4 right-4 opacity-50 font-mono text-xs font-bold tracking-wider uppercase text-gray-500">
                    {step.step}
                  </div>

                  <div className="text-center mt-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-[13.5px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => setContactModalOpen(true)}
            className="bg-orange-500 text-white hover:bg-brand-orange px-8 py-6 text-lg rounded-xl shadow-xl shadow-gray-200 font-bold transition-all hover:scale-105"
          >
            Start Your Banking Setup
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </section>
  );
};

export default DeliveryModelSection;
