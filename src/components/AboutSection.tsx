import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "@/assets/kashmir-srinagar.jpg";
import img2 from "@/assets/kashmir-pahalgam.jpg";
import img3 from "@/assets/kashmir-tulips.jpg";
import img4 from "@/assets/kashmir-sunset.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-title">Tour De WONDER</p>
            <h2 className="section-heading mb-6">Where Travel Becomes Magic</h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-6">
              Tour De WONDER invites you to experience Kashmir in a way that feels truly special. As a trusted travel agency, we design memorable journeys that combine scenic tours, peaceful houseboat stays on Dal Lake, adventurous Himalayan treks, and immersive visits to local markets. Whether you're looking for a romantic getaway, a family vacation, or a solo adventure, we craft every detail with care so you can enjoy the magic of Kashmir without any hassle.
            </p>
            <Link to="/booking" className="btn-primary inline-block">
              Book Now
            </Link>

            <div className="mt-8 flex items-center gap-3">
              <span className="text-4xl font-serif font-bold text-primary">19+</span>
              <span className="text-muted-foreground font-sans text-sm">Tours Booked</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            <img src={img1} alt="Srinagar Dal Lake" className="rounded-2xl w-full h-40 sm:h-48 object-cover" />
            <img src={img2} alt="Pahalgam valley" className="rounded-2xl w-full h-40 sm:h-48 object-cover mt-0 sm:mt-8" />
            <img src={img3} alt="Kashmir tulip garden" className="rounded-2xl w-full h-40 sm:h-48 object-cover" />
            <img src={img4} alt="Kashmir sunset" className="rounded-2xl w-full h-40 sm:h-48 object-cover mt-0 sm:mt-8" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
