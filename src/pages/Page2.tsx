import React, { FC } from "react";
import { Box, Typography, Container } from "@mui/material";
import AppHeader from "../components/AppHeader"; // Import your AppHeader component

const Page2: FC = () => {
  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
      <Container sx={{ py: 4, textAlign: "center" }}>
        <Typography sx={{ color: "white" }}>
          This is the content for Page 2. You can add detailed information or other components here.
        </Typography>
      </Container>
    </Box>
  );
};

export default Page2;
