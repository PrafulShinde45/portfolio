import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Code, Award, Boxes } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import CardProject from "../components/CardProject";
import Certificate from "../components/Certificate";
import TechStackIcon from "../components/TechStackIcon";
import { useNavigate } from "react-router-dom";
import { projects, certificates } from '../data';


const handleViewCertificate = (cert) => {
  const link = document.createElement("a");
  link.href = cert.Link;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.click();
};


const techStack = [
  { name: "JavaScript", Img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React.js", Img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", Img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", Img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", Img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "SQL", Img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "HTML", Img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", Img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", Img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "Next.js", Img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Java", Img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", Img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Python", Img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },

];


function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => setValue(newValue);

  const handlers = useSwipeable({
    onSwipedLeft: () => setValue((prev) => Math.min(prev + 1, 2)),
    onSwipedRight: () => setValue((prev) => Math.max(prev - 1, 0)),
  });

  // Listen for custom event to switch to certificates tab
  useEffect(() => {
    const handleSwitchToCertificates = () => {
      setValue(1); // Index 1 is the Certificates tab
    };

    window.addEventListener('switchToCertificates', handleSwitchToCertificates);
    
    return () => {
      window.removeEventListener('switchToCertificates', handleSwitchToCertificates);
    };
  }, []);

  return (
    <div {...handlers} className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portfolio">
      <Box sx={{ width: "100%" }}>
        <AppBar position="static" elevation={0} sx={{ bgcolor: "transparent", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px" }}>
          <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" variant="fullWidth">
            <Tab icon={<Code color="#ec4899" />} label={<span style={{ color: 'white' }}>Projects</span>} />
            <Tab icon={<Award color="#ec4899" />} label={<span style={{ color: 'white' }}>Certificates</span>} />
            <Tab icon={<Boxes color="#ec4899" />} label={<span style={{ color: 'white' }}>Tech Stack</span>} />
          </Tabs>
        </AppBar>

        {/* Projects Tab */}
        <TabPanel value={value} index={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
            {projects.map((project) => (
              <CardProject key={project.id} {...project}>
                <div className="flex flex-row justify-start items-center gap-3 mt-4">
                  <a
                    href={project.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 text-purple-300 rounded-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-xl overflow-hidden text-sm font-medium"
                  >
                    Live
                  </a>
                  <a
                    href={project.Github || project.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 text-blue-300 rounded-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden text-sm font-medium"
                  >
                    Github
                  </a>
                </div>
              </CardProject>
            ))}
          </div>
        </TabPanel>



        <TabPanel value={value} index={1}>
          <div id="Certificates" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {certificates.map((cert) => (
              <div key={cert.id} className="w-full aspect-square flex items-center justify-center">
                <Certificate
                  ImgSertif={cert.Img}
                  name={cert.name}
                  description={cert.description}
                />
              </div>
            ))}
          </div>
        </TabPanel>





        {/* Tech Stack Tab */}
        <TabPanel value={value} index={2}>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-5 justify-center items-center">
            {techStack.map((tech, index) => (
              <TechStackIcon key={index} TechStackIcon={tech.Img} Language={tech.name} />
            ))}
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
