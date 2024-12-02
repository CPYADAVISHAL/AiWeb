import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import AuthIdle from "../../../assets/auth-idle.svg";
import AuthFace from "../../../assets/auth-face.svg";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import "./FaceLogin.css"; // Import the CSS file

function FaceLogin() {
  const [tempAccount, setTempAccount] = useState(null); // tempAccount can be null initially
  const [localUserStream, setLocalUserStream] = useState(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [loginResult, setLoginResult] = useState("PENDING");
  const [imageError, setImageError] = useState(false);
  const [counter, setCounter] = useState(5);
  const [labeledFaceDescriptors, setLabeledFaceDescriptors] = useState([]);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const faceApiIntervalRef = useRef(null);
  const videoWidth = 640;
  const videoHeight = 360;

  const location = useLocation();
  const navigate = useNavigate();

  const shouldRedirect = !location?.state;

  const loadModels = async () => {
    const uri = "/models";

    // Load all the necessary models for face-api.js
    await faceapi.nets.ssdMobilenetv1.loadFromUri(uri);
    await faceapi.nets.faceLandmark68Net.loadFromUri(uri);
    await faceapi.nets.faceRecognitionNet.loadFromUri(uri);

    // Set models loaded to true after all models are loaded
    setModelsLoaded(true);
  };

  useEffect(() => {
    setTempAccount(location?.state?.account);
  }, [location]);

  useEffect(() => {
    if (tempAccount) {
      loadModels()
        .then(async () => {
          const labeledFaceDescriptors = await loadLabeledImages();
          if (labeledFaceDescriptors.length > 0) {
            setLabeledFaceDescriptors(labeledFaceDescriptors);
          } else {
            console.error("No labeled face descriptors found.");
          }
        });
    }
  }, [tempAccount]);

  useEffect(() => {
    if (loginResult === "SUCCESS") {
      const counterInterval = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);

      if (counter === 0) {
        videoRef.current.pause();
        videoRef.current.srcObject = null;
        localUserStream.getTracks().forEach((track) => {
          track.stop();
        });
        clearInterval(counterInterval);
        clearInterval(faceApiIntervalRef.current);
        localStorage.setItem(
          "faceAuth",
          JSON.stringify({ status: true, account: tempAccount })
        );
        navigate("/protected", { replace: true });
      }

      return () => clearInterval(counterInterval);
    }
    setCounter(5);
  }, [loginResult, counter, localUserStream, navigate, tempAccount]);

  useEffect(() => {
    const checkCameraSupport = async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Camera access is not supported in this browser.");
        return false;
      }
      return true;
    };

    const initializeCamera = async () => {
      const cameraSupported = await checkCameraSupport();
      if (cameraSupported) {
        getLocalUserVideo();  // Call the function to initialize the video stream
      }
    };

    initializeCamera(); // Start checking and initializing the camera

    if (videoRef.current) {
      videoRef.current.addEventListener("canplay", () => {
        videoRef.current.play(); // Ensure video starts playing once ready
      });
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("canplay", () => {
          videoRef.current.play(); // Cleanup event listener
        });
      }
    };
  }, [videoRef.current]); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    const videoElement = videoRef.current;
    // Ensure the video is paused when component is unmounted
    return () => {
      if (videoElement) {
        videoElement.pause();
        videoElement.srcObject = null;
      }
    };
  }, []);  // Empty array ensures cleanup only on unmount

  // Function to get video stream
  const getLocalUserVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: videoWidth, height: videoHeight },
        audio: false,
      });

      // Only set the video source if it's not already set
      if (videoRef.current && !videoRef.current.srcObject) {
        videoRef.current.srcObject = stream;
        videoRef.current.play(); // Explicitly play the video once stream is set
      }

      setLocalUserStream(stream);
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Failed to access the camera. Please check permissions or your device.");
    }
  };

  const scanFace = async () => {
    faceapi.matchDimensions(canvasRef.current, videoRef.current);
    const faceApiInterval = setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current)
        .withFaceLandmarks()
        .withFaceDescriptors();
      const resizedDetections = faceapi.resizeResults(detections, {
        width: videoWidth,
        height: videoHeight,
      });

      if (labeledFaceDescriptors.length === 0) {
        console.error("No labeled face descriptors available.");
        return;
      }

      const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors); // Ensure labeledFaceDescriptors is correctly formatted

      const results = resizedDetections.map((d) =>
        faceMatcher.findBestMatch(d.descriptor)
      );

      if (!canvasRef.current) {
        return;
      }

      canvasRef.current
        .getContext("2d")
        .clearRect(0, 0, videoWidth, videoHeight);
      faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);

      if (results.length > 0 && tempAccount.id === results[0].label) {
        setLoginResult("SUCCESS");
      } else {
        setLoginResult("FAILED");
      }
    }, 1000 / 15);
    faceApiIntervalRef.current = faceApiInterval;
  };

  async function loadLabeledImages() {
    if (!tempAccount) {
      return [];
    }

    if (shouldRedirect) {
      return <Navigate to="/" replace={true} />;
    }

    const descriptions = [];

    let img;

    try {
      const imgPath =
        tempAccount?.type === "CUSTOM"
          ? tempAccount.picture
          : `/temp-accounts/${tempAccount.picture}`;

      img = await faceapi.fetchImage(imgPath);
    } catch {
      setImageError(true);
      return [];
    }

    const detections = await faceapi
      .detectSingleFace(img)
      .withFaceLandmarks()
      .withFaceDescriptor();

    if (detections) {
      descriptions.push(detections.descriptor); // Ensure descriptor is added
    }

    if (descriptions.length === 0) {
      console.error("No face descriptors found.");
    }

    // Return LabeledFaceDescriptors correctly as an array
    return [new faceapi.LabeledFaceDescriptors(tempAccount.id, descriptions)];
  }

  if (imageError) {
    return (
      <div className="error-container">
        <h2 className="error-title">
          <span className="block">
            Upps! There is no profile picture associated with this account.
          </span>
        </h2>
        <span className="block mt-4">
          Please contact administration for registration or try again later.
        </span>
      </div>
    );
  }

  return (
    <div className="main-container">
      {!localUserStream && !modelsLoaded && (
        <h2 className="loading-title">
          <span className="block">
            You're Attempting to Log In With Your Face.
          </span>
          <span className="text-indigo-600 mt-2">Loading Models...</span>
        </h2>
      )}
      {!localUserStream && modelsLoaded && (
        <h2 className="loading-title">
          <span className="block">
            You're Attempting to Log In With Your Face.
          </span>
        </h2>
      )}
      <div className="video-container">
        <div className="video-wrapper">
          <video
            ref={videoRef}
            width={videoWidth}
            height={videoHeight}
            autoPlay
            muted
            onPlay={scanFace}
            className="rounded-xl"
          />
          <canvas
            ref={canvasRef}
            width={videoWidth}
            height={videoHeight}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default FaceLogin;
