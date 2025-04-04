import React, { FC, useState } from "react";
import { Box, Button, Container, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import Frame16 from "../assets/Frame 16.png";
import Frame17 from "../assets/Frame 17.png";
import Frame18 from "../assets/Frame 18.png"; // Adjust the path if needed

  interface Icon {
    imgSrc: string;
    angle: number;
    route?: string;
  }
  
  
const NextPage: FC = () => {
    const navigate = useNavigate();
    const radius = 250;
  
    const icons: Icon[] = [
      { imgSrc: Frame16, angle: 270, route: "/page3" },
      { imgSrc: Frame17, angle: 360, route: "/page4" },
      { imgSrc: Frame18, angle: 180, route: "/page5" },
    ];
  
    return (
      <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
        <AppHeader />
        <Container sx={{ position: "relative", width: 100, height: 700, margin: "auto", mt: 4 }}>
          {icons.map((icon, index) => {
            const angleRad = (icon.angle * Math.PI) / 180;
            const x = radius * Math.cos(angleRad);
            const y = radius * Math.sin(angleRad);
  
            return (
              <Box
                key={index}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() => icon.route && navigate(icon.route)}
              >
                <Box component="img" src={icon.imgSrc} alt={`icon-${index}`} sx={{ width: 120, height: 120, mb: 0, borderRadius: "50%" }} />
              </Box>
            );
          })}
        </Container>
      </Box>
    );
  };

export default NextPage;
