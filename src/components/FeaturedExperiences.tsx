import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock, MapPin, Star } from "lucide-react";
import img1 from "@/assets/kashmir-srinagar.jpg";
import img2 from "@/assets/kashmir-gulmarg.jpg";
import img3 from "@/assets/kashmir-sonamarg.jpg";

const tourPackages = [
  { title: "Amazing Kashmir", duration: "4N, 5D", location: "Kashmir", price: "₹15,999", rating: 4.8, image: img1 },
  { title: "Glimpses of Kashmir", duration: "5N, 6D", location: "Kashmir", price: "₹18,999", rating: 4.7, image: img2 },
  { title: "Himalayan Odyssey", duration: "9N, 10D", location: "Kashmir", price: "₹32,999", rating: 4.9, image: img3 },
];

const hotels = [
  { title: "Hotel Royal Hillton", location: "Srinagar", price: "₹10,000", rating: 4.8, image: "/hotels/Hotel Royal Hillton.png" },
  { title: "Hotel Asian Park", location: "Pahalgam", price: "₹3,500", rating: 4.4, image: "/hotels/front-facade.jpg" },
  { title: "The Khyber Resort", location: "Gulmarg", price: "₹26,000", rating: 4.9, image: "/hotels/The Khyber Himalayan Resort.jpg" },
];

const FeaturedExperiences = () => {
  const [activeTab, setActiveTab] = useState("Tour Package");

  const items = activeTab === "Tour Package" ? tourPackages : hotels;

  return (
    <section className="section-padding bg-beige-warm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="section-title"
            >
              Featured Experiences
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-heading"
            >
              Tours & Stays Made Easy
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-2"
          >
            {["Tour Package", "Hotel"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "bg-white/60 text-foreground/60 hover:text-foreground hover:bg-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            role="tabpanel"
            id={`featured-panel-${activeTab.toLowerCase().replace(" ", "-")}`}
            aria-label={`${activeTab} listings`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group"
              >
                <div className="double-bezel">
                  <div className="double-bezel-inner">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        {"duration" in item && (
                          <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                            <Clock size={12} strokeWidth={1.5} />
                            {(item as typeof tourPackages[number]).duration}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                          <MapPin size={12} strokeWidth={1.5} />
                          {item.location}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-foreground text-xs font-medium px-2 py-1 rounded-full">
                          <Star size={12} strokeWidth={1.5} className="fill-accent text-accent" />
                          {item.rating}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-4">
                        <h3 className="font-['Playfair_Display'] text-base font-semibold text-foreground leading-snug">
                          {item.title}
                        </h3>
                        <span className="text-accent font-semibold text-sm whitespace-nowrap">
                          {item.price}
                          {!("duration" in item) && <span className="text-foreground/40 text-xs font-normal">/night</span>}
                        </span>
                      </div>
                      <Link
                        to="/booking"
                        className="group/btn w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-all duration-300 active:scale-[0.98]"
                      >
                        {"duration" in item ? "Book A Trip" : "Book Now"}
                        <ArrowUpRight
                          size={14}
                          strokeWidth={2}
                          className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
