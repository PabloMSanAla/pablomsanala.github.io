import React from "react";
import { motion } from "framer-motion";
import { Github, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button.jsx";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=2070')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>

        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              Pablo M.
            </span>
            <br />
            <span className="text-white">Sánchez Alarcón</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8">

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Astrophysicist • Observatory Data Scientist • Galaxy Evolution
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Ph.D. in Astrophysics from the Instituto de Astrofísica de Canarias, specialising in observational astronomy, low surface brightness universe, and advanced data analysis of astronomical images.


          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">

          <Button
            onClick={() => scrollToSection('research')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg glow-effect">

            Explore My Research
          </Button>
          <Button
            onClick={() => scrollToSection('photography')}
            variant="outline"
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-3 text-lg">

            View Astrophotography
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex justify-center space-x-6">

          <a href="https://github.com/TheStellarStreams" target="_blank" rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/PabloMSanAla" target="_blank" rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="mailto:pmsa.astro@gmail.com"
          className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 cursor-pointer"
          onClick={() => scrollToSection('about')}>

          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>);

}