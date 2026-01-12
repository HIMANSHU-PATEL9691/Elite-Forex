import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, TrendingUp, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      {/* <div className="hidden md:block bg-olive-dark border-b border-border/50">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="mailto:info@pipsgainer.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              info@eliteforex.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +1 234 567 890
            </a>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <TrendingUp className="w-4 h-4 animate-pulse" />
            <span className="text-foreground">Live Markets:</span>
            <span>EUR/USD 1.0865</span>
            <span className="mx-2 text-muted-foreground">|</span>
            <span>GBP/USD 1.2634</span>
            <span className="mx-2 text-muted-foreground">|</span>
            <span>XAU/USD 2048.50</span>
          </div>
        </div>
      </div> */}

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 md:top-[40px] left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-olive-dark/95 backdrop-blur-lg shadow-xl border-b border-border/30"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={logo}
                alt="Pipsgainer"
                className="h-12 w-12 rounded-lg object-cover shadow-lg"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-serif font-bold text-gradient-gold">
                  ELITE FOREX
                </h1>
                <p className="text-xs text-muted-foreground tracking-widest">
                  TRADE SMART
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link key={link.name} to={link.href}>
                <motion.span
                  className="relative text-foreground hover:text-primary transition-colors font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="goldOutline" size="lg">
              Login
            </Button>
            <Button variant="gold" size="lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-olive-dark/98 backdrop-blur-lg border-t border-border/30"
            >
              <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                    <motion.span
                      className="block text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border/30"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-4">
                  <Button variant="goldOutline" size="lg" className="w-full">
                    Login
                  </Button>
                  <Button variant="gold" size="lg" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
