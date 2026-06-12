import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img from "@/assets/houseboat-kashmir.jpg";

const HouseboatsSection = () => {
  return (
    <section className="section-padding bg-beige-warm">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-title">Floating Dreams</p>
            <h2 className="section-heading mb-6">House Boats in Kashmir with Tour De WONDER</h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-6">
              Experience the timeless charm of Kashmir's iconic houseboats, located on the serene Dal Lake and picturesque Nigeen Lake. These floating marvels offer a blend of traditional craftsmanship and modern comfort, providing an unforgettable stay on the water surrounded by majestic mountains.
            </p>
            <Link to="/booking" className="btn-primary inline-block">Houseboat Packages</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <img src={img} alt="Kashmir houseboat on Dal Lake" className="rounded-2xl w-full h-64 sm:h-80 lg:h-96 object-cover shadow-lg" />
            <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-sm font-semibold px-4 py-2 rounded-xl">
              1+ Packages
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HouseboatsSection;
