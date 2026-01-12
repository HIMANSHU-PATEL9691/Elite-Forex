import { MainLayout } from "@/components/layout/MainLayout";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  BarChart3, 
  LineChart, 
  BookOpen, 
  Gem,
  ArrowRight,
  Check,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: BookOpen,
    title: "Learning Programme",
    description: "We help you understand trading psychology and then slowly start with Basic topics where you will learn a lot. You will learn reading the charts and implement them in actual behavior.",
    features: ["Trading psychology", "Chart reading", "Technical analysis", "Risk management", "Live practice sessions"],
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: TrendingUp,
    title: "Forex Trading",
    description: "Expert forex signals with precise entry and exit points. Our team analyzes the market 24/5 to provide you with the best trading opportunities in major currency pairs.",
    features: ["Major & minor pairs", "Entry & exit points", "Stop loss levels", "Take profit targets", "Real-time alerts"],
    color: "from-green-500/20 to-green-600/20",
  },
  {
    icon: Gem,
    title: "Comex Signals",
    description: "This commodity Signal Service provides expert guidance on gold, silver, and other precious metals trading in the COMEX market.",
    features: ["Gold trading", "Silver trading", "Copper signals", "Market analysis", "Price predictions"],
    color: "from-yellow-500/20 to-yellow-600/20",
  },
  {
    icon: BarChart3,
    title: "Indices Trading",
    description: "Equity Index futures trading with quarterly expiration dates. Get accurate signals for major indices like S&P 500, NASDAQ, and more.",
    features: ["S&P 500 signals", "NASDAQ analysis", "Dow Jones", "Global indices", "Futures trading"],
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    icon: LineChart,
    title: "Market Updates",
    description: "Stay updated with live market news and data. Our team provides real-time analysis and market insights around the clock.",
    features: ["Live news feed", "Market analysis", "Economic calendar", "Trend reports", "Weekly summaries"],
    color: "from-red-500/20 to-red-600/20",
  },
];

const processSteps = [
  { step: 1, title: "Sign Up", description: "Create your account and choose a plan" },
  { step: 2, title: "Onboarding", description: "Get personal account manager assigned" },
  { step: 3, title: "Receive Signals", description: "Start receiving trading signals" },
  { step: 4, title: "Trade & Profit", description: "Execute trades and grow your portfolio" },
];

export default function Services() {
  return (
    <MainLayout>
      <PageHeader
        badge="Our Services"
        title="WE KEEP OUR"
        titleHighlight="PROMISES"
        description="Fidelity Forex Pack is the most liquid market in the world, where trillions of dollars change hands every day."
      />

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} border border-primary/30 flex items-center justify-center`}>
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/pricing">
                    <Button variant="gold">
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    className={`glass-card rounded-2xl p-8 bg-gradient-to-br ${service.color} border border-primary/20`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-video flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-primary/30" />
                    </div>
                  </motion.div>

                  {/* Floating badge */}
                  <motion.div
                    className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-2 shadow-xl"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">Live Signals</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              <span className="text-foreground">Simple</span>{" "}
              <span className="text-gradient-gold">4-Step Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="glass-card rounded-2xl p-6 text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>

                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="glass-card rounded-3xl p-12 text-center glow-gold max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              <span className="text-foreground">Ready to Start</span>{" "}
              <span className="text-gradient-gold">Trading?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful traders and start your journey today with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button variant="hero" size="xl">
                  View Pricing Plans
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="goldOutline" size="xl">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
