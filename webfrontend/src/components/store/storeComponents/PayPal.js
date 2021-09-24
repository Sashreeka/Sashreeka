import React, { useRef, useEffect, useState} from 'react'
import axios from 'axios';

const PayPal= (props) =>{

    const submitOrder = () => {
        axios.post('http://localhost:4000/placeOrder',{
            amount: props.amount,
            houseNumber: props.houseNumber,
            streetName: props.streetName,
            city: props.city,
            district: props.district,
            quickFlag: props.quickFlag,
            receiverName: props.receiverName,
            deliveryCharge: props.deliveryCharge,
            farmerPhoneNumber: props.farmerPhoneNumber,
            latitude: props.latitude,
            longitude: props.longitude,
            receiverNumber: props.receiverNumber,

            orderCfertilizer: props.orderCfertilizer,
            
            paymentType: props. paymentType,
            transactionStatus: props.transactionStatus,

            loyaltyPoints: props.loyaltyPoints,
        }).then(alert("Order placed successfully")
        )
    };

    const paypal = useRef()

    const [success, setStatus] = useState([]);

    useEffect(()=>{
        window.paypal.Buttons({
            createOrder: (data, actions,err) => {
                return actions.order.create({
                    intent:"CAPTURE",
                    purchase_units: [
                        {
                            description: "Organic Fertilizer",
                            amount:{
                                currency_code: "USD",
                                value: props.amount
                            }
                        }
                    ]
                })
            },
            onApprove: async (data,actions) => {
                const order = await actions.order.capture();
                setStatus(order.status);
            },
            onError: (err) =>{
                console.log(err)
                setStatus(0);
            }
        })
        .render(paypal.current)
    },[])
    return (
        <div>
            <div ref={paypal}></div>
            {success == 'COMPLETED'?(<><p className="success-location">Payment successfull</p><button  onClick={submitOrder}>Confirm Order</button></>):('')}
        </div>
        
    )
}

export default PayPal;
