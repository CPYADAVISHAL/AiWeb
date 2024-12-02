import React, { useState, useRef } from 'react';
import { Button, TextField, Typography, CircularProgress, Snackbar } from '@mui/material';
import './AudioRecorder.css'; // Add your CSS styles

const AudioAuth = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [name, setName] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const [loading, setLoading] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = async () => {
    setIsRecording(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        chunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/ogg; codecs=opus' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        chunksRef.current = []; // Clear chunks after stopping
      };

      mediaRecorderRef.current.start();
    } catch (err) {
      console.error("Error accessing microphone:", err);
      setSnackbarMessage("Could not access microphone. Please grant permissions.");
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      setIsRecording(false);
      mediaRecorderRef.current.stop();
    } else {
      setSnackbarMessage("Recording hasn't started yet.");
    }
  };

  const handleAuth = async () => {
    if (!audioURL || !name) {
        setSnackbarMessage("Please enter a name and record audio first.");
        return;
    }

    setLoading(true);
    try {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/ogg; codecs=opus' });
        const formData = new FormData();
        formData.append("name", name);
        formData.append("audio", audioBlob, "recording.ogg");

        const endpoint = isSignUp ? "http://127.0.0.1:5005/signup" : "http://127.0.0.1:5005/signin";
        
        const res = await fetch(endpoint, {
            method: "POST",
            body: formData,
        });

        if (!res.ok) {
            const errorText = await res.text(); // Get the error response text
            setSnackbarMessage(`Error: ${errorText}`);
            return;
        }

        const data = await res.json();
        setSnackbarMessage(data.message || 'Operation successful.');
    } catch (error) {
        console.error(`Error during ${isSignUp ? "sign-up" : "sign-in"}:`, error);
        setSnackbarMessage(`Error during ${isSignUp ? "sign-up" : "sign-in"}: ${error.message || 'Please try again.'}`);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="audio-auth-container">
      <Typography variant="h4" gutterBottom>
        {isSignUp ? "Sign Up" : "Sign In"} with Audio
      </Typography>

      <TextField
        label="Enter your name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="recording-controls">
        <Button
          variant="contained"
          color="primary"
          onClick={startRecording}
          disabled={isRecording}
        >
          {isRecording ? "Recording..." : "Start Recording"}
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={stopRecording}
          disabled={!isRecording}
        >
          Stop Recording
        </Button>
      </div>

      {audioURL && (
        <>
          <Typography variant="h6" gutterBottom>
            Playback
          </Typography>
          <audio controls src={audioURL} />

          <Button
            variant="contained"
            color="primary"
            onClick={handleAuth}
            disabled={loading}
            className="auth-button"
          >
            {loading ? <CircularProgress size={24} /> : (isSignUp ? "Sign Up" : "Sign In")}
          </Button>
        </>
      )}

      <Button
        variant="outlined"
        color="default"
        onClick={() => setIsSignUp(!isSignUp)}
        className="switch-button"
      >
        Switch to {isSignUp ? "Sign In" : "Sign Up"}
      </Button>

      <Snackbar
        open={!!snackbarMessage}
        autoHideDuration={6000}
        onClose={() => setSnackbarMessage("")}
        message={snackbarMessage}
      />
    </div>
  );
};

export default AudioAuth;
