import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const MethodologySection = () => {
  const methods = [
    "Discounted cash flow analysis (DCF valuation Singapore)",
    "Market and comparable benchmarking",
    "Risk and discount rate analysis",
    "Future revenue and cash flow projections",
    "ESOP pool and cap table impact review",
    "Scenario modelling for investor rounds"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF5F0] to-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-foreground">
            Our Valuation <span className="text-brand-blue">Methodology</span>
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            We combine multiple recognised valuation approaches to ensure accuracy and credibility:
          </p>

          <Card className="border-none shadow-xl bg-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {methods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-brand-green flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium">{method}</p>
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg font-semibold text-foreground mt-8 text-center"
              >
                This multi-method approach ensures founders, boards, and employees trust the FMV assigned.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
