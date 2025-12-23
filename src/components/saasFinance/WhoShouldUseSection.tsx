import { motion } from "framer-motion";
import { 
  Building2, 
  Users, 
  Rocket, 
  TrendingUp, 
  Globe,
  HelpCircle
} from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "B2B and B2C SaaS startups",
  },
  {
    icon: Users,
    title: "Subscription-based and usage-based platforms",
  },
  {
    icon: Rocket,
    title: "SaaS companies preparing for fundraising",
  },
  {
    icon: TrendingUp,
    title: "High-growth SaaS businesses scaling teams",
  },
  {
    icon: Globe,
    title: "Global SaaS companies operating from Singapore",
  }
];

const questions = [
  "Is ARR growth translating into value?",
  "How long is our runway at current burn?",
  "Are churn and CAC under control?"
];

const WhoShouldUseSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              Ideal For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Who Should Use SaaS Finance Services?
            </h2>
            
            <div className="space-y-4">
              {audiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg text-slate-700 font-medium">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-orange-400" />
              <h3 className="text-2xl font-bold text-white">
                Do You Struggle to Answer?
              </h3>
            </div>
            
            <div className="space-y-4 mb-8">
              {questions.map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-lg text-slate-300">{question}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-orange-500/20 border border-orange-500/30 rounded-xl p-6">
              <p className="text-orange-200 text-lg font-medium">
                If yes, you need SaaS-specific finance leadership.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUseSection;
