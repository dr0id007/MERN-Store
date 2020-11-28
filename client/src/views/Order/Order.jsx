import React , {useState} from 'react'
import axios from 'axios'
import { createOrder , processOrder } from '../../api/payment'
import {useSelector} from 'react-redux'

const Order = (props) => {

    const user = useSelector(state => state.user)

    const handleClick = async() => {
        let amount = 100;
        let currency = "USD"
        const order = await createOrder({ amount });
        const creationId = order.id

        var options = {
            "key_id": process.env.REACT_APP_KEY_ID,
            "amount": 1234, 
            "currency": currency,
            "name": "test",
            "description": "Booking Request amount for ",
            "image": "https://example.com/your_logo",
            "order_id": creationId,
            handler: async function (response) {
                const data = {
                    orderCreationId: creationId,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                    userId: user._id,
                    amount
                };
                const result = await processOrder(data)
                console.log("res" , result)
                // alert(result.msg);
            },
            "prefill": {
              "name": 'test',
              "email": 'test@gmail.com',
              "contact": 9999999999,
            },
            "notes": {
              "address": "note value"
            },
            "theme": {
              "color": "#FFFF00"
            }
          };

        let rzp = new window.Razorpay(options);
        rzp.open();
    }

    if(props.auth === false) {
        return 'login to continue'
    }

    return (
        <div>
            <button onClick={handleClick} >Pay</button>
        </div>
    )
}

export default Order
