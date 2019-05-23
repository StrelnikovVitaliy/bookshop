import React, { Component } from 'react';
import { Player } from 'video-react';


import './item.css';

export default class Item extends Component {
    render() {
        const { id, title, desc, price, photo, format, category, addToCart } = this.props;
        
        return (
            <div className="card border-warning mb-3">
                <div className="card-header">{category}</div>
                <div className="card-body">
                    {(format==='.mp4')?(<Player playsInline src={photo + format} />):(<img src={photo + format} className="template" alt={title} />)}
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{desc}</p>
                    <p className="card-text">UAH {price}</p>
                    <button className="add-button" onClick={() => addToCart(id)}>Add to cart!</button>
                </div>
            </div>
        )
    }
}