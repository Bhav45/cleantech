import React, { FC, useState } from "react";
import { Box, Button, Container, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader"; // Ensure the correct import path for your PageHeader component

// AnalysisTable Component
const AnalysisTable = () => {
  const [rows, setRows] = useState([
    { process: 'Raw to WB', hides: '', skin: '' },
    { process: 'Raw to Veg', hides: '', skin: '' },
    { process: 'WB/Veg to FL', hides: '', skin: '' },
    { process: 'Raw to FL', hides: '', skin: '' }
  ]);

  const handleChange = (index: number, field: 'hides' | 'skin', value: string) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  return (
    <Box sx={{ width: '100%', mt: 3 }}>
      <Container>
        <TableContainer
          component={Paper}
          sx={{ maxWidth: 700, borderRadius: 2, mx: 'auto' }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#5e7f70' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', borderRight: '1px solid white' }}>Process</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', borderRight: '1px solid white' }}>Hides</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Skin</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ borderRight: '1px solid #ccc' }}>{row.process}</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ccc' }}>
                    <TextField
                      variant="standard"
                      value={row.hides}
                      onChange={(e) => handleChange(index, 'hides', e.target.value)}
                      fullWidth
                      size="small"
                      InputProps={{ disableUnderline: true }}
                      sx={{ backgroundColor: 'white', borderRadius: 1 }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      variant="standard"
                      value={row.skin}
                      onChange={(e) => handleChange(index, 'skin', e.target.value)}
                      fullWidth
                      size="small"
                      InputProps={{ disableUnderline: true }}
                      sx={{ backgroundColor: 'white', borderRadius: 1 }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

// ButtonsPage Component
const ButtonsPage: FC = () => {
  const navigate = useNavigate();
  const { imageId } = useParams();
  const [visibleTableIndex, setVisibleTableIndex] = useState<number | null>(0); // Default to showing the first table
  const [isFirstButtonClicked, setIsFirstButtonClicked] = useState<boolean>(false); // Track if first button was clicked

  // Mapping page titles based on imageId
  const getPageTitle = (id: string) => {
    const titles: { [key: string]: string } = {
      '1': 'EMPLOYEES',
      '2': 'HEALTH & SAFETY',
      '3': 'EDUCATION',
      '4': 'HOUSING',
      '5': 'GRIEVANCES',
      '6': 'SOCIAL SECURITY',
      '7': 'CSR',
      '8': 'REHABILITATION',
    };
    return titles[id] || '';
  };

  // Mapping buttons for each page based on imageId
  const getButtons = (id: string) => {
    const buttonsMap: { [key: string]: string[] } = {
      '1': ['No. employees', 'Ave. Salary, Rationale for salary', 'Bonuses/incentives/other benefits', 'Salary expenses on cost'],
      '2': ['Health Spending %', 'Accidents', 'Safety Spending %'],
      '3': ['Edu Spending PC'],
      '4': ['House Spending PC', 'Socialization Spending'],
      '5': ['% of grievance', 'Grievance redressal'],
      '6': ['Spending on social security PC'],
      '7': ['CSR Spending on profit'],
      '8': ['Spending towards rehabilitations measures on cost of expansion', 'No. of Parties/families impacted Vs compensated'],
    };
    return buttonsMap[id] || [];
  };

  const handleSubmit = () => {
    // Handle the submit action here
    console.log("Data submitted!");
  };

  const handleButtonClick = (index: number) => {
    if (index === 0) {
      setIsFirstButtonClicked(true); // Mark the first button as clicked
    }
    setVisibleTableIndex(index); // Show the corresponding table
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header Section */}
      <PageHeader title={getPageTitle(imageId || '')} showBack onBack={() => navigate(-1)} />

      <Box sx={{ flexGrow: 1, backgroundColor: '#81A895', p: 3, overflowY: 'auto' }}>
        <Grid container spacing={3}>
          {/* Left side - Buttons */}
          <Grid item xs={12} sm={4}>
            <Container>
              {getButtons(imageId || '').map((label, index) => (
                <React.Fragment key={index}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => handleButtonClick(index)}
                    disabled={isFirstButtonClicked && index === 0} // Disable the first button after it's clicked
                    sx={{
                      backgroundColor: '#DBDD7A',
                      color: 'black',
                      py: 1,
                      px: 3,
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      mb: 2,
                      '&:hover': { backgroundColor: '#c5c76e' },
                    }}
                  >
                    {label}
                  </Button>
                </React.Fragment>
              ))}
            </Container>
          </Grid>

          {/* Right side - Tables */}
          <Grid item xs={12} sm={8}>
            <Container maxWidth="sm">
              {/* Always show the first table */}
              <React.Fragment>
                {visibleTableIndex === 0 && (
                  <>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
                      {getButtons(imageId || '')[0]} {/* First button name as table title */}
                    </Typography>
                    <AnalysisTable /> {/* First table component */}
                  </>
                )}
              </React.Fragment>

              {/* Toggle other tables based on button click */}
              {getButtons(imageId || '').map((label, index) => (
                index !== 0 && (
                  <React.Fragment key={index}>
                    {visibleTableIndex === index && (
                      <>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
                          {label} {/* Button name as table title */}
                        </Typography>
                        <AnalysisTable /> {/* Your table component */}
                      </>
                    )}
                  </React.Fragment>
                )
              ))}

              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    backgroundColor: '#DBDD7A',
                    color: 'black',
                    py: 1,
                    px: 3,
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#c5c76e' },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ButtonsPage;
