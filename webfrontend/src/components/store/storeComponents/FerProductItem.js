import React, {useEffect} from 'react';
import {useCart} from 'react-use-cart';



const FerProductItem = (props) => {
    
    let userCategory; 
    useEffect(() => {
        userCategory = localStorage.getItem('userCategory');
        console.log(userCategory)
    })

    const {addItem} = useCart();
    
    return(              
        <div className = "fer-product-container">
            <div className="fer-product-avatar">
                <img src={props.ferProImage}></img>
            </div>
            <div className="fer-product-description">
                <h6>{props.ferName}</h6>
               {/*  <div className="rating">
                    <div className="clip-star"></div>
                    <div className="clip-star"></div>
                    <div className="clip-star"></div>
                    <div className="clip-star"></div>
                    <div className="clip-star"></div>
                </div> */}
                <div className="fer-price">
                    <h6>Rs. {props.ferPrice}.00 <i className="fas fa-tag"></i></h6>
                    {
                            userCategory !== null? (<button onClick={() => addItem(props.item)} >Add<i className="fas fa-cart-arrow-down"></i></button>):
                            <button onClick = {()=>{
                                window.location.href = '/signin'
                            }} >  Add<i className="fas fa-cart-arrow-down"></i></button>
                        
                    }
                </div>
            </div>
        </div>
    );
}
            
export default FerProductItem;