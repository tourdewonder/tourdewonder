import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Destinations", href: "/#destinations" },
  { label: "Hotels", href: "/#hotels" },
  { label: "Tour & Treks", href: "/#treks" },
  { label: "Help", href: "/#facility" },
  { label: "More Inquiry", href: "/#testimonials" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const sectionId = href.slice(2);
      if (location.pathname === "/") {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "top-4 px-4 sm:px-6"
            : "top-0 px-6 sm:px-8"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl flex items-center justify-between transition-all duration-700 ${
            scrolled
              ? "glass-surface rounded-full px-5 py-3"
              : "py-5"
          }`}
        >
          <Link to="/" className={`flex items-center gap-1.5 group ${mobileOpen ? "lg:flex hidden" : ""}`}>
            <span className="font-['Playfair_Display'] text-lg md:text-xl font-bold text-foreground tracking-tight">
              Tour De
            </span>
            <span className="font-['Playfair_Display'] text-lg md:text-xl font-bold text-primary tracking-tight">
              WONDER
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative px-4 py-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+916006288256"
              className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              <Phone size={14} strokeWidth={1.5} />
              <span>+91 6006 288256</span>
            </a>
            <Link
              to="/booking"
              className="btn-primary text-xs flex items-center gap-1.5 group"
            >
              Book Now
              <ArrowUpRight size={14} strokeWidth={2} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute w-5 h-[1.5px] bg-foreground transition-all duration-300 ${
                mobileOpen ? "translate-y-[3px] rotate-45" : "translate-y-[-5px]"
              }`}
            />
            <span
              className={`absolute w-5 h-[1.5px] bg-foreground transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            <span
              className={`absolute w-5 h-[1.5px] bg-foreground transition-all duration-300 ${
                mobileOpen ? "translate-y-[-3px] -rotate-45" : "translate-y-[5px]"
              }`}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[60] w-full max-w-sm bg-background shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col min-h-full">
                <div className="flex items-center justify-between p-6 border-b border-border/50">
                  <span className="font-['Playfair_Display'] text-lg font-bold text-foreground">
                    Menu
                  </span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-muted active:scale-95 transition-transform duration-150"
                    aria-label="Close menu"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <line x1="4" y1="4" x2="14" y2="14" />
                      <line x1="14" y1="4" x2="4" y2="14" />
                    </svg>
                  </button>
                </div>

                <nav className="flex-1 px-6 py-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.08 + i * 0.05,
                        ease: [0.32, 0.72, 0, 1],
                      }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className="flex items-center justify-between py-4 border-b border-border/50 text-foreground/70 hover:text-foreground text-base font-medium transition-colors duration-200 active:text-foreground"
                      >
                        {link.label}
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.5}
                          className="text-foreground/30"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="p-6 space-y-3 border-t border-border/50">
                  <motion.a
                    href="tel:+916006288256"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.35, ease: [0.32, 0.72, 0, 1] }}
                    className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-foreground/60 rounded-xl hover:bg-muted/50 transition-colors duration-200"
                  >
                    <Phone size={16} strokeWidth={1.5} />
                    +91 6006 288256
                  </motion.a>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <Link
                      to="/booking"
                      onClick={() => setMobileOpen(false)}
                      className="btn-primary w-full flex items-center justify-center gap-2 active:scale-[0.98] transition-transform duration-150"
                    >
                      Book Now
                      <ArrowUpRight size={16} strokeWidth={2} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
