import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-kashmir.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Kashmir valley with snow-capped mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary-foreground/80 font-sans text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4"
          >
            Where Travel Becomes Magic
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-primary-foreground leading-tight mb-4 sm:mb-6"
          >
            Unforgettable Adventure Awaits
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-primary-foreground/70 font-sans text-base sm:text-lg mb-6 sm:mb-8"
          >
            Start Your Journey, BOOK NOW
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/booking"
              className="inline-block bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-sans text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
