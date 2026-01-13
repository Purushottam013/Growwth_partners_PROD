import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/services/HeroSection";
import ServicesGrid from "@/components/services/ServicesGrid";
import CTASection from "@/components/services/CTASection";
import DynamicBackground from "@/components/services/DynamicBackground";
import { servicesData } from "@/data/servicesData";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Growwth Partners Services",
  description: "Comprehensive financial services for startups, SMEs, and growing businesses",
  numberOfItems: servicesData.length,
  itemListElement: servicesData.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: `https://growwthpartners.com${service.path}`,
      provider: {
        "@type": "Organization",
        name: "Growwth Partners"
      }
    }
  }))
};

const Services = () => {
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);

  const activeService = useMemo(() => {
    if (!hoveredServiceId) return null;
    return servicesData.find(s => s.id === hoveredServiceId) || null;
  }, [hoveredServiceId]);

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <SEOhelper
        title="Our Services | CFO, Accounting & Finance Solutions | Growwth Partners"
        description="Explore our comprehensive range of CFO services, accounting, bookkeeping, and finance solutions for startups, SMEs, and growing businesses in Singapore, UAE, and Australia."
        keywords="finance services Singapore, CFO services, accounting services, startup finance, bookkeeping, payroll services, tax compliance"
        canonicalUrl="https://growwthpartners.com/services"
        structuredData={structuredData}
      />
      
      {/* Dynamic Background */}
      <DynamicBackground activeService={activeService} />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesGrid 
            onServiceHover={setHoveredServiceId}
            hoveredServiceId={hoveredServiceId}
          />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
