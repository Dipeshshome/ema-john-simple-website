import React from 'react';
import '../ReviewItem/ReviewItem.css'

const ReviewItem = (props) => {
    const {name, img, quantity, key, price} = props.pd;
    const reviewItemStyle={
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'100px',
        display:'flex'
    };
    return (


<div style={reviewItemStyle} className="review-item">
<div >
    <img src={img} alt="" />
</div>
<div className="cart-name">
    <h4 >{name}</h4>
    <p>Quantity: {quantity}</p>
    <p><small>$ {price*quantity}</small></p>
    <br/>
            <button 
                className="cart-button"
                onClick={() => props.removeProduct(key)}
            >Remove </button>
</div>
</div>
    );
};


export default ReviewItem;

