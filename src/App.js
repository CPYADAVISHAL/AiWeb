import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SignInForm from "./Pages/Sign/Signin";
import Signup2 from "./Pages/Sign/signup2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NotLogin from "./Pages/Cart/notLogin";
import { CartProvider } from "./context/CartContext";
import "./App.css";
import LoginPage from "./components/login/LoginPage"
function App() {
  return (
    <div className="background">
      <CartProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<LoginPage />} />
          <Route path="/notcart" element={<NotLogin />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
