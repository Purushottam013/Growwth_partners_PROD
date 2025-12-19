import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/fintechFinance/HeroSection";
import WhatIsSection from "@/components/fintechFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/fintechFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/fintechFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/fintechFinance/HowWeDeliverSection";
import WhatYouGetSection from "@/components/fintechFinance/WhatYouGetSection";
import UseCaseSection from "@/components/fintechFinance/UseCaseSection";
import FaqSection from "@/components/fintechFinance/FaqSection";
import CTASection from "@/components/fintechFinance/CTASection";

const FintechFinance = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fintech Finance Services Singapore",
    "provider": {
      "@type": "Organization",
      "name": "Growwth Partners"
    },
    "description": "Finance solutions for fintech companies including compliance, dashboards, and regulatory-ready reporting.",
    "areaServed": "Singapore",
    "serviceType": "Fintech Finance Services"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOhelper
        title="Fintech Finance Services Singapore | Reporting & Compliance"
        description="Finance solutions for fintech companies including compliance, dashboards, and regulatory-ready reporting."
        keywords="fintech finance Singapore, regulatory reporting finance, fintech CFO, fintech compliance, financial controls"
        canonicalUrl="https://growwthpartners.com/fintech-finance"
        structuredData={structuredData}
      />
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <WhatIsSection />
        <WhoShouldUseSection />
        <ChallengesSection />
        <HowWeDeliverSection />
        <WhatYouGetSection />
        <UseCaseSection />
        <FaqSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default FintechFinance;
