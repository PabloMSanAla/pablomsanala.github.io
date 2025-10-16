import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, School } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "../utils/index.js";
import { Button } from "./ui/button.jsx";

export default function Education() {
  const navigate = useNavigate();
  
  const education = [
    {
      degree: "Ph.D. in Astrophysics",
      institution: "Instituto de Astrofísica de Canarias & Universidad de la Laguna",
      location: "Tenerife, Spain",
      period: "Sept. 2021 - August 2025",
      thesis: "Galaxy Evolution and Disc Structure through Deep Surface Photometry",
      supervisors: "Dr. Johan Knapen, Dr. Javier Román, Dr. Sébastien Comerón",
      grade: "Cum Laude distinction",
      highlights: [
        "FPI-2020 Grant recipient",
        "PI of HST Cycle 32 proposal ($53k funding)",
        "3 first-author publications",
        "50+ nights professional telescope experience"
      ],
      color: "from-blue-500 to-purple-600",
      latestSchools: [
        { name: "Accurate Flux Calibration", year: 2024 },
        { name: "Astroinformatics II School", year: 2022 },
        { name: "Astrostatistics School", year: 2022 },
        { name: "Galaxy Evolution School", year: 2022 },
      ]
    },
    {
      degree: "M.Sc. in Theoretical Physics",
      specialization: "Astrophysics and Physics of the Cosmos",
      institution: "Universidad Autónoma de Madrid & Instituto de Física Teórica",
      location: "Madrid, Spain", 
      period: "Sept. 2019 - July 2020",
      thesis: "FABADA: Fully Adaptive Bayesian Algorithm for Data Analysis",
      grade: "8.95/10 - With Honours",
      highlights: [
        "Thesis grade: 10/10",
        "Honours in Galaxy Formation and Evolution",
        "Developed novel noise reduction algorithm",
        "Published peer-reviewed paper"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      degree: "B.Sc. in Physics", 
      institution: "Universidad Autónoma de Madrid",
      location: "Madrid, Spain",
      period: "Sept. 2014 - July 2019",
      grade: "6.8/10",
      thesis: "With honours (Grade 9.5/10)",
      highlights: [
        "MEC Grant recipient",
        "Founded Grafías Association", 
        "Active in Antares Association",
        "Public astronomy outreach"
      ],
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
              Academic Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A decade-long journey through physics and astrophysics, from foundational studies to cutting-edge research
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-white mb-2">
                        {edu.degree}
                      </CardTitle>
                      {edu.specialization && (
                        <p className="text-lg text-blue-400 mb-2">{edu.specialization}</p>
                      )}
                      <div className="flex items-center text-gray-300 mb-2">
                        <GraduationCap className="w-5 h-5 mr-2 text-purple-400" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.location}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-left md:text-right">
                      <div className="flex items-center text-gray-400 mb-2 justify-start md:justify-end">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                      <Badge className={`bg-gradient-to-r ${edu.color} text-white`}>
                        {edu.grade}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {edu.thesis && (
                    <div className="mb-4 p-4 bg-gray-900/50 rounded-lg border border-gray-600">
                      <h4 className="font-semibold text-white mb-2">
                        {edu.degree.includes('Ph.D') ? 'Dissertation:' : 'Thesis:'}
                      </h4>
                      <p className="text-gray-300 mb-2">{edu.thesis}</p>
                      {edu.supervisors && (
                        <p className="text-gray-400 text-sm">
                          <span className="font-medium">Supervisors:</span> {edu.supervisors}
                        </p>
                      )}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-yellow-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start text-gray-300 text-sm">
                            <span className="text-blue-400 mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {edu.latestSchools && (
                       <div>
                        <h4 className="font-semibold text-white mb-3 flex items-center">
                          <School className="w-4 h-4 mr-2 text-green-400" />
                          Recent Doctoral Schools
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {edu.latestSchools.map((school, schoolIndex) => (
                             <div key={schoolIndex} className="bg-gray-700/50 p-2 rounded-md text-center">
                                <p className="text-white text-sm font-medium">{school.name}</p>
                                <p className="text-gray-400 text-xs">{school.year}</p>
                             </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button 
                onClick={() => navigate(createPageUrl("Courses"))}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
                View All Courses & Schools
            </Button>
        </div>
      </div>
    </section>
  );
}