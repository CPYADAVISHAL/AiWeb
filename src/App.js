import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
// import SignInForm from "./Pages/Sign/Signin";
// import Signup2 from "./Pages/Sign/signup2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NotLogin from "./Pages/Cart/notLogin";
import { CartProvider } from "./context/CartContext";
import "./App.css";
import LoginPage from "./components/login/LoginPage";
import SignIn from "./components/login/FaceLogin";
import SignUp from "./components/login/SignUp";
import ChatBot from "./components/ChatBot/chatbot";
function App() {
  return (
    <div className="background">
      <CartProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/logincontrol" element={<LoginPage />} />
          {/* <Route path="/signin" element={<SignInForm />} /> */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/chat" element={<ChatBot />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/notcart" element={<NotLogin />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
