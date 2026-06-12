import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const handleLinkClick = (href: string) => {
    if (href.startsWith("/#")) {
      const sectionId = href.slice(2);
      if (location.pathname === "/") {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <a href="#" className="inline-flex items-center gap-1.5 mb-5">
              <span className="font-['Playfair_Display'] text-xl font-bold text-white tracking-tight">
                Tour De
              </span>
              <span className="font-['Playfair_Display'] text-xl font-bold text-accent tracking-tight">
                WONDER
              </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted travel partner for exploring the breathtaking beauty of Kashmir, Ladakh, and beyond.
            </p>
            <Link
              to="/booking"
              className="group inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent/90 transition-all duration-300 active:scale-[0.98]"
            >
              Book A Tour
              <ArrowUpRight
                size={14}
                strokeWidth={2}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </Link>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/40 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/#about" },
                { label: "Custom Booking", href: "/booking" },
                { label: "Contact Us", href: "/#testimonials" },
                { label: "Refund Policies", href: "/refund-policies" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/40 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+916006288256"
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-300 group"
                >
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                    <Phone size={14} strokeWidth={1.5} className="text-accent" />
                  </span>
                  +91 6006 288256
                </a>
              </li>
              <li>
                <a
                  href="mailto:tourdewonder89@gmail.com"
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-300 group"
                >
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                    <Mail size={14} strokeWidth={1.5} className="text-accent" />
                  </span>
                  <span className="break-all">tourdewonder89@gmail.com</span>
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-sm text-white/50">
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <MapPin size={14} strokeWidth={1.5} className="text-accent" />
                  </span>
                  Srinagar, Jammu & Kashmir
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/40 mb-5">
              Get a Customized Tour
            </h4>
            <p className="text-sm text-white/50 leading-relaxed mb-5">
              Tell us your preferences and we'll craft the perfect Kashmir experience for you.
            </p>
            <a
              href="tel:+916006288256"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
            >
              Call us now
              <ArrowUpRight
                size={14}
                strokeWidth={2}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © Copyright 2025 Tour De WONDER. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
