// This code defines a simple Not Found page component in React. It displays a 404 error message and suggests the user check the URL or return to the homepage.
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <p>Please check the URL or return to the homepage.</p>
            <Button variant="contained" color="success">
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    Go to Homepage
                </Link>
            </Button>
        </Box>
    );
}   
export default NotFoundPage;
// This code defines a simple Not Found page component in React. It displays a 404 error message and suggests the user check the URL or return to the homepage.