import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  LinearProgress,
  Grid,
} from "@mui/material";

const OTPVerification = ({ email }) => {
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleResend = () => {
    console.log("Resending OTP...");
  };

  const handleSubmit = () => {
    const code = otp.join("");
    console.log("Entered OTP:", code);
  };

  const progress = (otp.filter((val) => val !== "").length / otp.length) * 100;

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f7fbf9"
    >
      <Paper
        elevation={3}
        sx={{
          width: 400,
          px: 4,
          py: 5,
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Create an Account
        </Typography>

        <Box mb={3}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 6,
              borderRadius: 10,
              backgroundColor: "#e0e0e0",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#72c561",
              },
            }}
          />
        </Box>

        <Typography variant="body2" mb={3}>
          A message was sent to your email{" "}
          <strong>{email || "your email"}</strong> containing an OTP. Please
          input the code to proceed
        </Typography>

        <Grid container spacing={1} justifyContent="center" mb={2}>
          {otp.map((digit, index) => (
            <Grid item key={index}>
              <TextField
                id={`otp-${index}`}
                type="password"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                inputProps={{
                  maxLength: 1,
                  style: {
                    textAlign: "center",
                    fontSize: "1.2rem",
                    width: "35px",
                    height: "45px",
                    padding: 0,
                  },
                }}
                sx={{
                  backgroundColor: "#f1f8f6",
                  borderRadius: 2,
                }}
              />
            </Grid>
          ))}
        </Grid>

        <Typography variant="body2" color="text.secondary" mb={3}>
          Didn’t receive code?{" "}
          <Link href="#" onClick={handleResend} underline="none">
            Resend
          </Link>
        </Typography>

        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
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
          Create Account
        </Button>
      </Paper>
    </Box>
  );
};

export default OTPVerification;
