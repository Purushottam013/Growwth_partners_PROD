import { motion } from "framer-motion";
import { CreditCard, Landmark, TrendingUp, Building2, Rocket, HelpCircle } from "lucide-react";

const idealFor = [
  { icon: CreditCard, title: "Payment gateways and processors" },
  { icon: Landmark, title: "Lending, BNPL, and credit platforms" },
  { icon: TrendingUp, title: "Wealthtech and insurtech companies" },
  { icon: Building2, title: "Digital banks and financial infrastructure providers" },
  { icon: Rocket, title: "Fintech startups expanding into Singapore" }
];

const questions = [
  "Are our financial controls regulator-ready?",
  "Is revenue recognised correctly across transactions?",
  "Can we scale without increasing compliance risk?"
];

const WhoShouldUseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
            Ideal For
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Who Should Use Fintech Finance Services?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Ideal for list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Fintech Finance services are ideal for:</h3>
            <div className="space-y-4">
              {idealFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-orange-500/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-200">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Questions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/10 rounded-2xl p-8 border border-orange-500/20">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-400" />
                If your business struggles to answer:
              </h3>
              <div className="space-y-4 mb-6">
                {questions.map((question, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-400 text-sm font-medium">{index + 1}</span>
                    </div>
                    <p className="text-slate-300">{question}</p>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-orange-500/20">
                <p className="text-orange-300 font-medium">
                  You need specialised fintech finance leadership.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
