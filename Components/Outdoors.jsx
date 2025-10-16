import React from "react";
import { motion } from "framer-motion";
import { Mountain, Compass, Camera, Snowflake } from "lucide-react";
import { Card, CardContent } from "./ui/card.jsx";

export default function Outdoors() {
  const activities = [
    {
      icon: <Snowflake className="w-8 h-8 text-blue-400" />,
      title: "Alpine Skiing",
      description: "Carving through powder on the slopes of the Pyrenees and Alps, finding peace in the rhythm of descent.",
      location: "European Alps & Pyrenees"
    },
    {
      icon: <Mountain className="w-8 h-8 text-green-400" />,
      title: "Mountain Hiking",
      description: "Exploring high-altitude trails for both adventure and optimal astrophotography locations away from light pollution.",
      location: "Canary Islands & Mainland Spain"
    },
    {
      icon: <Camera className="w-8 h-8 text-purple-400" />,
      title: "Dark Sky Photography",
      description: "Combining outdoor adventures with night photography expeditions to capture the Milky Way from remote locations.",
      location: "Remote Mountain Peaks"
    },
    {
      icon: <Compass className="w-8 h-8 text-orange-400" />,
      title: "Wilderness Exploration",
      description: "Backcountry camping and navigation through untouched landscapes, often scouting new observation sites.",
      location: "Various National Parks"
    }
  ];

  return (
    <section id="outdoors" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Beyond the Observatory
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            When not studying distant galaxies, I explore our own planet through skiing, hiking, and wilderness adventures
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 h-full group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{activity.title}</h3>
                      <p className="text-gray-300 mb-3">{activity.description}</p>
                      <div className="text-sm text-gray-400">
                        <span className="font-medium text-green-400">Location: </span>
                        {activity.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">The Perfect Balance</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              There's a unique synergy between astronomical observation and outdoor exploration. 
              Both require patience, precision, and a deep appreciation for the natural world. 
              Whether I'm tracking galaxies through a telescope or navigating mountain trails, 
              the same curiosity and attention to detail guide my adventures.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My outdoor experiences often inform my research - remote camping trips provide 
              ideal conditions for astrophotography, while hiking at high altitudes offers 
              perspectives on atmospheric effects that influence astronomical observations.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg blur-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1551516913-fbb3b8a78efb?q=80&w=1000"
              alt="Mountain landscape under starry sky"
              className="relative rounded-lg w-full h-80 object-cover border border-gray-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}