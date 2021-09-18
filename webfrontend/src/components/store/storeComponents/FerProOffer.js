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
                {/* <div className="rating">
                    <div className="clip-star"></div>
                    <div className="clip-star"></div>
                    <div className="clip-star"></div>
                    <div className="clip-star"></div>
                    <div className="clip-star"></div>
                </div> */}
                <div className="fer-price">
                    <div className="offer-price-text">
                        
                        {props.ferOffer==0?(<div className="fer-price-text"><h6>Rs. {props.ferPrice} <i className="fas fa-tag"></i></h6></div>):(<div className="fer-price-text"><h6 style={{color:"#e23a3a"}}>Rs. {props.ferPrice} <i className="fas fa-tag"></i></h6></div>)}
                        {props.ferOffer==0?(''):(<div className="offer-nor-price"><h6>{props.ferOffer}% off</h6></div>)}
                    </div>
                    
                    <button onClick={() => addItem(props.item)}>Add<i className="fas fa-cart-arrow-down"></i></button>
                </div>
            </div>
        </div>
    );
}
            
export default FerProOffer;