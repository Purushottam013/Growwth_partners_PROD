import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/fintechFinance/HeroSection";
import WhatIsSection from "@/components/fintechFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/fintechFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/fintechFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/fintechFinance/HowWeDeliverSection";
import WhatYouGetSection from "@/components/fintechFinance/WhatYouGetSection";
import UseCaseSection from "@/components/fintechFinance/UseCaseSection";
import CTASection from "@/components/fintechFinance/CTASection";
import { Layout } from "@/components/Layout";
import { FaqSection } from "@/components/accounting/FaqSection";


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

const FintechFinance = () => {
const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/fintech-finance/#faq",
        mainEntity: faqs.map(faq => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
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
        title="Fintech Finance Services Singapore | Reporting & Compliance"
        description="Finance solutions for fintech companies including compliance, dashboards, and regulatory-ready reporting."
        keywords="fintech finance Singapore, regulatory reporting finance, fintech CFO, fintech compliance, financial controls"
        canonicalUrl="https://growwthpartners.com/fintech-finance"
        structuredData={structuredData}
      />
      <main className="flex-grow">
        <HeroSection />
        <WhatIsSection />
        <WhoShouldUseSection />
        <ChallengesSection />
        <HowWeDeliverSection />
        <WhatYouGetSection />
        <UseCaseSection />
        <FaqSection subtitle="Find answers to common questions about Fintech Finance Services" faqs={faqs} />
        <CTASection />
      </main>
    </Layout>
  );
};

export default FintechFinance;
