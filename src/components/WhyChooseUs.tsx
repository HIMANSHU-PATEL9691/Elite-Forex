import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Zap, 
  Shield, 
  Users, 
  Clock, 
  TrendingUp, 
  Award,
  HeadphonesIcon,
  BarChart3
} from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast Signals",
    description: "Real-time alerts delivered instantly to your device",
    delay: 0,
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Every signal includes stop-loss for capital protection",
    delay: 0.1,
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "200+ certified analysts with decade of experience",
    delay: 0.2,
  },
  {
    icon: Clock,
    title: "24/5 Market Coverage",
    description: "Round the clock monitoring of global markets",
    delay: 0.3,
  },
  {
    icon: TrendingUp,
    title: "90% Success Rate",
    description: "Proven track record with consistent results",
    delay: 0.4,
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized as top trading signal provider",
    delay: 0.5,
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Personal account manager for premium members",
    delay: 0.6,
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "In-depth market analysis and trend predictions",
    delay: 0.7,
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-foreground">Your Success Is</span>{" "}
            <span className="text-gradient-gold">Our Priority</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine cutting-edge technology with expert analysis to deliver
            the best trading experience.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: reason.delay }}
            >
              <div className="glass-card rounded-2xl p-6 h-full hover-glow transition-all duration-500 group-hover:border-primary/50">
                {/* Icon with glow */}
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 5 }}
                >
                  <reason.icon className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative line */}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-gold-light rounded-b-2xl"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
