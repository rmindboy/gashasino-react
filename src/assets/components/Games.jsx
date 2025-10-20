import "../css/Games.css";

export function GamesCard({ href, img, alt, title, subtitle, children }) {
  return (
    <button className="games-card" onClick={href}>
        <img src={img} alt={alt} className="games-img" />
        <div className="games-info">
          <h2>{title}</h2>
          <span className="games-subtitle">{subtitle}</span>
          <p className="games-desc">{children}</p>
        </div>
      </button>
  );
}

export function Games(){
return (
    <main className="main-menu">
      <h1 className="main-title">Todos los Juegos</h1>

      <GamesCard
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
      </GamesCard>

    </main>
  );
}

export default Games;