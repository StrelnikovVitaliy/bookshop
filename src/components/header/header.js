import React, { Component } from "react";
import "./header.css";
import logo from "../../../src/assets/logo.png";
import ShopingCart from '../shoping-cart/'
import conactus from "../../../src/assets/conactus.png";


class Header extends Component {
  state = {
    visible: false
  }
  toggleVisible() {
    this.setState({ visible: !this.state.visible })
  }
  render() {
    const { cart, removeFromCart } = this.props;
    const { visible } = this.state;

    return (
      <div className="header">
        <a href="/home">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <div className="shoping-cart-container">
          <ShopingCart cart={cart} removeFromCart={removeFromCart} />
        </div>

        <div className="conactus">
          <button className="conactus-button" onClick={this.toggleVisible.bind(this)}><img src={conactus} className="conactus-img" alt="conactus" /></button>
          <div className={visible ? "conactus-social show" : "conactus-social hide"}>

            <a title="Позвонить" href="tel:+380636771485">+380636771485</a>
            <a href={"mailto: strelnikovalinka@gmail.com"}>Email: <i class="fab fa-google"></i></a>
            <a href="https://www.instagram.com/learn._.play/" rel="noopener noreferrer" target="_blank">Instagram: <i class="fab fa-instagram"></i></a>

          </div>
        </div>

        <div className="social">
          <ul>
            <li><a title="Позвонить" href="tel:+380636771485">+380636771485</a></li>
            <li><a href={"mailto: strelnikovalinka@gmail.com"}>Email: <i class="fab fa-google"></i></a></li>
            <li><a href="https://www.instagram.com/learn._.play/" rel="noopener noreferrer" target="_blank">Instagram: <i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
