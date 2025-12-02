import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, LineChart, GitBranch, RefreshCw, ArrowRight } from "lucide-react";

export const WhatRyzupDoesSection = () => {
  const features = [
    {
      icon: Bot,
      title: "Automated AI Forecasting for Singapore Businesses",
      description:
        "Uses your historical revenue, cost, and cash data. Learns seasonality and spending behaviour. Produces forward-looking projections in minutes.",
      color: "brand-green",
    },
    {
      icon: LineChart,
      title: "Predictive Finance Models You Can Trust",
      description:
        "Build predictive finance models for revenue, margins, and cash. Layer in hiring plans, pricing changes, new markets, or ad spend. See the financial impact instantly.",
      color: "brand-blue",
    },
    {
      icon: GitBranch,
      title: "Scenario Modelling Without Spreadsheet Chaos",
      description:
        "Create scenarios like 'Aggressive Growth', 'Base Case', 'Lean Mode'. Compare side by side: revenue, burn, runway, EBITDA. Export ready-to-share views.",
      color: "brand-orange",
    },
    {
      icon: RefreshCw,
      title: "Live Sync With Your Existing Tools",
      description:
        "Pulls from accounting and performance tools you already use. Updates forecasts as new data comes in. Keeps one source of truth for all your numbers.",
      color: "brand-green",
    },
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case "brand-blue":
        return {
          bg: "bg-brand-blue/10",
          text: "text-brand-blue",
          border: "border-brand-blue/20",
        };
      case "brand-orange":
        return {
          bg: "bg-brand-orange/10",
          text: "text-brand-orange",
          border: "border-brand-orange/20",
        };
      case "brand-green":
        return {
          bg: "bg-brand-green/10",
          text: "text-brand-green",
          border: "border-brand-green/20",
        };
      default:
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/20",
        };
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-green/5 via-background to-brand-blue/5">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What RyzUp's AI Forecasting{" "}
            <span className="text-brand-green">Actually Does</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Think of RyzUp as your forecasting autopilot. You decide the
            direction. AI handles the heavy lifting.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${colors.bg} rounded-2xl p-6 lg:p-8 shadow-lg border ${colors.border} hover:shadow-xl transition-shadow`}
              >
                <div
                  className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}
                >
                  <feature.icon className={`w-7 h-7 ${colors.text}`} />
                </div>

                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
