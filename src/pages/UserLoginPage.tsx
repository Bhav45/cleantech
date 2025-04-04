import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader";

const UserLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Navigate to the user dashboard after successful login
    navigate("/user-dashboard");
  };

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
      <Container maxWidth="sm" sx={{ pt: 4 }}>
        <Box sx={{ mt: 8, display: "flex", flexDirection: "column", gap: 4 }}>
          <Box>
            <Typography sx={{ color: "#DBDD7A", fontSize: "1.5rem", mb: 2 }}>
              Email
            </Typography>
            <TextField
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                '& .MuiOutlinedInput-root': {
                  borderRadius: "8px"
                }
              }}
            />
          </Box>
          <Box>
            <Typography sx={{ color: "#DBDD7A", fontSize: "1.5rem", mb: 2 }}>
              Password
            </Typography>
            <TextField
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                '& .MuiOutlinedInput-root': {
                  borderRadius: "8px"
                }
              }}
            />
          </Box>
          <Button
            onClick={handleLogin}
            sx={{
              backgroundColor: "#DBDD7A",
              color: "black",
              py: 2,
              fontSize: "1.25rem",
              fontWeight: "bold",
              '&:hover': {
                backgroundColor: "#a8aa61"
              }
            }}
          >
            Log In
          </Button>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ color: "white" }}>
              Don't have an account?{" "}
              <Typography
                component="span"
                onClick={() => navigate('/signup')}
                sx={{
                  color: "#DBDD7A",
                  textDecoration: "none",
                  cursor: "pointer",
                  '&:hover': { textDecoration: "underline" }
                }}
              >
                Register Now
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default UserLoginPage;
