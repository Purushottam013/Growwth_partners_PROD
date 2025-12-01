import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Globe, 
  Shield, 
  MessageSquare, 
  TrendingUp,
  FileText,
  Users,
  Bell,
  BarChart,
  Calculator,
  CheckCircle2,
  Scale,
  UserCheck,
  ArrowRight,
  Award
} from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";
import { Link } from "react-router-dom";
import { useCountry } from "@/contexts/CountryContext";
import { FaqSection } from "@/components/accounting/FaqSection";
import esopHeroImage from "@/assets/esop-hero.jpg";

const EsopAdvisorySingapore = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const { getCountryUrl } = useCountry();

  const faqs = [
    {
      question: "How can an ESOP benefit my company's growth strategy?",
      answer: "ESOPs align employee interests with company success, fostering motivation and commitment that drive sustainable growth."
    },
    {
      question: "What industries benefit the most from implementing ESOPs?",
      answer: "ESOPs work well across sectors, but technology, professional services, and high-growth Singapore startups gain strong advantages."
    },
    {
      question: "How does employee participation in ESOPs impact company culture?",
      answer: "ESOPs create a culture of ownership, collaboration, and shared success, enhancing overall work environment and job satisfaction."
    },
    {
      question: "Are there tax benefits associated with implementing an ESOP?",
      answer: "Yes, ESOPs can offer tax advantages for both the company and employees. Our tax advisory team can guide you through Singapore's specific rules."
    },
    {
      question: "What is the typical timeframe for implementing an ESOP?",
      answer: "Timelines vary but usually take a few weeks. Our team ensures a smooth, efficient, and compliant rollout tailored to Singapore regulations."
    },
    {
      question: "How does Growwth's ESOP advisory stand out?",
      answer: "Growwth offers tailored solutions, global expertise, and a proven methodology across Singapore and APAC, ensuring strategic alignment and compliance."
    },
    {
      question: "What ongoing support does Growwth provide after ESOP implementation?",
      answer: "We offer continuous support including administration, performance analysis, and additional add-on services to enhance long-term ESOP success."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/esop-advisory-singapore/#faq",
        mainEntity: faqs.map(faq => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      },
      {
        "@type": "Organization",
        "@id": "https://growwthpartners.com/#organization",
        name: "Growwth Partners",
        url: "https://growwthpartners.com",
        areaServed: ["Singapore", "United Arab Emirates", "Australia"],
        serviceArea: [
          {
            "@type": "AdministrativeArea",
            name: "Singapore",
          },
          {
            "@type": "Country",
            name: "United Arab Emirates",
          },
          {
            "@type": "Country",
            name: "Australia",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "jd@growwthpartners.com",
            telephone: "+65 9861 5600",
            contactType: "business",
            areaServed: "SG",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "65 Chulia Street",
          addressLocality: "Singapore",
          postalCode: "049513",
          addressCountry: "SG",
        },
      },
    ],
  };

  const benefits = [
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Customised strategies to suit your unique business needs and goals, whether you are a startup or a regional SME.",
      color: "orange"
    },
    {
      icon: Globe,
      title: "Global Expertise, Local Insight",
      description: "Navigate international complexities with local precision for seamless ESOP implementation Singapore.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Comprehensive Compliance",
      description: "Hassle-free management of global payroll, tax, social security, and labour law compliance, aligned with Singapore regulations.",
      color: "green"
    },
    {
      icon: MessageSquare,
      title: "Effective Communication Strategies",
      description: "Clear and engaging communication plans ensure employees fully understand the value of their participation.",
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "Strategic Objective Alignment",
      description: "Beyond implementation, our services align ESOPs with broader business objectives to support long-term performance.",
      color: "indigo"
    }
  ];

  const services = [
    { icon: FileText, text: "Designing Employee Stock Incentive Plans" },
    { icon: FileText, text: "Documenting Employee Stock Incentive Plans" },
    { icon: Bell, text: "Implementing and communicating with employees" },
    { icon: Users, text: "Administering Employee Stock Incentive Plans" },
    { icon: Calculator, text: "Handling accounting and valuation" },
    { icon: Shield, text: "Ensuring regulatory compliance" },
    { icon: BarChart, text: "Offering tax advisory services" }
  ];

  const blogPosts = [
    {
      title: "AI in Finance for CFOs in Singapore",
      slug: "/ai-in-finance-for-cfos-singapore",
      description: "Discover how AI is transforming financial operations and decision-making for CFOs across Singapore."
    },
    {
      title: "Taxation in Singapore: A Complete Guide for Small Business Owners",
      slug: "/taxation-in-singapore-a-complete-guide-for-small-business-owners",
      description: "Navigate Singapore's tax landscape with our comprehensive guide designed specifically for small business owners."
    },
    {
      title: "Various Funding Options Available for Startups",
      slug: "/various-funding-options-available-for-startups",
      description: "Explore diverse funding opportunities to fuel your startup's growth journey in Singapore and beyond."
    }
  ];

  return (
    <Layout>
      <SEOhelper
        title="ESOP Advisory Services in Singapore | Expert Startup ESOP Support"
        description="Get expert ESOP advisory services in Singapore. We help startups design, structure, and implement employee stock option plans that attract and retain top talent."
        keywords="esop advisory singapore, employee stock options singapore, esop consulting singapore, esop planning for startups, esop implementation singapore"
        canonicalUrl="https://growwthpartners.com/esop-advisory-singapore"
        structuredData={structuredData}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                  Crafting, executing, and managing{" "}
                  <span className="text-primary">Employee Stock Incentive Plans</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Retain talent, motivate teams, and instill ownership with expert ESOP advisory for enhanced performance and competitiveness in your company.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Our expert team empowers businesses in Singapore and globally to optimise compensation structures, implement ESOPs with confidence, and navigate compliance seamlessly. We support both established companies and fast-growing startups with end-to-end ESOP advisory services Singapore.
                </p>
                <Button
                  onClick={() => setContactModalOpen(true)}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8"
                >
                  Enquire Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={esopHeroImage}
                    alt="ESOP Advisory Services Singapore"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Sets Our ESOP Advisory Services Apart */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                What Sets Our ESOP Advisory Services Singapore Apart?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/50">
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <benefit.icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tailored Services */}
        <section className="py-20 bg-secondary/5">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Tailored Services for Your Unique Business
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These services support both early-stage companies exploring ESOP planning for startups and mature businesses optimising existing plans.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-lg font-medium text-foreground">{service.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ESOP Tailored Solutions - Pricing Table */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                ESOP Tailored Solutions for Every Need
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose a plan that aligns with your business vision and employee engagement goals. Our tiered options help companies of all sizes access reliable ESOP consulting Singapore.
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="min-w-[800px]"
              >
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="p-6 text-left text-lg font-bold">ESOP Services</th>
                      <th className="p-6 text-center text-lg font-bold">Basic</th>
                      <th className="p-6 text-center text-lg font-bold">Advanced</th>
                      <th className="p-6 text-center text-lg font-bold border-2 border-accent">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground">
                    <tr className="border-b border-border">
                      <td className="p-6 font-semibold">Plan Design</td>
                      <td className="p-6 text-center">Basic design</td>
                      <td className="p-6 text-center">Detailed and tailored design</td>
                      <td className="p-6 text-center bg-accent/5">Highly detailed and customised design</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/30">
                      <td className="p-6 font-semibold">Documentation Assistance</td>
                      <td className="p-6 text-center">Essential support</td>
                      <td className="p-6 text-center">Comprehensive assistance</td>
                      <td className="p-6 text-center bg-accent/5">Complete support</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-6 font-semibold">Implementation & Communication</td>
                      <td className="p-6 text-center">Basic strategy</td>
                      <td className="p-6 text-center">Comprehensive strategy</td>
                      <td className="p-6 text-center bg-accent/5">Tailored and sophisticated strategies</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/30">
                      <td className="p-6 font-semibold">Administration of ESOP</td>
                      <td className="p-6 text-center">Standard support</td>
                      <td className="p-6 text-center">Enhanced services</td>
                      <td className="p-6 text-center bg-accent/5">Premium-level administration</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-6 font-semibold">Accounting and Valuation</td>
                      <td className="p-6 text-center">Basic support</td>
                      <td className="p-6 text-center">Advanced support</td>
                      <td className="p-6 text-center bg-accent/5">Premium-level support</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/30">
                      <td className="p-6 font-semibold">Regulatory Compliance</td>
                      <td className="p-6 text-center">Essential support</td>
                      <td className="p-6 text-center">Robust support</td>
                      <td className="p-6 text-center bg-accent/5">Comprehensive support</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-semibold">Tax Advisory Services</td>
                      <td className="p-6 text-center">General advisory</td>
                      <td className="p-6 text-center">In-depth advisory</td>
                      <td className="p-6 text-center bg-accent/5">Customised and strategic advisory</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Premium Add-On Services */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Premium Add-On Services
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 border-primary/20">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Scale className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Legal Advisory Services</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Expert legal consultation to ensure all ESOP-related agreements and documentation comply with current Singapore regulations and industry best practices.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 border-primary/20">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <UserCheck className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Dedicated Relationship Manager</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Personalised support with a dedicated professional serving as a direct point of contact for seamless communication and fast issue resolution.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Happy Clients */}
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
                Our Happy Clients
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Not trusting our words? Hear what our clients are saying about us and our services. We support clients across Singapore, Southeast Asia, India, and global markets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
                <CardContent className="p-12">
                  <Award className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Trusted by Leading Companies Across APAC
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our ESOP advisory services have helped numerous startups and established companies successfully implement employee stock incentive plans, driving growth and retention.
                  </p>
                  <Link to={getCountryUrl("/success-stories")}>
                    <Button variant="outline" size="lg" className="font-semibold">
                      Read Success Stories
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container-custom">
            <FaqSection faqs={faqs} />
          </div>
        </section>

        {/* Explore Our Comprehensive Business Solutions */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Explore Our Comprehensive Business Solutions
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link to={getCountryUrl("/corporate-secretary")}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50">
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <Shield className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">Corporate Secretary and Compliance Services</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Streamline governance with expert corporate secretary services and Singapore compliance support.
                      </p>
                      <div className="mt-6 flex items-center text-primary font-semibold">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={getCountryUrl("/bookkeeping")}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50">
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <FileText className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">Bookkeeping Services</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Simplify financial management with accurate bookkeeping so you can focus on strategic decisions.
                      </p>
                      <div className="mt-6 flex items-center text-primary font-semibold">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link to={getCountryUrl("/valuation-services-singapore")}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50">
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <BarChart className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">Due Diligence Services</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Mitigate risks and make informed decisions with our due diligence support for acquisitions, fundraising, and expansion.
                      </p>
                      <div className="mt-6 flex items-center text-primary font-semibold">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* From Our Experts - Blog Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                From Our Experts. Read Now
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={getCountryUrl(post.slug)}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                      <CardContent className="p-8">
                        <div className="mb-6">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <FileText className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {post.description}
                        </p>
                        <div className="flex items-center text-primary font-semibold">
                          Read Article <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen} 
      />
    </Layout>
  );
};

export default EsopAdvisorySingapore;
