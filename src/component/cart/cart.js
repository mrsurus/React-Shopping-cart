import React from 'react';
import './cart.css'

const Cart = (props) => {
    const {cart} = props
    
    let total = 0;
    let shipping = 0;
    let quantity = 0;
  for(const product of cart){
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping
        quantity = quantity + product.quantity ;
    } 

    const tax= parseFloat(total * .1) 
    return (
        <div className='cart'>
             <h4>Order Summary</h4>
            <h2>Selected Item: {quantity}</h2> 
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>

            <h3>Grand Total: {total + shipping + tax}</h3>
        </div>
    );
};

export default Cart;