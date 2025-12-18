import { Button } from "@/components/ui/button";
import { MessageSquare, FileText, Shield, Building, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

const deliverables = [
  {
    icon: MessageSquare,
    title: "Pre-Incorporation Advisory",
    items: [
      "Best-fit structure, shareholding, and governance",
      "Director and secretary options for foreign founders",
      "Name availability and SSIC scoping"
    ]
  },
  {
    icon: FileText,
    title: "Document Preparation & ACRA Filing",
    items: [
      "Constitution, resolutions, and KYC",
      "Name reservation and incorporation",
      "UEN issuance coordination"
    ]
  },
  {
    icon: Shield,
    title: "Company Secretary & Registers",
    items: [
      "Statutory registers and minute books",
      "First board meeting documentation",
      "Annual compliance calendar"
    ]
  },
  {
    icon: Building,
    title: "Banking & Post-Launch Essentials",
    items: [
      "Bank account documentation pack and intros",
      "Accounting system setup and chart of accounts",
      "Payroll, GST readiness, and basic policies"
    ]
  }
];

export const WhatWeDeliverSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-amber-50 text-gray-900 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white border border-orange-200 text-orange-600 rounded-full text-sm font-semibold mb-4 shadow-sm">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            What Growwth Partners{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
              Delivers
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive support from advisory to operational readiness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-orange-100 shadow hover:shadow-xl hover:border-orange-300 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-100 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>
              <ul className="space-y-4">
                {item.items.map((listItem) => (
                  <li key={listItem} className="flex items-start gap-3 group/item">
                    <div className="mt-1 w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover/item:bg-orange-100 transition-colors">
                      <CheckCircle className="w-3.5 h-3.5 text-orange-600" />
                    </div>
                    <span className="text-gray-600 font-medium leading-relaxed group-hover/item:text-gray-900 transition-colors">
                      {listItem}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-10 py-6 text-lg rounded-xl shadow-lg shadow-orange-200 transition-all hover:scale-105"
            onClick={() => setContactModalOpen(true)}
          >
            Start Your Incorporation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};
