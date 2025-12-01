import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Lightbulb, Briefcase, MessageCircle, ArrowRight } from "lucide-react";

interface WhyChooseSectionProps {
  onScheduleClick: () => void;
}

export const WhyChooseSection = ({ onScheduleClick }: WhyChooseSectionProps) => {
  const reasons = [
    {
      icon: Award,
      title: "200+ Successful Valuations Completed",
      description: "Deep experience across startups, SMEs, and high-growth companies.",
      color: "brand-orange"
    },
    {
      icon: Shield,
      title: "Independent and Compliant FMV Reports",
      description: "Built to meet investor expectations and Singapore standards.",
      color: "brand-green"
    },
    {
      icon: Lightbulb,
      title: "Strong Understanding of Startup Finance",
      description: "Hands-on expertise across equity valuation services Singapore, fundraising, and ESOP structuring.",
      color: "brand-blue"
    },
    {
      icon: Briefcase,
      title: "Integrated CFO and Financial Planning Support",
      description: "From ESOP valuation to cap table planning and fundraising strategy, we support your full finance stack.",
      color: "brand-orange"
    },
    {
      icon: MessageCircle,
      title: "We don't just calculate valuation.",
      description: "We explain it in a way founders can actually use.",
      color: "brand-green"
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
            Why Choose <span className="text-brand-orange">Growwth Partners?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className={`bg-${reason.color}/10 w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
                      <Icon className={`h-7 w-7 text-${reason.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {reason.title}
                    </h3>
                    <p className="text-gray-700">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button
            onClick={onScheduleClick}
            size="lg"
            className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold text-lg px-8 rounded-full"
          >
            Schedule Free 1-1 Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
