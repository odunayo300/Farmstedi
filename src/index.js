import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import NotFoundPage from './Pages/NotFoundPage';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import LogIn from './Pages/LogIn';
import ForgotPassword from './Pages/ForgotPassword';
import SignUp from './Pages/SignUp';
import MyPlants from './Pages/MyPlants';
import Layout from './Components/HomepageComponent/Layout';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// Create a custom theme with DM Sans
const theme = createTheme({
  typography: {
    fontFamily: 'DM Sans, sans-serif', // Set DM Sans as the default font
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout wraps all child routes
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true, // Default route ("/")
        element: <Homepage />,
      },
      {
        path: "about", // "/about"
        element: <AboutUs />,
      },
      {
        path: "contact", // "/contact"
        element: <ContactUs />,
      },
      {
        path: "login", // "/login"
        element: <LogIn />,
      },
      {
        path: "signup", // "/signup"
        element: <SignUp />,
      },
      
      {
        path: "myplants", // "/myplants"
        element: <MyPlants />,
      },
      {
        path: "forgotPassword", // "/forgotPassword"
        element: <ForgotPassword />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Resets default browser styles */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);