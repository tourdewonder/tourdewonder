import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import imgSrinagar from "@/assets/kashmir-srinagar.jpg";
import imgPahalgam from "@/assets/kashmir-pahalgam.jpg";
import imgGulmarg from "@/assets/kashmir-gulmarg.jpg";
import imgSonamarg from "@/assets/kashmir-sonamarg.jpg";
import imgSunset from "@/assets/kashmir-sunset.jpg";
import imgTulips from "@/assets/kashmir-tulips.jpg";
import imgLadakh from "@/assets/ladakh.jpg";
import imgLeh from "@/assets/leh.jpg";
import imgKargil from "@/assets/kargil.jpg";

const tabs = ["Kashmir", "Jammu", "Ladakh", "Leh"];

const kashmirPackages = [
  { title: "Honeymoon To Paradise Kashmir", duration: "5N, 6D", location: "Kashmir", price: "₹18,999", image: imgSrinagar },
  { title: "Budget Houseboats", duration: "3N, 4D", location: "Kashmir", price: "₹12,999", image: imgSunset },
  { title: "Scenic Kashmir", duration: "6N, 7D", location: "Kashmir", price: "₹24,999", image: imgPahalgam },
  { title: "Exotic Kashmir", duration: "5N, 6D", location: "Kashmir", price: "₹21,999", image: imgGulmarg },
  { title: "Kashmir Odyssey", duration: "7N, 8D", location: "Kashmir", price: "₹29,999", image: imgSonamarg },
  { title: "Delightful Kashmir", duration: "4N, 5D", location: "Kashmir", price: "₹16,999", image: imgTulips },
  { title: "The Green Paradise", duration: "5N, 6D", location: "Kashmir", price: "₹19,999", image: imgPahalgam },
  { title: "Paradise Kashmir", duration: "6N, 7D", location: "Kashmir", price: "₹25,999", image: imgSrinagar },
  { title: "Magical Kashmir", duration: "4N, 5D", location: "Kashmir", price: "₹15,999", image: imgGulmarg },
];

const otherPackages = [
  { title: "Ladakh Explorer", duration: "7N, 8D", location: "Ladakh", price: "₹32,999", image: imgLadakh },
  { title: "Leh Monastery Tour", duration: "5N, 6D", location: "Leh", price: "₹22,999", image: imgLeh },
  { title: "Kargil Adventure", duration: "6N, 7D", location: "Kargil", price: "₹26,999", image: imgKargil },
];

const DestinationsSection = () => {
  const [activeTab, setActiveTab] = useState("Kashmir");

  const packages = activeTab === "Kashmir" ? kashmirPackages : otherPackages;

  return (
    <section id="destinations" className="section-padding bg-beige-warm">
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
              Step Into Paradise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-heading"
            >
              Discover Kashmir with Tour De WONDER
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-2 flex-wrap"
            role="tablist"
            aria-label="Destination regions"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`destinations-panel-${tab.toLowerCase()}`}
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
            id={`destinations-panel-${activeTab.toLowerCase()}`}
            aria-label={`${activeTab} packages`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.title + i}
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
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                          <Clock size={12} strokeWidth={1.5} />
                          {pkg.duration}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                          <MapPin size={12} strokeWidth={1.5} />
                          {pkg.location}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-4">
                        <h3 className="font-['Playfair_Display'] text-base font-semibold text-foreground leading-snug">
                          {pkg.title}
                        </h3>
                        <span className="text-accent font-semibold text-sm whitespace-nowrap">
                          {pkg.price}
                        </span>
                      </div>
                      <Link
                        to="/booking"
                        className="group/btn w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-all duration-300 active:scale-[0.98]"
                      >
                        Book A Trip
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/booking"
            className="group inline-flex items-center gap-2 btn-outline-primary"
          >
            View All Packages
            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
