import { MainLayout } from "@/components/layout/MainLayout";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Award, Target, Clock, Users, Globe, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Quality Services",
    description: "Premium trading signals backed by expert analysis and research",
  },
  {
    icon: Award,
    title: "24/5 Customer Support",
    description: "Dedicated support from our relationship managers around the clock",
  },
  {
    icon: Target,
    title: "90% Success Rate",
    description: "Proven track record with consistent and reliable results",
  },
  {
    icon: Clock,
    title: "10+ Years Experience",
    description: "Decade of expertise in global market segments",
  },
];

const stats = [
  { value: "10K+", label: "Active Traders", icon: Users },
  { value: "200+", label: "Expert Analysts", icon: Globe },
  { value: "90%", label: "Success Rate", icon: TrendingUp },
  { value: "10+", label: "Years Experience", icon: Shield },
];

const timeline = [
  { year: "2014", title: "Company Founded", description: "Started with a vision to democratize forex trading" },
  { year: "2016", title: "Global Expansion", description: "Extended services to 50+ countries worldwide" },
  { year: "2018", title: "Learning Program", description: "Launched comprehensive trading education platform" },
  { year: "2020", title: "10K Traders", description: "Reached milestone of 10,000 active traders" },
  { year: "2022", title: "Award Winning", description: "Recognized as top trading signal provider" },
  { year: "2024", title: "AI Integration", description: "Integrated advanced AI for market analysis" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <MainLayout>
      <PageHeader
        badge="About Us"
        title="WHO"
        titleHighlight="WE ARE"
        description="Pipsgainer Learnings and Company lie amongst the top-notch belt in the consulting firms with certified in-house researchers."
      />

      {/* Stats Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-gradient-gold mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24" ref={ref}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                <span className="text-foreground">Our</span>{" "}
                <span className="text-gradient-gold">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We have a team of certified in-house researchers who expertise in the global market 
                segments like FOREX, INDICES and COMEX. Our mission is to empower traders worldwide 
                with accurate signals and comprehensive market analysis.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our team of professionals analyzes the market based on fundamentals and technical 
                analysis, providing you with the most accurate trading signals and market insights 
                to help you achieve consistent profitability.
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
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass-card rounded-2xl p-8 glow-gold">
                <div className="aspect-square relative flex flex-col items-center justify-center text-center">
                  <motion.div
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center mb-6"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <span className="text-5xl font-serif font-bold text-primary-foreground">10+</span>
                  </motion.div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Years of Excellence</h3>
                  <p className="text-muted-foreground">Serving traders worldwide with expert market analysis</p>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -top-6 -right-6 glass-card rounded-xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="text-3xl font-bold text-gradient-gold">200+</p>
                <p className="text-sm text-muted-foreground">Expert Analysts</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              <span className="text-foreground">A Decade of</span>{" "}
              <span className="text-gradient-gold">Excellence</span>
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass-card rounded-xl p-6 inline-block">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <h4 className="font-semibold text-foreground mt-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background z-10 flex-shrink-0" />
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
