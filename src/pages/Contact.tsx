import { MainLayout } from "@/components/layout/MainLayout";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@pipsgainer.com",
    link: "mailto:info@pipsgainer.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 234 567 890",
    link: "tel:+1234567890",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Global Offices",
    link: "#",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    value: "Available 24/5",
    link: "#",
  },
];

const offices = [
  { city: "New York", country: "USA", timezone: "EST" },
  { city: "London", country: "UK", timezone: "GMT" },
  { city: "Dubai", country: "UAE", timezone: "GST" },
  { city: "Singapore", country: "Singapore", timezone: "SGT" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <MainLayout>
      <PageHeader
        badge="Contact Us"
        title="Get In"
        titleHighlight="Touch"
        description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                className="glass-card rounded-xl p-6 hover-glow group text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-muted-foreground">{item.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Send Us A Message
                </h3>

                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                      placeholder="Tell us more about your trading goals..."
                      required
                    />
                  </div>

                  <Button 
                    variant="gold" 
                    size="xl" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Personal Assistance */}
              <div className="glass-card rounded-2xl p-8 glow-gold">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Personal Assistance
                </h3>
                <p className="text-muted-foreground mb-6">
                  Experience our personalized assistance with 24/5 support. Our team of 200+ 
                  relationship managers is ready to help you succeed in your trading journey.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold-light border-2 border-background flex items-center justify-center text-xs font-bold text-primary-foreground"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-semibold">200+</span> experts available
                  </p>
                </div>
              </div>

              {/* Global Offices */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                  Global Offices
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {offices.map((office) => (
                    <div key={office.city} className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                      <h4 className="font-semibold text-foreground">{office.city}</h4>
                      <p className="text-sm text-muted-foreground">{office.country}</p>
                      <div className="flex items-center gap-1 mt-2 text-xs text-primary">
                        <Clock className="w-3 h-3" />
                        {office.timezone}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Hours */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                  Support Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground font-medium">24 Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground font-medium">Limited Support</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
