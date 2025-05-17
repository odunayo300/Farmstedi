import React from "react";
import { Box, Typography,  Button, Stack, Container,Accordion, AccordionSummary, AccordionDetails, Grid} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const RecommendDetails = ({plantData}) => {
  return (
    <Box sx={{ backgroundColor: "#f6fbf8", py: 4 }}>
      <Container maxWidth="lg">
        <Stack spacing={3}>
          {plantData.map((plant, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Responsive layout
                alignItems: "center",
                gap:4,
                p: 2,
                borderRadius: 3,
              }}
            >
              {/* Image Section */}
              <Box
                sx={{
                  flex: { xs: "none", sm: 1 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 2,
                  borderRadius: 3,
                  mb: { xs: 2, sm: 0 },
                  mr: { sm: 3 },
                  backgroundColor:"#fff",
                 boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Added box shadow
                }}
              >
                <img
                  src={plant.Image}
                  alt={plant.plantName}
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    height: "auto",
                  }}
                />
              </Box>

              {/* Details Section */}
              <Box flex={2}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {plant.plantName}
                </Typography>
                <Typography variant="body2" color="textSecondary" mb={1} gutterBottom>
                  {plant.growthPeriod}
                </Typography>
                <Typography gutterBottom color="text.secondary">
                  Suitability:{" "}
                  <span style={{ color: "#2e7d32", fontWeight: 500 }}>
                    {plant.suitabilityScore}
                  </span>
                  
                </Typography>
                <Typography gutterBottom color="text.secondary">
                  Growth Period:{" "}
                  <span style={{ color: "#2e7d32", fontWeight: 500 }}>
                    {plant.suitabilityScore}
                  </span>
                </Typography>
                <Typography gutterBottom color="text.secondary">
                  Number of Plantable Plants:{" "}
                  <span style={{ color: "#2e7d32", fontWeight: 500 }}>
                    {plant.numberOfPlant}
                  </span>
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#68C34C",
                    color: "white",
                    textTransform: "none",
                    borderRadius: "20px",
                    "&:hover": {
                      backgroundColor: "#57a82b",
                    },
                  }}
                >
                  Add to Dashboard
                </Button>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
        <Box
          sx={{
            backgroundColor: { xs: "white", sm: "transparent" },
            p: { xs: 2, sm: 4 },
            mt: 4,
          }}
        >
           <Typography 
            variant="h5"
            fontWeight={"bold"}
            textAlign="center"
            mb={3}
           >
             More Details
           </Typography>
            <Container>
              {plantData.map((plant,Index) => (
                <Grid key = {Index} container spacing={2}> 
                  {/* Accordion 1 */}
                  <Grid size={{xs:12, md:6}}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography component="span"> Avg Temperature</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {plant.averageTemperature}
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                  {/* Accordion 2 */}
                  <Grid size={{xs:12, md:6}}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography component="span">Soil type</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {plant.soilType}
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                  {/* Accordion 3 */}
                    <Grid size={{xs:12, md:6}}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography component="span">Total prepicitation</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {plant.totalPrecipitation}
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                  {/* Accordion 4 */}
                  <Grid size={{xs:12, md:6}}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography component="span"> Ph value</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {plant.phValue}
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                  {/* Accordion 5*/}
                  <Grid size={{xs:12, md:6}}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography component="span">   Irriagation</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {plant.irriagation}
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                  {/* Accordion 6*/}
                  <Grid size={{xs:12, md:6}}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography component="span"> Pest and Diseases</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {plant.pestAndDiseases}
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
              </Grid>
              ))}
                
            </Container>
           
        </Box>
    </Box>
  );
};

export default RecommendDetails;