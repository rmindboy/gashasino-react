import React, { useState, useEffect } from "react";
import "../css/Blackjack.css";

const suits = ["♥", "♦", "♣", "♠"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

const Blackjack = () => {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);

  // Crear mazo y repartir cartas al iniciar (inicialización local en useEffect)
  useEffect(() => {
    const newDeck = createDeck();
    dealInitialCards(newDeck);
    setMessage("");
    setGameOver(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createDeck = () => {
    let newDeck = [];
    for (let suit of suits) {
      for (let value of values) {
        newDeck.push({ suit, value });
      }
    }
    return shuffleDeck(newDeck);
  };

  const shuffleDeck = (d) => {
    for (let i = d.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [d[i], d[j]] = [d[j], d[i]];
    }
    return d;
  };

  const calculateScore = (hand) => {
    let score = 0;
    let aces = 0;
    for (let card of hand) {
      if (card.value === "A") {
        aces++;
        score += 11;
      } else if (["K", "Q", "J"].includes(card.value)) {
        score += 10;
      } else {
        score += parseInt(card.value);
      }
    }
    while (score > 21 && aces > 0) {
      score -= 10;
      aces--;
    }
    return score;
  };

  const dealInitialCards = (newDeck) => {
    const player = [newDeck.pop(), newDeck.pop()];
    const dealer = [newDeck.pop(), newDeck.pop()];
    setDeck(newDeck);
    setPlayerHand(player);
    setDealerHand(dealer);
    setPlayerScore(calculateScore(player));
    setDealerScore(calculateScore(dealer));
  };

  const hit = () => {
    if (gameOver) return;
    const newDeck = [...deck];
    const newHand = [...playerHand, newDeck.pop()];
    setDeck(newDeck);
    setPlayerHand(newHand);
    const score = calculateScore(newHand);
    setPlayerScore(score);
    if (score > 21) {
      endGame("¡Te pasaste! El crupier gana.");
    }
  };

  const stand = () => {
    if (gameOver) return;
    let newDeck = [...deck];
    let dealer = [...dealerHand];
    let score = calculateScore(dealer);
    while (score < 17) {
      dealer.push(newDeck.pop());
      score = calculateScore(dealer);
    }
    setDealerHand(dealer);
    setDealerScore(score);

    if (score > 21) {
      endGame("¡El crupier se pasó! Tú ganas.");
    } else if (playerScore > score) {
      endGame("¡Ganaste!");
    } else if (playerScore < score) {
      endGame("El crupier gana.");
    } else {
      endGame("Es un empate.");
    }
  };

  const endGame = (msg) => {
    setMessage(msg);
    setGameOver(true);
  };

  const restartGame = () => {
    const newDeck = createDeck();
    dealInitialCards(newDeck);
    setMessage("");
    setGameOver(false);
  };

  return (
    <div className="blackjack-container">
      <header className="blackjack-title">
        <h1 className="game-title">Blackjack</h1>
      </header>

  <div className="game-area">
        <div className="player-area">
          <h2>Jugador</h2>
          <div className="cards">
            {playerHand.map((card, i) => (
              <div key={i} className="card">
                {card.value}
                {card.suit}
              </div>
            ))}
          </div>
          <p>Puntuación: {playerScore}</p>
        </div>

        <div className="dealer-area">
          <h2>Crupier</h2>
          <div className="cards">
            {dealerHand.map((card, i) => (
              <div key={i} className="card">
                {card.value}
                {card.suit}
              </div>
            ))}
          </div>
          <p>Puntuación: {dealerScore}</p>
        </div>
      </div>

  <div className="controls">
        <button onClick={hit} disabled={gameOver}>Pedir Carta</button>
        <button onClick={stand} disabled={gameOver}>Plantarse</button>
        <button onClick={restartGame}>Reiniciar</button>
      </div>

  <p id="result-message">{message}</p>
    </div>
    
  );
};

export default Blackjack;
