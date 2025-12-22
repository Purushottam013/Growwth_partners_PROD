import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Wallet, FileText, Users } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Financial Planning",
    description: "Strategic planning for high-growth tech companies"
  },
  {
    icon: Wallet,
    title: "Cash Flow & Runway",
    description: "Comprehensive runway and liquidity management"
  },
  {
    icon: TrendingUp,
    title: "R&D Cost Visibility",
    description: "Infrastructure and development cost tracking"
  },
  {
    icon: FileText,
    title: "Revenue Recognition",
    description: "Tech-driven revenue model accounting"
  },
  {
    icon: Users,
    title: "Investor Reporting",
    description: "Board-level reporting and insights"
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
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Definition
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What Are Tech Business Finance Services?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Tech Business Finance services provide specialised financial leadership and execution designed for technology-driven business models. Unlike generic finance services, these are built for fast iteration, recurring revenue, and scalability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-orange-50 rounded-2xl p-6 border border-orange-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
