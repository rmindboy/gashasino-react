import React, { useState } from "react";
import "./assets/css/App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import MainCards from "./assets/components/MainCards";
import Register from "./assets/components/Register";

function App() {
  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  return (
    
    <>
      <Header onRegisterClick={handleRegisterClick} />
      {showRegister ? <Register /> : <MainCards />}
      <Footer />
    </>
  );
}

export default App;
