import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title = 'Clean Tech', showBack = false, onBack }) => {
  const navigate = useNavigate();

  // Conditional Back Button
  const handleBack = () => {
    if (onBack) {
      onBack(); // Custom onBack handler
    } else {
      navigate(-1); // Go back to the previous page
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#DBDD7A',
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // This will position items on both sides
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: 'black',
          fontWeight: 'bold',
          textAlign: 'left', // Title is aligned to the left
          flexGrow: 1, // This ensures the title takes up space
        }}
      >
        {title}
      </Typography>

      {showBack && (
        <IconButton edge="end" color="inherit" onClick={handleBack}>
          <ArrowBackIcon sx={{ color: 'black' }} />
        </IconButton>
      )}
    </Box>
  );
};

export default PageHeader;
