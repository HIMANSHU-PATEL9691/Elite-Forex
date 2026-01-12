import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  TrendingUp, 
  BarChart3, 
  LineChart, 
  BookOpen, 
  Gem,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BookOpen,
    title: "Learning Programme",
    description:
      "We help you understand trading psychology and then slowly start with Basic topics where you will learn a lot. You will learn reading the charts and implement them in actual behavior.",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: TrendingUp,
    title: "Forex Trading",
    description:
      "Expert forex signals with precise entry and exit points. Our team analyzes the market 24/5 to provide you with the best trading opportunities.",
    color: "from-green-500/20 to-green-600/20",
  },
  {
    icon: Gem,
    title: "Comex Signals",
    description:
      "This commodity Signal Service provides expert guidance on gold, silver, and other precious metals trading in the COMEX market.",
    color: "from-yellow-500/20 to-yellow-600/20",
  },
  {
    icon: BarChart3,
    title: "Indices Trading",
    description:
      "Equity Index futures trading with quarterly expiration dates. Get accurate signals for major indices like S&P 500, NASDAQ, and more.",
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    icon: LineChart,
    title: "Market Updates",
    description:
      "Stay updated with live market news and data. Our team provides real-time analysis and market insights around the clock.",
    color: "from-red-500/20 to-red-600/20",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-secondary/20">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-foreground">WE KEEP OUR</span>{" "}
            <span className="text-gradient-gold">PROMISES</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Fidelity Forex Pack (Foreign Exchange) is the most liquid market in
            the world, where trillions of dollars change hands every day.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group glass-card rounded-2xl p-6 hover-glow cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button variant="gold" size="xl">
            Explore All Services
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
