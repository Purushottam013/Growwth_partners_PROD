import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Transform Your Finance with AI Precision</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Use of AI in <span className="text-primary">Finance</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              RyzUp brings the power of AI in finance directly into your daily workflow. Get instant clarity on cash flow, forecasting, spend, and performance without manual spreadsheets, slow reporting, or guesswork. Finance teams, founders, and operators use RyzUp to work faster, cut errors, and make better decisions in real time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => window.open('https://workspace.google.com/u/0/marketplace/app/ryzup_sheets/1047771589087?flow_type=2&utm_source=website&utm_medium=click&utm_campaign=promotion&utm_content=cta', '_blank')}
              >
                Get Started Free
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-lg shadow-lg">
                  <TrendingUp className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">Automated Forecasting</h3>
                  <p className="text-sm text-muted-foreground">Real-time predictions</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg">
                  <Zap className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">Instant Insights</h3>
                  <p className="text-sm text-muted-foreground">AI-powered analysis</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg col-span-2">
                  <Sparkles className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">Smart Anomaly Detection</h3>
                  <p className="text-sm text-muted-foreground">Catch issues before they become problems</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
