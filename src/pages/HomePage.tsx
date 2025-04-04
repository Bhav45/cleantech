import React from "react";
import { Box, Container, Grid } from "@mui/material";
import AppHeader from "../components/AppHeader";
import homepage from "../assets/homepage_image.svg"; // Add your own images
import im1 from "../assets/im1.png";
import im2 from "../assets/img 2.png";
import im3 from "../assets/im 3.png";

const HomePage: React.FC = () => {
  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
      <Container sx={{ textAlign: "center", color: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - 64px)" }}>
        <Grid container spacing={15}>
          <Grid item xs={12} md={6}>
            <img src={homepage} alt="Home Page" style={{ width: "80%", height: "700", borderRadius: "10px" }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <img src={im1} alt="Stacked Image 1" style={{ width: "80%", height: "auto", borderRadius: "10px" }} />
              </Grid>
              <Grid item xs={12}>
                <img src={im2} alt="Stacked Image 2" style={{ width: "80%", height: "auto", borderRadius: "10px" }} />
              </Grid>
              <Grid item xs={12}>
                <img src={im3} alt="Stacked Image 3" style={{ width: "80%", height: "auto", borderRadius: "10px" }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
