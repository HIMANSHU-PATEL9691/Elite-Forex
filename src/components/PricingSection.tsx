import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic Forex",
    description: "Perfect for beginners starting their trading journey",
    prices: { "3": 499, "6": 899, "12": 1499 },
    features: [
      "Daily trading signals",
      "Entry & exit points",
      "Stop loss levels",
      "Email notifications",
      "Basic market analysis",
      "24/5 support",
    ],
    popular: false,
  },
  {
    name: "Prime Forex",
    description: "For serious traders seeking premium signals",
    prices: { "3": 1299, "6": 2199, "12": 3499 },
    features: [
      "All Basic features",
      "Priority signals",
      "Live trading sessions",
      "Personal account manager",
      "Advanced technical analysis",
      "Risk management guidance",
      "WhatsApp alerts",
      "Weekly market reports",
    ],
    popular: true,
  },
  {
    name: "Comex Package",
    description: "Commodity trading signals for gold & silver",
    prices: { "3": 499, "6": 899, "12": 1499 },
    features: [
      "Gold trading signals",
      "Silver trading signals",
      "Entry & exit points",
      "Stop loss levels",
      "Commodity market analysis",
      "24/5 support",
    ],
    popular: false,
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [duration, setDuration] = useState<"3" | "6" | "12">("6");

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-foreground">Forex, Comex &</span>{" "}
            <span className="text-gradient-gold">Indices</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your trading journey. All plans include
            professional analysis and dedicated support.
          </p>
        </motion.div>

        {/* Duration Toggle */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex p-1 rounded-xl bg-secondary/50 border border-border">
            {[
              { value: "3", label: "3 Months" },
              { value: "6", label: "6 Months" },
              { value: "12", label: "12 Months" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setDuration(option.value as "3" | "6" | "12")}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  duration === option.value
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {option.label}
                {option.value === "12" && (
                  <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                    Save 20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative glass-card rounded-2xl p-8 ${
                plan.popular
                  ? "border-2 border-primary glow-gold"
                  : "border border-border/50"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1 bg-gradient-to-r from-primary to-gold-light text-primary-foreground text-sm font-bold rounded-full">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-2xl text-muted-foreground">$</span>
                  <motion.span
                    key={duration}
                    className="text-5xl font-bold text-gradient-gold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {plan.prices[duration]}
                  </motion.span>
                  <span className="text-muted-foreground">USD</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  for {duration} months
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? "gold" : "goldOutline"}
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
