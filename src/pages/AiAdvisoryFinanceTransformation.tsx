import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import { HeroSection } from "@/components/aiAdvisory/HeroSection";
import { ChallengesSection } from "@/components/aiAdvisory/ChallengesSection";
import { FrameworkSection } from "@/components/aiAdvisory/FrameworkSection";
import { WhyChooseSection } from "@/components/aiAdvisory/WhyChooseSection";
import { FaqSection } from "@/components/accounting/FaqSection";

const AiAdvisoryFinanceTransformation = () => {
  const faqs = [
    {
      question: "What is Ryzup.ai's AI Advisory for Finance Transformation?",
      answer: "It is a structured programme where Ryzup.ai helps CFOs and finance leaders in Singapore design and implement an AI roadmap for finance. It combines the AI CFO product, spreadsheet agents, and anonymisation with strategic guidance on where to start, what to automate, and how to roll it out.",
    },
    {
      question: "How does Ryzup.ai support AI transformation in finance for Singapore teams specifically?",
      answer: "Ryzup.ai is built and led out of Singapore, working with regional startups and SMEs. The advisory focuses on local realities: multi-entity structures, board and investor expectations, and a heavy reliance on Xero and Google Sheets. The result is an AI plan that matches how Singapore finance teams actually operate.",
    },
    {
      question: "Do we need to replace our existing tools to work with Ryzup.ai?",
      answer: "In most cases, no. Ryzup.ai integrates with Xero and Google Sheets, layering AI on top of tools you already use, and then provides additional capabilities like AI CFO dashboards, error detection, and anonymisation.",
    },
    {
      question: "Is AI finance transformation with Ryzup.ai safe for sensitive financial and personal data?",
      answer: "Yes. Ryzup.ai uses enterprise-grade collaboration practices, is certified as a Xero partner, and offers anonymisation features so you can mask sensitive data while still leveraging AI. This helps you build an AI-driven finance function with privacy and controls built in.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/ai-advisory-finance-transformation-singapore/#faq",
        mainEntity: faqs.map(faq => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "Service",
        "@id": "https://growwthpartners.com/ai-advisory-finance-transformation-singapore/#service",
        name: "AI Advisory for Finance Transformation",
        provider: {
          "@type": "Organization",
          name: "Growwth Partners",
        },
        description: "Ryzup.ai helps finance leaders in Singapore redesign their entire finance function around AI. From strategy and roadmap to hands-on implementation with AI CFO, spreadsheet error detection, and data anonymisation.",
        areaServed: "Singapore",
      },
      {
        "@type": "Organization",
        "@id": "https://growwthpartners.com/#organization",
        name: "Growwth Partners",
        url: "https://growwthpartners.com",
        areaServed: ["Singapore", "United Arab Emirates", "Australia"],
      },
    ],
  };

  return (
    <Layout>
      <SEOhelper
        title="AI Advisory for Finance Transformation in Singapore | Ryzup.ai"
        description="Ryzup.ai helps finance leaders in Singapore redesign their entire finance function around AI. Get end-to-end AI transformation with AI CFO, error detection, and data anonymisation."
        keywords="AI finance transformation Singapore, AI advisory finance, Ryzup.ai, AI CFO Singapore, finance automation, AI roadmap finance, spreadsheet error detection, data anonymisation"
        canonicalUrl="https://growwthpartners.com/ai-advisory-finance-transformation-singapore"
        structuredData={structuredData}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <ChallengesSection />
        <FrameworkSection />
        <WhyChooseSection />
        <FaqSection 
          faqs={faqs} 
          subtitle="Find answers to common questions about AI Advisory for Finance Transformation" 
        />
      </motion.div>
    </Layout>
  );
};

export default AiAdvisoryFinanceTransformation;
