import "../css/Games.css";
import '../css/MainCards.css'

export function GamesCard({ onClick, img, alt, title, subtitle, children }) {
  return (
    <button className="games-card" onClick={onClick}>
        <img src={img} alt={alt} className="games-img" />
        <div className="games-info">
          <h2>{title}</h2>
          <span className="games-subtitle">{subtitle}</span>
          <p className="games-desc">{children}</p>
        </div>
      </button>
  );
}

export function Games({onBlackjackClick}){
return (
    <main className="main-menu">
      <h1 className="main-title">Todos los Juegos</h1>

      <div className="games-grid">
        <GamesCard
          onClick={onBlackjackClick}
          img="public/blackjack.png"
          alt="BlackJack"
          title="BlackJack"
          subtitle="21"
        >
          Juega BlackJack, aunque ahora mejor que nunca:
          <br />
          <br />
          Consigue 21 o menos en la suma de tus cartas y gánale al malvado
          dealer de BlackJack, así recupera la colegiatura de tus hijos.
        </GamesCard>

        <GamesCard
          img="public/poker.png"
          alt="Poker"
          title="Poker"
          subtitle="Texas Hold'em"
        >
          Juega Poker, hasta el último dólar:
          <br />
          <br />
          Consigue la mejor mano de cinco cartas y gánale a tus oponentes.
        </GamesCard>

        <GamesCard
          img="public/slots.png"
          alt="Slots"
          title="Slots"
          subtitle="777"
        >
          Juega a las maquinitas, ¿conseguiras el triple 7?:
          <br />
          <br />
          <b>Una más, una más, esta será mi suerte</b>, recuerda revisar bajo el
          sillón antes de venir, cada moneda cuenta.
        </GamesCard>
      </div>

    </main>
  );
}

export default Games;