import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Users } from "lucide-react";

const vehicles = [
  { name: "Ertiga", seats: "7 Seater", price: "₹3,500", per: "/day", image: "/Car/Ertiga.jpg" },
  { name: "Desire", seats: "5 Seater", price: "₹2,500", per: "/day", image: "/Car/Desire.jpg" },
  { name: "Innova Crysta", seats: "7 Seater", price: "₹5,000", per: "/day", image: "/Car/Innova Crysta.jpg" },
];

const BookARideSection = () => {
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
              Top Rides
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-heading"
            >
              Book a Ride
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/booking"
              className="group inline-flex items-center gap-2 btn-outline-primary"
            >
              View All Rides
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {vehicles.map((v, i) => (
            <motion.div
              key={v.name}
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
                      src={v.image}
                      alt={v.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                        <Users size={12} strokeWidth={1.5} />
                        {v.seats}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-['Playfair_Display'] text-lg font-semibold text-foreground mb-1">
                      {v.name}
                    </h3>
                    <p className="text-foreground/40 text-sm mb-3">{v.seats}</p>
                    <div className="mb-4">
                      <span className="text-accent font-semibold text-xl">{v.price}</span>
                      <span className="text-foreground/40 text-sm">{v.per}</span>
                    </div>
                    <Link
                      to="/booking"
                      className="group/btn w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-all duration-300 active:scale-[0.98]"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookARideSection;
