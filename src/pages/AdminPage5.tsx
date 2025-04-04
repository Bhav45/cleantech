import React, { FC } from "react";
import { Box, AppBar, Toolbar, Typography, Container, IconButton, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled, TextField } from "@mui/material";
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
const Page5 = () => {
        const navigate = useNavigate();
        const images = [
          { src: text1, alt: 'Employees', id: '1' },
          { src: text2, alt: 'Health & Safety', id: '2' },
          { src: text3, alt: 'Education', id: '3' },
          { src: text4, alt: 'Housing', id: '4' },
          { src: text5, alt: 'Grievances', id: '5' },
          { src: text6, alt: 'Social Security', id: '6' },
          { src: text7, alt: 'CSR', id: '7' },
          { src: text8, alt: 'Rehabilitation', id: '8' }
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
                  <Grid item xs={12} sm={6} md={3} key={img.id}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      onClick={() => navigate(`/buttons-page/${img.id}`)}
                      style={{
                        width: '100%',
                        height: '30vh',
                        borderRadius: '2px',
                        cursor: 'pointer',
                        objectFit: 'cover'
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        );
      };
export default Page5;
