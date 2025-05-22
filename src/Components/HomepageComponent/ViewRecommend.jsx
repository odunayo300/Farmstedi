import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ViewRecommend = ({ plantData }) => {
  return (
    <Box sx={{ backgroundColor: "#f6fbf8", py: 4 }}>
      <Container maxWidth="lg">
        <Stack spacing={3}>
          {plantData.map((plant, index) => (
            <Box key={index}>
              {/* Main Display Section */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  gap: 4,
                  p: 2,
                  borderRadius: 3,
                }}
              >
                {/* Image */}
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
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
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

                {/* Details */}
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
                      {plant.growthPeriod}
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

              {/* Accordion Details Section */}
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
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography component="span">Avg Temperature</Typography>
                      </AccordionSummary>
                      <AccordionDetails>{plant.averageTemperature}</AccordionDetails>
                    </Accordion>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography component="span">Soil Type</Typography>
                      </AccordionSummary>
                      <AccordionDetails>{plant.soilType}</AccordionDetails>
                    </Accordion>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography component="span">Total Precipitation</Typography>
                      </AccordionSummary>
                      <AccordionDetails>{plant.totalPrecipitation}</AccordionDetails>
                    </Accordion>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography component="span">PH Value</Typography>
                      </AccordionSummary>
                      <AccordionDetails>{plant.phValue}</AccordionDetails>
                    </Accordion>
                  </Grid>            
                </Grid>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default ViewRecommend;
