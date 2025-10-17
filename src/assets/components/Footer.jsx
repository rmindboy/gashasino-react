import React from "react";
import "../css/Footer.css";

function Header() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <div>
            <span>Quienes somos</span>
            <span>Trabaja con nosotros</span>
          </div>
          <div>
            <span>Anúnciate en nuestra página</span>
            <span>Nuestros anunciantes</span>
          </div>
          <div>
            <span>Blog</span>
            <span>Developers</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Header;