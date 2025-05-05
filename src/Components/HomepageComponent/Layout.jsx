import React, {  useState } from 'react';
import {Outlet,useLocation} from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material';
import Navbar from './Navbar';
import SideNav from './SideNav';


export default function Layout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation(); // Get the current path
  // Function to toggle th.e drawer
 const toggleDrawer = (open) =>{
  setIsDrawerOpen(open)
 }

  return (
    <Box>
      <CssBaseline />
      {/* Navbar */}
      <Navbar toggleDrawer={toggleDrawer} />

      {/* Sidebar */}
      <SideNav open={isDrawerOpen} toggleDrawer={toggleDrawer} />

      {/* Main Content */}
      <main
          style={{
            marginTop: location.pathname === '/' ? '0px' : '80px', // No margin for homepage, 80px for other pages
            
          }}
      >
        <Outlet />
      </main>
    </Box>
  );
}