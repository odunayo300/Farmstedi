import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link as MuiLink,
  Paper,
  Alert,
  CircularProgress,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErrorMsg("");
    setLoading(true);
    try {
      const response = await axios.post("https://farmstedi.onrender.com/api/v1/auth/signin", {
        email,
        password,
      });

      const { token, user } = response.data;

      // Save token to localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect to homepage
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMsg(error.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
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

        {errorMsg && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {errorMsg}
          </Alert>
        )}

        <Box mb={3}>
          <Typography variant="body2" align="left" color="textSecondary" mb={1}>
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
          <Typography variant="body2" align="left" color="textSecondary" mb={1}>
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
            to="/forgotPassword"
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
          disabled={loading}
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
          {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Sign In"}
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
