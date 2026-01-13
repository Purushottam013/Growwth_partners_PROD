import { motion } from "framer-motion";
import { Target, TrendingUp, DollarSign, BarChart3, Shield, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Financial Planning & Forecasting",
    description: "Strategic planning aligned with business goals"
  },
  {
    icon: DollarSign,
    title: "Cash Flow & Working Capital",
    description: "Optimize liquidity and manage working capital"
  },
  {
    icon: TrendingUp,
    title: "Profitability & Cost Control",
    description: "Identify margins and reduce cost leakages"
  },
  {
    icon: BarChart3,
    title: "Management Reporting & Analysis",
    description: "Actionable insights through clear dashboards"
  },
  {
    icon: Shield,
    title: "Financial Governance & Support",
    description: "Decision frameworks and risk management"
  }
];

const WhatIsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Understanding the Service</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            What Are SME Finance Services?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            SME Finance services provide end-to-end financial support tailored to the needs of small and medium-sized enterprises. These services focus on:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group shadow text-center"
            >
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors mx-auto">
                <feature.icon className="w-7 h-7 text-brand-orange" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-brand-orange" />
            </div>
          </div>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Unlike basic accounting services, SME Finance services are{" "}
            <span className="text-brand-orange font-semibold">forward-looking and performance-driven</span>, designed to support sustainable growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
