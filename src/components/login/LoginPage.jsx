import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Container, Box, Paper } from "@mui/material";

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleFaceSignUp = () => {
    navigate("/facesignin");
  };

  const handleVoiceSignUp = () => {
    navigate("/voice-signup-success");
  };

  const handleGoogleSignUp = () => {
    navigate("/google-signup-success");
  };

  return (
    <Box sx={{ position: "relative", height: "100vh" }}>
      {/* Sign-Up Card */}
      <Container
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: 4,
            borderRadius: 3,
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          }}
        >
          <Typography variant="h4" component="h2" sx={{ mb: 3, color: "#0d47a1" }}>
            Sign Up
          </Typography>

          {/* Face Authentication */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">Sign up with Face</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleFaceSignUp}
              sx={{ mt: 1 }}
            >
              Sign Up with Face
            </Button>
          </Box>

          {/* Voice Authentication */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">Sign up with Voice</Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleVoiceSignUp}
              sx={{ mt: 1 }}
            >
              Sign Up with Voice
            </Button>
          </Box>

          {/* Google Authentication */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">Sign up with Google</Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#dd4b39",
                color: "#fff",
              }}
              onClick={handleGoogleSignUp}
              sx={{ mt: 1 }}
            >
              Sign Up with Google
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignUpPage;
