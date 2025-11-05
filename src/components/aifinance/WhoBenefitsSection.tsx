import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, TrendingUp, Zap } from "lucide-react";

export const WhoBenefitsSection = () => {
  const beneficiaries = [
    {
      icon: Users,
      title: "Founders and CEOs",
      description: "You get instant visibility into burn, runway, and where money is going.",
    },
    {
      icon: Briefcase,
      title: "CFOs and Finance Leaders",
      description: "You scale strategic finance without scaling headcount.",
    },
    {
      icon: TrendingUp,
      title: "Marketing and Growth Teams",
      description: "You see spend vs return clearly, across channels and timelines.",
    },
    {
      icon: Zap,
      title: "Operators in High Growth Environments",
      description: "You stop reacting and start steering.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F1F0FB] to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who Benefits Most From AI in Finance
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {beneficiaries.map((beneficiary, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <beneficiary.icon className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{beneficiary.title}</h3>
                  <p className="text-gray-700">{beneficiary.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-[#F2FCE2] p-8 rounded-xl max-w-4xl mx-auto"
        >
          <p className="text-lg mb-6 text-gray-900">
            If you are still running the company on spreadsheets, you are carrying risk you do not need to carry anymore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://workspace.google.com/u/0/marketplace/app/ryzup_sheets/1047771589087?flow_type=2&utm_source=website&utm_medium=click&utm_campaign=promotion&utm_content=cta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-orange/90 transition-colors"
            >
              Get Started Free
            </a>
            <a
              href="https://calendly.com/jd-growwthpartners/15min?month=2025-11"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-orange border-2 border-brand-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-orange/10 transition-colors"
            >
              Request a Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
