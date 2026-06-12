import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const lakes = [
  { 
    name: "Kausarnag Lake", 
    location: "Kulgam district, Pir Panjal range, Jammu & Kashmir", 
    altitude: "~3,962 meters",
    waterSource: "Glacier-fed",
    description: "A large alpine lake surrounded by snow-covered mountains, considered sacred in Kashmiri Hindu tradition. It is also the source of the Veshaw River. The lake holds religious significance and is surrounded by pristine natural beauty.",
    bestTimeToVisit: "July – September",
    trekkingRoute: "Aharbal → Kausarnag trek",
    category: "Alpine Lake / Sacred Lake",
    image: "/Lakes/Kausarnag Lake.png" 
  },
  { 
    name: "Kashmir Great Lakes", 
    location: "Ganderbal district and Sonamarg region, Jammu & Kashmir", 
    altitude: "~3,500–4,000 meters",
    waterSource: "Snow and glacier-fed",
    description: "A group of high-altitude alpine lakes along the famous Kashmir Great Lakes trekking route including Vishansar, Krishansar, Gadsar, Satsar, and Gangbal. Each lake has its unique characteristics and stunning blue waters.",
    bestTimeToVisit: "July – September",
    trekkingRoute: "Sonamarg → Nichnai → Gadsar → Gangbal",
    category: "Alpine Lakes System",
    image: "/Lakes/Kashmir Great Lakes.png" 
  },
  { 
    name: "Chauharnag Lake", 
    location: "Kulgam district, Kashmir", 
    altitude: "~3,800 meters",
    waterSource: "Glacier-fed",
    description: "A cluster of four alpine lakes located in the Pir Panjal mountains. The name 'Chauharnag' literally means 'Four Lakes' in Kashmiri. Known for pristine water and scenic trekking routes.",
    bestTimeToVisit: "July – September",
    trekkingRoute: "Aharbal → Chauharnag trek",
    category: "Alpine Lake",
    image: "/Lakes/Sheshnag Lake.jpg" 
  },
  { 
    name: "Tulian Lake", 
    location: "Between Pahalgam and Sonamarg, Anantnag district", 
    altitude: "~3,684 meters",
    waterSource: "Glacier-fed",
    description: "A beautiful blue alpine lake surrounded by steep mountains and glaciers. Famous among trekkers for its scenic landscape and striking blue color from mineral content in glacier water.",
    bestTimeToVisit: "June – September",
    trekkingRoute: "Pahalgam → Tulian Lake trek",
    category: "Alpine Lake",
    image: "/Lakes/Tulian Lake.png" 
  },
  { 
    name: "Sheshnag Lake", 
    location: "Anantnag district near Pahalgam", 
    altitude: "~3,590 meters",
    waterSource: "Glacier-fed",
    description: "A turquoise high-altitude lake on the Amarnath Yatra route, associated with Hindu mythology and the serpent king Sheshnag. An important pilgrimage site with spiritual significance.",
    bestTimeToVisit: "June – September",
    trekkingRoute: "Pahalgam → Chandanwari → Sheshnag",
    category: "Sacred Alpine Lake",
    image: "/Lakes/Sheshnag Lake.jpg" 
  },
];

const NaturalSpringsLakesSection = () => {
  const [selectedLake, setSelectedLake] = useState<typeof lakes[0] | null>(null);

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-heading">Natural Springs & Lakes</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lakes.map((lake, i) => (
            <motion.div
              key={lake.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="package-card"
            >
              <img 
                src={lake.image} 
                alt={lake.name} 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
              />
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold mb-3">{lake.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{lake.description}</p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setSelectedLake(lake)}
                    >
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto mx-4 sm:mx-auto">
                    {selectedLake && (
                      <>
                        <DialogHeader>
                          <DialogTitle className="text-xl sm:text-2xl font-serif">{selectedLake.name}</DialogTitle>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs sm:text-sm">
                              {selectedLake.category}
                            </span>
                          </div>
                        </DialogHeader>
                        <div className="mt-4 space-y-4">
                          <img 
                            src={selectedLake.image} 
                            alt={selectedLake.name} 
                            className="w-full h-48 sm:h-64 object-cover rounded-lg"
                          />
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div className="bg-muted p-3 rounded-lg">
                              <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                              <p className="font-semibold text-xs sm:text-sm">{selectedLake.location}</p>
                            </div>
                            <div className="bg-muted p-3 rounded-lg">
                              <p className="text-xs sm:text-sm text-muted-foreground">Altitude</p>
                              <p className="font-semibold text-xs sm:text-sm">{selectedLake.altitude}</p>
                            </div>
                            <div className="bg-muted p-3 rounded-lg">
                              <p className="text-xs sm:text-sm text-muted-foreground">Water Source</p>
                              <p className="font-semibold text-xs sm:text-sm">{selectedLake.waterSource}</p>
                            </div>
                            <div className="bg-muted p-3 rounded-lg">
                              <p className="text-xs sm:text-sm text-muted-foreground">Best Time</p>
                              <p className="font-semibold text-xs sm:text-sm">{selectedLake.bestTimeToVisit}</p>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Description</h4>
                            <p className="text-muted-foreground">{selectedLake.description}</p>
                          </div>
                          
                          <div className="bg-muted p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">Trekking Route</h4>
                            <p className="text-muted-foreground">{selectedLake.trekkingRoute}</p>
                          </div>
                          
                          <Link to="/booking">
                            <Button className="w-full">Book This Trip</Button>
                          </Link>
                        </div>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/booking" className="btn-outline-primary inline-block">View All Lakes</Link>
        </div>
      </div>
    </section>
  );
};

export default NaturalSpringsLakesSection;
