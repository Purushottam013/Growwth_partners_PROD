import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Target } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-[#8B5CF6]">Founder</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-purple-50 via-white to-purple-50/30 border-2 border-gray-200 shadow-xl">
              <CardContent className="p-10 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-full flex items-center justify-center shadow-lg">
                      <img src='/lovable-uploads/jatin-detwani-ceo.jpeg' className="text-white rounded-full" alt="Jatin Detwani, Founder of Growwth Partners" />
                    </div>
                  </div>
                  
                  <div className="flex-grow space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">Jatin Detwani</h3>
                      <p className="text-lg text-[#8B5CF6] font-semibold">Founder, Growwth Partners</p>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Jatin is a strategic CFO, advisor, and operator who has supported hundreds of companies through scale, investor conversations, hiring decisions, restructuring and exit preparation.
                    </p>
                    
                    <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#8B5CF6]">
                      <div className="flex items-start gap-3">
                        <Target className="w-6 h-6 text-[#8B5CF6] flex-shrink-0 mt-1" />
                        <p className="text-gray-700 leading-relaxed italic">
                          Growwth Partners was built for founders who said "we can't afford a full-time CFO yet, but we cannot afford to run blind anymore." The result is what many now refer to as <span className="font-semibold text-[#8B5CF6]">fractional CFO services UAE</span> and <span className="font-semibold text-[#8B5CF6]">outsourced CFO Dubai</span> for modern operators.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
