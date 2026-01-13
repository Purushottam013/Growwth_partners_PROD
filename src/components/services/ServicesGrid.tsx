import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData, serviceCategories, ServiceItem } from "@/data/servicesData";
import ServiceCard from "./ServiceCard";

interface ServicesGridProps {
  onServiceHover: (serviceId: string | null) => void;
  hoveredServiceId: string | null;
}

const ServicesGrid = ({ onServiceHover, hoveredServiceId }: ServicesGridProps) => {
  const [activeCategory, setActiveCategory] = useState("All Services");

  const filteredServices = activeCategory === "All Services"
    ? servicesData
    : servicesData.filter(service => service.category === activeCategory);

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium
                transition-all duration-300
                ${activeCategory === category
                  ? 'bg-white text-slate-900'
                  : 'bg-white/10 text-white hover:bg-white/20'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
          >
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onHover={onServiceHover}
                isHovered={hoveredServiceId === service.id}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400">No services found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;
