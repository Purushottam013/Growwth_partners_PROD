import { motion, AnimatePresence } from "framer-motion";
import { ServiceItem, defaultTheme } from "@/data/servicesData";

interface DynamicBackgroundProps {
  activeService: ServiceItem | null;
}

const DynamicBackground = ({ activeService }: DynamicBackgroundProps) => {
  const theme = activeService?.theme || defaultTheme;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div 
        className={`
          absolute inset-0 transition-all duration-700 ease-out
          bg-gradient-to-br ${theme.bgGradient}
        `}
      />

      {/* Animated orbs */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService?.id || 'default'}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Primary orb */}
          <div 
            className={`
              absolute -top-40 -right-40 w-96 h-96 rounded-full
              bg-gradient-to-br ${theme.gradient}
              opacity-20 blur-3xl
              animate-pulse-slow
            `}
          />
          
          {/* Secondary orb */}
          <div 
            className={`
              absolute -bottom-40 -left-40 w-80 h-80 rounded-full
              bg-gradient-to-tr ${theme.gradient}
              opacity-15 blur-3xl
              animate-float-slow
            `}
          />

          {/* Tertiary orb */}
          <div 
            className={`
              absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
              w-[600px] h-[600px] rounded-full
              bg-gradient-radial ${theme.gradient}
              opacity-5 blur-3xl
            `}
          />
        </motion.div>
      </AnimatePresence>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Service-specific patterns */}
      {activeService && (
        <AnimatePresence>
          <motion.div
            key={`pattern-${activeService.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {/* Crypto pattern */}
            {activeService.id === 'crypto-web3-finance' && (
              <div className="absolute inset-0">
                <div className="absolute top-20 left-[10%] w-4 h-4 border border-orange-500/30 rotate-45" />
                <div className="absolute top-40 right-[15%] w-6 h-6 border border-orange-500/20 rotate-12" />
                <div className="absolute bottom-32 left-[20%] w-3 h-3 bg-orange-500/20 rounded-full" />
                <div className="absolute bottom-48 right-[25%] w-5 h-5 border border-orange-500/25" />
              </div>
            )}

            {/* Ecommerce pattern */}
            {(activeService.id === 'ecommerce-finance' || activeService.id === 'ecommerce-accounting') && (
              <div className="absolute inset-0">
                <div className="absolute top-24 left-[12%] w-5 h-5 border-2 border-green-500/30 rounded" />
                <div className="absolute top-48 right-[18%] w-4 h-4 bg-green-500/20 rounded-full" />
                <div className="absolute bottom-36 left-[25%] w-6 h-6 border border-green-500/25" />
              </div>
            )}

            {/* SaaS/Cloud pattern */}
            {(activeService.id === 'saas-finance' || activeService.id === 'virtual-cfo' || activeService.id === 'virtual-finance-team') && (
              <div className="absolute inset-0">
                <div className="absolute top-28 left-[8%] w-8 h-4 border border-blue-500/30 rounded-full" />
                <div className="absolute top-52 right-[12%] w-6 h-3 bg-blue-500/15 rounded-full" />
                <div className="absolute bottom-40 left-[18%] w-10 h-5 border border-blue-500/20 rounded-full" />
              </div>
            )}

            {/* AI pattern */}
            {activeService.category === 'AI & Technology' && (
              <div className="absolute inset-0">
                <div className="absolute top-32 left-[15%] w-2 h-2 bg-violet-500/40 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                <div className="absolute top-56 right-[20%] w-2 h-2 bg-violet-500/30 rounded-full animate-ping" style={{ animationDuration: '2.5s' }} />
                <div className="absolute bottom-44 left-[22%] w-2 h-2 bg-violet-500/35 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                <svg className="absolute top-40 left-[10%] w-20 h-20 opacity-10" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-violet-400" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-violet-400" />
                </svg>
              </div>
            )}

            {/* Startup pattern */}
            {(activeService.id === 'startup-cfo' || activeService.id === 'startup-finance-services') && (
              <div className="absolute inset-0">
                <svg className="absolute top-28 right-[15%] w-16 h-16 opacity-10 text-fuchsia-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default DynamicBackground;
