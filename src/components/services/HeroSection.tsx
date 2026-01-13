import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-slate-300">
              Trusted by 500+ Companies Across Singapore, UAE & Australia
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 mb-4">
            Comprehensive financial solutions designed for startups, SMEs, and growing businesses. 
            From CFO advisory to AI-powered finance automation.
          </p>

          <p className="max-w-2xl mx-auto text-base text-slate-400">
            Hover over a service to explore. Click to learn more.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
