import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Drawer, IconButton, AppBar, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from "@mui/icons-material/Login";
import MyButton from "../components/Button/Button";
import blackLogo from "../image/S3.png";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);

  // Update `isMobile` state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 786);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <AppBar
     position="static"
     color="transparent" 
    className="navbar"
    sx={{ backgroundColor: "#F0F8FF" }}
    >
      <Toolbar className="navbar-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={blackLogo} alt="SLIET OLX" className="logo-img" />
            <span className="logo-text">MEGA MART</span>
          </Link>
        </div>

        <div className="menu-buttons">
          <MyButton variant="outlined" color="secondary" size="large" onClick={() => handleClick("/men")}>
            MEN
          </MyButton>
          <MyButton variant="outlined" color="secondary" size="large" onClick={() => handleClick("/women")}>
            WOMEN
          </MyButton>
          <MyButton variant="outlined" color="secondary" size="large" onClick={() => handleClick("/kids")}>
            KIDS
          </MyButton>
          <MyButton variant="outlined" color="secondary" size="large" onClick={() => handleClick("/chat")}>
            ChatBot
          </MyButton>
          <MyButton onClick={() => handleClick('/logincontrol')}>
            <LoginIcon className="icon-login" />
            &nbsp;Login/Register
          </MyButton>
        </div>

        {/* Hamburger menu for smaller screens */}
        {isMobile && (
          <IconButton 
            edge="end" 
            color="inherit" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="hamburger-menu"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        )}

        <Drawer anchor="right" open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          <div className="drawer-menu">
            <MyButton onClick={() => handleClick('/buy-request')}>MEN</MyButton>
            <MyButton onClick={() => handleClick('/sell-response')}>WOMEN</MyButton>
            <MyButton onClick={() => handleClick('/sell')}>KIDS</MyButton>
            <MyButton onClick={() => handleClick('/chat')}>ChatBot</MyButton>
            <MyButton onClick={() => handleClick('/logincontrol')}>
              <LoginIcon className="icon-login" />
              &nbsp;Login/Register
            </MyButton>
          </div>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
