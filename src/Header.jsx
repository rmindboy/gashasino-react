import React from "react";
import './assets/css/Header.css';

function Header(){
    return(
        <>
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
          <a href="Register.html" className="register">
            Registrarse
          </a>
        </div>
      </header>
        </>
    )
}

export default Header;