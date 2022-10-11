import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div className='cart-container'>
            <h4>Oders summary in cart</h4>
            <p>Selected Items : {cart.length}</p>
        </div>
    );
};

export default Cart;