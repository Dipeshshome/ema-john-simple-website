import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {img, name, seller, price, stock, key} = props.product;
    console.log(props);
 
    return (
        <div className="product">
            <div className="">
                <img src={props.product.img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock</small></p>
                { props.showAddToCart && <button onClick={() => props.addProduct(props.product)} className="cart-button"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;