import React, { useState } from "react";
import "./assets/css/App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import MainCards from "./assets/components/MainCards";
import Register from "./assets/components/Register";
import Games from "./assets/components/Games";
import Blackjack from "./assets/components/Blackjack";

function App() {

  const [view, setView] = useState("main");

  return (
    <div className="app-root">
      <main className="app-content">
        <Header
          onRegisterClick={() => setView("register")}
          onGamesClick={() => setView("games")}
        />
        {view === "register" && <Register />}
        {view === "games" && 
          <Games onBlackjackClick={() => setView("blackjack")}/>}
        {view === "main" && (
          <MainCards onBlackjackClick={() => setView("blackjack")} />
        )}
        {view === "blackjack" && <Blackjack />}
      </main>
      <Footer />
    </div>
  );

}


export default App;

