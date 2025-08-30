import React from 'react';
import { X, ExternalLink, Github, Calendar, Code, Users, Award, Globe } from 'lucide-react';

const ProjectDetailsModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Enhanced project details with additional information
  const getProjectDetails = (project) => {
    const details = {
      "Crowdfunding Platform": {
        technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "MVC Architecture", "SSR"],
        features: [
          "Crowdfunding platform with secure payment processing",
          "Razorpay payment gateway integration",
          "Automated payment verification system",
          "MVC architecture implementation",
          "Server-side rendering (SSR) for SEO optimization",
          "30% improvement in page load speed"
        ],
        challenges: [
          "Integrating Razorpay payment gateway securely",
          "Implementing automated payment verification",
          "Optimizing SSR performance for better SEO",
          "Managing complex payment workflows"
        ],
        duration: "3 months",
        teamSize: "Solo Project",
        status: "Completed"
      },
      "Real-Time Chat Application": {
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Cloudinary", "Zustand"],
        features: [
          "Real-time messaging with Socket.io",
          "JWT authentication system",
          "Cloudinary integration for image storage",
          "Zustand state management",
          "Online status tracking",
          "Sub-second message delivery time",
          "Multiple concurrent user support"
        ],
        challenges: [
          "Implementing real-time communication with Socket.io",
          "Achieving sub-second message delivery",
          "Managing state with Zustand efficiently",
          "Integrating Cloudinary for image storage",
          "Handling multiple concurrent users"
        ],
        duration: "2 months",
        teamSize: "Solo Project",
        status: "Completed"
      },
      "React Password Manager": {
        technologies: ["React.js", "JavaScript", "CSS3", "Local Storage", "Encryption"],
        features: [
          "Secure password storage",
          "Password generation",
          "Category organization",
          "Search functionality",
          "Export/Import capabilities"
        ],
        challenges: [
          "Implementing client-side encryption",
          "Ensuring data security",
          "Creating intuitive UI/UX"
        ],
        duration: "1.5 months",
        teamSize: "Solo Project",
        status: "Completed"
      },
      "Linktree Next.js": {
        technologies: ["Next.js", "React.js", "JavaScript", "CSS3", "Vercel"],
        features: [
          "Custom link management",
          "Responsive design",
          "Analytics integration",
          "Custom themes",
          "Social media integration"
        ],
        challenges: [
          "Optimizing for mobile devices",
          "Implementing analytics",
          "Creating customizable themes"
        ],
        duration: "1 month",
        teamSize: "Solo Project",
        status: "Completed"
      },
      "URL Shortener Next.js": {
        technologies: ["Next.js", "MongoDB", "Node.js", "JavaScript", "Vercel"],
        features: [
          "URL shortening service",
          "Click tracking",
          "Custom short URLs",
          "Analytics dashboard",
          "QR code generation"
        ],
        challenges: [
          "Database optimization",
          "Implementing tracking system",
          "Handling high traffic"
        ],
        duration: "1.5 months",
        teamSize: "Solo Project",
        status: "Completed"
      },
      "Spotify Clone": {
        technologies: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
        features: [
          "Music player interface",
          "Playlist management",
          "Search functionality",
          "Responsive design",
          "Audio controls"
        ],
        challenges: [
          "Replicating Spotify's UI",
          "Implementing audio controls",
          "Creating responsive design"
        ],
        duration: "1 month",
        teamSize: "Solo Project",
        status: "Completed"
      },
      "Netflix Clone": {
        technologies: ["HTML5", "CSS3", "JavaScript"],
        features: [
          "Movie browsing interface",
          "Responsive design",
          "Hover effects",
          "Navigation menu",
          "Hero section"
        ],
        challenges: [
          "Replicating Netflix's design",
          "Creating smooth animations",
          "Making it responsive"
        ],
        duration: "2 weeks",
        teamSize: "Solo Project",
        status: "Completed"
      },
      "Twitter Clone": {
        technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
        features: [
          "Tweet interface",
          "User profiles",
          "Responsive design",
          "Interactive elements",
          "Modern UI/UX"
        ],
        challenges: [
          "Creating Twitter-like interface",
          "Implementing responsive design",
          "Using Tailwind CSS effectively"
        ],
        duration: "1 month",
        teamSize: "Solo Project",
        status: "Completed"
      },
      "TODO List (React.js)": {
        technologies: ["React.js", "JavaScript", "CSS3", "Local Storage"],
        features: [
          "Task management",
          "Add/Delete tasks",
          "Mark as complete",
          "Local storage",
          "Responsive design"
        ],
        challenges: [
          "State management",
          "Local storage integration",
          "Creating intuitive UI"
        ],
        duration: "1 week",
        teamSize: "Solo Project",
        status: "Completed"
      }
    };

    return details[project.title] || {
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3"],
      features: ["Feature 1", "Feature 2", "Feature 3"],
      challenges: ["Challenge 1", "Challenge 2"],
      duration: "1 month",
      teamSize: "Solo Project",
      status: "Completed"
    };
  };

  const projectDetails = getProjectDetails(project);

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="bg-gray-900/95 backdrop-blur-lg rounded-2xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur-lg border-b border-white/10 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                <p className="text-gray-400 text-sm">Project details and specifications</p>
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
        <div className="p-6 space-y-6">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={project.Img}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Project Meta Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 rounded-xl p-4 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-[#a855f7]" />
                <span className="text-sm font-medium text-gray-400">Duration</span>
              </div>
              <p className="text-white font-semibold">{projectDetails.duration}</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-[#a855f7]" />
                <span className="text-sm font-medium text-gray-400">Team Size</span>
              </div>
              <p className="text-white font-semibold">{projectDetails.teamSize}</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-[#a855f7]" />
                <span className="text-sm font-medium text-gray-400">Status</span>
              </div>
              <p className="text-white font-semibold">{projectDetails.status}</p>
                       </div>
         </div>

         {/* Project Description */}
         <div className="bg-gray-800/50 rounded-xl p-6 border border-white/5">
           <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
           <p className="text-gray-300 leading-relaxed">{project.description}</p>
         </div>

         {/* Technologies Used */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-[#a855f7]" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectDetails.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 text-[#a855f7] rounded-full text-xs font-medium border border-[#a855f7]/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#a855f7]" />
              Key Features
            </h3>
            <ul className="space-y-2">
              {projectDetails.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#a855f7] mt-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Solutions */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-4">Challenges & Solutions</h3>
            <ul className="space-y-2">
              {projectDetails.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#a855f7] mt-2 flex-shrink-0" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Links */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-4">Project Links</h3>
            <div className="flex flex-wrap gap-3">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-lg hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              <a
                href={project.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:scale-105 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            </div>
          </div>
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

export default ProjectDetailsModal;
