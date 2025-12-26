import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import SEOhelper from '@/components/SEOhelper';
import HeroSection from '@/components/remoteCfo/HeroSection';
import WhatIsSection from '@/components/remoteCfo/WhatIsSection';
import WhoShouldUseSection from '@/components/remoteCfo/WhoShouldUseSection';
import ChallengesSection from '@/components/remoteCfo/ChallengesSection';
import HowWeDeliverSection from '@/components/remoteCfo/HowWeDeliverSection';
import WhyChooseSection from '@/components/remoteCfo/WhyChooseSection';
import UseCaseSection from '@/components/remoteCfo/UseCaseSection';
import FaqSection from '@/components/remoteCfo/FaqSection';
import CTASection from '@/components/remoteCfo/CTASection';

const RemoteCfoServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOhelper
        title="Remote CFO & Finance Team Singapore | Fully Outsourced Finance"
        description="Remote finance team support including CFO, analysts, bookkeepers, and controllers."
        keywords="remote finance team Singapore, outsourced finance team, virtual finance department"
        canonicalUrl="https://growwthpartners.com/remote-cfo-finance-team"
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

export default RemoteCfoServices;
