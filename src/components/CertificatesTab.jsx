import { useState } from "react";
import Modal from "@mui/material/Modal"; // Import MUI Modal
import CloseIcon from "@mui/icons-material/Close"; // Import close button icon

const certificates = [
  { Img: "/certificates/JPC.jpg", id: 1 },
  { Img: "/certificates/TCS.jpg", id: 2 },
  { Img: "/certificates/GoogleCloud.jpg", id: 3 },
];

export default function CertificatesTab({ value }) {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  // Function to open modal
  const handleOpen = (img) => {
    setSelectedImg(img);
    setOpen(true);
  };

  // Function to close modal
  const handleClose = () => {
    setOpen(false);
    setSelectedImg("");
  };

  return (
    <TabPanel value={value} index={1}>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {certificates.map((cert) => (
          <div key={cert.id} className="bg-gray-900 rounded-lg p-3 shadow-md">
            {/* Clickable Certificate Image */}
            <img
              src={cert.Img}
              alt="Certificate"
              className="w-72 h-auto rounded-md object-cover border border-gray-700 cursor-pointer hover:scale-105 transition"
              onClick={() => handleOpen(cert.Img)} // Click to enlarge
            />
          </div>
        ))}
      </div>

      {/* Modal for Enlarged Certificate */}
      <Modal open={open} onClose={handleClose} className="flex justify-center items-center">
        <div className="bg-black bg-opacity-90 p-4 rounded-lg relative">
          {/* Close Button */}
          <button onClick={handleClose} className="absolute top-2 right-2 text-white text-3xl">
            <CloseIcon />
          </button>

          {/* Enlarged Certificate */}
          <img src={selectedImg} alt="Enlarged Certificate" className="max-w-full max-h-screen" />
        </div>
      </Modal>
    </TabPanel>
  );
}
