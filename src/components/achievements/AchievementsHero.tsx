
import { motion } from "framer-motion";
import { Award, Trophy, Star } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import goldenGlobeTrophy from "@/assets/achievements/golden-globe-trophy.jpg";

export const AchievementsHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-dark/90 text-white py-32 overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full text-brand-orange text-sm font-semibold mb-6"
            >
              <Star className="w-4 h-4" />
              Award-Winning Excellence
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Independent recognition for fractional CFO{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">
                excellence, innovation, and leadership
              </span>{" "}
              across APAC
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our work is measured by outcomes for clients first. The awards below reflect that impact being recognised by respected industry platforms.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Trophy, label: "Awards", value: "4+" },
                { icon: Award, label: "Years", value: "2021-2024" },
                { icon: Star, label: "Recognition", value: "APAC" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glowing effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/30 to-yellow-500/30 rounded-2xl blur-2xl transform scale-95"></div>
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden border border-brand-orange/20 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <OptimizedImage
                  src={goldenGlobeTrophy}
                  alt="Award-winning fractional CFO services"
                  className="w-full h-auto"
                  width={600}
                  height={800}
                />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -top-6 -left-6 bg-white text-brand-dark px-6 py-3 rounded-full shadow-lg border-2 border-brand-orange"
              >
                <div className="text-sm font-semibold">M&A Awards</div>
                <div className="text-xs text-gray-600">2024 Winner</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-brand-orange to-yellow-500 text-white px-6 py-3 rounded-full shadow-lg"
              >
                <div className="text-sm font-semibold">Best CFO Services</div>
                <div className="text-xs">Golden Globe Tigers</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent"></div>
    </section>
  );
};
