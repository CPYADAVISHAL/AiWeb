// Loader.js
import React from 'react';
import './Loader.css';
import Video from  "../../image/Mega mart.mp4";

const Loader = ({ onVideoEnd }) => {
  return (
    <div className="loader-overlay">
      <video
        className="loader-video"
        src={Video}
        autoPlay
        muted
        onEnded={onVideoEnd} // Trigger callback when video ends
      />
      {/* <p className="loader-text">Loading, please wait...</p> */}
    </div>
  );
};

export default Loader;
