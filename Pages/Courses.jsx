import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils/index.js";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import CourseCard from "../Components/CourseCard.jsx";

export default function CoursesPage() {
  const courses = [
    { title: "Accurate Flux Calibration in the Era of Space Astronomy and All-Sky Surveys", institution: "Space Telescope Science Institute (STScI)", date: "October 2024", location: "Online", tags: ["Flux Calibration", "Space Astronomy"] },
    { title: "Summer School in Astroinformatics II", institution: "Pennsylvania State University", date: "June 2022", location: "Online", tags: ["Astroinformatics", "Data Science"] },
    { title: "Summer School in Astrostatistics", institution: "Pennsylvania State University", date: "June 2022", location: "Online", tags: ["Astrostatistics", "Statistical Methods"] },
    { title: "IAA-CSIC Severo Ochoa Advanced School on Galaxy Evolution", institution: "Instituto de Astrofísica de Andalucía, IAA", date: "May 2022", location: "Granada, Spain", tags: ["Galaxy Evolution", "Astrophysics"] },
    { title: "DAWN Winter School", institution: "The Cosmic Dawn Center (DAWN)", date: "February 2022", location: "Online", tags: ["Cosmic Dawn", "High Redshift"] },
    { title: "2nd IAA-CSIC Severo Ochoa School on Statistics, Data Mining, and Machine Learning", institution: "Instituto de Astrofísica de Andalucía, IAA", date: "Nov-Dec 2021", location: "Granada, Spain", tags: ["Statistics", "Machine Learning"] },
    { title: "IAA Severo Ochoa Advanced School on Star Formation", institution: "Instituto de Astrofísica de Andalucía, IAA", date: "November 2021", location: "Granada, Spain", tags: ["Star Formation", "Astrophysics"] },
    { title: "Machine Learning Specialization", institution: "University of Washington (Coursera)", date: "September 2020", location: "Online", tags: ["Machine Learning", "Classification", "Regression"] },
    { title: "XV SVO School", institution: "Spanish Virtual Observatory", date: "February 2020", location: "Madrid, Spain", tags: ["Virtual Observatory", "Data Tools"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link to={createPageUrl("Home") + "#education"} className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Academic Journey
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Continued Education & Training
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive list of specialized schools, courses, and workshops attended throughout my career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}