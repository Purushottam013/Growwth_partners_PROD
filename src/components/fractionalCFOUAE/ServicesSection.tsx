import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/ui/contact-modal';

export const ServicesSection: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const services = [
    'Financial Planning & Forecasting',
    'Cash Flow Management & Optimisation',
    'Budgeting & Cost Control Strategies',
    'Profitability & Growth Planning',
    'Fundraising & Investor-Ready Financials',
    'Mergers, Acquisitions & Exit Strategy Advisory',
    'Financial Reporting & Board Presentations'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#FFB343]">CFO Services</span> Include
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-purple-50/50 via-white to-purple-50/30 border-2 border-purple-100/50 shadow-lg">
            <CardContent className="p-8 md:p-10">
              <ul className="space-y-4 mb-8">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{service}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="text-center pt-6 border-t border-purple-100">
                <p className="text-xl font-semibold text-gray-900 mb-6">
                  Get expert financial leadership, <span className="text-[#FFB343]">when you need it</span>.
                </p>
                <Button
                  onClick={() => setContactModalOpen(true)}
                  className="bg-[#FFB343] hover:bg-[#FFB343]/90 text-white rounded-full px-8 py-6 text-lg font-medium"
                >
                  Talk to a CFO Expert
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </section>
  );
};

export default ServicesSection;
