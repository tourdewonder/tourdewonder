import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <h2 className="section-heading">Desired Vacation Spots</h2>
            <p className="text-muted-foreground font-sans mt-2 max-w-xl">
              Explore handpicked destinations designed to offer comfort, beauty, and unforgettable experiences.
            </p>
          </div>
          <Link to="/booking" className="btn-outline-primary text-xs self-start sm:self-auto">View All Destination</Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {spots.map((spot, i) => (
            <motion.div
              key={spot.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden group h-64 md:h-80"
            >
              <img
                src={spot.image}
                alt={spot.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-sans font-semibold px-3 py-1 rounded-lg">
                {spot.tours} Tour{spot.tours > 1 ? "s" : ""}
              </span>
              <h3 className="absolute bottom-4 left-4 text-xl sm:text-2xl font-serif font-bold text-primary-foreground">
                {spot.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VacationSpotsSection;
