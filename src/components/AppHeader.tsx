import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useLocation } from "react-router-dom";

const AppHeader: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    if (location.pathname === "/") {
      navigate("/login");
    } else {
      navigate(-1);
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#DBDD7A" }}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1, color: "black", textAlign: "left", fontWeight: "bold" }}>
          CLEAN TECH
        </Typography>
        <IconButton edge="end" color="inherit" onClick={handleBackClick}>
          <ArrowBackIcon sx={{ color: "black" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
