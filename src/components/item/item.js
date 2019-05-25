import React, { Component } from 'react';
import { Player } from 'video-react';
import hide from "../../assets/hide.png";
import show from "../../assets/show.png";




import './item.css';

export default class Item extends Component {
    state = {
        visible: false
    }
    toggleVisible() {
        this.setState( { visible: !this.state.visible } )
        console.log('I was clicked');
    }
    render() {
        const { id, title, desc, price, photo, format, category, addToCart } = this.props;
        const {visible} = this.state;

        return (
            <div className="card border-warning mb-3">
                <div className="card-header">{category}</div>
                <div className="card-body">
                    {(format === '.mp4') ? (<Player playsInline src={photo + format} />) : (<img src={photo + format} className="template" alt={title} />)}
                    <h4 className="card-title">{title}</h4>
                    {(desc.length < 130) ? (<p className="card-text">{desc}</p>) : (<React.Fragment><p className={visible ? "card-text show" : "card-text hidden"}>{desc}</p><button className="toggle-button" onClick={this.toggleVisible.bind(this)}><img src={visible ? show : hide} alt="toggle-visible" className="toggle-image"></img></button></React.Fragment>)}

                    <p className="card-price">UAH {price}</p>
                    <button className="add-button" onClick={() => addToCart(id)}>Add to cart!</button>
                </div>
            </div>
        )
    }
}