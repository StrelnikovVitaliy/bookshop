import React, { Component } from 'react';
import Item from '../item';
import './item-list.css';


class ItemList extends Component {

    getItemList = () => {
        const { products, cart, addToCart } = this.props;

        if (products.length === 0)
            return <div className="text-center w-100">Перевiрте критерii пошуку</div>;

        return products.map((product, index) => (
            <Item
                category={product.category}
                title={product.title}
                photo={product.photo}
                format={product.format}
                desc={product.desc}
                id={product.id}
                key={index}
                price={product.price}
                cart={cart}
                addToCart={addToCart}
            />
        ));

    };
    render() {
        return (
            <div className="itemlist">
                {this.getItemList()}
            </div>

        )
    }
}

export default ItemList;