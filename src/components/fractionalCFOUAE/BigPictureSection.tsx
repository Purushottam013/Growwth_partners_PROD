import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  TrendingUp,
  Target,
  DollarSign,
  BarChart3,
  FileText,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ui/contact-modal";

export const BigPictureSection: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Cash Flow & Profitability Optimisation",
      description:
        "Ensure steady cash flow, reduce unnecessary expenses, and boost margins.",
    },
    {
      icon: Target,
      title: "Growth & Expansion Strategy",
      description:
        "Plan for regional or international growth with a structured financial approach.",
    },
    {
      icon: DollarSign,
      title: "Fundraising & Investor Support",
      description:
        "Get your financials investor-ready and raise capital with confidence.",
    },
    {
      icon: BarChart3,
      title: "Cost Control & Budgeting",
      description:
        "Identify where to cut costs and where to invest for sustainable growth.",
    },
    {
      icon: FileText,
      title: "Board & Stakeholder Reporting",
      description:
        "Present clear, data-driven financial reports for decision-making.",
    },
    {
      icon: Briefcase, 
      title: "Access to Fractional CFO Expertise",
      description:
        "Get top-tier CFO leadership without full-time cost—strategy, oversight, and financial clarity for any stage.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Big-Picture Thinking,{" "}
            <span className="text-[#FFB343]">Tailored for Your Business</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Growwth Partners, our fractional CFOs act as part of your team,
            helping you navigate challenges, identify opportunities, and build a
            strong financial future. If you're looking for an{" "}
            <span className="font-semibold text-[#FFB343]">
              outsourced CFO Dubai
            </span>{" "}
            partnership, we embed directly into your leadership so you get real
            strategic finance, not just accounting.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            High-Impact CFO Support,{" "}
            <span className="text-[#FFB343]">Without the Full-Time Cost</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white border-2 border-purple-100/50 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#FFB343]/10 p-3 rounded-lg flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-[#FFB343]" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-700">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-purple-50/50 via-white to-purple-50/30 border-2 border-purple-100 shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                This is the value of a{" "}
                <span className="font-semibold text-[#FFB343]">
                  fractional CFO
                </span>{" "}
                and{" "}
                <span className="font-semibold text-[#FFB343]">
                  outsourced CFO Dubai
                </span>{" "}
                style model: proven strategic finance without adding a full-time
                headcount.
              </p>
              <Button
                onClick={() => setContactModalOpen(true)}
                className="bg-[#FFB343] hover:bg-[#FFB343]/90 text-white rounded-full px-8 py-6 text-lg font-medium"
              >
                Schedule Your Free Consultation
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </section>
  );
};

export default BigPictureSection;
