import React from "react";
import "./Header.css";
import logo from "../../assets/img/logoAT.png";

const Header = () => {
  return (
    <header>
      <a href="">
        <img src={logo} alt="logo" />
      </a>

      <div class="cabecera">
        <ul>
          <li class="inf-item">
            <a class="documents" href="#">Documentos</a>
          </li>
          <li class="inf-item">
            <a class="item" href="#">Nosotros</a>
          </li>
          <li class="inf-item">
            <a class="item" href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
