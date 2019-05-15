import React from "react";
import "./header.css";
import logo from "../../../src/assets/logo.png";
import conactus from "../../../src/assets/conactus.png";


function Header() {
  return (
    <div className="header">
      <a href="/home">
        <img src={logo} className="logo" alt="logo" />
      </a>
      <a href="/home">
        <img src={conactus} className="conactus" alt="conactus" />
      </a>
      <ul>
          <li>Learn and Play</li>
          <li>Контакты</li>
          <li>тел +380638514392</li>
          <li>email: strelnikovalinka@gmail.com</li>
          <li>skype: bla-bla-bla</li>
      </ul>
    </div>
  );
}

export default Header;
