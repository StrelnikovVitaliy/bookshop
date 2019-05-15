import React, { Component } from 'react';
import Item from '../item';
import './item-list.css';

class ItemList extends Component {

    getItemList = () => {
        const { products } = this.props;

        if (products.length === 0)
            return <div className="text-center w-100">Перевiрте критерii пошуку</div>;

        return products.map((product, index) => (
            <Item
                category={product.category}
                title={product.title}
                photo={product.photo}
                desc={product.desc}
                id={product.id}
                key={index}
                price={product.price}
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