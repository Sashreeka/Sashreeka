import React from 'react';

function FerProductItem(props) { 
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
                    <h6>{props.ferPrice} <i className="fas fa-tag"></i></h6>
                    <button>Add<i className="fas fa-cart-arrow-down"></i></button>
                </div>
            </div>
        </div>
    );
}
            
export default FerProductItem;