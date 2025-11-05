import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, TrendingUp, Zap } from "lucide-react";

export const WhoBenefitsSection = () => {
  const beneficiaries = [
    {
      icon: Users,
      title: "Founders and CEOs",
      description: "You get instant visibility into burn, runway, and where money is going.",
    },
    {
      icon: Briefcase,
      title: "CFOs and Finance Leaders",
      description: "You scale strategic finance without scaling headcount.",
    },
    {
      icon: TrendingUp,
      title: "Marketing and Growth Teams",
      description: "You see spend vs return clearly, across channels and timelines.",
    },
    {
      icon: Zap,
      title: "Operators in High Growth Environments",
      description: "You stop reacting and start steering.",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who Benefits Most From AI in Finance
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {beneficiaries.map((beneficiary, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <beneficiary.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{beneficiary.title}</h3>
                  <p className="text-muted-foreground">{beneficiary.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-primary/5 p-8 rounded-xl max-w-4xl mx-auto"
        >
          <p className="text-lg mb-6">
            If you are still running the company on spreadsheets, you are carrying risk you do not need to carry anymore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.open('https://workspace.google.com/u/0/marketplace/app/ryzup_sheets/1047771589087?flow_type=2&utm_source=website&utm_medium=click&utm_campaign=promotion&utm_content=cta', '_blank')}
            >
              Get Started Free
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.location.href = '/contact-us'}
            >
              Request a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
