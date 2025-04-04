import React, { FC } from "react";
import { Box, Container, Grid, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import Frame16 from "../assets/Frame 16.png"; // Adjust the path if needed
import Frame17 from "../assets/Frame 17.png"; // Adjust the path if needed
import Frame18 from "../assets/Frame 18.png"; // Adjust the path if needed

interface Icon {
  imgSrc: string;
  angle: number;
  route?: string;
}

const AdminDashboard: FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  // Icons configuration with appropriate angles and routes
  const icons: Icon[] = [
    { imgSrc: Frame16, angle: 270, route: "/page3" },
    { imgSrc: Frame17, angle: 350, route: "/page4" },
    { imgSrc: Frame18, angle: 190, route: "/page5" },
  ];

  // Responsive design based on screen size (e.g., mobile, tablet, desktop)
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // For mobile
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md")); // For tablet

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
      <Container sx={{ py: 4 }}>
        {/* Icons for additional navigation */}
        <Grid
          container
          spacing={4}
          justifyContent="center" // Centers the icons horizontally
          alignItems="center" // Centers the icons vertically
          sx={{
            height: isSmallScreen ? "auto" : "500px", // Adjust the height for responsiveness
          }}
        >
          {icons.map((icon, index) => (
            <Grid
              item
              xs={12} // Each icon will take full width on mobile
              sm={4}  // On medium screens (like tablets), each icon will take 4/12 (1/3) width
              key={index}
              sx={{
                textAlign: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)", // Hover effect to enlarge icon
                },
              }}
              onClick={() => icon.route && navigate(icon.route)}
            >
              <Box
                component="img"
                src={icon.imgSrc}
                alt={`icon-${index}`}
                sx={{
                  width: isSmallScreen ? 80 : isMediumScreen ? 100 : 120, // Adjust icon sizes based on screen size
                  height: isSmallScreen ? 80 : isMediumScreen ? 100 : 120, // Adjust icon sizes based on screen size
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AdminDashboard;
