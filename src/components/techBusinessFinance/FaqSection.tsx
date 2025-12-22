import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is tech finance different from traditional finance?",
    answer: "Tech finance focuses on recurring revenue, burn rate, runway, and scalable cost structures rather than linear growth models. It requires understanding of SaaS metrics, cloud infrastructure costs, and technology-specific revenue recognition."
  },
  {
    question: "Can these services support SaaS and subscription models?",
    answer: "Yes. Subscription and recurring revenue models are a core focus of tech finance services. We handle complex revenue recognition, deferred revenue accounting, and subscription analytics."
  },
  {
    question: "Are these services suitable for early-stage tech startups?",
    answer: "Yes. Early financial discipline significantly improves scalability and fundraising outcomes. Starting with proper financial systems from day one prevents costly rework and builds investor confidence."
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
            Tech Business Finance Services
          </h2>
          <p className="text-lg text-slate-600">
            Common questions about our tech finance solutions
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
