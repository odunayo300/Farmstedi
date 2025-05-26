import React, { useState, useEffect } from "react";
import axios from "axios";

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

const CreateAccountForm = ({ setEmail, onNext }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    savePassword: true,
  });

  const [errors, setErrors] = useState({});
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
    setErrors((prev) => ({
      ...prev,
      [name]: "", 
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
    }
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };


  const handleSubmit = async () => {
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  const payload = {
    firstname: formData.firstName,
    lastname: formData.lastName,
    email: formData.email,
    password: formData.password,
    confirmPassword: formData.confirmPassword,
  };

  try {
    const response = await axios.post("https://farmstedi.onrender.com/api/v1/auth/signup", payload);
    console.log("Account created successfully:", response.data);

    setEmail(formData.email);
    onNext(); 
  } catch (error) {
  console.error("Error creating account:", error);

  if (error.response) {
    const { status, data } = error.response;

    let message = "An error occurred. Please try again.";

    switch (status) {
      case 400:
        message = data.message || "Invalid input. Please check your form.";
        break;
      case 409:
        message = data.message || "Account with this email exists";
        break;
      case 422:
        message = data.message || "Invalid email format";
        break;
      case 500:
        message = data.message || "Server error. Please try again later.";
        break;
      default:
        message = data.message || message;
    }

    alert(message);
  } else {
    alert("Network error. Please check your internet connection.");
  }
}

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
          {[
            { name: "firstName", label: "Your First Name", placeholder: "Oluwatobi" },
            { name: "lastName", label: "Your Last Name", placeholder: "Opeyemi" },
            { name: "email", label: "Email Address", placeholder: "Email" },
            { name: "password", label: "Password", placeholder: "Password", type: "password" },
            {
              name: "confirmPassword",
              label: "Confirm Password",
              placeholder: "Confirm Password",
              type: "password",
            },
          ].map((field) => (
            <Box key={field.name} textAlign="left">
              <Typography variant="body2" mb={0.5}>
                {field.label}
              </Typography>
              <TextField
                fullWidth
                name={field.name}
                placeholder={field.placeholder}
                type={field.type || "text"}
                value={formData[field.name]}
                onChange={handleChange}
                error={Boolean(errors[field.name])}
                helperText={errors[field.name]}
                InputProps={{
                  sx: {
                    bgcolor: "#f1f8f6",
                    borderRadius: 2,
                  },
                }}
              />
            </Box>
          ))}

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
            onClick={handleSubmit}
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

export default CreateAccountForm;