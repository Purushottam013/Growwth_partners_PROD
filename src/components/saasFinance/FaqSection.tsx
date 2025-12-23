import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is SaaS finance different from tech finance?",
    answer: "SaaS finance focuses specifically on recurring revenue, churn, deferred revenue, and valuation-driven metrics. While tech finance covers a broader range of technology businesses, SaaS finance is tailored to subscription-based business models with emphasis on ARR/MRR, customer lifetime value, and unit economics."
  },
  {
    question: "Can SaaS finance services help improve valuation?",
    answer: "Yes. Clear SaaS metrics and disciplined financial reporting directly influence valuation and investor confidence. By accurately tracking and presenting key metrics like ARR growth, churn rates, LTV/CAC ratios, and burn rate, you demonstrate financial maturity that investors value highly during fundraising."
  },
  {
    question: "Are these services suitable for early-stage SaaS startups?",
    answer: "Yes. Early SaaS finance discipline significantly improves scalability and funding outcomes. Setting up proper financial systems, metrics tracking, and reporting frameworks from the start prevents costly rework later and builds the foundation for investor confidence as you scale."
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
            SaaS Finance Services
          </h2>
          <p className="text-lg text-slate-600">
            Common questions about our SaaS finance solutions
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
