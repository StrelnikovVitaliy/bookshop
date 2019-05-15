import React, { Component } from 'react';

import './item.css';

export default class Item extends Component {
    render() {
        // const{id, title, desc, price, photo} = this.proto;
        return (
            <div className="card border-warning mb-3">
                <div className="card-header">{this.props.category}</div>
                <div className="card-body">
                    <img src={this.props.photo} className="template" alt={this.props.title}/>
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">{this.props.desc}</p>
                    <p className="card-text">UAH {this.props.price}</p>
                </div>
            </div>
        )
    }
}