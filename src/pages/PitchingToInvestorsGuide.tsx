import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  Lightbulb,
  ArrowRight,
  Target,
  Users,
  Rocket,
  TrendingUp,
  DollarSign,
  Building2,
  Landmark,
  Globe,
  Handshake,
  Presentation,
  MessageSquare,
  Search,
  Calendar,
  Mail,
  Network,
  Briefcase,
  Megaphone,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import SEOhelper from "@/components/SEOhelper";
import signsBusinessNeedsInvestors from "@/assets/guides/signs-business-needs-investors.jpeg";
import howToMakePitchDeck from "@/assets/guides/how-to-make-pitch-deck.jpeg";

const PitchingToInvestorsGuide = () => {
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Guide",
        "@id": "https://growwthpartners.com/guide/pitching-to-investors-guide/#guide",
        "name": "The Most Comprehensive Guide to Pitching to Investors",
        "description": "Everything you need to know about pitching to investors, including when is the right time to seek for investment, creating winning pitch decks, and finding the right investors.",
        "url": "https://growwthpartners.com/guide/pitching-to-investors-guide",
        "publisher": {
          "@id": "https://growwthpartners.com/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://growwthpartners.com/#organization",
        "name": "Growwth Partners",
        "url": "https://growwthpartners.com",
        "areaServed": ["Singapore", "United Arab Emirates", "Australia"],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "email": "jd@growwthpartners.com",
            "telephone": "+65 9861 5600",
            "contactType": "business",
            "areaServed": "SG"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "65 Chulia Street",
          "addressLocality": "Singapore",
          "postalCode": "049513",
          "addressCountry": "SG"
        }
      }
    ]
  };

  const keyTakeaways = [
    {
      icon: Target,
      title: "Business Needs",
      description: "Realise when and why a company will need outside funding to scale effectively."
    },
    {
      icon: Users,
      title: "Different Investors",
      description: "Know the various kinds of investors and what they anticipate."
    },
    {
      icon: Presentation,
      title: "Create an Engaging Pitch Deck",
      description: "Organise your pitch deck well so that it captures the attention of investors who want to see your business potential."
    },
    {
      icon: MessageSquare,
      title: "Perfect Your Elevator Pitch",
      description: "Create a concise, compelling elevator pitch that will leave a lasting impression on potential investors."
    },
    {
      icon: Network,
      title: "Navigate Investor Networks",
      description: "Understanding where and how to find suitable investors can greatly increase the chances of securing required funds for growth."
    }
  ];

  const tableOfContents = [
    { label: "Introduction", id: "introduction" },
    { label: "Pitching to investors", id: "pitching-investors" },
    { label: "Signs your business needs investors", id: "signs-need-investors" },
    { label: "Kinds of investors and investments", id: "investor-types" },
    { label: "Step by step guide to pitching", id: "step-by-step" },
    { label: "Tips to prepare a pitch deck", id: "pitch-deck-tips" },
    { label: "Tips to make an elevator pitch", id: "elevator-pitch" },
    { label: "Finding investors", id: "finding-investors" },
    { label: "Summary", id: "summary" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const signsBusinessNeedsInvestorsData = [
    {
      number: "01",
      title: "Rapid Growth",
      description: "Your company is growing or expects to grow significantly, and you need money to scale operations, hire more employees, or enter new markets."
    },
    {
      number: "02",
      title: "Financial Strain",
      description: "Your company is having financial difficulties that traditional financing sources, such as bank loans, are unable to address."
    },
    {
      number: "03",
      title: "Product Development",
      description: "You have a fantastic idea for a new product, but you don't have enough money to see it through to completion and into the market."
    },
    {
      number: "04",
      title: "Competitive Edge",
      description: "You must make investments in new technologies, marketing plans, and other crucial areas if you want to stay one step ahead of your rivals."
    },
    {
      number: "05",
      title: "Market Expansion",
      description: "You're prepared to go into new areas, but financing is required for the costs of advertising, shipping, and other expansion expenses."
    }
  ];

  const investorTypes = [
    {
      icon: Users,
      title: "Angel Investors",
      description: "These are often wealthy individuals who provide capital for startups in exchange for ownership equity. They may also offer mentorship services as well as industry connections with funding support."
    },
    {
      icon: Building2,
      title: "Venture Capitalists (VCs)",
      description: "Professional groups or companies that pool investments together from different sources before investing them into high-growth-potential startups. They take significant stakes in such firms while also occupying positions on their boards."
    },
    {
      icon: Globe,
      title: "Crowdfunding",
      description: "Raising small amounts of money from numerous people through online platforms, mostly in form of donations or product pre-orders. It's more suited for consumer-oriented products and can help build up the customer base too."
    },
    {
      icon: Briefcase,
      title: "Corporate Investors",
      description: "Sometimes, large corporations invest in smaller ones so that they can acquire new technologies or business models. Such deals may involve substantial amounts of capital besides bringing about strategic advantages."
    },
    {
      icon: Landmark,
      title: "Government Grants and Loans",
      description: "Governments provide financial aid to startups and small businesses in many forms. They are not investors per se, but can represent an important source of non-dilutive capital."
    }
  ];

  const pitchingSteps = [
    {
      step: 1,
      title: "Research Potential Investors",
      description: "Find out about previous investments made by individuals or companies who operate within your sector or have similar business models.",
      icon: Search
    },
    {
      step: 2,
      title: "Prepare Your Pitch Deck",
      description: "Make a strong pitch deck that contains essential details about your company, the market it wants to penetrate, your product or service, your business model, your traction, your financial projections, and the money you need.",
      icon: Presentation
    },
    {
      step: 3,
      title: "Craft Your Elevator Pitch",
      description: "This is a short speech that sums up what your company does and why it's valuable. It should be between 30-60 seconds long and grab people's attention.",
      icon: MessageSquare
    },
    {
      step: 4,
      title: "Practise Your Pitch",
      description: "Rehearse your presentation until you can deliver it smoothly without pauses or hesitation. Get feedback from peers or mentors, if possible. Keep your pitch under 10 minutes to allow for questions and discussion afterwards.",
      icon: Clock
    },
    {
      step: 5,
      title: "Schedule Meetings with Investors",
      description: "Contact potential investors directly or through intermediaries to arrange one-on-one meetings where you can present your ideas face-to-face. Use networking events, conferences or online platforms to connect with potential investors.",
      icon: Calendar
    },
    {
      step: 6,
      title: "Deliver Your Pitch",
      description: "During the actual presentation, maintain eye contact; speak slowly but clearly, engage them by asking rhetorical questions. Be prepared for tough questions – don't take them personally! Try to answer all inquiries as honestly as possible.",
      icon: Megaphone
    },
    {
      step: 7,
      title: "Follow Up",
      description: "Once you have made your pitch, send a follow-up email thanking all those who invested their time. Provide them with any other necessary information they might ask for. Be sure to keep in touch while informing them about what has been happening.",
      icon: Mail
    }
  ];

  const elevatorPitchSteps = [
    {
      step: 1,
      title: "Start with a Hook",
      description: "Start your elevator pitch with something that will hook the listener's interest. This could be a question, a surprising fact or a bold statement."
    },
    {
      step: 2,
      title: "Explain Your Business",
      description: "Clearly state what your business does, who it serves and the problem it solves for them. Avoid jargon and don't be too vague or give too much away."
    },
    {
      step: 3,
      title: "Highlight Your USP",
      description: "What sets your company apart from others? Identify this unique selling point in order to differentiate yourself from competitors."
    },
    {
      step: 4,
      title: "Keep It Short",
      description: "The entire elevator pitch should not exceed 1 minute; usually this is about as long as someone would spend talking with another person in an elevator."
    },
    {
      step: 5,
      title: "End with a Call to Action",
      description: "Do not leave the elevator pitch session open-ended. Finish by telling them what action they need to take next, such as scheduling a meeting, exchanging contact information, visiting your website."
    }
  ];

  const findingInvestorsChannels = [
    {
      icon: Network,
      title: "Networking Events",
      description: "Attend industry conferences, startup events or networking meet-ups where you could potentially meet interested investors."
    },
    {
      icon: Globe,
      title: "Online Resources",
      description: "Utilise platforms such as LinkedIn or crowdfunding websites. These allow for easy identification and connection with people willing to put capital into ventures like yours."
    },
    {
      icon: Rocket,
      title: "Accelerators and Incubators",
      description: "Joining one of these programs provides access to funds as well as investor relations among other benefits."
    },
    {
      icon: Handshake,
      title: "Referrals",
      description: "Reach out to mentors, advisors or other business owners within your existing network for referrals."
    }
  ];

  return (
    <Layout>
      <SEOhelper
        title="The Most Comprehensive Guide to Pitching to Investors | Growwth Partners"
        description="Everything you need to know about pitching to investors, including when is the right time to seek for investment, creating winning pitch decks, and finding the right investors."
        keywords="pitching to investors, investor pitch, pitch deck, elevator pitch, startup funding, venture capital, angel investors, fundraising, Singapore"
        canonicalUrl="https://growwthpartners.com/guide/pitching-to-investors-guide"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-amber-100/70 to-white">
        <div className="container mx-auto px-4 w-[90%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              The Most Comprehensive Guide to Pitching to Investors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the art of securing funding for your business through effective investor pitches
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Takeaways Section */}
      <section className="py-12 bg-gradient-to-r from-amber-50/30 via-orange-50/30 to-amber-50/30">
        <div className="container mx-auto px-4 w-[90%]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-900">
              Key Takeaways
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {keyTakeaways.map((takeaway, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-amber-100 rounded-full">
                      <takeaway.icon className="h-8 w-8 text-amber-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-center">
                    {takeaway.title}
                  </h3>
                  <p className="text-gray-700 text-center text-sm">
                    {takeaway.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Table of Contents</h3>
            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-2">
                {tableOfContents.map((item, index) => (
                  <li 
                    key={index} 
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-2 text-gray-700 hover:text-amber-600 cursor-pointer transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-12 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Introduction</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Gaining funds from investors is often seen as one of the most important moments in any business. It is usually regarded as the end of being just another small company and the start of becoming an established business.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              However, pitching to investors and securing investments is a complex process that requires detailed preparation, strategic thinking and thoroughly knowing your business needs and potentials.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This comprehensive guide provides everything you need to know about pitching to investors, including when is the right time to seek for investment, creating winning pitch decks or even finding right investors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pitching to Investors Section */}
      <section id="pitching-investors" className="py-12 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Pitching to Investors</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              In order to obtain funding, you must pitch your business idea, growth strategies, and financial requirements to possible investors. Presenting your company's story in an engaging way, supported by reliable data and a distinct future vision, is the art of pitching.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              For newly established and expanding companies that require funding to grow, innovate, or maintain operations, this procedure is essential.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 mb-8">
              <p className="text-gray-800">
                <span className="font-semibold">Trust Growwth Partners</span> to handle everything from pre-fundraising preparations to maintaining strong investor relationships.
              </p>
            </div>

            {/* FAQ */}
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-4 mb-3 border">
                <AccordionTrigger className="text-left font-medium">
                  How do I know if my business is ready for investment?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  You can look for indicators like quick growth opportunities, product development needs, plans to expand into new markets, financial strain, and the need to stay competitive.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-lg px-4 mb-3 border">
                <AccordionTrigger className="text-left font-medium">
                  What are the dangers of looking for investments outside?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Some risks include losing control, having ownership diluted, being under increased pressure to perform, and potential conflicts with investors.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-lg px-4 mb-3 border">
                <AccordionTrigger className="text-left font-medium">
                  Is it bad to seek investment too early?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes. You could give away too much equity by seeking investment in the early stages of your business and it may not be beneficial if your business model hasn't been fully validated yet.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-lg px-4 mb-3 border">
                <AccordionTrigger className="text-left font-medium">
                  What financial indicators should I consider before seeking investors?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Cash flow, profitability, market potential and current financial health are some examples of what you should consider.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-lg px-4 mb-3 border">
                <AccordionTrigger className="text-left font-medium">
                  How do I prepare my business for investment?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Make sure that all your financial records are up-to-date and accurate, create a strong business plan, and establish clear growth strategies.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Signs Your Business Needs Investors Section */}
      <section id="signs-need-investors" className="py-12 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
              Signs Your Business Needs Investors
            </h3>

            {/* Infographic Image */}
            <div className="flex justify-center mb-10">
              <img 
                src={signsBusinessNeedsInvestors}
                alt="Signs Your Business Needs Investors - 5 key indicators" 
                className="w-full max-w-4xl rounded-xl shadow-lg"
              />
            </div>

           
          </motion.div>
        </div>
      </section>

      {/* Kinds of Investors Section */}
      <section id="investor-types" className="py-12 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Kinds of Investors and Investments
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Investors are people or organisations that put their money into businesses with the aim of making profits later. Here are some types:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {investorTypes.slice(0, 3).map((investor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-amber-100 rounded-full">
                      <investor.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <h4 className="text-lg font-semibold">{investor.title}</h4>
                  </div>
                  <p className="text-gray-700 text-sm">{investor.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
              {investorTypes.slice(3).map((investor, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-amber-100 rounded-full">
                      <investor.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <h4 className="text-lg font-semibold">{investor.title}</h4>
                  </div>
                  <p className="text-gray-700 text-sm">{investor.description}</p>
                </motion.div>
              ))}
            </div>

            {/* FAQ */}
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-4 mb-3 border">
                <AccordionTrigger className="text-left font-medium">
                  What is the difference between venture capitalists and angel investors?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Angel investors usually use their own money while venture capitalists invest pooled funds from many different sources.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-lg px-4 mb-3 border">
                <AccordionTrigger className="text-left font-medium">
                  What is equity crowdfunding?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Equity crowdfunding means raising small amounts of money from lots of people who each get a share in your company, usually through online platforms.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-lg px-4 mb-3 border">
                <AccordionTrigger className="text-left font-medium">
                  How do corporate investors differ from other types of investors?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Corporate investors are large companies that invest in startups because they want strategic benefits such as access to new technologies or business models.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-lg px-4 mb-3 border">
                <AccordionTrigger className="text-left font-medium">
                  What factors should I take into account when deciding between various investor types?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Think about things like how much money you need, how much control you're willing to give up, and the tactical advantages each investor can offer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-lg px-4 mb-3 border">
                <AccordionTrigger className="text-left font-medium">
                  How can government grants and loans help my business?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Government grants and loans provide non-dilutive funding, which means you don't have to give away any equity. They can support various aspects of your business too.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
              <p className="text-gray-800">
                <span className="font-semibold">Need end-to-end fundraising solutions?</span> Work with Growwth Partners to receive the optimum funding at the best valuation from the right investors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step by Step Guide Section */}
      <section id="step-by-step" className="py-12 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Step by Step Guide to Pitching to Investors
            </h3>

            <div className="space-y-6">
              {pitchingSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex gap-6 items-start bg-gradient-to-r from-white to-amber-50/30 p-6 rounded-xl border border-gray-200"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="h-5 w-5 text-amber-600" />
                      <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                    </div>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-8">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Pro Tip:</p>
                  <p className="text-gray-700">
                    Attempt to understand the patterns of the investors' previous investments so that you can tailor your presentation to suit their preferences. Showing that you value their time and that they should take your proposal seriously will greatly increase its chances of being accepted.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pitch Deck Tips Section */}
      <section id="pitch-deck-tips" className="py-12 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Tips to Prepare a Pitch Deck
            </h3>

            {/* Infographic Image */}
            <div className="flex justify-center mb-10">
              <img 
                src={howToMakePitchDeck}
                alt="How to Make a Pitch Deck - 5 essential tips" 
                className="w-full max-w-4xl rounded-xl shadow-lg"
              />
            </div>

          </motion.div>
        </div>
      </section>

      {/* Elevator Pitch Section */}
      <section id="elevator-pitch" className="py-12 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              How to Make an Elevator Pitch
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              An elevator pitch is a concise, persuasive summary of your business. Below is a guide on how to create one:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {elevatorPitchSteps.slice(0, 3).map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">{step.title}</h4>
                  <p className="text-gray-700 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
              {elevatorPitchSteps.slice(3).map((step, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">{step.title}</h4>
                  <p className="text-gray-700 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Pro Tip:</p>
                  <p className="text-gray-700">
                    Practice giving your elevator pitch in different real-time situations, such as networking events or chance encounters at informal meetings. The more natural and confident you appear through repetition, the stronger impression can be made on potential investors.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Finding Investors Section */}
      <section id="finding-investors" className="py-12 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Finding Investors: Where and How
            </h3>

            <h4 className="text-xl font-semibold mb-6 text-gray-800">Where to Find Investors</h4>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              To locate suitable investors, use multiple channels like:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {findingInvestorsChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md flex gap-4"
                >
                  <div className="p-3 bg-amber-100 rounded-full h-fit">
                    <channel.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{channel.title}</h4>
                    <p className="text-gray-700 text-sm">{channel.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <h4 className="text-xl font-semibold mb-6 text-gray-800">How to Approach Investors</h4>
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Investigate:</span> Learn about the investor's investing preferences, portfolio, and history.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Customise:</span> Make your strategy specific to every investor. Emphasise how your company's operations complement their investment goals and areas of interest.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Act with professionalism:</span> Be sure to communicate in a professional manner at all times. Be succinct, precise, and considerate of their time.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Follow Up:</span> To maintain the conversation after making the first contact, follow up. As needed, provide updates and more details.
                  </div>
                </li>
              </ul>
            </div>

            <h4 className="text-xl font-semibold mb-4 text-gray-800">How Difficult Is It to Get Investments?</h4>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Securing investment is not easy; there's stiff competition for limited funds, so having a great business idea alone won't cut it. Building relationships with potential investors takes time, but can significantly improve chances of success.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 mb-8">
              <p className="text-gray-800">
                For expert financial management services, from accounting to capital acquisition, <span className="font-semibold">connect with Growwth Partners</span>.
              </p>
            </div>

            {/* FAQ */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="bg-white rounded-lg px-4 mb-3 border">
                <AccordionTrigger className="text-left font-medium">
                  Where can I look to raise money for my new business?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Networking events, internet platforms, industry conferences, accelerator and incubator programmes are some of the ways you can find investors.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-lg px-4 mb-3 border">
                <AccordionTrigger className="text-left font-medium">
                  How should I make my first contact with an investor?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Do your homework on the investor, adjust your strategy to suit their needs, act professionally, and clearly state the value proposition of your company.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-lg px-4 mb-3 border">
                <AccordionTrigger className="text-left font-medium">
                  How challenging is it to get funding?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Getting funding is difficult and competitive. It calls for perseverance, a potent business plan, and a captivating pitch.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-lg px-4 mb-3 border">
                <AccordionTrigger className="text-left font-medium">
                  Is networking necessary to find investors?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Networking allows you to connect and socialise with potential investors, which could lead to getting strong recommendations. Establishing rapport and going for events related to your field opens up a lot of possibilities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-lg px-4 mb-3 border">
                <AccordionTrigger className="text-left font-medium">
                  How can I increase my chances of getting investment?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Give all the necessary preparations enough time, rehearse your pitch before presenting it, have a deep understanding about your market and your business's financial statements, and create strong connections within this industry.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

    {/* Summary Section */}
<section id="summary" className="py-16 bg-gray-50 scroll-mt-20">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-1 mb-4">
        <span className="h-2 w-2 rounded-full bg-indigo-500" />
        <span className="text-sm font-medium text-indigo-700 tracking-wide">
          Investor-ready fundraising support
        </span>
      </div>

      {/* Card */}
      <div className="rounded-2xl border border-gray-100 bg-white p-8 md:p-10 shadow-sm">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Summary
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Nail your story, deck, and numbers to win investor trust.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            Being able to pitch to investors is essential for an entrepreneur who wants to grow his or her business. It's important to recognise when your business needs money, what kinds of investors and investments there are, as well as how best to go about making and giving a presentation, because it is these things which will increase your chances for getting funded.
          </p>
          <p>
            But another part of the process involves putting together a captivating pitch deck, perfecting an elevator speech, and understanding who you are talking with on this journey. Maintaining persistence and professionalism will be key, as securing investments is often a complex process.
          </p>
          <p>
            Growwth Partners offers a full range of fundraising services, such as customised funding plans, investor matching, professional valuation, flawless pitches, streamlined due diligence, and transparent financial statements. You can rely on Growwth Partners's team of financial experts to help you with every stage of the investing process, from planning ahead to upholding enduring relationships with investors.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Ready to Perfect Your Investor Pitch?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Putting important parts of your investment-seeking journey in the hands of professionals can greatly increase your chances of success!
            </p>
            <Button 
              onClick={() => window.open('https://calendly.com/jd-growwthpartners/15min?month=2025-11', '_blank')}
              className="bg-white text-amber-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full"
            >
              Book a Call with Growwth Partners
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PitchingToInvestorsGuide;
