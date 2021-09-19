import React from 'react';
import "./Store.css";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const StoreCheckout = () => {
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
        <>
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

            <div className="Store-fer-cart-container">
                <div className  = "StoreferCartsuccess">
                    <div className="checkout-input"> 
                        <label>Your contact number</label><br/>
                        <input></input>
                    </div>
                    <br/>

                    <div className="checkout-input"> 
                        <label>Order Id</label><br/>
                        <input></input>
                    </div>
                    <br/>

                    <div className="checkout-input">   
                        <label>Receiver's Name</label><br/>
                        <input></input>
                    </div>
                    <br/>

                    <div className="checkout-input-address">
                        <label>Address</label><br/>
                        <div className="checkout-input-address-block">
                            <input placeholder="House number"></input>
                            <input placeholder="Street name"></input>
                        </div>
                        <div className="checkout-input-address-block">
                            <input placeholder="City"></input>
                            <input placeholder="District" list="district" name="district"/>
                                <datalist id="district">
                                    <option value="Ampara"/>
                                    <option value="Anuradhapura"/>
                                    <option value="Badulla"/>
                                    <option value="Baticaloa"/>
                                    <option value="Colombo"/>
                                    <option value="Galle"/>
                                    <option value="Gampaha"/>
                                    <option value="Hambanthota"/>
                                    <option value="Jaffana"/>
                                    <option value="Kaluthara"/>
                                    <option value="Kandy"/>
                                    <option value="Kegalle"/>
                                    <option value="Kilinochchi"/>
                                    <option value="Kurunagala"/>
                                    <option value="Mannar"/>
                                    <option value="Matale"/>
                                    <option value="Mathara"/>
                                    <option value="Moneragala"/>
                                    <option value="Mullaitivu"/>
                                    <option value="Nuwara Eliya"/>
                                    <option value="Polonnaruwa"/>
                                    <option value="Puttalama"/>
                                    <option value="Rathnapura"/>
                                    <option value="Trincomalee"/>
                                    <option value="Vavuniya"/>
                                </datalist>
                        </div>
                    </div>
                    <br/>

                    <div className="checkout-input-location">
                        <label>Share your location, to diliver to your door step</label>
                        <button>Share</button>
                    </div>
                    <br/>
                    <hr/>

                    <div className="quick-dilivery-input">
                        <label>Quick delivery</label>

                        <label class="quick-switch">
                            <input type="checkbox"/>
                            <span class="quick-slider quick-round"></span>
                        </label>
                    </div>
                    <br/>
                    <hr/>
                    
                    <label>Payment Method</label>
                    <div className = "store-payment-method">
                        <div>
                            <input type="radio" name="payment-type" value="Online payment"/><label for="payment-type"> Online payment</label>
                        </div>
                        <div>
                            <input type="radio" name="payment-type" value="Cash on delivery"/><label for="payment-type"> Cash on delivery</label>
                        </div>
                    </div>

                    <div className="checkout-input-loyalty">
                        <label>Redeem loyalty points</label>
                        <input type="number" min="0" max="10" placeholder="0"></input>
                    </div>
                </div>
                    

                <div className="StoreferCartsuccess">

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
                                    <h6>Rs. {item.quantity * item.price}</h6>
                                </div>
                                
                                )
                        })}
                        <hr/>
                        <div className="cart-success-line">
                                <h5>Dilivery charge:</h5>
                                <h5>Rs.200</h5>
                        </div>
                        <hr/>
                        
                        <div className="cart-success-line">
                                <h5>Sub total:</h5>
                                <h5>Rs.{cartTotal+200}</h5>
                        </div>

                        <div className="store-checkout-bottom-cart-line">
                            <button>Confirm Order</button>
                        </div>
                        
                    {/*  <div className="cart-sucs-msg">
                        <h2>Your Order has Successfully Placed....</h2>
                        </div> */}

                    </div>
                
                    
                </div>
            </div>
        </>
    );
};

export default StoreCheckout;