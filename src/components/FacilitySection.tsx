import { motion } from "framer-motion";
import { Check } from "lucide-react";
import img from "@/assets/kashmir-sunset.jpg";

const facilities = [
  "Health & Medical Security",
  "Travel Documentation",
  "Transportation Security",
  "Local Knowledge Guide",
];

const FacilitySection = () => {
  return (
    <section id="facility" className="section-padding bg-beige-warm">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-title">Our Facility</p>
            <h2 className="section-heading mb-6">Tour De WONDER at Best</h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-6">
              We ensure a hassle-free travel experience with top-notch facilities designed for your safety, comfort, and enjoyment throughout your journey in Kashmir.
            </p>
            <ul className="space-y-3">
              {facilities.map((f) => (
                <li key={f} className="flex items-center gap-3 font-sans text-foreground">
                  <Check size={18} className="text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img src={img} alt="Kashmir sunset" className="rounded-2xl w-full h-64 sm:h-80 lg:h-96 object-cover shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;
