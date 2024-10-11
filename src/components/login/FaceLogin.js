import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { authenticateUser } from '../../services/api';
import './Facelogin.css'; // Import the CSS file for styling

const FaceLogin = () => {
    const webcamRef = useRef(null);
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState('Capture image for login');

    const capture = async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc && userId) {
            try {
                const response = await authenticateUser(imageSrc, userId);
                if (response.message === "User signed in successfully!") {
                    setMessage('Login successful!');
                } else {
                    setMessage('Login failed. Try again.');
                }
            } catch (error) {
                console.error('Error during login:', error);
                setMessage('Error during login. Try again.');
            }
        } else {
            setMessage('Failed to capture image or user ID missing.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Face Recognition Login</h2>
                <input 
                    type="text" 
                    placeholder="Enter User ID" 
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)} 
                    className="login-input"
                />
                <Webcam 
                    ref={webcamRef} 
                    screenshotFormat="image/jpeg" 
                    width={350}
                    height={250}
                    className="webcam"
                />
                <button onClick={capture} className="login-btn">
                    Login with Face
                </button>
                <p className="message">{message}</p>
            </div>
        </div>
    );
};

export default FaceLogin;
