import React from 'react';
import { Drawer, Box, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export default function SideNav({ open,toggleDrawer }) {
  const location = useLocation(); // Get the current path

  // Array of navigation links
  const navLinks = [
    { label: 'Plant Finder', path: '/' },
    { label: 'My Plants', path: '/myplants' },
    { label: 'About Us', path: '/about' },
    { label: 'Log In', path: '/login' },
    { label: 'Sign Up', path: '/signup' },
  ];

  return (
    <Drawer
      anchor="right" // Drawer slides in from the right
      variant="temporary" // Temporary drawer that overlays the content
      open={open} // Controlled by the `open` prop
      onClose={() => toggleDrawer(false)} // Close the drawer when clicking outside
      PaperProps={{
        style: {
          width: '250px', // Width of the drawer
          backgroundColor: 'white',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Attractive box shadow
        },
      }}
    >
      <Box
        sx={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
        role="presentation"
        onClick={() => toggleDrawer(false)} // Close the drawer when clicking a link
        onKeyDown={() => toggleDrawer(false)} // Close the drawer on key press
      >
        {/* Map through the navLinks array */}
        {navLinks.map((link, index) => (
          <Button
            key={index}
            component={Link}
            to={link.path}
            style={{
              textTransform: 'none',
              justifyContent: 'flex-start',
              backgroundColor: location.pathname === link.path ? '#68C34C' : 'transparent', // Highlight active link
              color: location.pathname === link.path ? 'white' : 'black', // Change text color for active link
              borderRadius: '8px',
            }}
          >
            {link.label}
          </Button>
        ))}
      </Box>
    </Drawer>
  );
}