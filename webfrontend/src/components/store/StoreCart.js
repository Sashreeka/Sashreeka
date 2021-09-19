import React from 'react';
import "./Store.css";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const StoreCart = () => {
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

    if (isEmpty) return (
        <div className="Store-fer-cart-container">
            <div className="StoreferCart">
                <div className = "store-path">
                    <Link to="/store">
                        <button>Store</button>
                    </Link>
                    <i class="fas fa-caret-right"></i>
                    <Link to="/storecart">
                        <button>My Cart  </button>
                    </Link>
                </div>

                <div className="store-empty-cart">
                    <h3>Your Cart is empty...</h3>
                </div>
            </div>
        </div>
    ) 
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
        </div>
        <div className="Store-fer-cart-container">
            <div className="StoreferCart">
                <table>
                    <tr>
                        <th>
                            <h6>Image</h6>
                        </th>
                        <th>
                            <h6>Product Name</h6>
                        </th>
                        <th>
                            <h6>Quantity</h6>
                        </th>
                        <th>
                            <h6>Unit price</h6>
                        </th>
                        <th>
                            <h6>Total</h6>
                        </th>
                    </tr>
                    {items.map ((item,index)=>{
                        return(
                        <tr>
                            <td>
                                <img src={item.img} />
                            </td>
                            <td>
                                <h6>{item.name}</h6>
                                <p>Unit  weight: {item.weight} kg<br/>
                                Total weight: {item.quantity*item.weight} kg</p>
                            </td>
                            <td>
                                <div className="store-cart-quantity">
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} ><i class="fas fa-minus"></i></button>
                                    <div className="cart-amount-box"><h6>{item.quantity}</h6></div>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}><i class="fas fa-plus"></i></button>
                                </div>
                            </td>
                            <td>
                                {item.offer==0?(<h6>Rs. {item.price}</h6>):(<div className="fer-cart-offer-price"><h6>Rs. {item.price}</h6><p>Rs.{item.unitPrice}</p></div>)}
                            </td>
                            <td>
                                {item.offer==0?(<h6>Rs. {item.quantity * item.price}</h6>):(<h6 style={{color:"#e23a3a"}}>Rs. {item.quantity * item.price}</h6>)}   
                            </td>
                            <td>
                                <div className="store-cart-remove">
                                    <button onClick={() => removeItem(item.id)}><i class="fas fa-trash-alt"></i></button>
                                </div>
                            </td>
                        </tr>
                        )
                    })}
                </table>

                <div className="store-cart-line">
                    <h5>Sub Total - {totalItems} item(s):</h5>
                    <h5>Rs. {cartTotal}</h5>
                </div>

                <li>Dilivery Charge will be added</li>
                
                <div className="store-bottom-cart-line">
                    <div className = "store-carttwo-button">
                        <Link to="/store"> 
                            <button>Continue Shopping</button>
                        </Link>
                        <div className="store-cart-drop">
                            <button onClick={() => emptyCart()}>Drop Cart</button>
                        </div>
                    </div>
                    <Link to="/storecheckout"> 
                        <button>Proceed</button>
                    </Link>
                </div>
                
            </div>
        </div>
        </>
    );
};

export default StoreCart;