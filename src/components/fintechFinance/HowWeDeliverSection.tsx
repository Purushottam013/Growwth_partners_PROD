import { motion } from "framer-motion";
import { Database, Receipt, Shield, Wallet, BarChart3, Users } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Transaction-Level Financial Reporting",
    items: [
      "High-volume transaction reconciliation",
      "Platform, settlement, and fee reporting",
      "Data integrity and accuracy controls"
    ]
  },
  {
    icon: Receipt,
    title: "Revenue Recognition & Fintech Accounting",
    items: [
      "Revenue models for payments, lending, and fees",
      "Timing and classification of revenue",
      "Deferred revenue and accrual management"
    ]
  },
  {
    icon: Shield,
    title: "Risk, Compliance & Audit Readiness",
    items: [
      "Internal control frameworks",
      "Documentation and audit trails",
      "Support during regulatory and partner reviews"
    ]
  },
  {
    icon: Wallet,
    title: "Cash Flow & Capital Planning",
    items: [
      "Cash flow forecasting across operations",
      "Capital adequacy and liquidity planning",
      "Scenario modelling for growth and stress cases"
    ]
  },
  {
    icon: BarChart3,
    title: "Financial Planning & Forecasting",
    items: [
      "Fintech-specific forecasting models",
      "Unit economics and margin analysis",
      "Pricing and cost structure evaluation"
    ]
  },
  {
    icon: Users,
    title: "CFO-Led Strategic & Regulatory Support",
    items: [
      "Investor and board reporting",
      "Support for licensing and regulatory discussions",
      "Financial governance for scaling operations"
    ]
  }
];

const HowWeDeliverSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How Growwth Partners Delivers Fintech Finance Value
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our Fintech Finance services are built to deliver control, transparency, and regulatory confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-slate-50 to-orange-50/30 rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-semibold text-orange-500 bg-orange-100 px-2 py-1 rounded-full">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliverSection;
