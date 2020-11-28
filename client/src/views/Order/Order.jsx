import React from 'react'
import axios from 'axios'

const Order = () => {

    const handleClick = () => {

        var options = {
            "key_id": 'rzp_test_fCu8x5wS9kGoii',
            "amount": 5000, 
            "currency": "INR",
            "name": "test",
            "description": "Booking Request amount for ",
            "image": "https://example.com/your_logo",
            "order_id": 'order_G6UAnR7pl3G0nh',
            handler: async function (response) {
                const data = {
                    orderCreationId: 'order_G6UAnR7pl3G0nh',
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post("http://localhost:5000/api/payment/success", data);

                alert(result.data.msg);
            },
            "prefill": {
            //   "name": this.state.guest.name,
            //   "email": this.state.guest.email,
            //   "contact": this.state.guest.phone,
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

    return (
        <div>
            <button onClick={handleClick} >Pay</button>
        </div>
    )
}

export default Order
