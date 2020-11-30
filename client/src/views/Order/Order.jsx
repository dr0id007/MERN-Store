import React , {useState} from 'react'
import { createOrder , processOrder } from '../../api/payment'
import {useSelector , useDispatch} from 'react-redux'
import styled from 'styled-components'
import Product from './Product'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Order = (props) => {

    const user = useSelector(state => state.user)
    const products = useSelector(state => state.order.products)

    const handleClick = async() => {
        let amount = 100;
        let currency = "INR"
        const order = await createOrder({ amount , currency });
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
        <Wrapper>
          <Head><U>Confirm Your Order</U></Head>
          <Heading>
            <Text>Name</Text>
            <div style={{display: 'flex' ,justifyContent: 'space-between' , width: '20%' }}>
            <Text>Price</Text>
            <Text>Quantity</Text>
            </div>
          </Heading>
          <Hr />

          {products.length === 0 ? 
            <>
            <Head>Cart is empty , continue shopping <i className="fas fa-star"></i></Head> 
            <Button style={{marginTop: "20px" , display: 'float' , float: 'right'}}><NavLink to={'/'}>Continue Shopping</NavLink></Button>
            </>
          :  <>
            {products.map((product , index) => {
                return <Product data={product} key={index} />
            })}
            <div style={{width: "90%" , marginTop: "20px"}}>
            <PayBtn onClick={handleClick} >Confim </PayBtn>
            </div>
            </>
          }
        </Wrapper>
    )
}

const Wrapper = styled.section`
  width 80%;
  margin: auto;
  margin-top: 5%;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: auto;
`;
const Text = styled.div`
  font-size: 20px;
  font-weight: light;
`;

const Head = styled.p`
  font-size: 24px;
  text-align: center;
  font-weight: lighter;
`;

const U = styled.u` 
  text-decoration: none;
  border-bottom: 1px solid black;
`;

const Hr = styled.hr`
    width: 90%;
`;

const PayBtn = styled.button`
  display: float;
  float: right;
  text-align: center;
  padding: 10px 40px;
  border-radius: 5px;
  box-shadow: 0 1px #e6e5ea;
  margin: 1em;
  // margin-right: 2em;
`;


export default Order
