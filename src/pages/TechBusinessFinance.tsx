import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/techBusinessFinance/HeroSection";
import WhatIsSection from "@/components/techBusinessFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/techBusinessFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/techBusinessFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/techBusinessFinance/HowWeDeliverSection";
import WhyChooseSection from "@/components/techBusinessFinance/WhyChooseSection";
import UseCaseSection from "@/components/techBusinessFinance/UseCaseSection";
import FaqSection from "@/components/techBusinessFinance/FaqSection";
import CTASection from "@/components/techBusinessFinance/CTASection";

const TechBusinessFinance = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tech Business Finance Services Singapore",
    "provider": {
      "@type": "Organization",
      "name": "Growwth Partners"
    },
    "description": "Finance support for tech companies including modelling, dashboards, KPIs, and runway planning.",
    "areaServed": "Singapore",
    "serviceType": "Tech Finance Services"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOhelper
        title="Tech Finance Services | Forecasting, Reporting & Strategy"
        description="Finance support for tech companies including modelling, dashboards, KPIs, and runway planning."
        keywords="tech finance Singapore, tech CFO, KPI dashboards tech, forecasting for tech"
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
        <FaqSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default TechBusinessFinance;
