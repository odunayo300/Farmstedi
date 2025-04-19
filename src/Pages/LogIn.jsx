import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link as MuiLink,
  Paper,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", { email, password });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f7fbf9"
    >
      <Paper
        elevation={3}
        sx={{
          width: 360,
          px: 4,
          py: 5,
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={4}>
          Welcome Back
        </Typography>

        <Box mb={3}>
          <Typography
            variant="body2"
            align="left"
            color="textSecondary"
            mb={1}
          >
            Email Address
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              sx: {
                backgroundColor: "#f1f8f6",
                borderRadius: 2,
              },
            }}
          />
        </Box>

        <Box mb={1}>
          <Typography
            variant="body2"
            align="left"
            color="textSecondary"
            mb={1}
          >
            Password
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              sx: {
                backgroundColor: "#f1f8f6",
                borderRadius: 2,
              },
            }}
          />
        </Box>

        <Box textAlign="right" mb={4}>
          <MuiLink
            component={RouterLink}
            to="/forgot-password"
            underline="none"
            sx={{ fontSize: "0.875rem", color: "error.main" }}
          >
            Forgot Password?
          </MuiLink>
        </Box>

        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{
            bgcolor: "#72c561",
            color: "white",
            textTransform: "none",
            fontSize: "1rem",
            borderRadius: "12px",
            py: 1.5,
            "&:hover": {
              bgcolor: "#66b35a",
            },
          }}
        >
          Sign In
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;