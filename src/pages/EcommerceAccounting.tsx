import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import SEOhelper from '@/components/SEOhelper';
import HeroSection from '@/components/ecommerceAccounting/HeroSection';
import WhyChooseSection from '@/components/ecommerceAccounting/WhyChooseSection';
import WhatYouGetSection from '@/components/ecommerceAccounting/WhatYouGetSection';
import PlatformStackSection from '@/components/ecommerceAccounting/PlatformStackSection';
import DeliveryModelSection from '@/components/ecommerceAccounting/DeliveryModelSection';
import WhoWeHelpSection from '@/components/ecommerceAccounting/WhoWeHelpSection';
import AddOnServicesSection from '@/components/ecommerceAccounting/AddOnServicesSection';
import CTASection from '@/components/ecommerceAccounting/CTASection';
import { FaqSection } from '@/components/accounting/FaqSection';
import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'How does Growwth Partners deliver ecommerce accounting for multi-channel brands?',
    answer: 'Growwth Partners reconciles orders, payouts, fees, and refunds by channel, maps inventory and COGS correctly, and issues monthly packs with SKU and channel-level margins.',
  },
  {
    question: 'Which platforms and gateways does Growwth Partners support?',
    answer: 'Growwth Partners supports Shopify, Amazon, WooCommerce, Etsy, and eBay, with Stripe, PayPal, Razorpay, and other gateways, plus COD workflows.',
  },
  {
    question: 'How does Growwth Partners handle inventory and COGS accuracy?',
    answer: 'Growwth Partners applies SKU-level tracking, landed cost and freight allocation, and bundle or kit rules so COGS and margins reflect reality.',
  },
  {
    question: 'Can Growwth Partners manage sales tax, VAT, or GST?',
    answer: 'Yes. Growwth Partners registers, files, and reconciles tax by region, aligns marketplace reports, and maintains documentation for reviews and audits.',
  },
  {
    question: 'What does an ecommerce month-end close include with Growwth Partners?',
    answer: 'Close calendars, channel reconciliations, inventory checks, variance analysis, and management accounts packaged for founders and boards.',
  },
  {
    question: 'Does Growwth Partners support multi-currency and multi-entity consolidation?',
    answer: 'Yes. Consolidated reporting and intercompany workflows are set up for groups selling across countries and channels.',
  },
];

 const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/ecommerce-accounting-services/#faq",
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

const EcommerceAccounting: React.FC = () => {
  return (
    <Layout>
      <SEOhelper
        title="Ecommerce Accounting Services for Online Businesses"
        description="Streamline ecommerce accounting and tax compliance with specialist ecommerce bookkeeping services for Shopify, Amazon, and online brands. Improve accuracy and scale confidently."
        keywords="ecommerce accounting, online business accounting, Shopify accounting, Amazon accounting, ecommerce bookkeeping, ecommerce tax management, COGS tracking, multi-channel reconciliation"
        canonicalUrl="https://growwthpartners.com/ecommerce-accounting-services"
        structuredData={structuredData}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <WhyChooseSection />
        <WhatYouGetSection />
        <PlatformStackSection />
        <DeliveryModelSection />
        <WhoWeHelpSection />
        <AddOnServicesSection />
        <FaqSection
          faqs={faqs}
          subtitle="Find answers to common questions about ecommerce accounting"
        />
        <CTASection />
      </motion.div>
    </Layout>
  );
};

export default EcommerceAccounting;
