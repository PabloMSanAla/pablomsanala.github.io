import React from "react";
import { motion } from "framer-motion";
import { Book, Building, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";

export default function CourseCard({ course, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full">
        <CardContent className="p-6 pt-4">
          <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
          <div className="flex items-center text-gray-400 text-sm mb-2">
            <Building className="w-4 h-4 mr-2 text-purple-400" />
            {course.institution}
          </div>
          <div className="flex items-center text-gray-400 text-sm mb-4">
            <Calendar className="w-4 h-4 mr-2 text-blue-400" />
            {course.date}
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-gray-700 text-gray-300">
              {course.location}
            </Badge>
            {course.tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="border-green-500/50 text-green-400">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}