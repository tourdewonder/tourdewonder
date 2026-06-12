import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, Mountain } from "lucide-react";
import imgTrek from "@/assets/trek-great-lakes.jpg";
import imgPahalgam from "@/assets/kashmir-pahalgam.jpg";
import imgSonamarg from "@/assets/kashmir-sonamarg.jpg";

const treks = [
  { title: "Kashmir Great Lakes Trek", duration: "6N, 7D", difficulty: "Moderate", image: imgTrek },
  { title: "Gangabal Nundkol Trek", duration: "3N, 4D", difficulty: "Easy", image: imgPahalgam },
  { title: "Vishensar Kishensar Lakes Trek", duration: "4N, 5D", difficulty: "Moderate", image: imgSonamarg },
  { title: "Mt Mahadev Trek", duration: "2N, 3D", difficulty: "Easy", image: imgTrek },
  { title: "Tulian Lake Trek", duration: "3N, 4D", difficulty: "Moderate", image: imgPahalgam },
  { title: "Lidderwath Trek", duration: "2N, 3D", difficulty: "Easy", image: imgSonamarg },
];

const TreksSection = () => {
  return (
    <section id="treks" className="section-padding bg-background">
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
              Adventure Awaits
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-heading"
            >
              Treks in Kashmir
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
              View All Treks
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {treks.map((trek, i) => (
            <motion.div
              key={trek.title}
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
                      src={trek.image}
                      alt={trek.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                        <Clock size={12} strokeWidth={1.5} />
                        {trek.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                        <Mountain size={12} strokeWidth={1.5} />
                        {trek.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-['Playfair_Display'] text-base font-semibold text-foreground mb-4">
                      {trek.title}
                    </h3>
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

export default TreksSection;
