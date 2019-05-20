import React, { Component } from 'react';
import './shoping-cart.css';
import Dropdown from 'react-bootstrap/Dropdown';
import ShoppingCartIcon from '../../assets/shopping-cart.png'


class ShopingCart extends Component {
    getItemList = () => {
        const { cart, removeFromCart } = this.props;
        if (cart.length === 0)
            return <div className="cart-text-conatiner">Ваша корзина порожня</div>;

        return cart.map((product, index) => (
            <div key={index}>
                <div>
                    <div>
                        <div>
                            <img
                                src={product.photo}
                                alt={product.title}
                                className="cart-product-image"
                            />
                        </div>
                        <div>{product.title}</div>
                    </div>
                    <div className="product-item-footer">
                        <div className="price">
                            ${product.price}
                        </div>
                        <button href="#" onClick={() => removeFromCart(product.id)}>x</button>
                    </div>
                </div>
            </div>
        ));

    }
    getTotal = () => {
        const { cart } = this.props;

        return cart.reduce((acc, v) => acc + v.price, 0);
    };
    render() {
        const { cart } = this.props;
        return (
            <div>
                <span className="shopping-cart-counter">
                    {cart.length ? cart.length : ""}
                </span>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <img src={ShoppingCartIcon} className="cart-image" alt="Shopping Cart" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <div className="shopping-cart-body">
                            {this.getItemList()}
                            {cart.length ? (
                                <div className="total-price">
                                    <h3>Total:</h3>
                                    <h4>${this.getTotal()}</h4>
                                </div>
                            ) : null}
                        </div>
                    </Dropdown.Menu>
                </Dropdown>

            </div>

        );
    }
}
export default ShopingCart;