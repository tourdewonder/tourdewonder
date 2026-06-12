import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import imgKashmir from "@/assets/kashmir-pahalgam.jpg";
import imgLadakh from "@/assets/ladakh.jpg";
import imgKargil from "@/assets/kargil.jpg";
import imgLeh from "@/assets/leh.jpg";

const spots = [
  { name: "Kashmir", tours: 5, image: imgKashmir },
  { name: "Ladakh", tours: 3, image: imgLadakh },
  { name: "Kargil", tours: 3, image: imgKargil },
  { name: "Leh", tours: 5, image: imgLeh },
];

const VacationSpotsSection = () => {
  return (
    <section className="section-padding bg-background">
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
              Explore Destinations
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-heading"
            >
              Desired Vacation Spots
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-foreground/50 mt-3 max-w-lg"
            >
              Explore handpicked destinations designed to offer comfort, beauty, and unforgettable experiences.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/booking"
              className="group inline-flex items-center gap-2 btn-outline-primary"
            >
              View All Destinations
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {spots.map((spot, i) => (
            <motion.div
              key={spot.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              <div className="double-bezel">
                <div className="double-bezel-inner">
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <img
                      src={spot.image}
                      alt={spot.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                        {spot.tours} Tour{spot.tours > 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-3">
                        {spot.name}
                      </h3>
                      <Link
                        to="/booking"
                        className="group/btn inline-flex items-center gap-2 bg-white text-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/90 transition-all duration-300 active:scale-[0.98]"
                      >
                        Explore
                        <ArrowUpRight
                          size={14}
                          strokeWidth={2}
                          className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VacationSpotsSection;
