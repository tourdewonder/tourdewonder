import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import img1 from "@/assets/kashmir-srinagar.jpg";
import img2 from "@/assets/kashmir-pahalgam.jpg";
import img3 from "@/assets/kashmir-tulips.jpg";
import img4 from "@/assets/kashmir-sunset.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-title"
            >
              Tour De WONDER
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="section-heading mb-6"
            >
              Where Travel Becomes Magic
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-foreground/60 leading-relaxed mb-8"
            >
              Tour De WONDER invites you to experience Kashmir in a way that feels truly special. As a trusted travel agency, we design memorable journeys that combine scenic tours, peaceful houseboat stays on Dal Lake, adventurous Himalayan treks, and immersive visits to local markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link
                to="/booking"
                className="group inline-flex items-center justify-center gap-2 btn-primary"
              >
                Book Now
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </Link>
              <a
                href="#destinations"
                className="inline-flex items-center justify-center gap-2 btn-outline-primary"
              >
                Explore Packages
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6 p-5 rounded-2xl bg-muted/50"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp size={20} strokeWidth={1.5} className="text-primary" />
              </div>
              <div>
                <p className="text-3xl font-['Playfair_Display'] font-bold text-foreground">
                  19+
                </p>
                <p className="text-foreground/50 text-sm">Tours Booked This Month</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="double-bezel">
              <div className="double-bezel-inner p-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="relative overflow-hidden rounded-2xl aspect-[4/3]"
                    >
                      <img
                        src={img1}
                        alt="Srinagar Dal Lake"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="relative overflow-hidden rounded-2xl aspect-[4/3]"
                    >
                      <img
                        src={img3}
                        alt="Kashmir tulip garden"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                    </motion.div>
                  </div>
                  <div className="space-y-2 pt-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="relative overflow-hidden rounded-2xl aspect-[4/3]"
                    >
                      <img
                        src={img2}
                        alt="Pahalgam valley"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="relative overflow-hidden rounded-2xl aspect-[4/3]"
                    >
                      <img
                        src={img4}
                        alt="Kashmir sunset"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
