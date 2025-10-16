import React from "react";
import './assets/css/App.css'
import Header from "./Header";
import Footer from "./Footer"

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

      <main className="main-menu">
        <h1 className="main-title">Juegos más populares</h1>

        {/* Blackjack */}
        <a href="blackjack.html" className="game-card-link">
          <section className="game-card">
            <img
              src="src/assets/imgs/blackjack.png"
              alt="BlackJack"
              className="game-img"
            />
            <div className="game-info">
              <h2>BlackJack</h2>
              <span className="game-subtitle">21</span>
              <p className="game-desc">
                Juega BlackJack, aunque ahora mejor que nunca:
                <br />
                <br />
                Consigue 21 o menos en la suma de tus cartas y gánale al malvado
                dealer de BlackJack, así recupera la colegiatura de tus hijos.
              </p>
            </div>
          </section>
        </a>

        {/* Poker */}
        <a href="#" className="game-card-link">
          <section className="game-card">
            <img
              src="src/assets/imgs/poker.png"
              alt="Poker"
              className="game-img"
            />
            <div className="game-info">
              <h2>Poker</h2>
              <span className="game-subtitle">Texas Hold'em</span>
              <p className="game-desc">
                Juega Poker, hasta el último dólar:
                <br />
                <br />
                Consigue la mejor mano de cinco cartas y gánale a tus oponentes.
                Si pierdes y te quedas pobre recuerda, siempre tendrás tu otro
                riñón.
              </p>
            </div>
          </section>
        </a>

        {/* Slots */}
        <a href="#" className="game-card-link">
          <section className="game-card">
            <img
              src="src/assets/imgs/slots.png"
              alt="Slots"
              className="game-img"
            />
            <div className="game-info">
              <h2>Slots</h2>
              <span className="game-subtitle">777</span>
              <p className="game-desc">
                Juega a las maquinitas, ¿conseguir el triple 7?:
                <br />
                <br />
                <b>Una más, una más, esta será mi suerte</b>, recuerda revisar
                bajo el sillón antes de venir, cada moneda cuenta.
              </p>
            </div>
          </section>
        </a>

        {/* Imágenes decorativas */}
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
      <Footer></Footer>
    </>
  );
}

export default App;
