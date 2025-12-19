import { motion } from "framer-motion";
import { FileText, BarChart3, Shield, Wallet, PieChart } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Transaction-Level Financial Reporting",
    description: "Precise reporting and controls for high-volume transactions"
  },
  {
    icon: BarChart3,
    title: "Revenue Recognition",
    description: "Proper recognition for fintech-specific revenue models"
  },
  {
    icon: Shield,
    title: "Risk, Compliance & Audit Readiness",
    description: "Institutional-grade controls meeting regulatory standards"
  },
  {
    icon: Wallet,
    title: "Cash Flow & Capital Planning",
    description: "Strategic capital adequacy and liquidity management"
  },
  {
    icon: PieChart,
    title: "Investor-Ready Reporting",
    description: "Financial packages for regulators and investors"
  }
];

const WhatIsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Definition
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What Are Fintech Finance Services?
          </h2>
          <p className="text-lg text-slate-600">
            Fintech Finance services deliver specialised financial management designed for technology-enabled financial services businesses. Unlike general tech finance, fintech finance requires deep alignment with regulatory frameworks, financial controls, and audit standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-gradient-to-br from-slate-50 to-orange-50/50 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
