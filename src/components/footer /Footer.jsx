import React from "react";
import "./Footer.css";
import adarshImage from "../../image/C2.png"; // Replace with actual image path
import cpyadavImage from "../../image/C3.png"; // Replace with actual image path
import dofeImage from "../../image/C4.png"; // Replace with actual image path
// import { useTheme } from '../../contexts/theme/ThemeContext';

const Footer = () => {
  // const { theme } = useTheme();
  return (
    <footer className="footer">

      {/* Section 1: Navigation */}
      <div className="footer-section">
        <div className="made-with-love">
          <p>MADE WITH LOVE</p>
          <img src={dofeImage} alt="DOFE Memes" className="dofe-image" />
        </div>
      </div>

      {/* Section 2: Development Team */}
      <div className="footer-section">
        <p className="development-team">SuperDev Team</p>
        <div className="person-gallery">
          
          <div className="person-card">
            {/* Adarsh Pathak's GitHub Link */}
            <a href="https://www.linkedin.com/in/adarshrajpathak/" target="_blank" rel="noopener noreferrer">
              <img src={adarshImage} alt="Adarsh Pathak" />
            </a>
            <p className="person-name">Tofique</p>
          </div>

          <div className="person-card">
            {/* C P Yadav's GitHub Link */}
            <a href="https://www.linkedin.com/in/chandra-prakash-yadav-b22783228/" target="_blank" rel="noopener noreferrer">
              <img src={cpyadavImage} alt="C P Yadav" />
            </a>
            <p className="person-name">C P Yadav</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>COPYRIGHT © 2024 ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;