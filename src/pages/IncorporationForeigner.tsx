
import SEOhelper from "@/components/SEOhelper";
import { HeroSection } from "@/components/incorporationForeigner/HeroSection";
import { WhyChooseSection } from "@/components/incorporationForeigner/WhyChooseSection";
import { RequirementsSection } from "@/components/incorporationForeigner/RequirementsSection";
import { VisaSection } from "@/components/incorporationForeigner/VisaSection";
import { WhatWeDeliverSection } from "@/components/incorporationForeigner/WhatWeDeliverSection";
import { ProcessSection } from "@/components/incorporationForeigner/ProcessSection";
import { ChecklistSection } from "@/components/incorporationForeigner/ChecklistSection";
import { WhoWeHelpSection } from "@/components/incorporationForeigner/WhoWeHelpSection";
import  CTASection  from "@/components/incorporationForeigner/CTASection";
import { FaqSection } from "@/components/accounting/FaqSection";
import { Layout } from "@/components/Layout";

const faqs = [
  {
    question: "Can a foreigner register a company in Singapore remotely?",
    answer: "Yes. Growwth Partners coordinates remote filings and company setup. KYC and document verification are required."
  },
  {
    question: "Is a local director mandatory for foreigner incorporation in Singapore?",
    answer: "Yes. The Companies Act requires at least one ordinarily resident director. Growwth Partners provides compliant pathways and options."
  },
  {
    question: "How long does it take to set up a company in Singapore as a foreigner?",
    answer: "Most straightforward cases complete within days once KYC and documents are ready. Banking timelines vary by provider."
  },
  {
    question: "Can Growwth Partners help with Employment Pass or EntrePass planning?",
    answer: "Growwth Partners prepares supporting corporate documentation and provides guidance on pathways. Final decisions rest with authorities."
  },
  {
    question: "What post-incorporation compliance does Growwth Partners handle?",
    answer: "Company secretary duties, statutory registers, annual ACRA filings, corporate tax with IRAS, plus bookkeeping, payroll, and GST compliance."
  },
  {
    question: "Will banking require a physical visit?",
    answer: "Some banks require in-person verification; others may support remote onboarding based on risk and documentation. Growwth Partners helps prepare the banking pack."
  }
];


const IncorporationForeigner = () => {
   const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/incorporation/foreigner/#faq",
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
        title="Incorporation Services for Foreigners in Singapore"
        description="Set up a company in Singapore as a foreigner with full compliance and remote support. Fast, tailored incorporation guidance for relocation and growth."
        keywords="foreigner incorporation singapore, foreign company registration, singapore business setup foreigners, remote incorporation singapore, pte ltd foreigners"
        canonicalUrl="https://growwthpartners.com/incorporation/foreigner"
        structuredData={structuredData}
      />
 
      <main>
        <HeroSection />
        <WhyChooseSection />
        <RequirementsSection />
        <VisaSection />
        <WhatWeDeliverSection />
        <ProcessSection />
        <ChecklistSection />
        <WhoWeHelpSection />
        <FaqSection faqs={faqs} />
        <CTASection />
      </main>
     
    </Layout>
  );
};

export default IncorporationForeigner;
