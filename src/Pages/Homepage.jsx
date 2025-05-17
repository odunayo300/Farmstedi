import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    IconButton,
    Grid,
    Stack,
    Divider,
    TextField,
    InputAdornment,
    FormControl,
    InputLabel,
    Select,
    Alert,
    MenuItem,
    useMediaQuery,
    useTheme,Backdrop,
    CircularProgress } from '@mui/material'
import UserAuthenticated from '../Components/HomepageComponent/UserAuthenticated'
import backgroundImage from '../assets/9ab47bfefd2ea90ea7a51f333ee292a171af4219.png'   
import SearchIcon from '@mui/icons-material/Search';
import gridImage from '../assets/farmstediImage1.png'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState } from 'react';
import RecommendedPlants from '../Components/HomepageComponent/Recommended_page';

const Homepage = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile screens
    const [isStarted, setIsStarted] = useState(false); // State to track if "Get Started" is clicked
    const [generateMode, setGenerateMode] = useState('manual'); // 'manual' or 'automatic'
    const [plantDate, setPlantDate] = useState(''); // State for year
    const [plantYear, setPlantYear] = useState(''); // State for year
    const [soilType, setSoilType] = useState(''); // State for soil type 
    const [location, setLocation] = useState(''); // State to store the user's location
    const[area, setArea] = useState('')
  
    const [isLoading, setIsLoading] = useState(false)
    const [selectedCrops, setSelectedCrops] = useState([]); // Selected crops
    const [alertMessage, setAlertMessage] = useState(null); // Alert message
    const [alertType, setAlertType] = useState('success'); // Alert type ('success' or 'error')
    const [isSignedUp, setIsSignedUp] = useState(true); // Placeholder for sign-up status
    const [showSignUpModal, setShowSignUpModal] = useState(false); // Modal visibility state
    const [plantData, setPlantData] = useState(null);  // The data recieved from backend that includes recommendations of plant to  be displayed in frontend
    console.log(setIsSignedUp)
    const handleCropRemove = () => {
        setSelectedCrops([]);
      };

      const handleLocationClick = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setLocation(`Lat: ${latitude}, Long: ${longitude}`); // Update the location state
            },
            (error) => {
              console.error('Error getting location:', error);
              setLocation('Unable to retrieve location'); // Handle errors
            }
          );
        } else {
          setLocation('Geolocation is not supported by this browser'); // Handle unsupported browsers
        }
      };

     // Array of card data
  const cards = [
    {
      id: 1,
      icon: <BorderColorIcon sx={{ fontSize: 40, color: '#68C34C' }} />, // Icon with color
      header: 'Input Details',
      text: 'Provide key information about your location, soil types and climate preferences to discover perfect plants for your environment.',
    },
    {
      id: 2,
      icon: <SearchIcon sx={{ fontSize: 40, color: '#68C34C' }} />, // Icon with color
      header: 'Find my Plants',
      text: 'Explore tailored plant recommendations based on your input, compare options and learn about their growth needs, watering schedule and care requirements.',
    },
    {
      id: 3,
      icon: <AgricultureIcon sx={{ fontSize: 40, color: '#68C34C' }} />, // Icon with color
      header: 'Select Results',
      text: 'Choose your plants and personalized care tips, including watering schedules and growth tracking, to ensure a thriving cultivation experience.',
    },
  ];

    const handleSubmit = async (event) =>{

        event.preventDefault();

        if (!isSignedUp) {
            // If the user is not signed up, show the sign-up modal
            setShowSignUpModal(true);
            return;
          }

         // Extract latitude and longitude from location
              let latitude = null, longitude = null;
                if (location.startsWith('Lat: ') && location.includes(', Long: ')) {
                [latitude, longitude] = location
                    .replace('Lat: ', '')
                    .replace('Long: ', '')
                    .split(', ')
                    .map(Number);
                }

        const plantingDate = `${plantYear}-${plantDate}`;

       // Prepare the data payload
        const data = {
          latitude, // Numeric latitude
          longitude, // Numeric longitude
          soilType,
          plantingDate: plantingDate,
          area,
          plants:selectedCrops,
        };

        console.log('Data being sent to backend:', data);

                setIsLoading(true); //show backdrop, loading state
              try {
                const response = await fetch('https://farmstedi.onrender.com/api/v1/plant/recommend', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
                });
            
                console.log('Response status:', response.status);

                const responseBody = await response.json();
                console.log('Response body:', responseBody);
                if (response.ok) {
                  // Handle the recommendation response here
                  setPlantData(responseBody.data)
                }
              } catch (error) {
                setAlertMessage('Submission failed. Please retry.');
                setAlertType('error');
              }finally{
                setIsLoading(false)
              }
            
              // Clear the alert message after 4 seconds
              setTimeout(() => {
                setAlertMessage(null);
              }, 10000);
    }
    return (
        <Box>
            {/* conditional rendering for displaying recommendations when the recommended plant is already available */}
            {plantData ? 
             <RecommendedPlants plantData = {plantData}/> :
             <>
                {/* Backdrop for Loading State */}
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={isLoading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
             
              {/* Sign-Up Modal */}
                <UserAuthenticated
                    showSignUpModal={showSignUpModal}
                    setShowSignUpModal={setShowSignUpModal}
                />

                {/* showcase section */}
             <Box
                sx={{
                    backgroundImage:`url(${backgroundImage})`,
                    backgroundSize:'cover',
                    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
                    backgroundPosition: 'center', // Centers the image
                    minHeight: {xs:"1100px", md:"900px"}, // Sets a minimum height
                    width: '100%', // Sets the width to 100%
                    display: 'flex', // Allows content to be flexibly aligned
                    alignItems:'center',
                    justifyContent:'space-between'
                }}
             >
               
               <Container  maxWidth="lg">
                      {/* Alert Message */}
                    {alertMessage && (
                    <Alert severity={alertType} sx={{ mb: 2 }}>
                        {alertMessage}
                    </Alert>
                    )}
                    <Box sx={{display:"flex",flexDirection:{xs:"column", md: "row"},gap: { xs: 4, md: 8 }, justifyContent:"space-between", alignItems:"center"}}>
                        <Box sx={{
                            flex: { xs: 'none', md: 1 }, // Allow the form box to grow more on larger screens
                            textAlign: {xs:"left", md:"left" }, // Center text on smaller screens
                        }}>
                            <Typography 
                            variant="h3" 
                            mb={3}
                            sx={{lineHeight:1.5,
                                whiteSpace: 'break-spaces', // Allows text to break into multiple lines
                               wordBreak:'break-word', // Ensures long words break properly
                               fontweight: 'bolder',
                               fontSize: { xs: '2rem', md: '3rem' }, // Responsive font size
                            }}>
                                Discover the <br/>
                               perfect plants for your Land
                            </Typography>
                        

                            <Button
                            variant="outlined"
                            sx={{
                                display:{xs:"none", md:"block"},
                                borderColor: '#68C34C', // Border color
                                color: '#68C34C', // Text color
                                textTransform: 'none', // Prevents uppercase transformation
                                fontSize: '1rem', // Adjusts font size
                                padding: '10px 25px', // Adds padding
                                borderRadius: '30px', // Rounds the button corners
                                '&:hover': {
                                backgroundColor: '#68C34C', // Green background on hover
                                color: 'white', // White text on hover
                                },
                            }}
                            onClick={() => setIsStarted(true)} // Set the state to true when clicked
                            >
                            Get Started
                            </Button>
                           
                        </Box>
                        <Box
                             sx={{
                                flex: { xs: 'none', md: 2 }, // Allow the form box to grow more on larger screens
                                backgroundColor: 'white',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                borderRadius: '12px',
                                padding: '20px',
                                maxWidth: {xs:"100%", md:"500px"},
                                margin: '0 auto',
                                mt: 4,
                                overflow: 'hidden', // Prevents overflow
                                width: '100%', // Sets width to 100%
                                border: isStarted ? '2px solid #68C34C' : 'none', // Add green border if "Get Started" is clicked
                              }}
                        >
                             <Stack direction="row" spacing={2} mb={3} sx={{backgroundColor: '#f5f8f9', padding: '10px', borderRadius: '20px'}}>
                                <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: generateMode === 'manual' ? 'black' : '#f5f8f9',
                                    color: generateMode === 'manual' ? 'white' : 'black',
                                    textTransform: 'none',
                                    flex: 1,
                                    borderRadius: '20px',
                                }}
                                onClick={() => setGenerateMode('manual')}
                                
                                >
                                {isMobile ? 'Manually' : 'Generate Manually'}
                                </Button>
                                <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: generateMode === 'automatic' ? 'black' : '#f5f8f9',
                                    color: generateMode === 'automatic' ? 'white' : 'black',
                                    textTransform: 'none',
                                    flex: 1,
                                    borderRadius: '20px',
                                }}
                                onClick={() => setGenerateMode('automatic')}
                                >
                                 {isMobile ? 'Automatically' : 'Generate Automatically'}
                                </Button>
                             </Stack>
                             {/* form field */}
                            <form onSubmit={handleSubmit}>
                                 {/* GPS Location Field */}
                                <TextField
                                fullWidth
                                label="Select your location"
                                placeholder="Enter GPS location"
                                value={location} // Set the value to the location state
                                onClick={handleLocationClick} // Call the function to get location
                               
                                InputProps={{
                                    endAdornment: (
                                    <InputAdornment position="end">
                                        <MyLocationIcon sx={{color:"red"}} />
                                    </InputAdornment>
                                    ),
                                }}
                                sx={{ backgroundColor: '#f5f8f9', mb: 3,borderRadius:"20px"}}
                                />

                                  {/* Available Space Field */}
                                <TextField
                                type = "number"
                                value={area}
                                onChange={(e) => setArea(Number(e.target.value))} 
                                fullWidth
                                label="Available Space"
                                placeholder="Enter space"
                                sx={{ backgroundColor: '#f5f8f9', mb: 3, borderRadius:"20px" }}
                               />
                               {/* select Crops field(only for manual mode) */}
                               {generateMode === 'manual' &&(
                                 <Box sx={{ mb: 3 }}>
                                 <TextField
                                   fullWidth
                                   label="Select Crops"
                                   placeholder="Type and press Enter"
                                   onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                      event.preventDefault(); // Prevent form submission
                                      if (event.target.value) {
                                        setSelectedCrops([...selectedCrops, event.target.value]);
                                        event.target.value = ''; // Clear the input field
                                      }
                                    }
                                  }}
                                   sx={{ backgroundColor: '#f5f8f9', mb: 1 }}
                                 />
                                  <Stack direction="row" spacing={1}>
                                    {selectedCrops.map((crop, index) => (
                                        <Typography
                                        key={index}
                                        sx={{
                                            backgroundColor: '#f5f8f9',
                                            padding: '5px 10px',
                                            borderRadius: '20px',
                                            border: '1px solid #68C34C',
                                        }}
                                        >
                                        {crop}
                                        </Typography>
                                    ))}
                                     {selectedCrops.length > 0 && (
                                        <IconButton onClick={handleCropRemove}>
                                        <CancelIcon />
                                        </IconButton>
                                    )}
                                    </Stack>
          </                        Box>                          
                                 )}
                               {/* Select Date and Year */}
                               <Box sx={{ mb: 3 }}>
                                    <Typography variant="body1" mb={1}>
                                        The date you want to plant
                                    </Typography>
                                    <Stack direction="row" spacing={2}>
                                        {/* Select Date */}
                                        <FormControl fullWidth sx={{ backgroundColor: '#f5f8f9' }}>
                                        <InputLabel>Select Date</InputLabel>
                                        <Select
                                            value={plantDate}
                                            onChange={(e) =>{setPlantDate(e.target.value)}}
                                        >
                                            <MenuItem value="12-01">December 01</MenuItem>
                                            <MenuItem value="12-15"> December 15</MenuItem>
                                            <MenuItem value="01-01"> January 01</MenuItem>
                                        </Select>
                                        </FormControl>

                                        {/* Select Year */}
                                        <FormControl fullWidth sx={{ backgroundColor: '#f5f8f9' }}>
                                        <InputLabel>Select Year</InputLabel>
                                        <Select
                                            value={plantYear}
                                            onChange={(e)=>{setPlantYear(e.target.value)}}
                                        >
                                            <MenuItem value="2023">2023</MenuItem>
                                            <MenuItem value="2024">2024</MenuItem>
                                            <MenuItem value="2025">2025</MenuItem>
                                        </Select>
                                        </FormControl>
                                    </Stack>
                                </Box>
                                <FormControl fullWidth sx={{ backgroundColor: '#f5f8f9', mb: 3, borderRadius: '20px' }}>
                                    <InputLabel>Select Soil Type</InputLabel>
                                    <Select
                                    value={soilType}
                                     onChange={(e) => {setSoilType(e.target.value)}}>
                                        <MenuItem value="clay">Clay</MenuItem>
                                        <MenuItem value="loamy">Loamy</MenuItem>
                                        <MenuItem value="sandy">Sandy</MenuItem>
                                    </Select>
                                </FormControl>
                                
                                {/* available resurces */}
                    
                                <Typography variant="body1" mb={1}>
                                Available Resources
                                </Typography>
                                <Stack direction="row" spacing={2} mb={3}>
                                {/* Watering Services */}
                                   
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <IconButton sx={{ color: '#68C34C' }}>
                                        <CheckBoxIcon/> {/* Replace with a watering icon if available */}
                                        </IconButton>
                                        <Typography variant="body2">Watering Services</Typography>
                                    </Stack>

                                {/* Fertilizer */}
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <IconButton sx={{ color: '#68C34C' }}>
                                        <CheckBoxIcon /> {/* Replace with a fertilizer icon if available */}
                                        </IconButton>
                                        <Typography variant="body2">Fertilizer</Typography>
                                    </Stack>

                                {/* Manual */}
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <IconButton sx={{ color: '#68C34C' }}>
                                        <CheckBoxIcon/> {/* Replace with a manual icon if available */}
                                        </IconButton>
                                        <Typography variant="body2">Manual</Typography>
                                    </Stack>
                                </Stack>

                              {/* Submit Button */}
                                <Button
                                type='submit'
                                variant="contained"
                                sx={{
                                    backgroundColor: '#68C34C',
                                    color: 'white',
                                    textTransform: 'none',
                                    borderRadius:"20px"
                                }}
                                >
                                Find Plant
                                </Button>
                            </form>
                        </Box>

                    </Box>
                </Container>
             </Box>

             {/* what we do section */}
            <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
                <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4}>
                    What We Do?
                </Typography>
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' }, // Responsive layout
                    gap: 4,
                    alignItems: 'stretch', // Ensures both boxes stretch to the same height
                    }}
                >
                    {/* Left Box: Grid of Images */}
                    <Box
                    sx={{
                        flex: 1,
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, // Responsive grid
                        gridTemplateRows: { md: '1fr 1fr' },
                        gap: 2,
                        height: '100%'
                    }}
                    >
                    <Box
                        sx={{
                        gridColumn: { md: 'span 2' }, // Full width on large screens
                        height: { xs: '200px', md: '300px' },
                        backgroundImage: `url(${gridImage})`, // Replace with your image path
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '12px',
                        }}
                    />
                    <Box
                        sx={{
                        height: { xs: '150px', md: '150px' },
                        backgroundImage: `url(${gridImage})`, // Replace with your image path
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '12px',
                        }}
                    />
                    <Box
                        sx={{
                        height: { xs: '150px', md: '150px' },
                        backgroundImage: `url(${gridImage})`, // Replace with your image path
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '12px',
                        }}
                    />
                    </Box>

                    {/* Right Box: Text and List */}
                    <Box
                    sx={{
                        flex: 1,
                        backgroundColor: '#F6F9F5',
                        padding: 4,
                        borderRadius: '12px',
                         height: '100%',
                        
                    }}
                    >
                    <Typography variant="body1" fontWeight="400" mb={3}>
                        Farmstedi help farmers and plant lovers determine the right crops
                        to grow, track plant health, monitor weather conditions, and optimise 
                        watering habit. It blends AI-based recommendations, weather integration
                        and personal dashboard for modern responsive plant care.
                    </Typography>
                    <ul style={{ paddingLeft: '20px', marginBottom: '25px' }}>
                        <li style={{ color: '#68C34C', fontWeight: 'bold', marginBottom: '8px',  }}>
                         User-centric Dashboard
                        </li>
                        <li style={{ color: '#68C34C', fontWeight: 'bold', marginBottom: '8px',  }}>
                        Weather Integration
                        </li>
                        <li style={{ color: '#68C34C', fontWeight: 'bold', marginBottom: '8px', }}>
                        Smart plant matching
                        </li>
                        <li style={{ color: '#68C34C', fontWeight: 'bold', marginBottom: '8px',  }}>
                        Mobile-Ready & Scalable
                        </li>
                        <li style={{ color: '#68C34C', fontWeight: 'bold', marginBottom: '8px',  }}>
                         Intuitive Design
                        </li>
                    </ul>
                    <Button
                        variant="outlined"
                        sx={{
                        borderColor: '#68C34C',
                        color: '#68C34C',
                        textTransform: 'none',
                        fontSize: '0.875rem',
                        padding: '6px 25px',
                        borderRadius: '30px',
                        '&:hover': {
                            backgroundColor: '#68C34C',
                            color: 'white',
                        },
                        }}
                    >
                        Get Started
                    </Button>
                    </Box>
                </Box>
            </Container>
             {/* how it works section */}
             <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
                <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4}>
                  How It Works?
                </Typography>
                <Grid container spacing={6} justifyContent={'center'}>
                    {cards.map((card) => (
                    <Grid item xs={12} sm={6} md={4} key={card.id}>
                        <Card
                            sx={{
                            backgroundColor: '#f6f9f5',
                            textAlign: 'center',
                            padding: '20px',
                            borderRadius: '12px',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                            height: '100%', // Ensures all cards are the same height
                            maxWidth: 300, // Sets a maximum width for the card
                            }}
                        >
                            <IconButton
                            sx={{
                                backgroundColor: '#ECF6E4',
                                width: 60,
                                height: 60,
                                marginBottom: 2,
                            }}
                            >
                            {card.icon}
                            </IconButton>
                            <CardContent>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                {card.header}
                            </Typography>
                            <Typography
                                variant="body2" 
                                color="textSecondary"
                            >
                                {card.text}
                            </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>
            {/* footer section */}
            <Box
            sx={{
                backgroundColor: '#2E2E2E',
                color: '#ffffff',
                padding: '90px 20px',
            }}
            >
                {/* Footer Content */}
                <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={6}
                    alignItems="flex-start"
                    sx={{ mb: 5 }}
                >
                    {/* About Section */}
                    <Box>
                    <Typography variant="body1"  mb={2}>
                        About
                    </Typography>
                    <Typography variant="body2" mb={2}>
                        Features
                    </Typography>
                    <Typography variant="body2">Our Product</Typography>
                    </Box>

                    {/* Contact Us Section */}
                    <Box>
                    <Typography variant="body1"  mb={2}>
                        Contact Us
                    </Typography>
                    <Typography variant="body2" mb={2}>
                        Email: support@farmstedi.com
                    </Typography>
                    <Typography variant="body2">Phone: +(234) 567-890</Typography>
                    </Box>

                    {/* Follow Us Section */}
                    <Box>
                    <Typography variant="body1"  mb={2}>
                        Follow Us
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <IconButton
                        sx={{ color: 'white' }}
                        aria-label="Twitter"
                        href="https://twitter.com"
                        >
                        <XIcon />
                        </IconButton>
                        <IconButton
                        sx={{ color: 'white' }}
                        aria-label="Facebook"
                        href="https://facebook.com"
                        >
                        <FacebookIcon />
                        </IconButton>
                        <IconButton
                        sx={{ color: 'white' }}
                        aria-label="Instagram"
                        href="https://instagram.com"
                        >
                        <InstagramIcon />
                        </IconButton>
                    </Stack>
                    </Box>
                </Stack>

                {/* Divider */}
                <Divider sx={{ borderColor: 'white', mb: 4 }} />

                {/* Footer Bottom */}
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Stack direction="row" spacing={2}>
                    <Typography variant="body2" sx={{ cursor: 'pointer' }}>
                        Privacy Policy
                    </Typography>
                    <Typography variant="body2" sx={{ cursor: 'pointer' }}>
                        Terms and Conditions
                    </Typography>
                    <Typography variant="body2" sx={{ cursor: 'pointer' }}>
                        Support
                    </Typography>
                    </Stack>
                    <Typography variant="body2">
                    © Copyright 2024. All rights reserved.
                    </Typography>
                </Stack>
                </Container>
            </Box>
            </>
            }
        </Box>
    );
};

export default Homepage;