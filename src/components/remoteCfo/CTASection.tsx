import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/ui/contact-modal';

const CTASection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5 text-brand-orange" />
              <span className="text-brand-orange font-medium">Complete Finance Solution</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Build a Scalable Finance Department—
              <span className="text-brand-orange"> Without Hiring Internally</span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Get CFO leadership, finance analysts, bookkeeping, and payroll—all delivered remotely with clear accountability and measurable outcomes.
            </p>

            <Button
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-6 text-lg rounded-xl shadow-lg shadow-orange-500/25"
              onClick={() => setIsContactModalOpen(true)}
            >
              Schedule a Remote Finance Team Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      <ContactModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen} 
      />
    </section>
  );
};

export default CTASection;
