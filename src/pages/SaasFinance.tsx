import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/saasFinance/HeroSection";
import WhatIsSection from "@/components/saasFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/saasFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/saasFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/saasFinance/HowWeDeliverSection";
import WhyChooseSection from "@/components/saasFinance/WhyChooseSection";
import UseCaseSection from "@/components/saasFinance/UseCaseSection";
import FaqSection from "@/components/saasFinance/FaqSection";
import CTASection from "@/components/saasFinance/CTASection";

const SaasFinance = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SaaS Finance Services Singapore",
    "provider": {
      "@type": "Organization",
      "name": "Growwth Partners"
    },
    "description": "Financial modelling, MRR dashboards, ARR forecasting, and SaaS KPI tracking.",
    "areaServed": "Singapore",
    "serviceType": "SaaS Finance Services"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOhelper
        title="SaaS Finance Services | Metrics, Forecasting & Valuation"
        description="Financial modelling, MRR dashboards, ARR forecasting, and SaaS KPI tracking."
        keywords="SaaS finance Singapore, SaaS CFO, MRR reporting, churn analysis"
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

export default SaasFinance;
