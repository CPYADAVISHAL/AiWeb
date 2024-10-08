import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./firebase";
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) => {
      alert("Success");
      console.log("Navigating to signin page...");
    navigate('/signin');
    }).catch((error) => {
      alert("Error: " + error.message);
    });
  };

  return (
    <div>
      <div className="signup_page">
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          required
          placeholder="Enter your email here"
        ></input>
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          placeholder="Enter your password here"
        ></input>

        <button onClick={createUser}>Signup</button>
      </div>
    </div>
  );
};

export default Signup;