import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Tour De <span className="text-accent">WONDER</span></h3>
            <p className="text-primary-foreground/70 font-sans text-sm mb-5">Get a Customized Tour</p>
            <Link to="/booking" className="bg-accent text-accent-foreground px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl font-sans text-sm font-semibold inline-block hover:opacity-90 transition-opacity">
              Book A Tour
            </Link>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 font-sans text-sm text-primary-foreground/70">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><Link to="/booking" className="hover:text-accent transition-colors">Custom Booking</Link></li>
              <li><a href="#testimonials" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><Link to="/refund-policies" className="hover:text-accent transition-colors">Refund Policies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4">More Inquiry</h4>
            <ul className="space-y-3 font-sans text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2"><Phone size={14} className="text-accent flex-shrink-0" /> +91 6006 288256</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-accent flex-shrink-0" /> <span className="break-all">tourdewonder89@gmail.com</span></li>
              <li className="flex items-start gap-2"><MapPin size={14} className="text-accent mt-0.5 flex-shrink-0" /> Srinagar, Jammu & Kashmir</li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4">About</h4>
            <p className="text-primary-foreground/70 font-sans text-sm leading-relaxed">
              Tour De WONDER is your trusted travel partner for exploring the breathtaking beauty of Kashmir, Ladakh, and beyond.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-primary-foreground/50 font-sans text-xs">
            © Copyright 2025 Tour De WONDER
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-primary-foreground/50 font-sans text-xs hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/50 font-sans text-xs hover:text-accent transition-colors">Terms & Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
