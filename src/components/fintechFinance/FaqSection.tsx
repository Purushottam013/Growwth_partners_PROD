import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is fintech finance different from SaaS finance?",
    answer: "Fintech finance includes transaction-level controls, regulatory alignment, and capital planning—beyond recurring revenue metrics. It requires deep alignment with financial regulations, audit standards, and institutional-grade controls that SaaS businesses typically don't need."
  },
  {
    question: "Can fintech finance services support regulatory compliance?",
    answer: "Yes. Financial controls, audit readiness, and reporting discipline are core components of our fintech finance services. We help build frameworks that satisfy regulator expectations and support licensing requirements."
  },
  {
    question: "Are these services suitable for early-stage fintech startups?",
    answer: "Yes. Early financial discipline significantly improves regulatory and funding outcomes. Starting with proper controls and reporting from day one prevents costly rework later and builds investor confidence."
  }
];

const FaqSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Fintech Finance Services
          </h2>
          <p className="text-lg text-slate-600">
            Common questions about our fintech finance solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-slate-200 px-6 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-slate-900 font-semibold hover:text-orange-600 py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
