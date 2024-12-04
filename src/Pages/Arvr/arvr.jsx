import React, { useState, useEffect } from 'react';

const ARVR = () => {
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    // Set the video source to the Flask server endpoint
    setVideoSrc("http://localhost:5000/video_feed");
  }, []);

  return (
    <div>
      <h1>Video Feed</h1>
      <img src={videoSrc} alt="Video Feed" style={{ width: '100%' }} />
    </div>
  );
};

export default ARVR;
