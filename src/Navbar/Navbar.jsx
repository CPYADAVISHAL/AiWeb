import React, { useState } from "react";
import "./Navbar.css";
import MyButton from "../components/Button/Button";
import { useNavigate, Link } from "react-router-dom";
import blackLogo from "../image/S3.png";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu state
  const [theme, setTheme] = useState('light'); // Theme state

  const handleClick = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close the menu on navigation
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={blackLogo} alt="SLIET OLX" className="logo-img" />
        </Link>
        <button className="tagline-button">
          <span className="actual-text">MEGA MART</span>
          <span aria-hidden="true" className="hover-text">MEGA MART</span>
        </button>
      </div>

      <div className="menu">
        <MyButton
          variant="outlined"
          color="secondary"
          size="large"
          onClick={() => handleClick("/buy-request")}
        >
          MEN
        </MyButton>

        <MyButton
          variant="outlined"
          color="secondary"
          size="large"
          onClick={() => handleClick("/sell-response")}
        >
          WOMEN
        </MyButton>

        <MyButton
          variant="outlined"
          color="secondary"
          size="large"
          onClick={() => handleClick("/sell")}
        >
        ELECTRONICS
        </MyButton>
        <MyButton onClick={() => handleClick('/signup')}>
                <LoginIcon className="icon-login" />
                &nbsp;Login/Register
              </MyButton>

        {/* Hamburger menu for smaller screens */}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
          <div className={`bar ${isMenuOpen ? 'change' : ''}`}>A</div>
          <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu"> {/* Mobile menu */}
            <button
              className="icon-button"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <WbSunnyIcon className="theme-icon light" />
              ) : (
                <Brightness2Icon className="theme-icon dark" />
              )}
            </button>

            <MyButton onClick={() => handleClick('/sell')}>Sell</MyButton>
            <MyButton onClick={() => handleClick('/buy-request')}>Buy Request</MyButton>
            <MyButton onClick={() => handleClick('/sell-response')}>
              Sell Response
            </MyButton>

            <MyButton onClick={() => handleClick('/signup')}>
                <LoginIcon className="icon-login" />
                &nbsp;Login/Register
              </MyButton>

            {/* Uncomment and define `isAuthenticated` and `logout` as needed */}
            {/* {!isAuthenticated ? (
            
            ) : (
              <MyButton
                onClick={() => {
                  logout();
                  handleClick('/');
                }}
              >
                <PersonIcon className="icon-login" />
                &nbsp;<div>USER</div>
                <div>Logout</div>
              </MyButton>
            )} */}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
