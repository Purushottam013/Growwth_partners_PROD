import { motion } from "framer-motion";
import { Building2, AlertTriangle, Lightbulb, CheckCircle2 } from "lucide-react";

const UseCaseSection = () => {
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
            Case Study
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Practical Use Case
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900/30 rounded-3xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Payments Fintech</h3>
                  <p className="text-orange-100">Singapore</p>
                </div>
              </div>
            </div>

            <div className="p-8 grid md:grid-cols-3 gap-8">
              {/* Challenges */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <h4 className="text-lg font-semibold text-white">Challenges</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    "High transaction volumes",
                    "Reconciliation and reporting delays",
                    "Regulatory readiness concerns"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-amber-400" />
                  <h4 className="text-lg font-semibold text-white">Our Solution</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    "Implemented transaction-level reporting systems",
                    "Built revenue recognition and control frameworks",
                    "Delivered regulator- and investor-ready reporting"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <h4 className="text-lg font-semibold text-white">Outcome</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    "Faster, accurate reporting",
                    "Improved regulatory confidence",
                    "Reduced operational and compliance risk",
                    "Stronger foundation for partnerships and scaling"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseSection;
