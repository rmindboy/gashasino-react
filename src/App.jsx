import React, { useState } from "react";
import "./assets/css/App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import MainCards from "./assets/components/MainCards";
import Register from "./assets/components/Register";
import Games from "./assets/components/Games";

function App() {

  const [view, setView] = useState("main");

return (
  <div>
    <Header
      onRegisterClick={() => setView("register")}
      onGamesClick={() => setView("games")}
    />
    {view === "register" && <Register />}
    {view === "games" && <Games />}
    {view === "main" && <MainCards 
    onBlackjackClick={() => setView("blackjack")} />}
    {view === "blackjack" && <Blackjack />}
    <Footer />
  </div>
);
}


export default App;

