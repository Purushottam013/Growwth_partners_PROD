import { motion } from "framer-motion";
import { Rocket, Globe, Users, Cpu, Zap, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Startup Expertise",
    description: "Extensive experience working with early- and growth-stage startups",
  },
  {
    icon: Globe,
    title: "Singapore Ecosystem",
    description: "Strong understanding of Singapore's startup ecosystem and regulations",
  },
  {
    icon: Users,
    title: "Integrated Support",
    description: "Integrated support across CFO services, finance teams, bookkeeping, and payroll",
  },
  {
    icon: Cpu,
    title: "AI-Enabled Insights",
    description: "AI-enabled dashboards for real-time insights",
  },
  {
    icon: Zap,
    title: "Execution-Focused",
    description: "Practical, execution-focused approach",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
              Why Choose Growwth Partners for Startup Finance?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-2xl p-6 border border-teal-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-8 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold text-white">Our Promise</h3>
            </div>
            <p className="text-teal-100 text-lg max-w-2xl mx-auto">
              We help startups move from financial uncertainty to financial confidence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
