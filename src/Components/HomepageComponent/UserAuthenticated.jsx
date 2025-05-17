import React from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';
import {Link} from 'react-router-dom'
export default function UserAuthenticated({ showSignUpModal, setShowSignUpModal }) {
  return (
    <Modal
      open={showSignUpModal}
      onClose={() => setShowSignUpModal(false)}
      aria-labelledby="sign-up-modal-title"
      aria-describedby="sign-up-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          bgcolor: 'white',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <Typography id="sign-up-modal-title" variant="h6" mb={2}>
          Sign Up Required
        </Typography>
        <Typography id="sign-up-modal-description" variant="body2" mb={3}>
          Please sign up to get recommendations for your plants.
        </Typography>
        <Button
          component = {Link}
          to="/signup"
          variant="contained"
          sx={{
            backgroundColor: '#68C34C',
            color: 'white',
            textTransform: 'none',
            borderRadius: '20px',
            '&:hover': {
              backgroundColor: '#57a82b',
            },
          }}
        >
          Go to Sign Up
        </Button>
      </Box>
    </Modal>
  );
}