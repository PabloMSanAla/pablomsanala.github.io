import React from "react";
import { motion } from "framer-motion";
import { Telescope, Award, Users, Presentation } from "lucide-react";
import { Card, CardContent } from "./ui/card.jsx";

export default function About() {
  const achievements = [
  {
    icon: <Award className="w-8 h-8 text-blue-400" />,
    title: "PI of HST Proposal",
    description: "Leading a Hubble Space Telescope Cycle 32 proposal with $53k funding"
  },
  {
    icon: <Presentation className="w-8 h-8 text-purple-400" />,
    title: "13+ Scientific Talks",
    description: "International conferences, invited seminars, and contributed presentations worldwide"
  },
  {
    icon: <Telescope className="w-8 h-8 text-green-400" />,
    title: "Observational Experience",
    description: "50+ nights on professional telescopes and 60+ nights with amateur equipment"
  },
  {
    icon: <Users className="w-8 h-8 text-orange-400" />,
    title: "The Stellar Streams",
    description: "Co-founder of astrophotography project since 2017"
  }];


  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about unraveling the mysteries of the cosmos through advanced observational techniques 
            and cutting-edge data analysis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl"></div>
              <img
                src="./images/cv_photo.jpeg"
                alt="Pablo M. Sánchez Alarcón"
                className="relative rounded-lg w-full h-97 object-cover border border-gray-700" />

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6">

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Research Focus</h3>
              <p className="text-gray-300 leading-relaxed">My research centres on the Low Surface Brightness Universe, studying disc structure in galaxies, dwarf galaxies, and tidal structures. I specialise in developing custom image analysis tools using machine learning and statistical methods to understand galaxy evolution through deep surface photometry.




              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                With over 8 years of Python experience, I build GPU-accelerated pipelines for astronomical 
                data analysis. My work spans from Spitzer and Hubble observations to cutting-edge Euclid 
                space telescope data, focusing on automated surface brightness profile extraction and classification.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Beyond Science</h3>
              <p className="text-gray-300 leading-relaxed">
                When I'm not analyzing galaxies, you'll find me capturing the night sky through 
                <strong className="text-purple-400"> astrophotography</strong> or exploring the mountains 
                through skiing and outdoor adventures. I believe the same curiosity that drives scientific 
                discovery fuels artistic expression and outdoor exploration.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full">
                <CardContent className="p-6 pt-3 text-center flex flex-col justify-center items-center h-full">
                  <div className="mb-4 flex justify-center">
                    {achievement.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}