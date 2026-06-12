import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Percent } from "lucide-react";
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
              Limited Time Offers
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-heading"
            >
              Phenomenal Deals Offered
            </motion.h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deals.map((deal, i) => (
            <motion.div
              key={deal.title}
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
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 bg-accent text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        <Percent size={12} strokeWidth={2} />
                        {deal.discount.replace(" Off", "")}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-['Playfair_Display'] text-xl font-bold text-white mb-3">
                        {deal.title}
                      </h3>
                      <Link
                        to="/booking"
                        className="group/btn inline-flex items-center gap-2 bg-white text-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/90 transition-all duration-300 active:scale-[0.98]"
                      >
                        Book Now
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

export default DealsSection;
