import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mountain, MapPin, Clock, Droplets, X } from "lucide-react";

const lakes = [
  {
    name: "Kausarnag Lake",
    location: "Kulgam district, Pir Panjal range",
    altitude: "~3,962 meters",
    waterSource: "Glacier-fed",
    description: "A large alpine lake surrounded by snow-covered mountains, considered sacred in Kashmiri Hindu tradition. It is also the source of the Veshaw River.",
    bestTimeToVisit: "July – September",
    trekkingRoute: "Aharbal → Kausarnag trek",
    category: "Alpine Lake",
    image: "/Lakes/Kausarnag Lake.png",
  },
  {
    name: "Kashmir Great Lakes",
    location: "Ganderbal district and Sonamarg",
    altitude: "~3,500–4,000 meters",
    waterSource: "Snow and glacier-fed",
    description: "A group of high-altitude alpine lakes along the famous Kashmir Great Lakes trekking route including Vishansar, Krishansar, Gadsar, Satsar, and Gangbal.",
    bestTimeToVisit: "July – September",
    trekkingRoute: "Sonamarg → Nichnai → Gadsar → Gangbal",
    category: "Alpine Lakes System",
    image: "/Lakes/Kashmir Great Lakes.png",
  },
  {
    name: "Chauharnag Lake",
    location: "Kulgam district, Kashmir",
    altitude: "~3,800 meters",
    waterSource: "Glacier-fed",
    description: "A cluster of four alpine lakes located in the Pir Panjal mountains. The name 'Chauharnag' literally means 'Four Lakes' in Kashmiri.",
    bestTimeToVisit: "July – September",
    trekkingRoute: "Aharbal → Chauharnag trek",
    category: "Alpine Lake",
    image: "/Lakes/Sheshnag Lake.jpg",
  },
  {
    name: "Tulian Lake",
    location: "Between Pahalgam and Sonamarg",
    altitude: "~3,684 meters",
    waterSource: "Glacier-fed",
    description: "A beautiful blue alpine lake surrounded by steep mountains and glaciers. Famous among trekkers for its scenic landscape and striking blue color.",
    bestTimeToVisit: "June – September",
    trekkingRoute: "Pahalgam → Tulian Lake trek",
    category: "Alpine Lake",
    image: "/Lakes/Tulian Lake.png",
  },
  {
    name: "Sheshnag Lake",
    location: "Anantnag district near Pahalgam",
    altitude: "~3,590 meters",
    waterSource: "Glacier-fed",
    description: "A turquoise high-altitude lake on the Amarnath Yatra route, associated with Hindu mythology and the serpent king Sheshnag.",
    bestTimeToVisit: "June – September",
    trekkingRoute: "Pahalgam → Chandanwari → Sheshnag",
    category: "Sacred Alpine Lake",
    image: "/Lakes/Sheshnag Lake.jpg",
  },
];

const NaturalSpringsLakesSection = () => {
  const [selectedLake, setSelectedLake] = useState<typeof lakes[0] | null>(null);

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
              Natural Wonders
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-heading"
            >
              Natural Springs & Lakes
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
              View All Lakes
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {lakes.map((lake, i) => (
            <motion.div
              key={lake.name}
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
                      src={lake.image}
                      alt={lake.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                        <Mountain size={12} strokeWidth={1.5} />
                        {lake.altitude}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-['Playfair_Display'] text-base font-semibold text-foreground mb-2">
                      {lake.name}
                    </h3>
                    <p className="text-foreground/50 text-sm mb-4 line-clamp-2">
                      {lake.description}
                    </p>
                    <button
                      onClick={() => setSelectedLake(lake)}
                      className="group/btn w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-all duration-300 active:scale-[0.98]"
                    >
                      View Details
                      <ArrowUpRight
                        size={14}
                        strokeWidth={2}
                        className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedLake && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
              onClick={() => setSelectedLake(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white rounded-[1.5rem] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedLake.name} details`}
            >
              <div className="relative">
                <img
                  src={selectedLake.image}
                  alt={selectedLake.name}
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <button
                  onClick={() => setSelectedLake(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors duration-300"
                  aria-label="Close dialog"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1 bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full mb-2">
                    {selectedLake.category}
                  </span>
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-white">
                    {selectedLake.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-5 overflow-y-auto max-h-[calc(90vh-16rem)]">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: MapPin, label: "Location", value: selectedLake.location },
                    { icon: Mountain, label: "Altitude", value: selectedLake.altitude },
                    { icon: Droplets, label: "Water Source", value: selectedLake.waterSource },
                    { icon: Clock, label: "Best Time", value: selectedLake.bestTimeToVisit },
                  ].map((item) => (
                    <div key={item.label} className="bg-muted/50 rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon size={14} strokeWidth={1.5} className="text-primary" />
                        <span className="text-foreground/50 text-xs">{item.label}</span>
                      </div>
                      <p className="font-medium text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">About</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {selectedLake.description}
                  </p>
                </div>

                <div className="bg-muted/50 rounded-xl p-4">
                  <h4 className="font-semibold text-sm mb-2">Trekking Route</h4>
                  <p className="text-foreground/60 text-sm">{selectedLake.trekkingRoute}</p>
                </div>

                <Link
                  to="/booking"
                  className="group w-full flex items-center justify-center gap-2 btn-primary"
                >
                  Book This Trip
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default NaturalSpringsLakesSection;
