import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/aifinance/HeroSection";
import { WhyAiMattersSection } from "@/components/aifinance/WhyAiMattersSection";
import { WhatRyzupDoesSection } from "@/components/aifinance/WhatRyzupDoesSection";
import { FinanceAutomationSection } from "@/components/aifinance/FinanceAutomationSection";
import { FinanceStackSection } from "@/components/aifinance/FinanceStackSection";
import { StopDoingSection } from "@/components/aifinance/StopDoingSection";
import { WhoBenefitsSection } from "@/components/aifinance/WhoBenefitsSection";
import { SecuritySection } from "@/components/aifinance/SecuritySection";
import { FaqSection } from "@/components/aifinance/FaqSection";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";

const AiInFinancePage = () => {
  const aiFinanceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI in Finance Solutions",
    description: "Transform your finance with AI precision. Get instant clarity on cash flow, forecasting, spend, and performance without manual spreadsheets.",
    provider: {
      "@type": "Organization",
      name: "RyzUp",
      url: "https://growwthpartners.com",
    },
    serviceType: "AI Finance Automation",
  };

  return (
    <Layout>
      <SEOhelper
        title="Use of AI in Finance | Transform Finance with AI Precision"
        description="RyzUp brings AI in finance directly into your workflow. Get instant clarity on cash flow, forecasting, and performance. Finance automation tools for modern teams."
        keywords="AI in finance, finance automation tools, financial forecasting, automated reporting, cash flow management, AI finance solutions"
        canonicalUrl="https://growwthpartners.com/use-of-ai-in-finance"
        structuredData={aiFinanceSchema}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <WhyAiMattersSection />
        <WhatRyzupDoesSection />
        <FinanceAutomationSection />
        <FinanceStackSection />
        <StopDoingSection />
        <WhoBenefitsSection />
        <SecuritySection />
        <FaqSection />
      </motion.div>
    </Layout>
  );
};

export default AiInFinancePage;
