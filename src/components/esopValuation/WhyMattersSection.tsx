import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Shield, TrendingUp, Users, Target } from "lucide-react";

export const WhyMattersSection = () => {
  const reasons = [
    {
      icon: Users,
      title: "Ensures Fair Allocation of Equity",
      description: "Employees receive options based on a realistic, independent valuation.",
      color: "brand-orange"
    },
    {
      icon: Shield,
      title: "Required for Compliance",
      description: "Singapore startups issuing ESOPs must maintain proper FMV documentation.",
      color: "brand-green"
    },
    {
      icon: TrendingUp,
      title: "Supports Fundraising & Future Rounds",
      description: "Investors prefer companies with solid valuation hygiene and proper pre-money and post-money valuation discipline.",
      color: "brand-blue"
    },
    {
      icon: CheckCircle2,
      title: "Reduces Legal or HR Misalignment",
      description: "A clear FMV avoids internal conflicts, disputes, and confusion.",
      color: "brand-orange"
    },
    {
      icon: Target,
      title: "Protects Founders from Unexpected Dilution",
      description: "Accurate valuation ensures ESOP pool planning aligns with long-term strategy.",
      color: "brand-green"
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
            Why ESOP Valuation <span className="text-brand-orange">Matters</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};
