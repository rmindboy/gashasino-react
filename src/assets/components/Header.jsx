import React from "react";
import '../css/Header.css';

function Header({ onRegisterClick }) {
  return (
    <header>
      <a href="mainmenu.html" className="logo">
        Ga$ha$ino
      </a>

      <nav>
        <ul>
          <a href="juegos.html" className="juego-btn">
            <li>Juegos</li>
          </a>
          <li>Aspectos</li>
          <li>Comunidad</li>
          <li>Tienda</li>
          <li>Gachapon</li>
        </ul>
      </nav>

      <div className="auth-buttons">
        <button className="login">iniciar sesión</button>
        <button onClick={onRegisterClick}>Register</button>
      </div>
    </header>
  )
}

export default Header;