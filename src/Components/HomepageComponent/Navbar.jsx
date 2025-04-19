import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box, IconButton, Container, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ toggleDrawer }) {
  const location = useLocation(); // Get the current path

  // Array of navigation links
  const navLinks = [
    { label: 'Plant Finder', path: '/' },
    { label: 'My Plants', path: '/myplants' },
    { label: 'Notifications', path: '/notifications' },
    { label: 'About Us', path: '/about' },
    { label: 'Log In', path: '/login' },
    { label: 'Sign Up', path: '/signup' },
  ];

  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <AppBar position="static" style={{ boxShadow: 'none', backgroundColor: 'transparent', marginTop: '20px' }}>
        <Toolbar style={{ justifyContent: 'space-between', position: 'relative' }}>
          {/* Logo */}
          <Typography variant="h6" style={{ color: '#68C34C', fontWeight: 'bold' }}>
            Farmstedi
          </Typography>

          {/* Links (hidden on small screens) */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: { xs: 'none', sm: 'flex' },
              padding: '15px',
              borderRadius: '35px',
              backgroundColor: 'white',
            }}
          >
            {navLinks.map((link, index) => (
              <Button
                key={index}
                component={Link}
                to={link.path}
                style={{
                  backgroundColor: location.pathname === link.path ? '#68C34C' : 'transparent', // Highlight active link
                  color:
                    (link.label === 'Log In' || link.label === 'Sign Up') && location.pathname !== link.path
                      ? '#68C34C'
                      : location.pathname === link.path
                      ? 'white'
                      : 'black', // Set color for "Log In" and "Sign Up"
                  borderRadius: '20px',
                  textTransform: 'none',
                  minWidth: '120px',
                  border: link.label === 'Sign Up' && location.pathname !== link.path ? '1px solid #68C34C' : 'none', // Add green border for "Sign Up" when not active
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Menu Icon (visible on small screens) */}
          <IconButton
            onClick={() => toggleDrawer(true)}
            sx={{
              display: { xs: 'flex', sm: 'none' },
              color: 'black',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Container>
  );
}