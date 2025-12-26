import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  TrendingUp, 
  MapPin, 
  Target,
  Settings,
  CheckCircle
} from 'lucide-react';

const idealFor = [
  {
    icon: Rocket,
    title: 'Startups & SMEs',
    description: 'Without internal finance teams'
  },
  {
    icon: TrendingUp,
    title: 'Rapidly Expanding Businesses',
    description: 'Growing across regions'
  },
  {
    icon: MapPin,
    title: 'Singapore Operations',
    description: 'Without local finance hires'
  },
  {
    icon: Target,
    title: 'Growth-Focused Founders',
    description: 'Want to focus on growth, not finance'
  },
  {
    icon: Settings,
    title: 'Cost-Efficient Operations',
    description: 'Seeking scalable finance solutions'
  }
];

const WhoShouldUseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
              Who Should Use Remote CFO & Finance Team Services?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {idealFor.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-amber-500 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-brand-orange" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Perfect For You If...</h3>
                <p className="text-lg text-gray-600">
                  You need a full finance function—but don't want to hire one internally. This model is built for you.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
