import { motion } from "framer-motion";
import { Shield, FileText, Car, Map } from "lucide-react";
import img from "@/assets/kashmir-sunset.jpg";

const facilities = [
  {
    icon: Shield,
    title: "Health & Medical Security",
    description: "Comprehensive medical support throughout your journey",
  },
  {
    icon: FileText,
    title: "Travel Documentation",
    description: "Complete assistance with permits and paperwork",
  },
  {
    icon: Car,
    title: "Transportation Security",
    description: "Safe and comfortable vehicle arrangements",
  },
  {
    icon: Map,
    title: "Local Knowledge Guide",
    description: "Expert local guides for authentic experiences",
  },
];

const FacilitySection = () => {
  return (
    <section id="facility" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="double-bezel">
              <div className="double-bezel-inner">
                <img
                  src={img}
                  alt="Kashmir sunset"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-title"
            >
              Our Facility
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="section-heading mb-6"
            >
              Tour De WONDER at Best
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-foreground/60 leading-relaxed mb-8"
            >
              We ensure a hassle-free travel experience with top-notch facilities designed for your safety, comfort, and enjoyment throughout your journey in Kashmir.
            </motion.p>

            <div className="space-y-4">
              {facilities.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <f.icon size={18} strokeWidth={1.5} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-0.5">{f.title}</h3>
                    <p className="text-foreground/50 text-sm">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;
