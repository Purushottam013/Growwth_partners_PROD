import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone, Shield } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

export const CTASection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-teal-900 via-emerald-900 to-cyan-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-cyan-500/20 text-green-200 text-sm mb-6">
            <Shield className="w-4 h-4" />
            AI Risk & Compliance
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-relaxed -tracking-normal">
            Make Compliance Stronger and{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Risk Lower
            </span>
          </h2>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Adopt AI compliance in Australia and continuous AI risk detection with tools your finance team will actually use. Monitor, prevent, and prove control without adding manual workload.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-teal-700 hover:bg-teal-50 px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 font-semibold"
              onClick={() =>
                window.open(
                  "https://calendly.com/jd-growwthpartners/15min?month=2025-11",
                  "_blank"
                )}
            >
              <Phone className="w-4 h-4" />
              Book a Risk & Compliance Demo
            </Button>
              <Button
                size="lg"
                onClick={() => setContactModalOpen(true)}
                variant="outline"
                className="border-2 border-white/30 text-white bg-transparent px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 gap-4"

              >
                Talk to a Ryzup.ai Specialist
                <Calendar className="w-4 h-4" />
              </Button>
          </div>
        </motion.div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};
