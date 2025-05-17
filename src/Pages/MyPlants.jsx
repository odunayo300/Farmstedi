import React from 'react';
import { Box, Typography, Button, Container, keyframes } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import { Link } from 'react-router-dom';

// Define keyframe animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MyPlants = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f0f0f0', // light ash
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 2,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          animation: `${fadeInUp} 0.7s ease-out`,
          backgroundColor: '#fff',
          borderRadius: 3,
          boxShadow: 3,
          py: 6,
          px: 4,
        }}
      >
        <ConstructionIcon sx={{ fontSize: 80, color: '#68C34C', mb: 2 }} />
        <Typography variant="h4" gutterBottom sx={{ color: '#333' }}>
          My plant Under Construction
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', mb: 4 }}>
          Relax, you'll know more about <strong>Farmstedi</strong> soon.
          We're working on something amazing for you!
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            backgroundColor: '#68C34C',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#57a43f',
            },
            borderRadius: 2,
            px: 4,
            py: 1.5,
            fontSize: '1rem',
          }}
        >
          Back to Home
        </Button>
      </Container>
    </Box>
  );
};
export default MyPlants;
