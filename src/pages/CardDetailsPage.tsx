import React, { FC, useState } from "react";
import { Box, Container, Button, Grid, Typography, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, styled, TextField } from "@mui/material";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import AppHeader from "../components/AppHeader";

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


const CardDetailsPage: FC = () => {
    const { cardId } = useParams();
    const location = useLocation();
    const isEnvironmental = location.pathname.includes('card-details');
    const [selectedButton, setSelectedButton] = useState<string>("Product Yield");
    const [selectedWasteButton, setSelectedWasteButton] = useState<string>("Generation");
    const [selectedComplianceButton, setSelectedComplianceButton] = useState<string>("Regulatory Requirements");
    
    // Resource utilization states
    const [productYieldData, setProductYieldData] = useState<string[][]>(
      Array(8).fill(null).map(() => Array(6).fill(""))
    );
    const [waterUsageData, setWaterUsageData] = useState<string[][]>(
      Array(4).fill(null).map(() => Array(6).fill(""))
    );
    const [energyConsumptionData, setEnergyConsumptionData] = useState<string[][]>(
      Array(4).fill(null).map(() => Array(6).fill(""))
    );
    const [humanResourceData, setHumanResourceData] = useState<string[][]>(
      Array(4).fill(null).map(() => Array(6).fill(""))
    );
  
    // Waste management states
    const [wasteData, setWasteData] = useState<string[][]>(
      Array(4).fill(null).map(() => Array(6).fill(""))
    );
    const [regulatoryData, setRegulatoryData] = useState<string[][]>(
      Array(4).fill(null).map(() => Array(2).fill(""))
    );
    const [customerData, setCustomerData] = useState<string[][]>(
      Array(4).fill(null).map(() => Array(2).fill(""))
    );
  
    const resourceButtons = [
      "Product Yield",
      "Water Usage",
      "Energy Consumption",
      "Human resource utilization"
    ];
  
    const wasteButtons = [
      "Generation",
      "Recycle/Reuse",
      "Treatment",
      "Disposal"
    ];
  
    const complianceButtons = [
      "Regulatory Requirements",
      "Customer Requirements"
    ];
  
    const handleDataChange = (rowIndex: number, colIndex: number, value: string, dataType: string) => {
      switch (dataType) {
        case 'waste':
          const newWasteData = [...wasteData];
          newWasteData[rowIndex] = [...newWasteData[rowIndex]];
          newWasteData[rowIndex][colIndex] = value;
          setWasteData(newWasteData);
          break;
        case 'productYield':
          const newProductData = [...productYieldData];
          newProductData[rowIndex] = [...newProductData[rowIndex]];
          newProductData[rowIndex][colIndex] = value;
          setProductYieldData(newProductData);
          break;
        case 'waterUsage':
          const newWaterData = [...waterUsageData];
          newWaterData[rowIndex] = [...newWaterData[rowIndex]];
          newWaterData[rowIndex][colIndex] = value;
          setWaterUsageData(newWaterData);
          break;
        case 'energyConsumption':
          const newEnergyData = [...energyConsumptionData];
          newEnergyData[rowIndex] = [...newEnergyData[rowIndex]];
          newEnergyData[rowIndex][colIndex] = value;
          setEnergyConsumptionData(newEnergyData);
          break;
        case 'humanResource':
          const newHRData = [...humanResourceData];
          newHRData[rowIndex] = [...newHRData[rowIndex]];
          newHRData[rowIndex][colIndex] = value;
          setHumanResourceData(newHRData);
          break;
      }
    };
  
    const handleComplianceDataChange = (rowIndex: number, colIndex: number, value: string, type: string) => {
      if (type === 'regulatory') {
        const newData = [...regulatoryData];
        newData[rowIndex] = [...newData[rowIndex]];
        newData[rowIndex][colIndex] = value;
        setRegulatoryData(newData);
      } else {
        const newData = [...customerData];
        newData[rowIndex] = [...newData[rowIndex]];
        newData[rowIndex][colIndex] = value;
        setCustomerData(newData);
      }
    };
  
    const handleSubmit = () => {
      if (cardId === "1") {
        switch (selectedButton) {
          case "Product Yield":
            console.log("Product Yield Data:", productYieldData);
            break;
          case "Water Usage":
            console.log("Water Usage Data:", waterUsageData);
            break;
          case "Energy Consumption":
            console.log("Energy Consumption Data:", energyConsumptionData);
            break;
          case "Human resource utilization":
            console.log("Human Resource Data:", humanResourceData);
            break;
        }
      } else if (cardId === "2") {
        console.log("Waste Data:", wasteData);
      } else if (cardId === "3") {
        console.log("Compliance Data:", selectedComplianceButton === "Regulatory Requirements" ? regulatoryData : customerData);
      }
      alert('Data saved successfully!');
    };
  
    const renderProductYieldTable = () => (
      <TableContainer 
        component={Paper} 
        sx={{ 
          mt: 2, 
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          border: '2px solid #81A895',
          borderRadius: '8px',
          overflow: 'hidden'
        }}
      >
        <Table size="small">
          <TableHead>
            {/* Adding "Product Yield" Heading */}
            <StyledTableRow>
              <StyledTableCell colSpan={7} sx={{ textAlign: 'left', fontWeight: 'bold', fontSize: '16px' }}>
                Product Yield
              </StyledTableCell>
            </StyledTableRow>
    
            {/* Table Header Row */}
            <StyledTableRow>
              <StyledTableCell className="header-cell">Process</StyledTableCell>
              <StyledTableCell className="header-cell" colSpan={2} align="center">Hides</StyledTableCell>
              <StyledTableCell className="header-cell rating-cell" align="center">Rating for Hide</StyledTableCell>
              <StyledTableCell className="header-cell" colSpan={2} align="center">Skin</StyledTableCell>
              <StyledTableCell className="header-cell rating-cell" align="center">Rating for Skin</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell align="center">Maximum (Sq. ft/Kg)</StyledTableCell>
              <StyledTableCell align="center">Minimum (Sq. ft/Kg)</StyledTableCell>
              <StyledTableCell className="rating-cell"></StyledTableCell>
              <StyledTableCell align="center">Maximum (Sq. ft/Kg)</StyledTableCell>
              <StyledTableCell align="center">Minimum (Sq. ft/Kg)</StyledTableCell>
              <StyledTableCell className="rating-cell"></StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {[
              "Raw to WB",
              "Raw to Veg",
              "WB/Veg to FL 0.5 to 0.8 mm",
              "WB/Veg to FL 0.9 to 1.2 mm",
              "WB/Veg to FL 1.2 to 1.5 mm",
              "Raw to FL 0.5 to 0.8 mm",
              "Raw to FL 0.9 to 1.2 mm",
              "Raw to FL 1.2 to 1.5 mm"
            ].map((process, rowIndex) => (
              <StyledTableRow key={process}>
                <StyledTableCell>{process}</StyledTableCell>
                {[0, 1, 2, 3, 4, 5].map((colIndex) => (
                  <StyledTableCell 
                    key={colIndex} 
                    className={colIndex === 2 || colIndex === 5 ? 'rating-cell' : ''}
                    sx={{
                      border: "1px solid #ccc",  // Solid borders for each cell
                      padding: "8px",  // Space around text inside each cell
                      textAlign: "center",
                      backgroundColor: colIndex === 2 || colIndex === 5 ? "#EBFBE2" : "transparent", // Highlight rating columns
                    }}
                  >
                    <input
                      type="text"
                      value={productYieldData[rowIndex][colIndex]}
                      onChange={(e) => handleDataChange(rowIndex, colIndex, e.target.value, 'productYield')}
                      style={{
                        width: "100%",
                        height: "24px",
                        border: "none",              // Remove the border from the input
                        borderRadius: "4px",         // Rounded corners for inputs
                        padding: "2px 4px",
                        backgroundColor: "transparent", // Transparent background for input
                        boxShadow: "none",           // Remove shadow
                        outline: "none",             // Remove outline on focus
                        fontSize: "14px",            // Font size for the input
                        textAlign: "center",         // Center the input text
                        color: "#333",              // Text color
                        fontWeight: "400",           // Text weight
                        transition: "background-color 0.3s ease", // Smooth background transition
                      }}
                    />
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
    
    
    const renderOtherResourceTable = (type: string) => {
      const data = type === 'waterUsage' ? waterUsageData :
                   type === 'energyConsumption' ? energyConsumptionData :
                   humanResourceData;
    
      const units = type === 'waterUsage' ? '(L/Kg)' :
                    type === 'energyConsumption' ? '(kwh/Sq.ft)' :
                    '(Rs/sq.ft)';
      
      // Add button names dynamically as table headings
      const buttonNames = type === 'waterUsage' ? ['Water Usage'] :
                        type === 'energyConsumption' ? ['Energy Consumption'] :
                        ['Human Resource Data'];// Add more button names here based on your use case
      return (
        <TableContainer 
          component={Paper} 
          sx={{ 
            mt: 2, 
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: '2px solid #81A895',
            borderRadius: '8px',
            overflow: 'hidden'
          }}
        >
          <Table size="small">
            <TableHead>
              {/* Row for Button Names as Headers */}
              <StyledTableRow>
                <StyledTableCell colSpan={7} sx={{ textAlign: 'left', fontWeight: 'bold', fontSize: '16px' }}>
                  {buttonNames.join(' / ')} {/* Display button names */}
                </StyledTableCell>
              </StyledTableRow>
    
              {/* Process and Unit Header Row */}
              <StyledTableRow>
                <StyledTableCell className="header-cell">Process</StyledTableCell>
                <StyledTableCell className="header-cell" colSpan={2} align="center">Hides</StyledTableCell>
                <StyledTableCell className="header-cell rating-cell" align="center">Rating for Hide</StyledTableCell>
                <StyledTableCell className="header-cell" colSpan={2} align="center">Skin</StyledTableCell>
                <StyledTableCell className="header-cell rating-cell" align="center">Rating for Skin</StyledTableCell>
              </StyledTableRow>
    
              {/* Units Header Row */}
              <StyledTableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell align="center">{`Maximum ${units}`}</StyledTableCell>
                <StyledTableCell align="center">{`Minimum ${units}`}</StyledTableCell>
                <StyledTableCell className="rating-cell"></StyledTableCell>
                <StyledTableCell align="center">{`Maximum ${units}`}</StyledTableCell>
                <StyledTableCell align="center">{`Minimum ${units}`}</StyledTableCell>
                <StyledTableCell className="rating-cell"></StyledTableCell>
              </StyledTableRow>
            </TableHead>
    
            <TableBody>
              {[
                "Raw to WB",
                "Raw to Veg",
                "WB/Veg to FL",
                "Raw to FL"
              ].map((process, rowIndex) => (
                <StyledTableRow key={process}>
                  <StyledTableCell>{process}</StyledTableCell>
                  {Array(6).fill(null).map((_, colIndex) => (
                    <StyledTableCell 
                      key={colIndex}
                      className={colIndex === 2 || colIndex === 5 ? 'rating-cell' : ''}
                    >
                      <input
                        type="text"
                        value={data[rowIndex]?.[colIndex] || ''}
                        onChange={(e) => handleDataChange(rowIndex, colIndex, e.target.value, type)}
                        style={{
                          width: "100%",
                          height: "24px",
                          border: "none",              // Remove the border
                          borderRadius: "4px",         // Retain rounded corners if desired
                          padding: "2px 4px",
                          backgroundColor: "transparent", // Keep the transparent background
                          boxShadow: "none",           // Remove any shadow
                          outline: "none",             // Remove the outline on focus
                          fontSize: "14px",            // Set font size if needed for a better appearance
                        }}
                      />
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    };
    
  
    const renderWasteTable = (selectedButton: string) => (
      <TableContainer 
        component={Paper} 
        sx={{ 
          mt: 2, 
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          border: '2px solid #81A895',
          borderRadius: '8px',
          overflow: 'hidden'
        }}
      >
        <Table size="small">
          <TableHead>
            {/* Button Name Row */}
            <StyledTableRow>
              <StyledTableCell colSpan={7} sx={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'left' }}>
                {selectedButton}
              </StyledTableCell>
            </StyledTableRow>
    
            {/* Header Rows */}
            <StyledTableRow>
              <StyledTableCell className="header-cell">Process</StyledTableCell>
              <StyledTableCell className="header-cell" colSpan={2} align="center">Hides</StyledTableCell>
              <StyledTableCell className="header-cell rating-cell" align="center">Rating for Hide</StyledTableCell>
              <StyledTableCell className="header-cell" colSpan={2} align="center">Skin</StyledTableCell>
              <StyledTableCell className="header-cell rating-cell" align="center">Rating for skin</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell align="center">Maximum</StyledTableCell>
              <StyledTableCell align="center">Minimum</StyledTableCell>
              <StyledTableCell className="rating-cell"></StyledTableCell>
              <StyledTableCell align="center">Maximum</StyledTableCell>
              <StyledTableCell align="center">Minimum</StyledTableCell>
              <StyledTableCell className="rating-cell"></StyledTableCell>
            </StyledTableRow>
          </TableHead>
    
          <TableBody>
            {[
              "Raw to WB",
              "Raw to Veg",
              "WB/Veg to FL",
              "Raw to FL"
            ].map((process, rowIndex) => (
              <StyledTableRow key={process}>
                <StyledTableCell>{process}</StyledTableCell>
                {Array(6).fill(null).map((_, colIndex) => (
                  <StyledTableCell 
                    key={colIndex}
                    className={colIndex === 2 || colIndex === 5 ? 'rating-cell' : ''}
                  >
                    <input
                      type="text"
                      value={productYieldData[rowIndex][colIndex]}
                      onChange={(e) => handleDataChange(rowIndex, colIndex, e.target.value, 'productYield')}
                      style={{
                        width: "100%",
                        height: "24px",
                        border: "none",
                        borderRadius: "4px",
                        padding: "2px 4px",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        outline: "none",
                        fontSize: "14px",
                      }}
                    />
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
    
    const renderComplianceTable = (type: string) => {
      const data = type === 'regulatory' ? regulatoryData : customerData;
      const heading =
    type === 'regulatory'
      ? 'Regulatory Requirements'
      : 'Customer Requirements';
      return (
        <TableContainer 
          component={Paper} 
          sx={{ 
            mt: 2, 
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: '2px solid #81A895',
            borderRadius: '8px',
            overflow: 'hidden'
          }}
        >
          <Table size="small">
            <TableHead>
            <StyledTableRow>
            <StyledTableCell colSpan={3} sx={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'left' }}>
              {heading}
            </StyledTableCell>
          </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell className="header-cell">Processes</StyledTableCell>
                <StyledTableCell className="header-cell">Hides</StyledTableCell>
                <StyledTableCell className="header-cell">Skin</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {[
                "Raw to WB",
                "Raw to Veg",
                "WB/Veg to FL",
                "Raw to FL"
              ].map((process, rowIndex) => (
                <StyledTableRow key={process}>
                  <StyledTableCell>{process}</StyledTableCell>
                  {[0, 1].map((colIndex) => (
                    <StyledTableCell key={colIndex}>
                      <input
                          type="text"
                          value={productYieldData[rowIndex][colIndex]}
                          onChange={(e) => handleDataChange(rowIndex, colIndex, e.target.value, 'productYield')}
                          style={{
                            width: "100%",
                            height: "24px",
                            border: "none",              // Remove the border
                            borderRadius: "4px",         // Retain rounded corners if desired
                            padding: "2px 4px",
                            backgroundColor: "transparent", // Keep the transparent background
                            boxShadow: "none",           // Remove any shadow
                            outline: "none",             // Remove the outline on focus
                            fontSize: "14px",            // Set font size if needed for a better appearance
                          }}
                        />
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    };
  
    const renderTableContent = () => {
      switch (selectedButton) {
        case "Product Yield":
          return renderProductYieldTable();
        case "Water Usage":
          return renderOtherResourceTable('waterUsage');
        case "Energy Consumption":
          return renderOtherResourceTable('energyConsumption');
        case "Human resource utilization":
          return renderOtherResourceTable('humanResource');
        default:
          return null;
      }
    };
    
  
    const renderContent = () => {
      switch (cardId) {
        case "1":
          return (
            <>
              <Typography variant="h4" sx={{ mb: 4, color: "white", textAlign: "center" }}>
                Resource Utilization
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap:0 }}>
                    {resourceButtons.map((button) => (
                      <Button
                        key={button}
                        variant="contained"
                        onClick={() => setSelectedButton(button)}
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
                        {button}
                      </Button>
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12} md={9}>
                  {renderTableContent()}
                </Grid>
              </Grid>
            </>
          );
  
        case "2":
          
          return (
            <>
              <Typography variant="h4" sx={{ mb: 4, color: "white", textAlign: "center" }}>
                Waste Generation and Management
              </Typography>
          
              <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    {wasteButtons.map((button) => (
                      <Button
                        key={button}
                        variant="contained"
                        onClick={() => setSelectedWasteButton(button)}
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
                        {button}
                      </Button>
                    ))}
                  </Box>
                </Grid>
          
                <Grid item xs={12} md={9}>
                  {renderWasteTable(selectedWasteButton)}
                </Grid>
              </Grid>
            </>
          );
          
  
        case "3":
          return (
            <>
              <Typography variant="h4" sx={{ mb: 4, color: "white", textAlign: "center" }}>
                Compliance to Regulatory & Customers Requirements
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    {complianceButtons.map((button) => (
                      <Button
                        key={button}
                        variant="contained"
                        onClick={() => setSelectedComplianceButton(button)}
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
                        {button}
                      </Button>
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12} md={9}>
                  {selectedComplianceButton === "Regulatory Requirements" 
                    ? renderComplianceTable('regulatory')
                    : renderComplianceTable('customer')}
                </Grid>
              </Grid>
            </>
          );
  
        default:
          return (
            <Typography variant="h6" sx={{ color: "white", textAlign: "center" }}>
              Card not found
            </Typography>
          );
      }
    };
  
    if (!isEnvironmental) {
      return (
        <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
          <AppHeader />
          <Container sx={{ py: 4 }}>
            <Typography variant="h4" sx={{ mb: 4, color: "white", textAlign: "center" }}>
              {location.pathname.includes('economic-details') ? 'Economic Details' : 'Social Details'} - Card {cardId}
            </Typography>
            <Box sx={{ p: 4, backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "8px" }}>
              <Typography variant="body1" sx={{ color: "white", textAlign: "center" }}>
                Detailed information for card {cardId} will be displayed here.
              </Typography>
            </Box>
          </Container>
        </Box>
      );
    }
  
    return (
      <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
        <AppHeader />
           <Container sx={{ py: 4 }}>
          {renderContent()}
          {(cardId === "1" || cardId === "2" || cardId === "3") && (
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
                textTransform: 'none',
                mb: 2,
                '&:hover': { backgroundColor: '#c5c76e' },
              }}
            >
              Submit
            </Button>
          )}
        </Container>
      </Box>
    );
  };
export default CardDetailsPage;
