import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Hotels", href: "#hotels" },
  { label: "Tour & Treks", href: "#treks" },
  { label: "Help", href: "#facility" },
  { label: "More Inquiry", href: "#testimonials" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg py-3"
          : "bg-card/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="font-serif text-xl md:text-2xl font-bold text-foreground">
            Tour De <span className="text-primary">WONDER</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground/70 hover:text-primary text-sm font-sans font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Phone size={16} className="text-accent" />
          <a href="tel:+916006288256" className="text-sm font-sans font-semibold text-accent">
            +91 6006 288256
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <nav className="flex flex-col items-center gap-5 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground/70 hover:text-primary text-sm font-sans font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:+916006288256" className="flex items-center gap-2 text-accent font-semibold text-sm">
                <Phone size={16} /> +91 6006 288256
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
