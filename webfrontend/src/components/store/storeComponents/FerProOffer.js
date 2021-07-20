import React from 'react';
import {useCart} from 'react-use-cart';

const FerProOffer= (props) =>{

    const {addItem} = useCart();

    return(              
        <div className = "fer-product-container">
            <div className="fer-product-avatar">
                <img src={props.ferProImage}></img>
            </div>
            <div className="fer-product-description">
                <h6>{props.ferName}</h6>
                <div className="rating">
                    <div className="clip-star"></div>
                    <div className="clip-star"></div>
                    <div className="clip-star"></div>
                    <div className="clip-star"></div>
                    <div className="clip-star"></div>
                </div>
                <div className="fer-price">
                    <div className="offer-price-text">
                        <h6>Rs. {props.ferPrice}.00 <i className="fas fa-tag"></i></h6>
                        <div className="offer-nor-price">
                            <h6>Rs. {props.ferOfferPrice}.00 <i className="fas fa-tag"></i></h6>
                        </div>
                    </div>
                    <button onClick={() => addItem(props.item)}>Add<i className="fas fa-cart-arrow-down"></i></button>
                </div>
            </div>
        </div>
    );
}
            
export default FerProOffer;