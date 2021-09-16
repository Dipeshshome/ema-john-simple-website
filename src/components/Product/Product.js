import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    console.log(props);
    const { img, name } = props.product;
    return (
        <div className="product">
            <div className="">
                <img src={props.product.img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{props.product.name}</h4>
                <br />
                <p><small>by: {props.product.seller}</small></p>
                <p>${props.product.price}</p>
                <p><small>Only {props.product.stock} left in stock</small></p>
                <button onClick={()=>{props.handleAddProduct(props.product)}} className="cart-button"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;