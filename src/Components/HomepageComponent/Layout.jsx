import React, {  useState } from 'react';
import {Outlet} from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material';
import Navbar from './Navbar';
import SideNav from './SideNav';

export default function Layout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
      <main>
        <Outlet />
      </main>
    </Box>
  );
}