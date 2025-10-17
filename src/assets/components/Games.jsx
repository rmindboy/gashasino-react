
import { GameCard } from "./MainCards";
import React, { useState } from "react";
import "../css/Games.css";


export function Games(){
return (
    <main className="main-menu">
      <h1 className="main-title">Todos los Juegos</h1>

      <GameCard
        href="blackjack.html"
        img="src/assets/imgs/blackjack.png"
        alt="test"
        title="TEST"
        subtitle="TESTESTES"
      >
        TESTESTESTESTESTES
        <br />
        <br />
        TESTESTESTESTESTESTESTESTESTESTESTESTES
      </GameCard>

    </main>
  );
}

export default Games;