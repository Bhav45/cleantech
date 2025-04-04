import React, { FC, useState } from "react";
import { Box, Container, TextField, IconButton, Button, Typography } from "@mui/material";
import { Eye } from 'lucide-react';
import AppHeader from "../components/AppHeader";
import { useNavigate } from "react-router-dom";

const AdminLoginPage: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate(); 

  // Handle Admin login
  const handleAdminLogin = async () => {
    // Validate fields
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("https://georisk.co.in/cleantech/login_admin/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            email,
            password,
          }
        
        }),
        
      });
    
      if (response.ok) {
        navigate('/admin-dashboard');
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
      <Container maxWidth="sm" sx={{ pt: 4 }}>
        <Box sx={{ mt: 5, display: "flex", flexDirection: "column", gap: 4 }}>
          <Box>
            <Typography sx={{ color: "#DBDD7A", fontSize: "1.5rem", mb: 2 }}>
              Email
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <Box sx={{ position: "relative" }}>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  '& .MuiOutlinedInput-root': {
                    borderRadius: "8px"
                  }
                }}
              />
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: "50%",
                  transform: "translateY(-50%)"
                }}
              >
                <Eye />
              </IconButton>
            </Box>
          </Box>
          {error && (
            <Typography sx={{ color: "red", textAlign: "center", fontWeight: "bold" }}>
              {error}
            </Typography>
          )}
          <Button
            onClick={handleAdminLogin}
            disabled={loading} 
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
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AdminLoginPage;
