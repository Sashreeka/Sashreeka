import React, { useState, useEffect } from 'react';
import "./Store.css";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import DiliveryDistrict from './storeComponents/DiliveryDistrict';
import GeoLocation from './storeComponents/GeoLocation'

const StoreCheckout = () => {

    //shopping cart
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

    //payment gateway button control
    const [shpaybtn,showPaymentGateway] = useState([]);
    const showPaybtn = (event)=>{
       showPaymentGateway(event.target.value);
       setPayment(event.target.value);
    };

    //quick delivery status
    const [quickchrg,quickCharged] = useState([]);
    const quickCharge = (event) =>{
        quickCharged(event.target.value);
        setQuick(event.target.value);
        if(event.target.value == 1){
            setCharge(dilivronw*3);
        }
        else{
            setCharge(dilivronw);
        }

        setAmount(cartTotal+dilivercharge-loyaltyminus);
    };

    //calculate dilivery charge
    const [dilivronw, dilchargeOnweight] = useState([]);
    const diliverCharge = (event) =>{

        function isDistrict(district) {
            return district.dis === event.target.value;
        }

        const distance = DiliveryDistrict.districtdata.find(isDistrict);
        dilchargeOnweight((items.reduce((a,v) =>  a = a + (v.quantity*v.weight*10) , 0 ))+((distance.distance)*10));
        
        setDistrict(event.target.value);
        setAmount(cartTotal+dilivercharge-loyaltyminus);
    }

    //redeem loyalty points
    const [loyaltyminus, setRedeem] = useState([]);
    const redeemAmount = (event) => {
        setRedeem(event.target.value);
        setLoyalty(maxloyal-(event.target.value)+(Math.round(cartTotal/100)))

        setAmount(cartTotal+dilivercharge-loyaltyminus);
    }

    //render data from local storage
    const [maxloyal, setLoyal]=useState([]); 
    useEffect(() => {
        setLoyal(localStorage.loyaltyPoints);
        setFarmer(localStorage.phoneNumber);
    },[])

    //share location
   /*  const location = GeoLocation();

    const setLocation = (event) => {
        console.log(location);
        console.log(location);
    } */
    const [location,setLocation] = useState({
        loaded:false,
        coordinates:{lat:"", lng:""}
    });

    const onSuccess = location => {
        setLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude,
        });

        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
    };

    const onError = error => {
        setLocation({
            loaded: true,
            error,
        });
    }

    const shareLocation = (event) =>{
        if(!("geolocation" in navigator)){
            onError({
                code:0,
                message: "Geolacation not supported",
            });
        }
        
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };
    

    // Data segments to be written to the backend
    const [farmernumber, setFarmer] = useState([]);
    const [receivernumber,setPhonenumber] = useState("");
    const [receivername,setRecname] = useState("");
    const [housenumber,setHousenumber] = useState("");
    const [streetname,setStreetname] = useState("");
    const [city,setCity] = useState("");
    const [quickflag, setQuick]= useState("");
    const [dilivercharge, setCharge]= useState("");
    const [paymenttype, setPayment]= useState("");
    const [loyaltyratio, setLoyalty]=useState("");
    const [amount, setAmount] = useState("");
    const [district, setDistrict]= useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    

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
                        <label>Receiver's contact number</label><br/>
                        <input type="text" name="phonenumber" onChange={(e)=>{setPhonenumber(e.target.value)}} placeholder="+94 7XXXXXXXX"></input>
                    </div>
                    <br/>

                    <div className="checkout-input">   
                        <label>Receiver's Name</label><br/>
                        <input type="text" name="name" onChange={(e)=>{setRecname(e.target.value)}} placeholder="Type here..."></input>
                    </div>
                    <br/>

                    <div className="checkout-input-address">
                        <label>Address</label><br/>
                        <div className="checkout-input-address-block">
                            <input placeholder="House number" name="house_number" onChange={(e)=>{setHousenumber(e.target.value)}}></input>
                            <input placeholder="Street name" name="street_name" onChange={(e)=>{setStreetname(e.target.value)}}></input>
                        </div>
                        <div className="checkout-input-address-block">
                            <input placeholder="City" name="city" onChange={(e)=> setCity(e.target.value)}></input>

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
                        <label>
                            Share your location, to diliver to your door step
                            <br/>
                            (if your current location is the delivery address)
                        </label>
                        <button onClick={shareLocation}>
                            Share
                        </button>
                    </div>
                    <br/>
                    {latitude!=0?(<p className="success-location">location has successfully shared</p>):('')}
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
                        <input type="number" min="0" max={maxloyal} placeholder="0" onChange={redeemAmount}></input>
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
                        <div className="cart-success-line">
                                    <h6>Redeemed loyalty ammout:</h6>
                                    <h6>{loyaltyminus}</h6>
                        </div>
                        <hr/>
                        
                        <div className="cart-success-line">
                                <h5>Sub total:</h5>
                                {quickchrg==1?  (<h5>Rs.{cartTotal+(dilivronw*2)-loyaltyminus}</h5>):
                                                (<h5>Rs.{cartTotal+(dilivronw)-loyaltyminus}</h5>)}
                        </div>

                        <div className="store-checkout-bottom-cart-line">
                            <button>Confirm Order</button>
                        </div>
                    </div>
                
                    
                </div>
            </div>
        </>
    );
};

export default StoreCheckout;