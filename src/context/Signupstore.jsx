import { useState } from "react";
import { useFirebase } from "./Firebase";

export default function Signupstore() {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  return (
    <div>
      <h1>Firebase</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="enter Email"
      />
      <input
        onChange={(e) => setPassword (e.target.value)}
        value={password}
        type="Password"
        placeholder="enter Password"
      /> 
      <button onClick={() => firebase}>Signup</button>
    </div>
  );
}
