import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/ui/contact-modal';
import { Play } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-[#FFB343]">Clients Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="bg-gradient-to-br from-purple-50/50 via-white to-purple-50/30 border-2 border-purple-100 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gray-900">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Pqmq_v35VuY"
                  title="Client Testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-purple-50/50 via-white to-purple-50/30 border-2 border-purple-100 shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Get CFO-Level Insights Without the Full-Time Cost
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Companies across the UAE trust Growwth Partners when they need a strategic finance partner, <span className="font-semibold text-[#FFB343]">fractional CFO support</span>, or an <span className="font-semibold text-[#FFB343]">outsourced CFO Dubai</span> model that scales with their growth.
              </p>
              <Button
                onClick={() => setContactModalOpen(true)}
                className="bg-[#FFB343] hover:bg-[#FFB343]/90 text-white rounded-full px-8 py-6 text-lg font-medium"
              >
                Book a Free Consultation
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

export default TestimonialsSection;
