import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCountry } from "@/contexts/CountryContext";
import { ServiceItem } from "@/data/servicesData";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  onHover: (serviceId: string | null) => void;
  isHovered: boolean;
}

const ServiceCard = ({ service, index, onHover, isHovered }: ServiceCardProps) => {
  const { getCountryUrl } = useCountry();
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        to={getCountryUrl(service.path)}
        onMouseEnter={() => onHover(service.id)}
        onMouseLeave={() => onHover(null)}
        className="block h-full"
      >
        <div
          className={`
            relative h-full p-6 rounded-2xl
            bg-white/10 backdrop-blur-lg
            border transition-all duration-500 ease-out
            group cursor-pointer overflow-hidden
            ${isHovered 
              ? `${service.theme.borderColor} shadow-xl ${service.theme.glowColor}` 
              : 'border-white/10 hover:border-white/20'
            }
          `}
        >
          {/* Gradient overlay on hover */}
          <div 
            className={`
              absolute inset-0 opacity-0 group-hover:opacity-100
              transition-opacity duration-500
              bg-gradient-to-br ${service.theme.gradient}
            `}
            style={{ opacity: isHovered ? 0.1 : 0 }}
          />

          {/* Icon */}
          <div 
            className={`
              relative w-14 h-14 rounded-xl mb-4 flex items-center justify-center
              transition-all duration-500
              ${isHovered ? service.theme.iconBg : 'bg-white/5'}
            `}
          >
            <Icon 
              className={`
                w-7 h-7 transition-all duration-500
                ${isHovered ? `text-${service.theme.primaryColor}-400` : 'text-white/70'}
              `}
              style={{ 
                color: isHovered ? `var(--${service.theme.primaryColor}-400, #fff)` : undefined 
              }}
            />
          </div>

          {/* Content */}
          <div className="relative">
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {service.description}
            </p>
            
            {/* Arrow indicator */}
            <div 
              className={`
                flex items-center gap-2 text-sm font-medium
                transition-all duration-300
                ${isHovered ? 'text-white translate-x-1' : 'text-slate-400'}
              `}
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Decorative corner accent */}
          <div 
            className={`
              absolute top-0 right-0 w-20 h-20 
              transition-all duration-500
              ${isHovered ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <div 
              className={`
                absolute top-0 right-0 w-full h-full
                bg-gradient-to-bl ${service.theme.gradient}
                opacity-20 rounded-bl-full
              `}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
