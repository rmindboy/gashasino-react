import React, { useState } from "react";
import "./assets/css/App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import MainCards from "./assets/components/MainCards";
import Register from "./assets/components/Register";
import Games from "./assets/components/Games";
import Blackjack from "./assets/components/Blackjack";
import SurveyUserSatisfaction from "./assets/components/SurveyUserSatisfaction";
import SurveyDesignSuggestions from "./assets/components/SurveyDesignSuggestions";
import SurveyGamesSuggestions from "./assets/components/SurveyGamesSuggestions";
import Login from "./assets/components/Login";

function App() {

  const [view, setView] = useState("main");

  return (
    <div className="app-root">
      <main className="app-content">
        <Header
          onMenuClick={() => setView("main")}
          onRegisterClick={() => setView("register")}
          onLoginClick={() => setView("login")}
          onGamesClick={() => setView("games")}
        />
        {view === "login" && <Login />}
        {view === "register" && <Register />}
        {view === "games" && 
          <Games onBlackjackClick={() => setView("blackjack")}/>}
        {view === "main" && (
          <MainCards onBlackjackClick={() => setView("blackjack")} />
        )}
        {view === "blackjack" && <Blackjack />}
        {view === "survey-satisfaction" && (
          <SurveyUserSatisfaction 
            onMenuClick={() => setView("main")}
            onRegisterClick={() => setView("register")}
            onGamesClick={() => setView("games")}
            onNext={() => setView("survey-design")}
          />
        )}
        {view === "survey-design" && (
          <SurveyDesignSuggestions 
            onMenuClick={() => setView("main")}
            onRegisterClick={() => setView("register")}
            onGamesClick={() => setView("games")}
            onNext={() => setView("survey-games")}
            onPrev={() => setView("survey-satisfaction")}
          />
        )}
        {view === "survey-games" && (
          <SurveyGamesSuggestions 
            onMenuClick={() => setView("main")}
            onRegisterClick={() => setView("register")}
            onGamesClick={() => setView("games")}
            onPrev={() => setView("survey-design")}
          />
        )}
      </main>
      <Footer onSurveysClick={() => setView("survey-satisfaction")} />
    </div>
  );

}


export default App;

