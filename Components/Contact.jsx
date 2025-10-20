import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Link } from "lucide-react";
import { Card, CardContent } from "./ui/card.jsx";
import { Button } from "./ui/button.jsx";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      label: "Email",
      value: "pmsa.astro@gmail.com",
      href: "mailto:pmsa.astro@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-400" />,
      label: "Location",
      value: "Instituto de Astrofísica de Canarias, Tenerife, Spain",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/PabloMSanAla",
      color: "hover:text-gray-300"
    }, 
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pablo-m-sanchez-alarcon-5534239a/",
      color: "hover:text-gray-300"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interested in collaboration, research opportunities, or just want to discuss astronomy and astrophotography?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800/50 border-gray-700 h-full">
              <CardContent className="p-8 pt-4">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{info.label}</div>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="text-white hover:text-blue-400 transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 ${social.color} transition-colors duration-200`}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800/50 border-gray-700 h-full">
              <CardContent className="p-8 pt-4">
                <h3 className="text-2xl font-bold text-white mb-6">Areas of Collaboration</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Research Opportunities</h4>
                    <p className="text-gray-300 text-sm">
                      Galaxy evolution, surface photometry, machine learning in astronomy, 
                      observational techniques, and data analysis collaborations.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Astrophotography Projects</h4>
                    <p className="text-gray-300 text-sm">
                      Collaborative imaging campaigns, equipment development, 
                      outreach events, and educational workshops.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Speaking & Outreach</h4>
                    <p className="text-gray-300 text-sm">
                      Public talks, educational seminars, conference presentations, 
                      and science communication initiatives.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-orange-400 mb-2">Technical Consulting</h4>
                    <p className="text-gray-300 text-sm">
                      Image analysis pipelines, data reduction techniques, 
                      GPU computing, and astronomical software development.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                    onClick={() => window.location.href = 'mailto:pmsa.astro@gmail.com'}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}