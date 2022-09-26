import React, { useCallback, useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../cart/cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
           
        })
    },[])


    useEffect(()=>{
        //console.log('local storage first line')
        const storedCard = getStoreCart();
        const savedCart = [];
        for (const id in storedCard) {
           const addedProduct = products.find(product => product.id === id );
          if(addedProduct){
            const quantity = storedCard[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
          }
        }
        setCart(savedCart)
        //console.log('local storage finished')
    },[products])

    const handleAddToCart = (selectedProduct) =>{
        
        let newCart = []
        const exists = cart.find(product => product.id === selectedProduct.id)
        if(!exists){
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }
        else{
           const rest = cart.find(product => product.id !== selectedProduct.id)
           exists.quantity = exists.quantity + 1;
           newCart = [...rest, exists]
        }
       
       setCart(newCart);
       addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product =><Product
                         key = {product.id}
                          product = {product}
                          handleAddToCart = {handleAddToCart}>
                          </Product> )
                }
            </div>


            <div className="cart-container">
               <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;