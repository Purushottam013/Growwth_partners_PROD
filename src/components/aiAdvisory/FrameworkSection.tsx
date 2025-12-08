import { motion } from "framer-motion";
import { Map, Brain, ShieldCheck, Users, CheckCircle, ArrowRight } from "lucide-react";

const frameworkSteps = [
  {
    number: "1",
    icon: Map,
    title: "Assess & Design Your AI Finance Roadmap",
    intro: "We start by mapping your current finance stack and workflows:",
    mapping: [
      "Where your data lives (Xero, Sheets, reports)",
      "How you forecast, report, and make decisions today",
      "Where manual work, bottlenecks, and risks sit",
    ],
    outcome: "You get a clear, phased AI roadmap for finance:",
    deliverables: [
      "Priority use cases (cash, P&L, budgeting, forecasting, risk)",
      "Recommended tools from the Ryzup.ai stack",
      "Change plan for your team so they know what's coming",
    ],
    summary: "This is your strategic blueprint for AI transformation in finance, tailored to your Singapore business.",
  },
  {
    number: "2",
    icon: Brain,
    title: "Implement AI CFO As Your Decision Engine",
    intro: "Next, we embed Ryzup AI CFO as your central decision-intelligence layer.",
    features: [
      "Connects to your accounting data (with Xero integration)",
      "Turns it into real-time dashboards, cash flow, and P&L views",
      "Lets you ask questions in plain English",
    ],
    questions: [
      '"How is my cash flow trending"',
      '"Do we have budget to hire this role"',
      '"What\'s our financial outlook next quarter based on current trends"',
    ],
    useCases: [
      "Board and investor prep",
      "Hiring and cost decisions",
      "Scenario thinking around growth, funding, and runway",
    ],
    summary: "Instead of static reports, you get live decision intelligence.",
  },
  {
    number: "3",
    icon: ShieldCheck,
    title: "Fix Data Quality And Privacy With Error Detector + Anonymiser",
    intro: "AI transformation fails if the data is wrong or unsafe. Ryzup.ai tackles both.",
    errorDetector: {
      title: "Error Detector Agent – Data You Can Trust",
      description: "The RyzUp Sheets Error Detector Agent scans Google Sheets for formula errors, mismatches, and hidden inconsistencies, with live monitoring and fix suggestions.",
      benefits: [
        "Fewer spreadsheet mistakes feeding your models",
        "Lower risk of financial misstatements",
        "Stronger control environment for audits and reviews",
      ],
    },
    anonymiser: {
      title: "Anonymiser – Privacy By Design",
      description: "The Anonymiser feature masks sensitive names and identifiers before AI processing, so you can safely analyse real financial patterns without exposing client or company identities.",
    },
    summary: "For Singapore finance teams dealing with strict internal and external expectations, this is the backbone of responsible AI use.",
  },
  {
    number: "4",
    icon: Users,
    title: "Change Enablement For Your Finance Team",
    intro: "Tools alone don't transform anything. People do.",
    enablement: [
      "Training your finance team on real AI CFO use cases (cash, hiring, budget, outlook)",
      "Helping you replace manual, recurring workflows with AI-powered ones in Sheets and dashboards",
      'Co-building standard "AI playbooks" for recurring decisions',
    ],
    playbooks: [
      "Monthly performance reviews",
      "Budget re-forecasts",
      "Board and investor packs",
    ],
    summary: "The goal: AI becomes part of how finance works day-to-day, not a side project.",
  },
];

export const FrameworkSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
            <Map className="w-4 h-4" />
            Our Framework
          </span>
          <h2 className="heading-lg mb-4">
            Our AI Finance{" "}
            <span className="text-indigo-600">Transformation Framework</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {frameworkSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50/50 rounded-3xl p-8 md:p-10 border border-indigo-100">
                <div className="flex items-start gap-6">
                  <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="md:hidden w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
                        {step.number}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6">{step.intro}</p>

                    {step.mapping && (
                      <div className="mb-6">
                        <ul className="space-y-2">
                          {step.mapping.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {step.outcome && (
                      <div className="mb-6">
                        <p className="font-semibold text-gray-800 mb-3">{step.outcome}</p>
                        <ul className="space-y-2">
                          {step.deliverables?.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {step.features && (
                      <div className="mb-6">
                        <p className="font-semibold text-gray-800 mb-3">Ryzup AI CFO already:</p>
                        <ul className="space-y-2">
                          {step.features.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {step.questions && (
                      <div className="mb-6 bg-white/70 rounded-xl p-4 border border-indigo-100">
                        <p className="font-semibold text-gray-800 mb-3">Ask questions like:</p>
                        {step.questions.map((q, i) => (
                          <p key={i} className="text-indigo-600 italic mb-1">{q}</p>
                        ))}
                      </div>
                    )}

                    {step.useCases && (
                      <div className="mb-6">
                        <p className="font-semibold text-gray-800 mb-3">For Singapore CFOs and founders, this becomes the daily cockpit for:</p>
                        <ul className="space-y-2">
                          {step.useCases.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {step.errorDetector && (
                      <div className="mb-6">
                        <div className="bg-white rounded-xl p-6 border border-indigo-100 mb-4">
                          <h4 className="font-bold text-gray-800 mb-2">{step.errorDetector.title}</h4>
                          <p className="text-gray-600 mb-4">{step.errorDetector.description}</p>
                          <p className="font-semibold text-gray-800 mb-2">That means:</p>
                          <ul className="space-y-2">
                            {step.errorDetector.benefits.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {step.anonymiser && (
                          <div className="bg-white rounded-xl p-6 border border-indigo-100">
                            <h4 className="font-bold text-gray-800 mb-2">{step.anonymiser.title}</h4>
                            <p className="text-gray-600">{step.anonymiser.description}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {step.enablement && (
                      <div className="mb-6">
                        <p className="font-semibold text-gray-800 mb-3">Ryzup.ai supports change adoption by:</p>
                        <ul className="space-y-2">
                          {step.enablement.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {step.playbooks && (
                      <div className="mb-6 bg-white/70 rounded-xl p-4 border border-indigo-100">
                        <p className="font-semibold text-gray-800 mb-3">AI playbooks for recurring decisions like:</p>
                        <ul className="space-y-2">
                          {step.playbooks.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <p className="text-gray-800 font-medium bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-3 rounded-lg border-l-4 border-indigo-500">
                      {step.summary}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
