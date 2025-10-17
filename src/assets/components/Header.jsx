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
        <div className="nav-buttons">
          <button className="Games">
            <li>Juegos</li>
          </button>
          <button className="Skins">
          <li>Aspectos</li>
          </button>
          <button className="Community">
          <li>Comunidad</li>
          </button>
          <button className="Store">
          <li>Tienda</li>
          </button>
          <button className="Gachapon">
          <li>Gachapon</li>
          </button>
        </div>
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