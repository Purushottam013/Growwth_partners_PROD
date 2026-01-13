import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/smeFinanceServices/HeroSection";
import WhatIsSection from "@/components/smeFinanceServices/WhatIsSection";
import WhoShouldUseSection from "@/components/smeFinanceServices/WhoShouldUseSection";
import ChallengesSection from "@/components/smeFinanceServices/ChallengesSection";
import HowWeDeliverSection from "@/components/smeFinanceServices/HowWeDeliverSection";
import WhyChooseSection from "@/components/smeFinanceServices/WhyChooseSection";
import UseCaseSection from "@/components/smeFinanceServices/UseCaseSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import CTASection from "@/components/smeFinanceServices/CTASection";

const faqs = [
  {
    question: "How are SME Finance services different from SME CFO services?",
    answer:
      "SME Finance services focus on building and running financial systems and reporting, while SME CFO services provide senior strategic leadership and decision support. SME Finance is more execution-focused, handling day-to-day financial operations, whereas CFO services are strategic and advisory in nature.",
  },
  {
    question: "Are SME Finance services suitable for small teams?",
    answer:
      "Yes. Services are designed to scale with business size and complexity. Whether you're a 5-person startup or a 50-person SME, our finance services adapt to your transaction volumes and reporting needs without requiring you to build an in-house team.",
  },
  {
    question: "Can SME Finance services help improve profitability?",
    answer:
      "Yes. Cost and margin analysis are core components of SME Finance services. We identify cost leakages, analyze profitability by product/service/department, and provide actionable insights to optimize pricing and reduce unnecessary expenses.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://growwthpartners.com/sme-finance-services/#faq",
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
      "@type": "Service",
      "@id": "https://growwthpartners.com/sme-finance-services/#service",
      name: "SME Finance Services",
      description:
        "End-to-end financial support for SMEs including planning, forecasting, cash flow management, profitability analysis, and management reporting.",
      provider: {
        "@type": "Organization",
        name: "Growwth Partners",
        url: "https://growwthpartners.com",
      },
      areaServed: [
        { "@type": "Country", name: "Singapore" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Australia" },
      ],
      serviceType: "Financial Services",
    },
    {
      "@type": "Organization",
      "@id": "https://growwthpartners.com/#organization",
      name: "Growwth Partners",
      url: "https://growwthpartners.com",
      areaServed: ["Singapore", "United Arab Emirates", "Australia"],
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

const SmeFinanceServices = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOhelper
        title="SME Finance Services Singapore | Financial Control & Cash Flow"
        description="Professional SME finance services in Singapore. Financial planning, cash flow management, profitability analysis, and management reporting for growing SMEs."
        keywords="SME finance Singapore, SME financial services, cash flow management, financial planning, management reporting, profitability analysis"
        canonicalUrl="https://growwthpartners.com/sme-finance-services"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsSection />
        <WhoShouldUseSection />
        <ChallengesSection />
        <HowWeDeliverSection />
        <WhyChooseSection />
        <UseCaseSection />
        <FaqSection
          faqs={faqs}
          subtitle="Find answers to common questions about SME Finance services"
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default SmeFinanceServices;
