import React, { useState } from "react";
import { Modal, IconButton, Box, Backdrop, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const Certificate = ({ ImgSertif, name, description }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        background: "#18181b",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-5px) scale(1.04)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
        },
      }}
    >
      {/* Gradient Background Layer */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom right, #6366f1 0%, #a855f7 100%)",
          opacity: 0.1,
          zIndex: 1,
          transition: "opacity 0.3s ease",
          "&:hover": {
            opacity: 0.2,
          },
        }}
      />
      
      {/* Certificate Content Layer */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          padding: 2.5,
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Certificate Image Centered */}
        <Box
          sx={{
            width: "90%",
            height: "90%",
            borderRadius: 2,
            overflow: "hidden",
            background: "#18181b",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={handleOpen}
        >
          <img
            className="certificate-image"
            src={ImgSertif}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "inherit",
              display: "block",
              transition: "filter 0.3s ease",
            }}
          />
          {/* Overlay for View Certificate */}
          <Box
            className="overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0,
              transition: "all 0.3s ease",
              cursor: "pointer",
              zIndex: 3,
              "&:hover": { opacity: 1 },
              background: "linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.35))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={handleOpen}
          >
            <Box
              className="hover-content"
              sx={{
                textAlign: "center",
                color: "white",
              }}
            >
              <FullscreenIcon sx={{ fontSize: 40, mb: 1, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }} />
              <Typography variant="h6" sx={{ fontWeight: 600, textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
                View Certificate
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Name and Description - absolutely at bottom */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          p: 2,
          background: "rgba(24,24,27,0.85)",
          zIndex: 4,
        }}
      >
        <Typography variant="subtitle1" sx={{ color: "#fff", fontWeight: 600 }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "#bbb", mt: 0.5 }}>
          {description}
        </Typography>
      </Box>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
          sx: { backgroundColor: "rgba(0, 0, 0, 0.9)", backdropFilter: "blur(5px)" },
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          padding: 0,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "auto",
            maxWidth: "90vw",
            maxHeight: "90vh",
            m: 0,
            p: 0,
            outline: "none",
            "&:focus": { outline: "none" },
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "white",
              bgcolor: "rgba(0,0,0,0.6)",
              zIndex: 1,
              padding: 1,
              "&:hover": { bgcolor: "rgba(0,0,0,0.8)", transform: "scale(1.1)" },
            }}
            size="large"
          >
            <CloseIcon sx={{ fontSize: 24 }} />
          </IconButton>
          <img
            src={ImgSertif}
            alt={name}
            style={{
              display: "block",
              maxWidth: "100%",
              maxHeight: "90vh",
              margin: "0 auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Certificate;