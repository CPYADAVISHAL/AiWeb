import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { signupUser } from '../../services/api'; // Ensure this imports the correct signup function
import './SignUp.css'; // Importing the CSS file for styling

const SignUp = () => {
    const webcamRef = useRef(null);
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState('Capture image for sign-up');

    const capture = async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc && userId) {
            try {
                const response = await signupUser(imageSrc, userId);
                if (response.message) {
                    setMessage('User signed up successfully!');
                } else {
                    setMessage('Sign up failed. Try again.');
                }
            } catch (error) {
                setMessage('Error during sign-up. Please check console for details.');
            }
        } else {
            setMessage(imageSrc ? 'User ID is missing.' : 'Failed to capture image.');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Face Recognition Sign-Up</h2>
                <input 
                    type="text" 
                    placeholder="Enter User ID" 
                    className="signup-input" 
                    onChange={(e) => setUserId(e.target.value)} 
                />
                <Webcam 
                    ref={webcamRef} 
                    screenshotFormat="image/jpeg" 
                    width={350} 
                    height={250} 
                    className="webcam" 
                />
                <button onClick={capture} className="signup-btn">
                    Sign-up with Face
                </button>
                <p className="message">{message}</p>
            </div>
        </div>
    );
};

export default SignUp;
