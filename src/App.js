import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import NotLogin from "./Pages/Cart/notLogin";
import { CartProvider } from "./context/CartContext";

import LoginPage from "./components/login/LoginPage";
import SignUp from "./components/login/SignUp";
import ChatBot from "./components/ChatBot/chatbot";
import Loader from "./Pages/Loader/Loader"; // Import the Loader component
import UserSelect from "./components/login/FaceAuth/UserSelect";
import FaceLogin from "./components/login/FaceAuth/FaceLogin";
import Protected from "./components/login/FaceAuth/Protected";
// import Men from "./Pages/Men/Men";
// import Women from "./Pages/Men/Women";
// import Kids from "./Pages/Men/Kids";
import Arvr from "./Pages/Arvr/arvr"
function App() {
  const [loading, setLoading] = useState(true);
  // Function to handle the end of the loader video
  const handleVideoEnd = () => {
    setLoading(false); // Hide loader and show main app content
  };

  if (loading) {
    return <Loader onVideoEnd={handleVideoEnd} />;
  }

  return (
    <div className="background">
      <CartProvider>
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/facesignin" element={<UserSelect/>}/>
          <Route path="/logincontrol" element={<LoginPage />} />
          <Route path="/chat" element={<ChatBot />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/notcart" element={<NotLogin />} />
          <Route path="/facescan" element={<FaceLogin />} /> 
          <Route path="/protected" element={<Protected />} />  
          <Route path="/arvr" element={<Arvr />} />  
          {/* <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Women />} /> */}
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
