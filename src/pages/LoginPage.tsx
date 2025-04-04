import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
      <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "calc(90vh - 50px)" }}>
        <Typography variant="h3" sx={{ mb: 5, color: "white", fontWeight: "bold" }}>Login</Typography>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} sm={4} md={4}>
            <Button onClick={() => navigate("/user-login")} sx={{ width: "100%", py: 1, backgroundColor: "#DBDD7A", color: "black", fontSize: "1.25rem", fontWeight: "bold", '&:hover': { backgroundColor: "#a8aa61" } }}>
              User Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Button onClick={() => navigate("/admin-login")} sx={{ width: "100%", py: 1, backgroundColor: "#DBDD7A", color: "black", fontSize: "1.25rem", fontWeight: "bold", '&:hover': { backgroundColor: "#a8aa61" } }}>
              Admin Login
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LoginPage;
