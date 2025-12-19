import { motion } from "framer-motion";
import { Check, Users, FileCheck, Shield, Eye, Settings } from "lucide-react";

const benefits = [
  { icon: Users, text: "Fintech-experienced CFO and finance team" },
  { icon: FileCheck, text: "Transaction-accurate financial reporting" },
  { icon: Shield, text: "Regulatory-ready controls and documentation" },
  { icon: Eye, text: "Clear visibility into risk, margins, and cash flow" },
  { icon: Settings, text: "Scalable finance infrastructure aligned to compliance" }
];

const whyChoose = [
  "Experience supporting fintech, payments, and financial services platforms",
  "Strong understanding of Singapore's fintech and regulatory ecosystem",
  "CFO-led governance and control frameworks",
  "AI-enabled reporting for transaction-heavy environments",
  "Integrated services across CFO, finance teams, bookkeeping, and payroll"
];

const WhatYouGetSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* What You Get */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What You Get with Our Fintech Finance Services
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-orange-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-slate-600 italic">
              All designed to support trusted, compliant fintech growth.
            </p>
          </motion.div>

          {/* Why Choose */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Choose Growwth Partners for Fintech Finance?
            </h2>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8">
              <ul className="space-y-4">
                {whyChoose.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="mt-6 text-orange-400 font-medium border-t border-slate-700 pt-6">
                We help fintech companies move from fast growth to trusted scale.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
