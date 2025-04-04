import React, { FC } from "react";
import { Box, Container, useMediaQuery } from "@mui/material"; 
import AppHeader from "../components/AppHeader";
import { useNavigate } from "react-router-dom"; 
import Frame1 from "../assets/Frame_1.png";
import Frame15 from "../assets/Frame 15.png";
import Frame16 from "../assets/Frame 16.png";
import Frame17 from "../assets/Frame 17.png";
import Frame18 from "../assets/Frame 18.png"; // Adjust the path if needed

interface Icon {
  imgSrc: string;
  angle: number;
  route?: string;
}

const UserDashboard: FC = () => {
  const navigate = useNavigate();
  const radius = 200;

  // Use media query to check if the screen size is small (mobile)
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const icons: Icon[] = [
    { imgSrc: Frame1, angle: 270, route: "/page1" },
    { imgSrc: Frame15, angle: 350, route: "/page2" },
    { imgSrc: Frame16, angle: 50, route: "/page3" },
    { imgSrc: Frame17, angle: 130, route: "/page4" },
    { imgSrc: Frame18, angle: 190, route: "/page5" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
      <Container sx={{ position: "relative", width: "100%", height: isSmallScreen ? 'auto' : 600, margin: "auto", mt: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "absolute", // Column layout for small screens
            alignItems: "center",
            justifyContent: isSmallScreen ? "center" : "initial", // Centered for small screens
            height: isSmallScreen ? "auto" : 600, // Adjust container height for small screens
          }}
        >
          {icons.map((icon, index) => {
            if (isSmallScreen) {
              // For mobile screens, stack icons vertically in a column format
              return (
                <Box
                  key={index}
                  sx={{
                    mb: 2,
                    textAlign: "center",
                    cursor: "pointer",
                    width: 120,
                    height: 120,
                  }}
                  onClick={() => icon.route && navigate(icon.route)}
                >
                  <Box
                    component="img"
                    src={icon.imgSrc}
                    alt={`icon-${index}`}
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                    }}
                  />
                </Box>
              );
            } else {
              // For larger screens, use the circular layout
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
                  <Box
                    component="img"
                    src={icon.imgSrc}
                    alt={`icon-${index}`}
                    sx={{
                      width: 120,
                      height: 120,
                      mb: 0,
                      borderRadius: "50%",
                    }}
                  />
                </Box>
              );
            }
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default UserDashboard;
