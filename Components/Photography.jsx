import React from "react";
import { motion } from "framer-motion";
import { Camera, ExternalLink, Instagram, Github } from "lucide-react";
import { Card, CardContent } from "./ui/card.jsx";
import { Button } from "./ui/button.jsx";

export default function Photography() {
  const equipment = [
    "TS PHOTOLINE 80mm F/6 Crayford telescope",
    "Sky Watcher EQ6-R mount", 
    "ZWO ASI183MM-Pro CMOS camera",
    "ZWO Filter Wheel with LRGB and narrowband filters",
    "Raspberry Pi 5 with K-Stars control software"
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1000",
      title: "Andromeda Galaxy (M31)",
      description: "50-hour mosaic in H-alpha and OIII",
      technical: "80mm APO, 50h exposure, Narrowband"
    },
    {
      src: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1000", 
      title: "Orion Nebula (M42)",
      description: "LRGB composite with stellar cores",
      technical: "80mm APO, 15h exposure, LRGB filters"
    },
    {
      src: "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1000",
      title: "Milky Way Core",
      description: "Summer galactic center from Tenerife",
      technical: "85mm lens, tracked panorama"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000",
      title: "Horsehead Nebula", 
      description: "H-alpha and OIII narrowband composite",
      technical: "80mm APO, 25h exposure, Ha+OIII"
    },
    {
      src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1000",
      title: "Saturn",
      description: "High resolution planetary imaging",
      technical: "Barlow 3x, RGB filters, lucky imaging"
    },
    {
      src: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1000",
      title: "Leo Triplet",
      description: "Galaxy group in Leo constellation", 
      technical: "80mm APO, 20h exposure, LRGB"
    }
  ];

  return (
    <section id="photography" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              The Stellar Streams
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Astrophotography project capturing the beauty of the cosmos since 2017
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black">
              <Instagram className="w-4 h-4 mr-2" />
              Follow on Instagram
            </Button>
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black">
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Camera className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Our Setup</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Co-founded with colleague Alejandro Romar, The Stellar Streams combines scientific 
                  precision with artistic vision to capture deep-sky objects and planetary details.
                </p>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Equipment:</h4>
                  {equipment.map((item, index) => (
                    <div key={index} className="text-sm text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Scientific Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                Our astrophotography bridges the gap between scientific observation and artistic expression. 
                We employ the same rigorous calibration and processing techniques used in professional 
                astronomy, including dark frame subtraction, flat fielding, and careful color balancing.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Community Impact</h3>
              <p className="text-gray-300 leading-relaxed">
                Beyond capturing stunning images, we've participated in numerous outreach events, 
                collaborated on scientific projects, and shared our knowledge through workshops and 
                public observation sessions. Our images have been featured in educational materials 
                and astronomy publications.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Featured Captures</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white font-semibold mb-1">{image.title}</h4>
                    <p className="text-gray-300 text-sm mb-2">{image.description}</p>
                    <p className="text-blue-400 text-xs mb-3">{image.technical}</p>
                    <Button size="sm" variant="ghost" className="text-blue-400 hover:text-white p-0">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Full Size
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}