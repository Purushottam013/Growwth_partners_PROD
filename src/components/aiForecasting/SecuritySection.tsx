import { motion } from "framer-motion";
import { Shield, Users, FileCheck, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Enterprise-grade security",
    badge: "SOC2-ready",
    description:
      "Bank-level encryption, hardened infrastructure, and continuous monitoring for your financial data.",
  },
  {
    icon: Users,
    title: "Granular access control",
    badge: "Least privilege",
    description:
      "Define roles, restrict sensitive models, and keep stakeholders focused on what they actually need.",
  },
  {
    icon: FileCheck,
    title: "Complete audit trails",
    badge: "Trace every change",
    description:
      "Track every update to assumptions, models, and exports in a tamper-evident activity log.",
  },
  {
    icon: Lock,
    title: "Compliance-first design",
    badge: "For finance teams",
    description:
      "Built to support finance, risk, and compliance workflows across growing organizations.",
  },
];

export const SecuritySection = () => {
  return (
    <section
      className="
        py-20 lg:py-28
        bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900
        relative overflow-hidden
      "
    >
      {/* subtle gradient / glow on top */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-sky-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Security built for finance teams
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
            Security and{" "}
            <span className="bg-gradient-to-r from-sky-400 to-emerald-300 bg-clip-text text-transparent">
              compliance you can trust
            </span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-slate-300/90">
            Protect sensitive models, control who sees what, and stay
            audit-ready without slowing your team down.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-2xl border border-sky-100 bg-slate-900/60 px-5 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-b from-sky-500/0 via-sky-500/0 to-sky-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/30 group-hover:bg-sky-500/15 transition-colors">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  {feature.badge && (
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                      {feature.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-md font-semibold text-slate-50 mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs text-slate-300/90 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* reassurance row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-10 md:mt-12 flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left text-slate-300/90 text-xs md:text-sm"
        >
          <p>
            Encryption in transit and at rest, SSO-ready, and built for internal
            reviews with risk and compliance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
