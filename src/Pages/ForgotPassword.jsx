import { useState } from "react";
import gmailicon from '../assets/gmailicon.png'
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Stack,
  Box,
} from "@mui/material";
import CustomButton from "../Components/CustomButton/CustomButton";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("initial"); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setStatus("error");
    } else {
      setStatus("success");
    }
  };

  const renderForm = () => {
    if (status === "success") {
      return (
        <Card sx={{ maxWidth: 400, mx: "auto", mt:"auto", p: 2 }}>
          <CardContent>
            <Stack spacing={2} >
              <Typography variant="h5" textAlign="center">Reset Link Sent</Typography>
              <Typography >
                The reset link has been sent to{" "}
                <strong>
                  {email.slice(0, 7)}***{email.slice(-10)}
                </strong>
              </Typography>
              <Box display="flex" justifyContent="center">
                <img src={gmailicon} alt="Gmail" width={150} />
              </Box>

              <CustomButton 
                variant="contained"
                fullWidth
                color="error"
                href="https://mail.google.com"
                target="_blank"
                text="Go to email"
              />
            </Stack>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card sx={{ maxWidth: 400, mx: "auto", mt: 8, p: 2 }}>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h5" textAlign="center" >Forgot Password</Typography>
            <Typography variant="body2" color="text.secondary">
              You will receive an email with instructions on how to reset your password.
            </Typography>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("initial");
                  }}
                  error={status === "error"}
                  helperText={
                    status === "error" ? "Email address field cannot be empty" : ""
                  }
                  fullWidth
                />
                <CustomButton 
                  variant="contained" 
                  color="success" 
                  type="submit"
                  text="Create Account"
                />
              </Stack>
            </form>
          </Stack>
        </CardContent>
      </Card>
    );
  };

  return <div>{renderForm()}</div>;
}

export default ForgotPassword;
