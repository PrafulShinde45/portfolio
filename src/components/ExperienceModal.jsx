import React from 'react';
import { X, Calendar, MapPin, Building, Users, Code, Award } from 'lucide-react';

const ExperienceModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Innomatics Research Labs",
      duration: "Jan 2025 - Mar 2025",
      location: "Bangalore",
      description: "Developed backend APIs with Node.js and Express.js, integrating MongoDB for data persistence and optimized query performance. Built and enhanced React.js components with Tailwind CSS to improve UI responsiveness and accessibility.",
      technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "Tailwind CSS", "JWT", "Agile"],
      achievements: [
        "Developed backend APIs with Node.js and Express.js, integrating MongoDB for data persistence and optimized query performance",
        "Built and enhanced React.js components with Tailwind CSS to improve UI responsiveness and accessibility",
        "Implemented JWT-based authentication and robust error handling to improve application security and reliability",
        "Collaborated in Agile sprints, delivering production-ready features within deadlines"
      ]
    },
    {
      title: "Web Developer Intern",
      company: "Webin Technovation Pvt. Ltd.",
      duration: "Dec 2023 - Jan 2024",
      location: "Nashik",
      description: "Developed reusable UI components in React.js and optimized performance using efficient state management techniques. Integrated RESTful APIs with frontend modules, ensuring seamless data flow between client and server.",
      technologies: ["React.js", "RESTful APIs", "State Management", "Frontend Development"],
      achievements: [
        "Developed reusable UI components in React.js and optimized performance using efficient state management techniques",
        "Integrated RESTful APIs with frontend modules, ensuring seamless data flow between client and server",
        "Worked closely with backend developers to align API design with frontend requirements"
      ]
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900/95 backdrop-blur-lg rounded-2xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur-lg border-b border-white/10 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Experience Details</h2>
                <p className="text-gray-400 text-sm">Professional journey and achievements</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center group"
            >
              <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                {/* Company Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] flex items-center justify-center flex-shrink-0">
                  <Building className="w-8 h-8 text-white" />
                </div>

                {/* Experience Details */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
                    <p className="text-lg text-[#a855f7] font-medium">{experience.company}</p>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">{experience.description}</p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 text-[#a855f7] rounded-full text-xs font-medium border border-[#a855f7]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#a855f7] mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-900/95 backdrop-blur-lg border-t border-white/10 p-6 rounded-b-2xl">
          <div className="flex items-center justify-center">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium rounded-lg hover:scale-105 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
