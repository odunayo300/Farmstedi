import React from "react";
import { Box, Typography, Card, Button, Avatar, Stack } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import CornImage from '../../assets/corn-image.png'; // Local image  --Charles

const plantData = [
  { name: "Maize", suitability: "85%", growthPeriod: "6 Months", image: CornImage },
  { name: "Maize", suitability: "85%", growthPeriod: "6 Months", image: CornImage },
  { name: "Maize", suitability: "85%", growthPeriod: "6 Months", image: CornImage },
  { name: "Maize", suitability: "85%", growthPeriod: "6 Months", image: CornImage },
  { name: "Maize", suitability: "85%", growthPeriod: "6 Months", image: CornImage },
  { name: "Maize", suitability: "85%", growthPeriod: "6 Months", image: CornImage },
  { name: "Maize", suitability: "85%", growthPeriod: "6 Months", image: CornImage },
  { name: "Maize", suitability: "85%", growthPeriod: "6 Months", image: CornImage },
];

const RecommendedPlants = () => {
  return (
    <Box p={4}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Recommended Plants– <span style={{ color: "#000" }}>5</span>
      </Typography>

      <Box display="flex" justifyContent="flex-end" gap={2} mb={3}>
        <Button variant="outlined" startIcon={<FaFilter />}>
          Filter
        </Button>
        <Button variant="outlined" startIcon={<FaFilter />}>
          Filter
        </Button>
      </Box>

      <Stack spacing={2}>
        {plantData.map((plant, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              borderRadius: 3,
              backgroundColor: "#fff", 
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)", 
            }}
          >
            <Avatar
              variant="square"
              src={plant.image}
              alt={plant.name}
              sx={{
                width: 80,
                height: 80,
                mr: 3,
                borderRadius: 2,
                backgroundColor: "#fff",
                padding: 1, //  padding for spacing around the image
              }}
            />
            <Box flexGrow={1}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {plant.name}
              </Typography>
              <Typography>
                Suitability:{" "}
                <span style={{ color: "#2e7d32", fontWeight: 500 }}>
                  {plant.suitability}
                </span>
              </Typography>
              <Typography>
                Growth Period:{" "}
                <span style={{ color: "#2e7d32", fontWeight: 500 }}>
                  {plant.growthPeriod}
                </span>
              </Typography>
            </Box>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "30px",
                color: "#2e7d32",
                borderColor: "#2e7d32",
                px: 3,
              }}
            >
              View Plant
            </Button>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default RecommendedPlants;
