import React from 'react';
import "./Store.css";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const StoreSuccess = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    return(

        <div className="Store-fer-cart-container">
            <div className="StoreferCartsuccess">
                <div className = "store-path">
                    <Link to="/store">
                        <button>Store</button>
                    </Link>
                    <i class="fas fa-caret-right"></i>
                    <Link to="/storecart">
                        <button>My Cart  </button>
                    </Link>
                    <i class="fas fa-caret-right"></i>
                </div>

                <div className  = "cart-success">

                    <div className="cart-success-line"><h5>Number of Items:</h5><h5>{totalItems} units</h5></div>
                    <hr/>

                    {items.map ((item,index)=>{
                        return(
                            
                            <div className="cart-success-line-inner">
                                <div className ="cart-success-inner">
                                <img src={item.img} />
                                <div className="cart-success-line-inner-inner">
                                    <h5>{item.name}</h5>
                                    <h6>{item.quantity} unit(s):</h6>
                                </div>
                                </div>
                                <h6>Rs. {item.quantity * item.price}.00</h6>
                            </div>
                            
                             )
                    })}
                    <hr></hr>
                    <div className="cart-success-line">
                            <h5>Sub total:</h5>
                            <h5>Rs.{cartTotal}.00</h5>
                    </div>
                    
                    <div className="cart-sucs-msg">
                    <h2>Your Order has Successfully Placed....</h2>
                    </div>

                </div>
            
                
            </div>
        </div>
    );
};

export default StoreSuccess;