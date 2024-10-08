import React from 'react';
import './notLogin.css'; // Assume you have some CSS styles in this file
import MyButton from '../../components/Button/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';
function notLogin() {
  return (
    <div className="Not">
      <header className="Not-header">
        <div className="cart-container">
          <img
            src="https://via.placeholder.com/150" // Replace this with the actual image link if available
            alt="Cart icon"
            className="cart-icon"
          />
          <div className='h2'>Missing Cart items?</div>
          <div className='p'>Login to see the items you added previously</div>
          <div className="login-button" >
          <MyButton
              variant="outlined"
              color="secondary"
              size="large"
            //   onClick={handleClick}
            >
              <FontAwesomeIcon
                icon={faUser}
                size="lg"
                style={{ color: "#0077b6", gap: "20px" }}
              />
           <NavLink 
                    to="/signup" 
                    style={({ isActive }) => ({
                        color: isActive ? 'red' : 'black',
                        textDecoration: isActive ? 'underline' : 'none'
                    })}>SignUp</NavLink> 
            </MyButton>
          
          </div>
        </div>
      </header>
      <footer className="App-footer">
        <div className="footer-links">
          <a href="#">Policies: Returns Policy</a>
          <a href="#">Terms of use</a>
          <a href="#">Security</a>
          <a href="#">Privacy</a>
          <a href="#">Infringement</a>
        </div>
        <div className="footer-bottom">
          <p>© 2007-2025 MegaMart.com</p>
          <div>
            <a href="#">Need help? Visit the <span>Help Center</span></a> or
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default notLogin;
