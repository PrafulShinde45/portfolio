import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Code, Award, Boxes } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import CardProject from "../components/CardProject";


const projects = [
  {
    title: "Crowdfunding Platform",
    description: "Created a decentralized crowdfunding platform allowing users to raise and contribute funds securely using blockchain.",
    Img: "cp.jpg",
    Link: "https://github.com/PrafulShinde45/Crowdfunding-Platform",
    id: 5,
  },
  {
    title: "Real-Time Chat Application",
    description: "Developed a real-time chat application using WebSockets and Firebase for instant messaging between users.",
    Img: "RA.jpg",
    Link: "https://github.com/PrafulShinde45/Real-Time-Chat-Application",
    id: 4,
  },
  
    {
      "title": "React Password Manager",
      "description": "Built a secure password manager using React.js, featuring encryption for storing and managing user credentials safely.",
      "Img": "RPM.png",
      "Link": "https://github.com/PrafulShinde45/react-password-manager",
      "id": 3
    },
    {
      "title": "Linktree Next.js",
      "description": "Developed a Linktree-style application using Next.js, allowing users to manage multiple links on a single personalized page.",
      "Img": "LC.png",
      "Link": "https://github.com/PrafulShinde45/Linktree-nextjs",
      "id": 4
    },
    {
      "title": "URL Shortener Next.js",
      "description": "Created a URL shortening service using Next.js and MongoDB, providing users with short and trackable links.",
      "Img": "ULS.png",
      "Link": "https://github.com/PrafulShinde45/url-shortner",
      "id": 5
    },
    {
      "title": "Spotify Clone",
      "description": "Developed a Spotify clone using only HTML, CSS, and JavaScript, featuring a basic music player and UI similar to Spotify.",
      "Img": "SP.png",
      "Link": "https://github.com/PrafulShinde45/spotify",
      "id": 6
    },
    {
      "title": "Netflix Clone",
      "description": "Built a Netflix clone using pure HTML and CSS, replicating the UI design of the Netflix homepage.",
      "Img": "NFC.png",
      "Link": "https://github.com/PrafulShinde45/netflix-clone",
      "id": 7
    },
    {
      "title": "Twitter Clone",
      "description": "Created a Twitter clone using Tailwind CSS, featuring a modern UI with responsive design and interactive elements.",
      "Img": "TC.png",
      "Link": "https://github.com/PrafulShinde45/Twitter-clone",
      "id": 8
    },
    {
      "title": "TODO List (React.js)",
      "description": "Developed a simple and interactive TODO list application using React.js to manage daily tasks efficiently.",
      "Img": "TD.png",
      "Link": "https://github.com/PrafulShinde45/React-ToDo",
      "id": 9
    }
  ]
  
const handleViewCertificate = (cert) => {
  const link = document.createElement("a");
  link.href = cert.Link;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.click();
};

const certificates = [
  {
    Img: "/certificates/JPC.jpg",
    Link: "/certificates/JPC.jpg",
    id: 1,
  },
  
];



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
  const handleChange = (event, newValue) => setValue(newValue);

  const handlers = useSwipeable({
    onSwipedLeft: () => setValue((prev) => Math.min(prev + 1, 2)),
    onSwipedRight: () => setValue((prev) => Math.max(prev - 1, 0)),
  });

  return (
    <div {...handlers} className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portfolio">
      <Box sx={{ width: "100%" }}>
        <AppBar position="static" elevation={0} sx={{ bgcolor: "transparent", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px" }}>
          <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" variant="fullWidth">
            <Tab icon={<Code />} label={<span style={{ color: 'white' }}>Projects</span>} />
            <Tab icon={<Award />} label={<span style={{ color: 'white' }}>Certificates</span>} />
            <Tab icon={<Boxes />} label={<span style={{ color: 'white' }}>Tech Stack</span>} />
          </Tabs>
        </AppBar>

        {/* Projects Tab */}
        <TabPanel value={value} index={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
            {projects.map((project) => (
              <CardProject key={project.id} {...project} />
            ))}
          </div>
        </TabPanel>



        <TabPanel value={value} index={1}>
  <div id="Certificates" className="flex flex-wrap justify-center gap-6 p-4">
    {certificates.map((cert) => (
      <div key={cert.id} className="bg-gray-900 rounded-lg p-3 shadow-md">
        {/* Certificate Image */}
        <img
          src={cert.Img}
          alt="Certificate"
          className="w-72 h-auto rounded-md object-cover border border-gray-700"
        />

        {/* Download Certificate Button */}
        <div className="text-center mt-2">
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = cert.Img; // Path to the certificate
              link.download = cert.Img.split("/").pop(); // Extracts file name
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
           
          </button>
        </div>
      </div>
    ))}
  </div>
</TabPanel>






        {/* Tech Stack Tab */}
        <TabPanel value={value} index={2}>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-5 justify-center items-center">
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <img src={tech.Img} alt={tech.name} className="w-16 h-16" />
                <span className="text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
