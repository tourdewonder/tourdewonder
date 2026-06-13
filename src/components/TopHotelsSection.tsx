import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Star, Wifi, Car, UtensilsCrossed } from "lucide-react";

const hotels = [
  {
    name: "Hotel Royal Hillton",
    image: "/hotels/Hotel Royal Hillton.png",
    rating: 4.8,
    reviews: 234,
    price: "₹10,000",
    amenities: ["wifi", "parking", "dining"],
  },
  {
    name: "Hotel Pine and Peak",
    image: "/hotels/Hotel Pine and Peak.png",
    rating: 4.7,
    reviews: 189,
    price: "₹28,000",
    amenities: ["wifi", "dining"],
  },
  {
    name: "The Khyber Himalayan Resort",
    image: "/hotels/The Khyber Himalayan Resort.jpg",
    rating: 4.9,
    reviews: 412,
    price: "₹26,000",
    amenities: ["wifi", "parking", "dining"],
  },
  {
    name: "Hotel Fortune Resort",
    image: "/hotels/Hotel Fortune Resort.jpg",
    rating: 4.6,
    reviews: 156,
    price: "₹13,000",
    amenities: ["wifi", "parking"],
  },
  {
    name: "Hotel Glacier Heights",
    image: "/hotels/Hotel Glacier Heights.jpg",
    rating: 4.5,
    reviews: 98,
    price: "₹4,500",
    amenities: ["wifi", "dining"],
  },
  {
    name: "Hotel Asian Park",
    image: "/hotels/front-facade.jpg",
    rating: 4.4,
    reviews: 167,
    price: "₹3,500",
    amenities: ["wifi", "parking", "dining"],
  },
];

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi size={12} strokeWidth={1.5} />,
  parking: <Car size={12} strokeWidth={1.5} />,
  dining: <UtensilsCrossed size={12} strokeWidth={1.5} />,
};

const TopHotelsSection = () => {
  return (
    <section id="hotels" className="section-padding bg-background">
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
              Premium Stays
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-heading"
            >
              Kashmir's Top Hotels
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
              View All Hotels
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hotels.map((hotel, i) => (
            <motion.div
              key={hotel.name}
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
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                        <Star size={12} strokeWidth={1.5} className="fill-accent text-accent" />
                        {hotel.rating}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-['Playfair_Display'] text-base font-semibold text-foreground leading-snug">
                        {hotel.name}
                      </h3>
                      <span className="text-foreground/40 text-xs whitespace-nowrap">
                        {hotel.reviews} reviews
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      {hotel.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="inline-flex items-center gap-1 text-foreground/50 text-xs bg-muted px-2 py-1 rounded-md"
                        >
                          {amenityIcons[amenity]}
                          <span className="capitalize">{amenity}</span>
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-foreground/40 text-xs">Starting from</span>
                        <p className="text-accent font-semibold text-lg">{hotel.price}</p>
                        <span className="text-foreground/40 text-xs">/night</span>
                      </div>
                      <Link
                        to="/booking"
                        className="group/btn inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-all duration-300 active:scale-[0.98]"
                      >
                        Book
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

export default TopHotelsSection;
