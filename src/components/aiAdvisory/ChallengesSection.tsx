import { motion } from "framer-motion";
import { HelpCircle, Brain, ShieldCheck, FileSearch, Sparkles } from "lucide-react";

const challenges = [
  {
    icon: HelpCircle,
    text: "Where do we start",
  },
  {
    icon: FileSearch,
    text: "Which use cases make sense",
  },
  {
    icon: ShieldCheck,
    text: "How do we avoid risk and bad data",
  },
  {
    icon: Brain,
    text: "How do we get everyone to actually use it",
  },
];

const solutions = [
  {
    icon: Brain,
    title: "AI CFO",
    description: "A next-gen AI CFO that answers real financial questions in seconds",
  },
  {
    icon: FileSearch,
    title: "Error Detection",
    description: "AI-powered spreadsheet error detection inside Google Sheets",
  },
  {
    icon: ShieldCheck,
    title: "Anonymisation",
    description: "Tools that protect sensitive data before it touches AI",
  },
];

export const ChallengesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-indigo-50/40">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            The Challenge
          </span>
          <h2 className="heading-lg mb-4">
            Move From "We Should Use AI" To{" "}
            <span className="text-purple-600">"Here's Our Finance AI Plan"</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Most teams know they "should" be using AI in finance, but hit a wall at:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4">
                <challenge.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-800 font-medium text-lg">{challenge.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ryzup.ai combines:
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                <solution.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">{solution.title}</h4>
              <p className="text-purple-100 leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
