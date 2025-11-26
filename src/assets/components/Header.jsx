import React from "react";
import '../css/Header.css';

function Header({ onMenuClick,onRegisterClick, onGamesClick, onLoginClick }) {
  return (
    <header>
      <button onClick={onMenuClick} className="logo">
        Ga$ha$ino
      </button>

      <nav>
        <ul className="nav-buttons">
          <li><button onClick={onGamesClick} className="Games">Juegos</button></li>
          <li><button className="Skins">Aspectos</button></li>
          <li><button className="Community">Comunidad</button></li>
          <li><button className="Store">Tienda</button></li>
          <li><button className="Gachapon">Gachapón</button></li>
        </ul>
      </nav>

      <div className="auth-buttons">
        <button className="login" onClick={onLoginClick}>iniciar sesión</button>
        <button onClick={onRegisterClick}>Registrarse</button>
      </div>
    </header>
  )
}

export default Header;