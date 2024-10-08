// src/services/api.js
import axios from "axios";

const API_BASE_URL = "http://localhost:5001"; // Ensure this is your correct backend URL

export const authenticateUser = async (faceData) => {
  try {
    // Sending face data to the backend in base64 format
    const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
      image: faceData, // Sending image data (in base64 format) to backend
    });

    // Log response for debugging
    console.log("Response from backend:", response);

    // Check if authentication was successful
    if (response.status === 200) {
      // Alert successful response for debugging
      alert("Authentication successful!"); // Optional for debugging in UI
      return response.data; // Expected 'authenticated: true/false'
    } else {
      console.error("Unexpected response from server:", response);
      throw new Error("Failed to authenticate the user.");
    }
  } catch (error) {
    // Enhanced error logging for better debugging
    if (error.response) {
      // Backend responded with an error
      console.error("Server responded with an error:", error.response.data);
      alert("Server Error: " + error.response.data.message); // Optional: user-facing alert
    } else if (error.request) {
      // No response from the server
      console.error(
        "No response from server. Check your backend connection:",
        error.request
      );
      alert("No response from server. Please check your backend connection.");
    } else {
      // Error while setting up the request
      console.error(
        "Error occurred while setting up the request:",
        error.message
      );
      alert("Request Error: " + error.message);
    }
    throw error; // Rethrow error to handle it in the component
  }
};
