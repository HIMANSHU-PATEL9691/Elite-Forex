import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Award, Target, Clock } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Quality Services",
    description: "Premium trading signals backed by expert analysis",
  },
  {
    icon: Award,
    title: "Customer Support",
    description: "24/5 dedicated support from our relationship managers",
  },
  {
    icon: Target,
    title: "Service Satisfaction",
    description: "90% client satisfaction rate with proven results",
  },
  {
    icon: Clock,
    title: "10+ Years Experience",
    description: "Decade of expertise in global market segments",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              <span className="text-foreground">WHO</span>{" "}
              <span className="text-gradient-gold">WE ARE</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Pipsgainer Learnings and Company lie amongst the top-notch belt in
              the consulting firms. We have a team of certified in-house
              researchers who expertise in the global market segments like
              FOREX, INDICES and COMEX.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of professionals analyzes the market based on
              fundamentals and technical analysis, providing you with the most
              accurate trading signals and market insights.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <feature.icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="glass-card rounded-2xl p-8 glow-gold">
                <div className="aspect-square relative">
                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-primary" />
                    <div className="absolute bottom-0 right-1/2 w-2 h-2 rounded-full bg-primary/50" />
                  </motion.div>

                  {/* Center Content */}
                  <div className="absolute inset-8 flex flex-col items-center justify-center text-center">
                    <motion.div
                      className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center mb-6"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="text-5xl font-serif font-bold text-primary-foreground">
                        10+
                      </span>
                    </motion.div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                      Years of Excellence
                    </h3>
                    <p className="text-muted-foreground">
                      Serving traders worldwide with expert market analysis
                    </p>
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary/50 rounded-tl-xl" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/50 rounded-br-xl" />
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -top-6 -right-6 glass-card rounded-xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="text-3xl font-bold text-gradient-gold">200+</p>
                <p className="text-sm text-muted-foreground">
                  Relationship Managers
                </p>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <p className="text-3xl font-bold text-gradient-gold">90%</p>
                <p className="text-sm text-muted-foreground">Client Success</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
