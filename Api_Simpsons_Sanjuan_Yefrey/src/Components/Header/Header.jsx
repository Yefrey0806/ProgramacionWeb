import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo-simpsons.png";

const Header = () => {
  return (
    <header>
      <a href="#">
        <img src={logo} alt="Logo Simpsons" />
      </a>

      <ul>
        <a class="documents" href="#">
          <li>Documentación</li>
        </a>

        <a href="#">
          <li>Nosotros</li>
        </a>

        <a href="#">
          <li>Contacto</li>
        </a>
      </ul>
    </header>
  );
};

export default Header;
