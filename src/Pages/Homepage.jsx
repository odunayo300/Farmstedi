import React from 'react';
import {Box,Container,Typography,Button,Card, CardContent, IconButton, Grid,Stack, Divider } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Homepage = () => {

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
    return (
        <Box>
             {/* showcase section */}
             <Box
                sx={{
                    backgroundImage:'url(https://s3-alpha-sig.figma.com/img/9ab4/7bfe/fd2ea90ea7a51f333ee292a171af4219?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XWOjlJOW8B9sUri3Fp4A4oGdwfvwD26CC5xhnEOHtvDfQf~JlNZqVGl1p27l17IcQmGFupbCUcp3GzLtvWb21prT5NGOvfxQT9IlAIr5PbE7X~2~IqFwiZcJ6gypc3oVVoi7yzzaav1DI8felIJHjw45h3ZDmGE5ylwwn2pAsn-tOkaNkL4KWfW7aAaa62VsIDmXE81syrybYnA6Fau0Y9V4q-RE6UiALlofZK7ROXkVuzTO33jqUT~QCa2XowXPPYSqodWTAimHTLktmMNE~COFWxPxeSW~GofCXHPrSJGtOfFMf32ChspfufQFNJbz8~6GjkjY6oiELHmvssS1EQ__)',
                    backgroundSize:'cover',
                    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
                    backgroundPosition: 'center', // Centers the image
                    minHeight: '600px', // Sets a minimum height
                    width: '100%', // Sets the width to 100%
                    display: 'flex', // Allows content to be flexibly aligned
                    justifyContent: 'center', // Centers content horizontally
                    alignItems: 'center', // Centers content vertically
                    
                }}
             >
               
               <Container  maxWidth="lg">
                    <Box>
                        <Box>
                            <Typography variant="h3" mb={3}>
                                Discover the perfect plants for your Land
                            </Typography>
                            <Button
                            variant="outlined"
                            sx={{
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
                            >
                            Get Started
                            </Button>
                        </Box>
                        

                    </Box>
                </Container>
             </Box>
             {/* how it works section */}
             <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
                <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4}>
                  How It Works?
                </Typography>
                <Grid container spacing={4} justifyContent={'center'}>
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
        </Box>
    );
};

export default Homepage;