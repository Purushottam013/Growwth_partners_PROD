import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, TrendingUp, Building2, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/ui/contact-modal';

export const WhoWeHelpSection: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const businessTypes = [
    {
      icon: Rocket,
      title: 'Startups & SMEs',
      description: 'Build a scalable financial foundation and secure investor confidence with a fractional CFO or outsourced CFO Dubai solution.'
    },
    {
      icon: TrendingUp,
      title: 'High-Growth Businesses',
      description: 'Strategic planning to manage rapid expansion, cash flow, and operations across the UAE and GCC.'
    },
    {
      icon: Building2,
      title: 'Family-Owned & Traditional Businesses',
      description: 'Streamline financial processes, improve margins, and future-proof operations with structured financial control.'
    },
    {
      icon: Briefcase,
      title: 'Businesses Preparing for Exit or M&A',
      description: 'Ensure strong financials and valuation strategies for acquisitions or exits, backed by experienced deal support through our outsourced CFO Dubai offering.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Initial Strategy Session',
      description: 'We identify your biggest financial challenges and business goals.'
    },
    {
      number: '02',
      title: 'Tailored CFO Plan',
      description: 'A custom roadmap for financial strategy, cost control, and growth planning.'
    },
    {
      number: '03',
      title: 'Ongoing CFO Support',
      description: 'Monthly, quarterly, or project-based high-level financial leadership.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Who We Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who We <span className="text-[#FFB343]">Help</span>
          </h2>
          <p className="text-xl text-gray-700 font-semibold">
            CFO-Level Expertise for Every Business Stage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 max-w-6xl mx-auto">
          {businessTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white border-2 border-purple-100/50 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="bg-[#FFB343]/10 p-4 rounded-full">
                      <type.icon className="w-8 h-8 text-[#FFB343]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{type.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Our <span className="text-[#FFB343]">Fractional CFO Services</span> Work
          </h2>
          <p className="text-xl text-gray-700 font-semibold">
            Strategic Financial Leadership, On Your Terms
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
              className="mb-6 last:mb-0"
            >
              <Card className="bg-gradient-to-r from-purple-50/50 to-white border-2 border-purple-100/50 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="bg-[#FFB343] text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-lg text-gray-700">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-purple-50/50 via-white to-purple-50/30 border-2 border-purple-100 shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                No overhead. No long-term commitment. Just expert financial guidance, when you need it. This is how <span className="font-semibold text-[#FFB343]">outsourced CFO Dubai</span> support should work.
              </p>
              <Button
                onClick={() => setContactModalOpen(true)}
                className="bg-[#FFB343] hover:bg-[#FFB343]/90 text-white rounded-full px-8 py-6 text-lg font-medium group"
              >
                Start Working with a CFO Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
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

export default WhoWeHelpSection;
