import { motion } from "framer-motion";
import { Award, MapPin, Users, Cpu, Target, CheckCircle, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Extensive SME Experience",
    description: "Deep expertise working with SMEs across diverse industries"
  },
  {
    icon: MapPin,
    title: "Singapore Expertise",
    description: "Strong understanding of Singapore's business, tax, and regulatory environment"
  },
  {
    icon: Users,
    title: "Integrated Support",
    description: "Seamless integration across CFO services, finance teams, bookkeeping, and payroll"
  },
  {
    icon: Cpu,
    title: "AI-Enabled Dashboards",
    description: "Real-time insights through modern technology and automation"
  },
  {
    icon: Target,
    title: "Execution-Focused",
    description: "Practical, results-driven approach to financial management"
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Why Growwth Partners</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
              Why Choose Growwth Partners for SME Finance?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We help SMEs move from reactive finance to disciplined financial management.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-orange/10 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-brand-orange/20 group-hover:to-orange-200 transition-all">
                    <reason.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-brand-orange transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 to-emerald-500/20 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional SME finance team meeting"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              
              {/* Overlay card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">From Reactive to Disciplined</p>
                    <p className="text-sm text-gray-600">Financial management that scales with you</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
