import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does corporate tax filing in the UAE involve with Growwth Partners?",
    answer: "Corporate tax filing in the UAE with Growwth Partners covers taxable income calculation, application of eligible reliefs, preparation of company tax returns and FTA compliant lodgement with complete supporting schedules."
  },
  {
    question: "How does Growwth Partners handle late filings or FTA notices?",
    answer: "Growwth Partners conducts a rapid compliance review, regularises outstanding items, manages FTA correspondence and pursues penalty mitigation where appropriate."
  },
  {
    question: "Does Growwth Partners optimise tax for SMEs under the new regime?",
    answer: "Growwth Partners delivers SME focused optimisation by assessing relief eligibility, aligning expense timing, reviewing asset treatment and advising on structure for improved after-tax outcomes."
  },
  {
    question: "How does Growwth Partners coordinate VAT, ESR and year-end corporate tax?",
    answer: "Growwth Partners reconciles VAT records to the final position, supports Economic Substance notifications and reports, and aligns all documentation with the year-end company tax return."
  },
  {
    question: "What records does Growwth Partners require for FTA compliant lodgement?",
    answer: "Growwth Partners typically requests finalised financial statements, fixed asset registers, VAT filings, prior-year returns, contracts and relevant supporting documentation."
  },
  {
    question: "Does Growwth Partners support multi-entity and free zone structures?",
    answer: "Growwth Partners supports mainland and free zone entities, including multi-entity groups that require coordinated filings and consolidated reporting."
  },
  {
    question: "How can businesses start corporate tax filing with Growwth Partners?",
    answer: "Businesses can begin with a short consultation, after which Growwth Partners confirms scope, timelines and a fixed-fee plan before work begins."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold mb-4">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Corporate Tax Filing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-600">
              UAE
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our corporate tax filing services in the UAE.
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
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-left hover:no-underline group">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-brand-orange to-amber-500 flex items-center justify-center text-white font-semibold text-sm">
                      {index + 1}
                    </div>
                    <span className="font-semibold text-gray-900 group-hover:text-brand-orange transition-colors">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-0">
                  <div className="pl-12">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
