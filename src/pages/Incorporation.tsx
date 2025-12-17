import React from "react";
import SEOhelper from "@/components/SEOhelper";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/incorporation/HeroSection";
import { WhyChooseSection } from "@/components/incorporation/WhyChooseSection";
import { WhatIsIncludedSection } from "@/components/incorporation/WhatIsIncludedSection";
import { ProcessSection } from "@/components/incorporation/ProcessSection";
import { WhoWeHelpSection } from "@/components/incorporation/WhoWeHelpSection";
import { AddOnsSection } from "@/components/incorporation/AddOnsSection";
import { FaqSection } from "@/components/incorporation/FaqSection";
import { CTASection } from "@/components/incorporation/CTASection";

const Incorporation = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Company Incorporation Services in Singapore",
    "provider": {
      "@type": "Organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com"
    },
    "description": "Register your company in Singapore with expert guidance. Fast, compliant, and seamless incorporation services for entrepreneurs and SMEs.",
    "areaServed": {
      "@type": "Country",
      "name": "Singapore"
    },
    "serviceType": "Company Incorporation"
  };

  return (
    <>
      <SEOhelper
        title="Company Incorporation Services in Singapore"
        description="Register your company in Singapore with expert guidance. Fast, compliant, and seamless incorporation services for entrepreneurs and SMEs."
        keywords="company incorporation singapore, register company singapore, singapore business registration, ACRA registration, singapore company setup"
        canonicalUrl="https://growwthpartners.com/incorporation"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <WhatIsIncludedSection />
        <WhoWeHelpSection />
        <ProcessSection />
        <AddOnsSection />
        <FaqSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Incorporation;
