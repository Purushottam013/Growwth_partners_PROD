import HeroSection from "@/components/bankingSolutions/HeroSection";
import WhyChooseSection from "@/components/bankingSolutions/WhyChooseSection";
import WhatYouGetSection from "@/components/bankingSolutions/WhatYouGetSection";
import BuiltForSection from "@/components/bankingSolutions/BuiltForSection";
import DeliveryModelSection from "@/components/bankingSolutions/DeliveryModelSection";
import WhoWeHelpSection from "@/components/bankingSolutions/WhoWeHelpSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import CTASection from "@/components/bankingSolutions/CTASection";
import SEOhelper from "@/components/SEOhelper";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does Growwth Partners handle SME banking setup?",
    answer:
      "Growwth Partners shortlists banks that fit your model, prepares KYC and resolutions, supports account opening, and configures payment rails and cards.",
  },
  {
    question: "Can Growwth Partners help with digital banking solutions?",
    answer:
      "Yes. Growwth Partners connects banking feeds to your accounting system, automates reconciliation, and sets up spend controls and alerts.",
  },
  {
    question: "What does banking for new businesses typically include?",
    answer:
      "Core accounts, multi-currency options where needed, cards, payment gateways, and reconciliations mapped to the chart of accounts.",
  },
  {
    question: "How quickly can a startup go live?",
    answer:
      "Most teams open accounts and connect feeds within days once KYC is ready. Gateways and reconciliation rules are added soon after.",
  },
  {
    question: "Will reconciliation still need manual work?",
    answer:
      "Some exceptions will, but Growwth Partners designs rules for fees, refunds, and chargebacks so most items clear automatically.",
  },
  {
    question: "Does Growwth Partners support multi-entity groups?",
    answer:
      "Yes. Consolidated banking views, intercompany workflows, and multi-currency reporting are available.",
  },
];

const SimplifiedBankingSolutions = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/simplified-banking-solutions/#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "Organization",
        "@id": "https://growwthpartners.com/#organization",
        name: "Growwth Partners",
        url: "https://growwthpartners.com",
        areaServed: ["Singapore", "United Arab Emirates", "Australia"],
        serviceArea: [
          {
            "@type": "AdministrativeArea",
            name: "Singapore",
          },
          {
            "@type": "Country",
            name: "United Arab Emirates",
          },
          {
            "@type": "Country",
            name: "Australia",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "jd@growwthpartners.com",
            telephone: "+65 9861 5600",
            contactType: "business",
            areaServed: "SG",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "65 Chulia Street",
          addressLocality: "Singapore",
          postalCode: "049513",
          addressCountry: "SG",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEOhelper
        title="Simplified Banking Solutions for New Businesses | Growwth Partners"
        description="Discover business banking solutions for startups and SMEs. Streamline payments, automate reconciliation, and manage cash with practical digital banking solutions and SME banking setup"
        keywords="bookkeeping services, financial records, transaction management, small business accounting, financial reporting, accounts payable, accounts receivable, bank reconciliation"
        canonicalUrl="https://growwthpartners.com/simplified-banking-solutions"
        structuredData={structuredData}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <WhyChooseSection />
        <WhatYouGetSection />
        <BuiltForSection />
        <DeliveryModelSection />
        <WhoWeHelpSection />
        <FaqSection
          faqs={faqs}
          subtitle="Find answers to common questions about our banking solutions"
        />
        <CTASection />
      </motion.div>
    </Layout>
  );
};

export default SimplifiedBankingSolutions;
