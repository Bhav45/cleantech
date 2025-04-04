import React, { FC } from "react";
import { Box, AppBar, Toolbar, Typography, Container, IconButton, Grid, Card, CardContent } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

import AppHeader from "../components/AppHeader";
import text1 from "../assets/text1.png";
import text2 from "../assets/text2.png";
import text3 from "../assets/text3.png";
import text4 from "../assets/text4.png";
import text5 from "../assets/text5.png";
import text6 from "../assets/text6.png";
import text7 from "../assets/text7.png";
import text8 from "../assets/text 8.png";

// Adjust the path if needed
const Page5: FC = () => {
  const navigate = useNavigate();
  const images = [
    { src: text1, alt: 'Employees', id: '1', label: 'Employment and Equity' },
    { src: text2, alt: 'Health & Safety', id: '2', label: 'Health & Safety' },
    { src: text3, alt: 'Education', id: '3', label: 'Education and Training' },
    { src: text4, alt: 'Housing', id: '4', label: 'Housing and Living Condition' },
    { src: text5, alt: 'Grievances', id: '5', label: 'Grievances' },
    { src: text6, alt: 'Social Security', id: '6', label: 'Social Security' },
    { src: text7, alt: 'CSR', id: '7', label: 'CSR Activities' },
    { src: text8, alt: 'Rehabilitation', id: '8', label: 'Rehabilitation' }
  ];

  return (
    <Box sx={{ minHeight: '100vh', width: '100%', backgroundColor: '#81A895' }}>
      {/* Header Section (AppBar) */}
      <AppBar position="static" sx={{ backgroundColor: "#DBDD7A" }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, color: "black", textAlign: "left", fontWeight: "bold" }}>
            CLEAN TECH
          </Typography>
          <IconButton edge="end" color="inherit" onClick={() => navigate(-1)}>
            <ArrowBackIcon sx={{ color: "black" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Typography
        variant="h4"
        color="white"
        sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center', mt: 4 }}
      >
        Social Sustainability
      </Typography>

      <Container sx={{ textAlign: 'center', padding: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {images.map((img) => (
            <Grid item  xs={12} sm={6} md={4} key={img.id}>
              <Card
  sx={{
    backgroundColor: '#DBDD7A',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: 2,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    '&:hover': {
      boxShadow: 6,
    },
  }}
  onClick={() => navigate(`/buttons-page/${img.id}`)}
>
  <Box sx={{ p: 1 }}>
    <img
      src={img.src}
      alt={img.alt}
      style={{
        width: '100%',
        height: '160px',
        objectFit: 'cover',
        borderRadius: '8px',
      }}
    />
  </Box>

  <CardContent sx={{ pt: 0, pb: 2 }}>
    <Typography variant="subtitle1" fontWeight="bold" textAlign="center">
      {img.label}
    </Typography>
  </CardContent>
</Card>

            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Page5;
