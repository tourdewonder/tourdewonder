import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Package } from "lucide-react";
import img from "@/assets/houseboat-kashmir.jpg";

const HouseboatsSection = () => {
  return (
    <section className="section-padding bg-beige-warm">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-title"
            >
              Floating Dreams
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="section-heading mb-6"
            >
              House Boats in Kashmir
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-foreground/60 leading-relaxed mb-8"
            >
              Experience the timeless charm of Kashmir's iconic houseboats, located on the serene Dal Lake and picturesque Nigeen Lake. These floating marvels offer a blend of traditional craftsmanship and modern comfort, providing an unforgettable stay on the water surrounded by majestic mountains.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/booking"
                className="group inline-flex items-center gap-2 btn-primary"
              >
                Houseboat Packages
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="double-bezel">
              <div className="double-bezel-inner relative">
                <img
                  src={img}
                  alt="Kashmir houseboat on Dal Lake"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 right-4">
                  <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-foreground text-sm font-medium px-4 py-2 rounded-full">
                    <Package size={16} strokeWidth={1.5} className="text-accent" />
                    1+ Packages Available
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HouseboatsSection;
