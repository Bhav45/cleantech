import React, { FC } from "react";
import { Box, Container,Typography,Grid } from "@mui/material";
import AppHeader from "../components/AppHeader";
import { useNavigate } from "react-router-dom";
import new1 from "../assets/new1.png";
import new2 from "../assets/new2.png";
import new3 from "../assets/new3.png"; // Adjust the path if needed

const Page4: FC = () => {
        const navigate = useNavigate();
      
        const economicCards = [
          { 
            id: 1, 
            image: new1
          },
          { 
            id: 2, 
            image: new2
          },
          { 
            id: 3, 
            image: new3,
      
          }
        ];
      
        return (
          <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
            <AppHeader />
            <Container sx={{ py: 2}}>
              <Typography variant="h4" sx={{ mb: 25, color: "white", textAlign: "center", fontWeight: "bold" }}>
                Economic Sustainability
              </Typography>
              <Grid container spacing={8} justifyContent="center" alignItems="stretch">
                {economicCards.map((card) => (
                  <Grid item xs={14} md={4} key={card.id}>
                    <Box
                      onClick={() => navigate(`/economic-details/${card.id}`)}
                      sx={{
                        height: "100%",
                        cursor: "pointer",
                        borderRadius: 2,
                        overflow: "hidden",
                        boxShadow: 0,
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={card.image}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        );
      };


export default Page4;
