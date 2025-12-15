import { Layout } from '@/components/Layout';
import SEOhelper from '@/components/SEOhelper';
import HeroSection from '@/components/corporateTaxUAE/HeroSection';
import WhyChooseSection from '@/components/corporateTaxUAE/WhyChooseSection';
import WhatIncludesSection from '@/components/corporateTaxUAE/WhatIncludesSection';
import WhoWeHelpSection from '@/components/corporateTaxUAE/WhoWeHelpSection';
import WhyGrowwthSection from '@/components/corporateTaxUAE/WhyGrowwthSection';
import FAQSection from '@/components/corporateTaxUAE/FAQSection';
import CTASection from '@/components/corporateTaxUAE/CTASection';

const CorporateTaxFilingUAE = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Corporate Tax Filing Services UAE",
    "description": "Ensure compliance with UAE's new corporate tax laws with expert assistance. Growwth Partners provides corporate tax filing in the UAE with SME focused optimisation and FTA aligned reporting.",
    "provider": {
      "@type": "Organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "serviceType": "Corporate Tax Filing"
  };

  return (
    <Layout>
      <SEOhelper
        title="Corporate Tax Filing Services UAE | Growwth Partners"
        description="Ensure compliance with UAE's new corporate tax laws with expert assistance. Growwth Partners provides corporate tax filing in the UAE with SME focused optimisation and FTA aligned reporting."
        keywords="corporate tax filing UAE, FTA compliance, UAE tax services, corporate tax UAE, SME tax optimisation, VAT UAE, ESR compliance"
        canonicalUrl="https://growwthpartners.com/uae/corporate-tax-filing-uae"
        structuredData={structuredData}
      />
      <HeroSection />
      <WhyChooseSection />
      <WhatIncludesSection />
      <WhoWeHelpSection />
      <WhyGrowwthSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default CorporateTaxFilingUAE;
