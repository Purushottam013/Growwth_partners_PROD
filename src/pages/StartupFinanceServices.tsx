import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/startupFinance/HeroSection";
import WhatIsSection from "@/components/startupFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/startupFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/startupFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/startupFinance/HowWeDeliverSection";
import WhyChooseSection from "@/components/startupFinance/WhyChooseSection";
import UseCaseSection from "@/components/startupFinance/UseCaseSection";
import CTASection from "@/components/startupFinance/CTASection";
import { FaqSection } from "@/components/accounting/FaqSection";

const faqs = [
  {
    question: "How are Startup Finance services different from Startup CFO services?",
    answer: "Startup Finance services focus on building financial foundations and execution, while Startup CFO services provide senior strategic leadership and decision support."
  },
  {
    question: "Are Startup Finance services suitable for very early-stage startups?",
    answer: "Yes. Early finance discipline significantly improves survival and fundraising outcomes."
  },
  {
    question: "Can these services support fundraising?",
    answer: "Yes. Clean financial systems and reliable forecasts are essential for investor due diligence."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://growwthpartners.com/startup-finance-services/#faq",
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
      "@id": "https://growwthpartners.com/startup-finance-services/#service",
      name: "Startup Finance Services",
      serviceType: "Startup Finance Services",
      description: "Finance support for startups including forecasting, investor reporting, and cash burn optimisation.",
      areaServed: ["Singapore", "United Arab Emirates", "Australia"],
      provider: {
        "@id": "https://growwthpartners.com/#organization",
      },
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

const StartupFinanceServices = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOhelper
        title="Startup Finance Services | Modelling, Cash Flow & Investor Support"
        description="Finance support for startups including forecasting, investor reporting, and cash burn optimisation."
        keywords="startup finance Singapore, startup modelling, startup reporting, fundraising finance"
        canonicalUrl="https://growwthpartners.com/startup-finance-services"
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
          subtitle="Find answers to common questions about Startup Finance services"
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default StartupFinanceServices;
