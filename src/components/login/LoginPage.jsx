import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LoginPage.css"; // Custom styling

const SignUpPage = () => {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleFaceSignUp = async () => {
    // Handle face sign-up logic (e.g., API call)
    // After successful sign-up, navigate to another page
    navigate("/face-signup-success"); // Replace with the path you want to navigate to
  };

  const handleVoiceSignUp = () => {
    console.log("Voice sign-up not implemented yet.");
    navigate("/voice-signup-success"); // Navigate to the voice sign-up success page
  };

  const handleGoogleSignUp = () => {
    console.log("Google Sign-up not implemented yet.");
    navigate("/google-signup-success"); // Navigate to the Google sign-up success page
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>

      {/* Face Authentication */}
      <div className="signup-option">
        <h4>Sign up with Face</h4>
        <button className="signup-button" onClick={handleFaceSignUp}>
          Sign Up with Face
        </button>
      </div>

      {/* Voice Authentication */}
      <div className="signup-option">
        <h4>Sign up with Voice</h4>
        <button className="signup-button" onClick={handleVoiceSignUp}>
          Sign Up with Voice
        </button>
      </div>

      {/* Google Authentication */}
      <div className="signup-option">
        <h4>Sign up with Google</h4>
        <button className="signup-button google-button" onClick={handleGoogleSignUp}>
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
