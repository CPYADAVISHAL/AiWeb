// src/Signup.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./firebase";

import { useNavigate } from "react-router-dom";
import "./Signup2.css";
import S22 from "../../image/S2.jpg";
const auth = getAuth(app);
function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    alert("i am clicked");
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("Success");
        console.log("Navigating to signin page...");
        navigate("/signin");
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };
  return (
    <div className="signup-container">
      <div className="form-container">
        <h2>Get Started Now</h2>
        <div>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email address"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Enter your password here"
          />
          {/* <div className="terms">
            <input type="checkbox" id="agree" required />
            <label htmlFor="agree">
              I agree to the <a href="#">terms & policy</a>
            </label>
          </div> */}
          <button  className=" signup_button"onClick={createUser}>Signup</button>
        </div>
        <div className="alternative-signup">
          <p>or</p>
          <button className="google-signup">Sign in with Google</button>
          <button className="apple-signup">Sign in with Apple</button>
        </div>
        <p className="signin-link">
          Have an account? <a href="#">Sign In</a>
        </p>
      </div>
      <div className="image-container">
        <img src={S22} alt="Plant" />
      </div>
    </div>
  );
}

export default Signup;
