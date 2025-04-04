import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader";

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Navigate to user login page after signup
    navigate("/user-login");
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
              Username
            </Typography>
            <TextField
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
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
            onClick={handleSignup}
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
            Sign Up
          </Button>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ color: "white" }}>
              Already have an account?{" "}
              <Typography
                component="span"
                onClick={() => navigate('/user-login')}
                sx={{
                  color: "#DBDD7A",
                  textDecoration: "none",
                  cursor: "pointer",
                  '&:hover': { textDecoration: "underline" }
                }}
              >
                Login
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SignupPage;
