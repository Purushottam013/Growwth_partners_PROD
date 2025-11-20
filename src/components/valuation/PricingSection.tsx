import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ui/contact-modal";
import { Check } from "lucide-react";

const addOns = [
  "DCF analysis and forecasting for DCF valuation Singapore",
  "Fundraising deck valuation review",
  "Cap table clean up",
  "Comparable market benchmarking",
  "M&A deal readiness assessment"
];

export const PricingSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Packages and Pricing
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Tailored valuation and consulting packages for different stages of business growth
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-brand-blue to-blue-600 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Custom Valuation Solutions
              </h3>
              <p className="text-white/90">
                Get a personalized quote based on your business needs
              </p>
            </div>
            
            <div className="p-8">
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-6 text-gray-900">Available Add-Ons:</h4>
                <div className="space-y-4">
                  {addOns.map((addOn, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-200 transition-colors">
                        <Check className="w-4 h-4 text-brand-blue" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{addOn}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-8">
                <p className="text-center text-gray-700 mb-4">
                  Each business is unique. Our pricing is customized based on:
                </p>
                <ul className="text-sm text-gray-600 space-y-2 max-w-2xl mx-auto">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                    Company size and complexity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                    Type of valuation required
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                    Timeline and urgency
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                    Additional services and add-ons
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Button
                  onClick={() => setContactModalOpen(true)}
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8"
                >
                  Optimise My Valuation Now
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen} 
      />
    </section>
  );
};
