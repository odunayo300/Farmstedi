import React, { useState } from "react";
import { Box, Grid} from "@mui/material";
import CreateAccountForm from "../Components/SignupComponent/CreateAccountForm";
import OTPVerification from "../Components/SignupComponent/OTPVerification";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState("form"); 

  return (
    <Box bgcolor="#f6fbf8" minHeight="100vh" p={4}>
      <Grid container spacing={6} justifyContent="center">
        <Grid item>
          {step === "form" ? (
            <CreateAccountForm setEmail={setEmail} onNext={() => setStep("otp")} />
          ) : (
            <OTPVerification email={email} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;