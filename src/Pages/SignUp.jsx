import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  LinearProgress,
  Paper,
} from "@mui/material";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    savePassword: true,
  });

  const [progress, setProgress] = useState(0);

  const totalFields = 5; 
  useEffect(() => {
    const filledFields = Object.entries(formData).filter(
      ([key, value]) =>
        key !== "savePassword" && value.toString().trim() !== ""
    ).length;
    setProgress((filledFields / totalFields) * 100);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f7fbf9"
    >
      <Paper
        elevation={0}
        sx={{
          px: 4,
          py: 6,
          width: 400,
          borderRadius: 4,
          textAlign: "center",
          bgcolor: "white",
        }}
      >

        <Typography variant="h5" fontWeight="bold" mb={3}>
          Create an Account
        </Typography>

        <Box mb={4}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 8,
              borderRadius: 4,
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#72c561",
              },
              backgroundColor: "#eef3ef",
            }}
          />
        </Box>

        <Box display="flex" flexDirection="column" gap={2}>

          <Box textAlign="left">
            <Typography variant="body2" mb={0.5}>
              Your First Name
            </Typography>
            <TextField
              fullWidth
              name="firstName"
              placeholder="Oluwatobi"
              value={formData.firstName}
              onChange={handleChange}
              InputProps={{
                sx: {
                  bgcolor: "#f1f8f6",
                  borderRadius: 2,
                },
              }}
            />
          </Box>

          <Box textAlign="left">
            <Typography variant="body2" mb={0.5}>
              Your Last Name
            </Typography>
            <TextField
              fullWidth
              name="lastName"
              placeholder="Opeyemi"
              value={formData.lastName}
              onChange={handleChange}
              InputProps={{
                sx: {
                  bgcolor: "#f1f8f6",
                  borderRadius: 2,
                },
              }}
            />
          </Box>

          <Box textAlign="left">
            <Typography variant="body2" mb={0.5}>
              Email Address
            </Typography>
            <TextField
              fullWidth
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              InputProps={{
                sx: {
                  bgcolor: "#f1f8f6",
                  borderRadius: 2,
                },
              }}
            />
          </Box>

          <Box textAlign="left">
            <Typography variant="body2" mb={0.5}>
              Password
            </Typography>
            <TextField
              fullWidth
              name="password"
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                sx: {
                  bgcolor: "#f1f8f6",
                  borderRadius: 2,
                },
              }}
            />
          </Box>

          <Box textAlign="left">
            <Typography variant="body2" mb={0.5}>
              Confirm Password
            </Typography>
            <TextField
              fullWidth
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              InputProps={{
                sx: {
                  bgcolor: "#f1f8f6",
                  borderRadius: 2,
                },
              }}
            />
          </Box>

          <FormControlLabel
            control={
              <Checkbox
                name="savePassword"
                checked={formData.savePassword}
                onChange={handleChange}
                sx={{
                  color: "#72c561",
                  "&.Mui-checked": {
                    color: "#72c561",
                  },
                }}
              />
            }
            label="Save password"
            sx={{ alignSelf: "start" }}
          />

          <Button
            variant="contained"
            fullWidth
            disabled={progress < 100}
            sx={{
              backgroundColor: "#72c561",
              color: "#fff",
              py: 1.5,
              borderRadius: 2,
              fontSize: "1rem",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#66b35a",
              },
            }}
            onClick={() => alert("Account created!")}
          >
            Create Account
          </Button>

          <Typography
            variant="caption"
            mt={2}
            color="text.secondary"
            textAlign="center"
          >
            By clicking "Create Account," you agree to our Terms of Service.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignUp;