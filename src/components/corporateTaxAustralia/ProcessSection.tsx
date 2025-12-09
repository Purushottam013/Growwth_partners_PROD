import { motion } from "framer-motion";
import {
  Search,
  Calculator,
  FileCheck,
  BarChart3,
  RefreshCw,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Initial Review",
    description:
      "We assess prior lodgements, your financials and current structure.",
  },
  {
    step: "02",
    icon: Calculator,
    title: "Compute and Plan",
    description:
      "We prepare your tax computation, apply concessions, and map legal savings.",
  },
  {
    step: "03",
    icon: FileCheck,
    title: "ATO Lodgement",
    description:
      "We finalise and lodge your return, managing timelines and any ATO clarifications.",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Year-End Reporting",
    description:
      "You receive a clear tax summary, supporting schedules and recommendations.",
  },
  {
    step: "05",
    icon: RefreshCw,
    title: "Ongoing Compliance",
    description:
      "Quarterly check-ins keep BAS, PAYG and record-keeping aligned with your business tax compliance needs.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#06C0A9]/10 text-[#06C0A9] rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#06C0A9]" />
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-4 mb-3">
            How We Work With You
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            A clear five-step approach to corporate tax filing in Australia,
            from first review to ongoing compliance.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop connection line */}
          <div className="hidden lg:block absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-[#06C0A9]/10 via-[#06C0A9]/40 to-[#06C0A9]/10 -translate-y-1/2 pointer-events-none" />

          {/* Steps */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector dot for desktop */}
                <div className="hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-gray-900 border border-[#06C0A9]/60 shadow-[0_0_0_4px_rgba(6,192,169,0.25)]" />
                </div>

                <div className="group bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 md:p-7 border border-gray-800/60 shadow-[0_18px_45px_rgba(0,0,0,0.55)] hover:border-[#06C0A9]/70 hover:shadow-[0_20px_55px_rgba(6,192,169,0.25)] transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium text-gray-300 tracking-wide uppercase">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#06C0A9]" />
                        Step {step.step}
                      </span>
                      <h3 className="text-lg md:text-xl font-semibold mt-1 break-words">
                        {step.title}
                      </h3>
                    </div>

                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#06C0A9]/10 border border-[#06C0A9]/30 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-5 h-5 md:w-6 md:h-6 text-[#06C0A9]" />
                    </div>
                  </div>

                  <p className="text-sm md:text-[15px] text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
