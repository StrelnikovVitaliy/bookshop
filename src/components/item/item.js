import React, { Component } from 'react';

import './item.css';

export default class Item extends Component {
    render() {
        const{id, title, desc, price, photo, category, addToCart} = this.props;
        return (
            <div className="card border-warning mb-3">
                <div className="card-header">{category}</div>
                <div className="card-body">
                    <img src={photo} className="template" alt={title}/>
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{desc}</p>
                    <p className="card-text">UAH {price}</p>
                    <button className="add-button" onClick={() => addToCart(id)}>Add to cart!</button>
                </div>
            </div>
        )
    }
}