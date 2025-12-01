import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, BookOpen, Search } from "lucide-react";
import { Link } from "react-router-dom";

export const BusinessSolutionsSection = () => {
  const solutions = [
    {
      icon: FileText,
      title: "Corporate Secretary and Compliance Services",
      description: "Streamline governance with expert corporate secretary services and Singapore compliance support.",
      link: "/corporate-secretary-services-in-singapore",
      color: "brand-orange"
    },
    {
      icon: BookOpen,
      title: "Bookkeeping Services",
      description: "Simplify financial management with accurate bookkeeping so you can focus on strategic decisions.",
      link: "/bookkeeping-services-in-singapore",
      color: "brand-green"
    },
    {
      icon: Search,
      title: "Due Diligence Services",
      description: "Mitigate risks and make informed decisions with our due diligence support for acquisitions, fundraising, and expansion.",
      link: "/due-diligence-services-singapore",
      color: "brand-blue"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F0F9FF] to-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Explore Our Comprehensive <span className="text-brand-orange">Business Solutions</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={solution.link}>
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                    <CardContent className="p-6">
                      <div className={`bg-${solution.color}/10 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-7 w-7 text-${solution.color}`} />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-brand-orange transition-colors duration-300">
                        {solution.title}
                      </h3>
                      <p className="text-gray-700">
                        {solution.description}
                      </p>
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
