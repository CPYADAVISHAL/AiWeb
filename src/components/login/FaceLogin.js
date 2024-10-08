import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import "./Facelogin.css" // Import custom CSS for styling
import { authenticateUser } from '../../services/api'; // Ensure API call is correct
import { useNavigate, Link } from "react-router-dom";
const FaceLogin = () => {
    const navigate = useNavigate();
    const webcamRef = useRef(null);
    const [message, setMessage] = useState('Please capture an image for login.');
    const [loading, setLoading] = useState(false);

    const capture = async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
            setLoading(true);
            try {
                const response = await authenticateUser(imageSrc);
                 // Send image to backend for authentication
                 alert(`Welcome ${response.user}`)
                 navigate("/")
              
                if (response.user) {
                    setMessage(`Login successful! ${response.user}`);
                    
                } else {
                    setMessage('Login failed. Try again.');
                }
            } catch (error) {
                setMessage('Error during login. Please try again.');
                console.error(error);
            } finally {
                setLoading(false);
            }
        } else {
            setMessage('Failed to capture image. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Face Recognition Login</h2>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={320}
                height={240}
                className="webcam-view"
            />
            <button className="login-button" onClick={capture} disabled={loading}>
                {loading ? 'Logging in...' : 'Login with Face'}
            </button>
            <p className="login-message">{message}</p>
        </div>
    );
};

export default FaceLogin;
