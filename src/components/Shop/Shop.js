import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    //console.log(fakeData);

    const first_10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first_10);
    const handleAddProduct = (product) => {
       //console.log('Product added', product);
        const newCart=[...cart,product];
        setCart(newCart);
    
    }

    const [cart,setCart]=useState([]);


    return (
        <div className="shop-container" >
            <div className="product-container">
                {
                    products.map(product => <Product
                        handleAddProduct={handleAddProduct}
                        product={product}>
                    </Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
                

            </div>

        </div>
    );
};

export default Shop;