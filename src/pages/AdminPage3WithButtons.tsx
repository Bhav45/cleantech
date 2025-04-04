import React, { FC } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import AppHeader from "../components/AppHeader";
import { useNavigate } from "react-router-dom";
import card1 from '../assets/Card_3.png';
import card2 from '../assets/Card_2.png';
import card3 from '../assets/card1.png'; // Adjust the path if needed

const Page3WithButtons: FC = () => {
  const navigate = useNavigate();

  // Array of environmental cards
  const environmentalCards = [
    { id: 1, image: card1 },
    { id: 2, image: card2 },
    { id: 3, image: card3 },
  ];

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
      <Typography variant="h4" color="white" sx={{ mb: 2, fontWeight: "bold", textAlign: "center", mt: 2 }}>
        Environmental Sustainability
      </Typography>
      <Container sx={{ py: 2 }}>
        <Grid container spacing={3}> {/* Reduced the spacing between cards */}
          {environmentalCards.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
              <Box
                onClick={() => navigate(`/card-details/${card.id}`)}
                sx={{
                  cursor: "pointer",
                  borderRadius: 5,
                  overflow: "hidden",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={card.image}
                  alt={`Card ${card.id}`}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Page3WithButtons;
