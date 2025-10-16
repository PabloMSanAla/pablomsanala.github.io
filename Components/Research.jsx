import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Database, Telescope, Brain, FileText, Link as LinkIcon, Mic, Presentation as PresentationIcon, MapPin as MapPinIcon, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { Button } from "./ui/button.jsx";

export default function Research() {
  const researchAreas = [
    {
      icon: <Telescope className="w-8 h-8 text-blue-400" />,
      title: "Low Surface Brightness Universe",
      description: "Studying dwarf galaxies, Ultra Diffuse Galaxies (UDGs), extended discs, and tidal structures using state-of-the-art deep imaging techniques.",
      technologies: ["Spitzer", "Hubble", "Euclid", "Deep Photometry"]
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: "Galaxy Evolution & Disc Structure", 
      description: "Statistical characterization of surface brightness profile breaks in disk galaxies through analysis of AMIGA and S4G survey data.",
      technologies: ["S4G Survey", "CS4G", "Statistical Analysis", "Image Processing"]
    },
    {
      icon: <Brain className="w-8 h-8 text-green-400" />,
      title: "Advanced Data Science",
      description: "Developing GPU-accelerated pipelines, machine learning algorithms, and automated analysis tools for astronomical big data.",
      technologies: ["Python", "Machine Learning", "GPU Computing", "Bayesian Methods"]
    }
  ];

  const keyProjects = [
    {
      title: "Complete S4G (CS4G) Project",
      description: "Led the analysis of the disc galaxy extension of the Spitzer Survey, presenting a complete sample of 3,239 nearby galaxies with top-quality deep infrared images.",
      status: "Published",
      impact: "Major astronomical catalog",
      arxivLink: "https://arxiv.org/abs/2024.xxxxx",
      journalLink: "https://doi.org/10.3847/1538-4365/xxxxx"
    },
    {
      title: "FABADA Algorithm",
      description: "Developed a fully functional noise reduction method specifically for 1D and 2D astronomical data using Fully Adaptive Bayesian Algorithm for Data Analysis.",
      status: "Published",
      impact: "Open source tool",
      arxivLink: "https://arxiv.org/abs/2021.xxxxx",
      journalLink: "https://doi.org/10.1093/mnras/xxxxx"
    },
    {
      title: "Galaxy Disc Breaks in Isolated Galaxies",
      description: "Analysis of surface brightness profile breaks in AMIGA galaxies, finding statistically significant differences between isolated and cluster environments.",
      status: "Published",
      impact: "Environmental effects",
      arxivLink: "https://arxiv.org/abs/2023.xxxxx",
      journalLink: "https://doi.org/10.1051/0004-6361/xxxxx"
    },
    {
      title: "Euclid Disc Break Evolution",
      description: "Currently studying the evolution of disc breaks with redshift using the first quarter of Euclid observations.",
      status: "In Progress", 
      impact: "Cutting-edge research"
    },
    {
      title: "Hubble Space Telescope Proposal",
      description: "PI of HST Cycle 32 proposal with two ACS orbits, accompanied by $53k funding, expected observation in February 2026.",
      status: "Accepted",
      impact: "$53k funding"
    }
  ];

  const meetings = [
    { name: "Galaxy Memoirs", location: "Búzois, Brazil", date: "Aug 2025", type: "Contributed talk" },
    { name: "Euclid from Q1 to DR1", location: "Tenerife, Spain", date: "Jan 2025", type: "Contributed talk" },
    { name: "LSST@Europe 6", location: "La Palma, Spain", date: "Sep 2024", type: "LOC Member & Talk" },
    { name: "XXXIIst IAU General Assembly", location: "Cape Town, SA", date: "Aug 2024", type: "Contributed talk" },
    { name: "3rd annual meeting of the CAVITY project", location: "Granada, Spain", date: "June 2023", type: "Contributed talk" },
    { name: "XV Reunión Científica de la SEA", location: "Tenerife, Spain", date: "Sep 2022", type: "Talk & e-Poster" },
    { name: "XXXIst IAU General Assembly", location: "Busan, Korea (Online)", date: "Aug 2022", type: "2x e-Poster" },
    { name: "EAS Annual Meeting", location: "Valencia, Spain", date: "July 2022", type: "2x e-Poster talk" },
  ];

  const outreach = [
    {
      title: "Public Seminar at IAC",
      description: "45-minute public seminar under the 'Amigos del IAC' program about galaxy evolution and astrophysics research.",
      link: "https://www.youtube.com/watch?v=YjLc0-BE-Vg&t=15s",
      type: "video"
    },
    {
      title: "TMT Telescope Article",
      description: "Article about the Thirty Meter Telescope project and its potential location in the Canary Islands.",
      link: "https://www.sciencepresse.qc.ca/opinions/2025/04/22/telescope-trente-metres-tmt-aux-iles-canaries",
      type: "article"
    }
  ];

  return (
    <section id="research" className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
              Research & Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pushing the boundaries of observational astronomy through advanced data analysis and machine learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full group">
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <CardTitle className="text-white">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-gray-700 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
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
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Key Projects & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {keyProjects.map((project, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
                <CardContent className="p-6 pt-4">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                    <Badge 
                      variant={project.status === 'Published' ? 'default' : project.status === 'Accepted' ? 'secondary' : 'outline'}
                      className={
                        project.status === 'Published' ? 'bg-green-600 text-white' :
                        project.status === 'Accepted' ? 'bg-blue-600 text-white' :
                        'border-yellow-500 text-yellow-400'
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-3">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="font-medium text-blue-400">Impact: </span>
                      <span className="ml-1">{project.impact}</span>
                    </div>
                    {project.status === 'Published' && (
                      <div className="flex gap-2">
                        <Button asChild size="sm" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                          <a href={project.arxivLink} target="_blank" rel="noopener noreferrer">
                            <FileText className="w-3 h-3 mr-1" />
                            ArXiv
                          </a>
                        </Button>
                        <Button asChild size="sm" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                          <a href={project.journalLink} target="_blank" rel="noopener noreferrer">
                            <LinkIcon className="w-3 h-3 mr-1" />
                            Journal
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Public Outreach</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {outreach.map((item, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <Button asChild
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  >
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {item.type === 'video' ? 'Watch Video' : 'Read Article'}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Conference History & Scientific Meetings</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="max-h-80 overflow-y-auto pr-4 space-y-4">
                {meetings.map((meeting, index) => (
                  <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-semibold text-white">{meeting.name}</p>
                      <div className="flex items-center text-gray-400 text-sm mt-1">
                        <MapPinIcon className="w-3 h-3 mr-1" />
                        <span>{meeting.location}</span>
                        <Calendar className="w-3 h-3 ml-3 mr-1" />
                        <span>{meeting.date}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="mt-2 sm:mt-0 border-green-500/50 text-green-400">
                      {meeting.type === 'Contributed talk' ? <Mic className="w-3 h-3 mr-1"/> : <PresentationIcon className="w-3 h-3 mr-1"/>}
                      {meeting.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}