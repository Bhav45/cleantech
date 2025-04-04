import React, { FC, useState } from "react";
import { Box, Container, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Grid, Typography, TextField, styled } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import new1 from "../assets/new1.png";
import new2 from "../assets/new2.png";
import new3 from "../assets/new3.png";

// Styled components for the table cells and rows
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: '1px solid #81A895',
  padding: '8px',
  '&.header-cell': {
    backgroundColor: '#f5f5f5',
    fontWeight: 'bold',
  },
  '&.rating-cell': {
    backgroundColor: 'rgba(219, 221, 122, 0.1)',
  }
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:last-child td, &:last-child th': {
    borderBottom: '1px solid #81A895',
  },
}));

// Main Component
const EconomicDetailsPage: FC = () => {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState<string>("Turnover");
  const [tableData, setTableData] = useState<{ [key: string]: string[][] }>({});

  // Card details for different sections
  const cardDetails = {
    '1': {
      title: 'Turnover Analysis',
      buttons: ['Turnover', 'Increase in Turnover', 'Profit'],
      image: new1
    },
    '2': {
      title: 'ROI Metrics',
      buttons: ['ROI'],
      image: new2
    },
    '3': {
      title: 'Business Growth',
      buttons: ['Expansion/Diversification', 'Forward Integration', 'Backward Integration'],
      image: new3
    }
  };

  // Get the current card details based on the cardId
  const currentCard = cardDetails[cardId as keyof typeof cardDetails];

  // Handle changes in the table input fields
  const handleInputChange = (rowIndex: number, colIndex: number, value: string) => {
    if (!selectedButton) return;

    setTableData(prev => {
      const newData = { ...prev };
      if (!newData[selectedButton]) {
        newData[selectedButton] = Array(8).fill(Array(12).fill(''));
      }
      const newSection = newData[selectedButton].map(row => [...row]);
      newSection[rowIndex][colIndex] = value;
      return {
        ...newData,
        [selectedButton]: newSection
      };
    });
  };

  // Handle save functionality (to be expanded)
  const handleSave = () => {
    if (!selectedButton) return;
    console.log('Saving data:', tableData[selectedButton]);
  };

  // If card details are not found
  if (!currentCard) {
    return (
      <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
        <AppHeader />
        <Container>
          <Typography variant="h6" sx={{ color: "white", textAlign: "center", mt: 4 }}>
            Card not found
          </Typography>
        </Container>
      </Box>
    );
  }

  // Table rendering logic for each button selection
  const renderTable = () => {
    switch (selectedButton) {
      case "Turnover":
        return renderGenericTable();
      case "Increase in Turnover":
        return renderGenericTable();
      case "Profit":
        return renderGenericTable();
      case "ROI":
        return renderGenericTable();
      case "Expansion/Diversification":
        return renderGenericTable();
      case "Forward Integration":
        return renderGenericTable();
      case "Backward Integration":
        return renderGenericTable();
      default:
        return null;
    }
  };

  // A generic function for rendering tables
  const renderGenericTable = () => (
    <TableContainer component={Paper} sx={{ backgroundColor: "white", borderRadius: 2 }}>
      <Table size="small" sx={{ borderCollapse: 'collapse', width: '100%' }}>
        <TableHead>
        <StyledTableRow>
              <StyledTableCell colSpan={7} sx={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'left' }}>
                {selectedButton}
              </StyledTableCell>
            </StyledTableRow>
          <TableRow>
            <StyledTableCell sx={{ backgroundColor: "#81A895", textAlign: "center" }}>Process</StyledTableCell>
            <StyledTableCell sx={{ backgroundColor: "#81A895", textAlign: "center" }}>Hides</StyledTableCell>
            <StyledTableCell sx={{ backgroundColor: "#81A895", textAlign: "center" }}>Skin</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {['Raw to WB', 'Raw to Veg', 'WB/Veg to FL', 'Raw to FL'].map((process, rowIndex) => (
            <TableRow key={process}>
              <StyledTableCell sx={{ textAlign: "left" }}>{process}</StyledTableCell>
              {Array(2).fill(null).map((_, colIndex) => (
                <StyledTableCell key={colIndex} sx={{ textAlign: "center" }}>
                  <TextField
                    variant="standard"
                    value={tableData[selectedButton]?.[rowIndex]?.[colIndex] || ''}
                    onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                    fullWidth
                    size="small"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    sx={{
                      backgroundColor: 'white',
                      borderRadius: 1,
                    }}
                  />
                </StyledTableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" sx={{ mt: 2, color: "white", textAlign: "center", fontWeight: "bold" }}>
          {currentCard.title}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {currentCard.buttons.map((button) => (
                <Button
                  key={button}
                  onClick={() => setSelectedButton(button)}
                  sx={{
                    backgroundColor: '#DBDD7A',
                    color: 'black',
                    py: 1,
                    px: 3,
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    '&:hover': { backgroundColor: '#c5c76e' },
                  }}
                >
                  {button}
                </Button>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {renderTable()}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EconomicDetailsPage;
