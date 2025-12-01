import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BarChart3, Building2, PieChart, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export const ExploreServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Business Valuation",
      link: "/valuation-services-singapore"
    },
    {
      icon: BarChart3,
      title: "Financial Modelling",
      link: "/financial-modeling-singapore"
    },
    {
      icon: TrendingUp,
      title: "M&A Valuation",
      link: "/ma-advisory-singapore"
    },
    {
      icon: PieChart,
      title: "Cap Table Management",
      link: "/cap-table-management-singapore"
    },
    {
      icon: Briefcase,
      title: "Virtual CFO Services",
      link: "/virtual-cfo-services-singapore"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Explore More <span className="text-brand-blue">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={service.link}>
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 group">
                    <CardContent className="p-6 text-center">
                      <div className="bg-brand-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-brand-orange" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-brand-orange transition-colors duration-300">
                        {service.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
