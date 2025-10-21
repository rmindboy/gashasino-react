import React from "react";
import "../css/MainCards.css";

export function GameCard({ onClick, img, alt, title, subtitle, children }) {
  return (
    <button className="game-card" onClick={onClick}>
        <img src={img} alt={alt} className="game-img" />
        <div className="game-info">
          <h2>{title}</h2>
          <span className="game-subtitle">{subtitle}</span>
          <p className="game-desc">{children}</p>
        </div>
    </button>
  );
}

export default function MainCards({onBlackjackClick}) {
  return (
    <main className="main-menu">

      
      <h1 className="main-title">Juegos más populares</h1>

      <GameCard
        onClick={onBlackjackClick}
        img="src/assets/imgs/blackjack.png"
        alt="BlackJack"
        title="BlackJack"
        subtitle="21"
      >
        Juega BlackJack, aunque ahora mejor que nunca:
        <br />
        <br />
        Consigue 21 o menos en la suma de tus cartas y gánale al malvado
        dealer de BlackJack, así recupera la colegiatura de tus hijos.
      </GameCard>

      <GameCard
        img="src/assets/imgs/poker.png"
        alt="Poker"
        title="Poker"
        subtitle="Texas Hold'em"
      >
        Juega Poker, hasta el último dólar:
        <br />
        <br />
        Consigue la mejor mano de cinco cartas y gánale a tus oponentes. Si
        pierdes y te quedas pobre recuerda, siempre tendrás tu otro riñón.
      </GameCard>

      <GameCard
        img="src/assets/imgs/slots.png"
        alt="Slots"
        title="Slots"
        subtitle="777"
      >
        Juega a las maquinitas, ¿conseguiras el triple 7?:
        <br />
        <br />
        <b>Una más, una más, esta será mi suerte</b>, recuerda revisar bajo el
        sillón antes de venir, cada moneda cuenta.
      </GameCard>

      <img
        src="src/assets/imgs/crupier.png"
        className="chica-img chica-right"
        alt="Crupier"
      />
      <img
        src="src/assets/imgs/apostadora.png"
        className="chica-img chica-left"
        alt="Apostadora"
      />
    </main>
  );
}