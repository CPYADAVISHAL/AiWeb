import axios from 'axios';

const API_BASE_URL = 'http://localhost:5002';  // Ensure the backend is running here

// Sign-up API call
export const signupUser = async (faceData, email, name) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/signup`, {
            image: faceData,
            email: email,
            name: name
        });
        return response.data;
    } catch (error) {
        console.error('Error during sign-up:', error);
        throw error;
    }
};

// Sign-in API call
export const authenticateUser = async (email) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/signin`, {
            email: email
        });
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};
