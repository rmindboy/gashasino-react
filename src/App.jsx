import React from "react";
import "./assets/css/App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import MainCards from "./assets/components/MainCards";

function App() {
  return (
    <>
      <Header></Header>

      <div className="banner">
        <img
          src="src/assets/imgs/chair-dress-bare-shoulders-uniform-wallpaper-preview.jpg"
          alt="Banner casino"
        />
      </div>

      <MainCards />

      <Footer></Footer>
    </>
  );
}

export default App;
