import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import img1 from "@/assets/kashmir-pahalgam.jpg";
import img2 from "@/assets/kashmir-srinagar.jpg";
import img3 from "@/assets/kashmir-gulmarg.jpg";

const bundles = [
  { title: "The Green Paradise", duration: "5N, 6D", location: "Kashmir", price: "₹16,999", image: img1 },
  { title: "Paradise Kashmir", duration: "6N, 7D", location: "Kashmir", price: "₹22,999", image: img2 },
  { title: "Glimpses of Kashmir", duration: "5N, 6D", location: "Kashmir", price: "₹18,999", image: img3 },
];

const AffordableBundlesSection = () => {
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
              Tour Package
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-heading"
            >
              Affordable Vacation Bundles
            </motion.h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {bundles.map((b, i) => (
            <motion.div
              key={b.title}
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
                      src={b.image}
                      alt={b.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                        <Clock size={12} strokeWidth={1.5} />
                        {b.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                        <MapPin size={12} strokeWidth={1.5} />
                        {b.location}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-4">
                      <h3 className="font-['Playfair_Display'] text-base font-semibold text-foreground leading-snug">
                        {b.title}
                      </h3>
                      <span className="text-accent font-semibold text-sm whitespace-nowrap">
                        {b.price}
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
        </div>
      </div>
    </section>
  );
};

export default AffordableBundlesSection;
