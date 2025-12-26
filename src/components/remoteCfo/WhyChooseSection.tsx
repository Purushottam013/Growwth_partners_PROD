import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award,
  MapPin,
  UserCircle,
  Cpu,
  Layers,
  CheckCircle
} from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Proven Experience',
    description: 'Delivering remote finance teams for startups and SMEs across industries'
  },
  {
    icon: MapPin,
    title: 'Singapore Expertise',
    description: 'Strong understanding of financial, tax, and regulatory requirements'
  },
  {
    icon: UserCircle,
    title: 'CFO-Led Delivery',
    description: 'Senior leadership model—not junior outsourcing'
  },
  {
    icon: Cpu,
    title: 'AI-Powered Workflows',
    description: 'Finance automation for speed and accuracy'
  },
  {
    icon: Layers,
    title: 'One Partner Solution',
    description: 'CFO services, finance execution, and reporting under one roof'
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Growwth Partners?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-brand-orange/30 transition-all"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-orange/5 to-amber-100/20 rounded-bl-full" />
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-orange to-amber-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-orange-200/50 group-hover:scale-110 transition-transform">
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle className="w-6 h-6 text-brand-orange" />
              <h3 className="text-xl font-bold text-white">Your Finance Team, Not Just a Vendor</h3>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We operate as your finance team—with full ownership, accountability, and commitment to your success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
