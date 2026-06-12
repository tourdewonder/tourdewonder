import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Star } from "lucide-react";
import heroBg from "@/assets/hero-kashmir.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20 lg:pt-0"
    >
      <div className="absolute inset-0">
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="absolute inset-0"
        >
          <img
            src={heroBg}
            alt="Kashmir valley with snow-capped mountains"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[60vh] lg:min-h-[80vh] py-16 sm:py-20 lg:py-32">
            <motion.div
              style={{ y: textY, opacity }}
              className="lg:col-span-7 space-y-6 sm:space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10"
              >
                <MapPin size={14} strokeWidth={1.5} className="text-accent" />
                <span className="text-xs font-medium text-white/90 tracking-wide">
                  Kashmir, India
                </span>
              </motion.div>

              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="text-white/60 text-sm tracking-[0.25em] uppercase font-medium"
                >
                  Where Travel Becomes Magic
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display'] font-bold text-white leading-[1.05] tracking-tight text-balance"
                >
                  Unforgettable
                  <br />
                  Adventure
                  <br />
                  <span className="text-accent">Awaits</span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-white/70 text-lg max-w-md leading-relaxed"
              >
                Discover the breathtaking beauty of Kashmir with curated tour packages, luxury stays, and unforgettable experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/booking"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 rounded-full font-medium text-sm hover:bg-white/90 transition-all duration-300"
                >
                  Start Your Journey
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </Link>
                <a
                  href="#destinations"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-sm text-white/80 border border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  Explore Destinations
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-6 pt-4"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      strokeWidth={1.5}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <div className="h-4 w-px bg-white/20" />
                <p className="text-white/60 text-sm">
                  <span className="text-white font-semibold">4.9</span> from 200+ travelers
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex lg:col-span-5 justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10" />
                <div className="relative bg-white/10 backdrop-blur-md rounded-[1.75rem] border border-white/10 p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <MapPin size={18} strokeWidth={1.5} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Popular Destination</p>
                      <p className="text-white/50 text-xs">Dal Lake, Srinagar</p>
                    </div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-3">
                      <p className="text-white/50 text-xs mb-1">Starting from</p>
                      <p className="text-white font-semibold">₹12,999</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3">
                      <p className="text-white/50 text-xs mb-1">Duration</p>
                      <p className="text-white font-semibold">5N, 6D</p>
                    </div>
                  </div>
                  <Link
                    to="/booking"
                    className="group w-full flex items-center justify-center gap-2 bg-accent text-white py-3 rounded-xl font-medium text-sm hover:bg-accent/90 transition-all duration-300"
                  >
                    Book Now
                    <ArrowUpRight
                      size={14}
                      strokeWidth={2}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
