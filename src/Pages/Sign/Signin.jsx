import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);
const SignInForm = () => {
  const navigate = useNavigate();
  // State to store input values
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  // Function to handle form submission
  const signinUser = () => {
    // alert("i am clicked");
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {alert("signin success");
      navigate('/')})
      .catch((err) => alert(err));

  };

  return (
    <div
      style={{
        maxWidth: "300px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>Sign In</h2>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          required
          style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Password:
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
        />
      </div>
      <button onClick={signinUser}> SignIn</button>
      <button> <NavLink to="signup">SignUp</NavLink></button>
    </div>
  );
};

export default SignInForm;
