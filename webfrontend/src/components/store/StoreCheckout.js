import React, { useState, useEffect } from 'react';
import "./Store.css";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import DiliveryDistrict from './storeComponents/DiliveryDistrict';
    

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

    const [shpaybtn,showPaymentGateway] = useState([]);
    const showPaybtn = (event)=>{
       // console.log(event.target.value)
       showPaymentGateway(event.target.value);
    };

    const [quickchrg,quickCharged] = useState([]);
    const quickCharge = (event) =>{
         quickCharged(event.target.value);
    };

    const [dilivronw, dilchargeOnweight] = useState([]);
    const diliverCharge = (event) =>{

        function isDistrict(district) {
            return district.dis === event.target.value;
        }

        const distance = DiliveryDistrict.districtdata.find(isDistrict);
        console.log((distance.distance)*10);
        dilchargeOnweight((items.reduce((a,v) =>  a = a + (v.quantity*v.weight*10) , 0 ))+((distance.distance)*10));
    }

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
                <button>Check out  </button>
            </div>

            <div className="Store-fer-cart-container">
                <div className  = "StoreferCartsuccess">
                    <div className="checkout-input"> 
                        <label>Your contact number</label><br/>
                        <input type="text" placeholder="+94 7XXXXXXXX"></input>
                    </div>
                    <br/>

                    <div className="checkout-input">   
                        <label>Receiver's Name</label><br/>
                        <input type="text" placeholder="Type here..."></input>
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

                            <select name="district" placeholder="District" id="district" onChange={diliverCharge}>
                                {DiliveryDistrict.districtdata.map((data) =>{
                                       return(
                                        <option value={data.dis}>{data.dis}</option>
                                        )
                                    })}
                            </select>
                        </div>
                    </div>
                    <br/>

                    <div className="checkout-input-location">
                        <label>Share your location, to diliver to your door step</label>
                        <button>Share</button>
                    </div>
                    <br/>
                    <hr/>
                    
                    <label for="quickflag">Quick diliveries arrives whithin 24 hours to your door step.</label>
                    <div className = "store-payment-method">
                        <div>
                            <input type="radio" name="quickflag" value="0" onChange={quickCharge}/><label for="quickflag" checked> Normal delivery</label>
                        </div>
                        <div>
                            <input type="radio" name="quickflag" value="1" onChange={quickCharge}/><label for="quickflag"> Quick dilivery</label>
                        </div>
                    </div>      
                    
                    <br/>
                    <hr/>
                    
                    <label>Payment Method</label>
                    <div className="store-payment-block">
                        <div className = "store-payment-method">
                            <div>
                                <input type="radio" name="payment-type" value="online" onChange={showPaybtn}/><label for="payment-type"> Online payment</label>
                            </div>
                            <div>
                                <input type="radio" name="payment-type" value="cash" onChange={showPaybtn}/><label for="payment-type"> Cash on delivery</label>
                            </div>
                        </div>

                        {shpaybtn == 'online'?(<div className="payhere-button"><button className="payhere-style-text"><p style={{color:"white"}}>Pay</p><p style={{color:"#fcac00"}}>Here</p></button></div>):('')}
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
                            <h5>Sub Total - {totalItems} item(s):</h5>
                            <h5>Rs. {cartTotal}</h5>
                        </div>
                        <hr/>
                        <div className="cart-success-line">
                                <h5>Dilivery charge:</h5>
                                {quickchrg==1?(<h5>Rs.{dilivronw*2}</h5>):(<h5>Rs.{dilivronw}</h5>)}
                        </div>
                        <hr/>
                        
                        <div className="cart-success-line">
                                <h5>Sub total:</h5>
                                {quickchrg==1?(<h5>Rs.{cartTotal+(dilivronw*2)}</h5>):(<h5>Rs.{cartTotal+(dilivronw)}</h5>)}
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