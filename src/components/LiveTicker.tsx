import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const tickerData = [
  { pair: "EUR/USD", price: "1.0865", change: "+0.45%", up: true },
  { pair: "GBP/USD", price: "1.2634", change: "+0.23%", up: true },
  { pair: "USD/JPY", price: "149.82", change: "-0.12%", up: false },
  { pair: "XAU/USD", price: "2048.50", change: "+1.32%", up: true },
  { pair: "XAG/USD", price: "24.65", change: "+0.87%", up: true },
  { pair: "USD/CHF", price: "0.8725", change: "-0.18%", up: false },
  { pair: "AUD/USD", price: "0.6542", change: "+0.34%", up: true },
  { pair: "NZD/USD", price: "0.6089", change: "+0.21%", up: true },
];

export function LiveTicker() {
  return (
    <div className="relative overflow-hidden bg-olive-dark/80 backdrop-blur-sm border-y border-border/30 py-4">
      {/* Gradient Overlay Left */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-olive-dark to-transparent z-10" />
      {/* Gradient Overlay Right */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-olive-dark to-transparent z-10" />

      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -1920] }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {[...tickerData, ...tickerData, ...tickerData].map((item, index) => (
          <div
            key={`${item.pair}-${index}`}
            className="flex items-center gap-3 px-4"
          >
            <span className="font-semibold text-foreground">{item.pair}</span>
            <span className="text-primary font-mono">{item.price}</span>
            <span
              className={`flex items-center gap-1 text-sm font-medium ${
                item.up ? "text-green-400" : "text-red-400"
              }`}
            >
              {item.up ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              {item.change}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
