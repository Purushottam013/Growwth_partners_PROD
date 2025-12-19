import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Clock, Eye, Users, TrendingDown } from "lucide-react";

const challenges = [
  {
    icon: RefreshCw,
    title: "Complex Transaction Reconciliation",
    description: "High-volume transactions create reconciliation bottlenecks"
  },
  {
    icon: Clock,
    title: "Inaccurate Revenue Recognition",
    description: "Delayed or incorrect revenue timing and classification"
  },
  {
    icon: AlertTriangle,
    title: "Weak Internal Controls",
    description: "Gaps in controls leading to audit and compliance issues"
  },
  {
    icon: Eye,
    title: "Poor Risk Visibility",
    description: "Limited insight into risk exposure and capital needs"
  },
  {
    icon: Users,
    title: "Regulatory Expectations",
    description: "Difficulty meeting regulator and investor requirements"
  },
  {
    icon: TrendingDown,
    title: "Scaling Without Discipline",
    description: "Operational growth without financial infrastructure"
  }
];

const ChallengesSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
            Common Challenges
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Financial Challenges in Fintech Companies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Without fintech-specific finance expertise, companies often face issues that can delay licensing, partnerships, and funding.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-auto">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 bg-white rounded-2xl border border-slate-200 hover:border-red-200 shadow hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-100/50 to-orange-100/30 rounded-bl-full -z-0" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-red-500 group-hover:to-orange-500 transition-all duration-300">
                  <challenge.icon className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{challenge.title}</h3>
                <p className="text-slate-600">{challenge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
