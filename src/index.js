import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import NotFoundPage from './Pages/NotFoundPage';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import LogIn from './Pages/LogIn';
import Notifications from './Pages/Notifications';
import SignUp from './Pages/SignUp';
import MyPlants from './Pages/MyPlants';
import Layout from './Components/HomepageComponent/Layout';

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
        path: "notifications", // "/notifications"
        element: <Notifications />,
      },
      {
        path: "myplants", // "/myplants"
        element: <MyPlants />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);