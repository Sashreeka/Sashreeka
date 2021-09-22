import React, { useRef, useEffect, useState} from 'react'

const PayPal= (props) =>{
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
                                value: props.value
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
            {success == 'COMPLETED'?(<p className="success-location">Payment successfull</p>):('')}
        </div>
        
    )
}

export default PayPal;
