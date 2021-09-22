import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];

            console.log(product.quantity);
            return product;

        })
        setCart(previousCart);
    },[]);

    const handleAddProduct = (product)=>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let newCart;
        let count = 1;
        
        
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity =1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

    return (
<>
         <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Product" />
            </div>
        <div className="shop-container">
            <div className="product-container">
                
                {
                    displayProducts.map(product => <Product 
                        key = {product.key}
                        showAddToCart={true} 
                        addProduct = {handleAddProduct} 
                        product={product}>
                        </Product>)
                }
            </div>
            <div className="card-container">
                <Cart cart={cart}>
                    <Link to="/review">
                         <button className='cart-button'>Review Order</button>
                    </Link>
                </Cart>
            </div>
            
        </div>
        </>
    );
};

export default Shop;