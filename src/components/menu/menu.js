import React, { Component } from 'react';

import './menu.css';


class Menu extends Component {
    
    render() {

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="/"
                    onClick={e=>{e.preventDefault()}}>Learn and Play</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Додому<span className="sr-only">(current)</span></a>
                            </li> 
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="1"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="true"
                                >Книги</a>
                                <div
                                    className="dropdown-menu"
                                    x-placement="bottom-start"
                                    style={{
                                        position: 'absolute',
                                        willChange: 'transform',
                                        top: '0px',
                                        left: '0px',
                                        transform: 'translate3d(0px, 40px, 0px)'
                                    }}>
                                    <a
                                        className="dropdown-item"
                                        href="1"
                                        onClick={this.props.bookLaminated}>Ламіновані</a>
                                    <a
                                        className="dropdown-item"
                                        href="2"
                                        onClick={this.props.bookFabric}>З тканини</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="3"
                                    onClick={this.props.getGame}>Ігри</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle "
                                    href="1"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="true"
                                >Сторінки</a>
                                <div
                                    className="dropdown-menu"
                                    x-placement="bottom-start"
                                    id="pages"
                                    style={{
                                        position: 'absolute',
                                        willChange: 'transform',
                                        top: '0px',
                                        left: '0px',
                                        transform: 'translate3d(0px, 40px, 0px)'
                                    }}>
                                    <a
                                        className="dropdown-item"
                                        href="1"
                                        onClick={this.props.pageLaminated}>Ламіновані</a>
                                    <a
                                        className="dropdown-item"
                                        href="2"
                                        onClick={this.props.pageFabric}>З тканини</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="3">Доставка и оплата</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="text"
                                placeholder="Пошук"
                                onChange={this.props.handleSearch} />
                        </form>
                    </div>

                </nav>
            </div>
        );

    }
}

export default Menu;
