import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import imgGulmarg from "@/assets/kashmir-gulmarg.jpg";
import imgHouseboat from "@/assets/houseboat-kashmir.jpg";
import imgSonamarg from "@/assets/kashmir-sonamarg.jpg";

const deals = [
  { title: "Gulmarg Package", discount: "10% Off", image: imgGulmarg },
  { title: "Houseboat Package", discount: "20% Off", image: imgHouseboat },
  { title: "Sonamarg Package", discount: "15% Off", image: imgSonamarg },
];

const DealsSection = () => {
  return (
    <section className="section-padding bg-beige-warm">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="section-title">Hurry Up</p>
          <h2 className="section-heading">Phenomenal Deals Offered</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal, i) => (
            <motion.div
              key={deal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden group h-52 sm:h-64"
            >
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground font-sans font-bold text-sm px-4 py-2 rounded-xl">
                {deal.discount}
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-serif text-xl font-bold text-primary-foreground mb-3">{deal.title}</h3>
                <Link to="/booking" className="bg-primary text-primary-foreground px-5 py-2 rounded-xl font-sans text-xs font-semibold inline-block hover:opacity-90 transition-opacity">
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
