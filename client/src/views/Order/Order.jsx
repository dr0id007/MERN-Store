import React, { useState, useEffect } from 'react'
import { createOrder, processOrder } from '../../api/payment'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Product from './Product'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Loader from '../../components/Loader/loader'

const Order = (props) => {
	const state = useSelector((state) => state)
	const user = useSelector((state) => state.auth.user)
	const products = useSelector((state) => state.order.products)
	const [loading, setLoading] = useState(true)
	const [amount, setAmount] = useState(0)
	const [quantity, setQuantity] = useState(0)

	const handleAmount = async () => {
		let amount = 0
		let quantity = 0
		await products.map((product, index) => {
			console.log('pro:', product)
			amount = amount + parseInt(product.price)
			quantity = quantity + parseInt(product.quantity)
		})
		amount *= 100
		setAmount(amount)
		setQuantity(quantity)
	}

	useEffect(() => {
		if (props.auth) {
			setLoading(false)
			handleAmount()
			console.log(user._id)
		}
	}, [state])

	const handleClick = async () => {
		let currency = 'INR'
		console.log(amount, quantity)

		const order = await createOrder({ amount, currency })
		const creationId = order.id

		console.log('user:', user._id)

		var options = {
			key_id: process.env.REACT_APP_KEY_ID,
			amount: 123,
			currency: currency,
			name: 'test',
			description: 'Booking Request amount for ',
			image: 'https://example.com/your_logo',
			order_id: creationId,
			handler: async function (response) {
				const data = {
					orderCreationId: creationId,
					paymentId: response.razorpay_payment_id,
					orderId: response.razorpay_order_id,
					signature: response.razorpay_signature,
					userId: user._id,
					amount
				}
				const result = await processOrder(data)
				console.log('res', result)
				// alert(result.msg);
			},
			prefill: {
				name: user.name,
				email: user.email,
				contact: 9999999999
			},
			notes: {
				address: 'note value'
			},
			theme: {
				color: '#FFFF00'
			}
		}

		let rzp = new window.Razorpay(options)
		rzp.open()
	}

	if (props.auth === false) {
		return 'login to continue'
	}

	if (loading) {
		return <Loader />
	}

	return (
		<Wrapper>
			<Head>
				<U>Confirm Your Order</U>
			</Head>
			<Heading>
				<Text>Name</Text>
				<HeadWrapper style={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
					<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
						<Text>Price</Text>
						<Text style={{ marginLeft: '-20px' }}>Quantity</Text>
						<Text> </Text>
					</div>
				</HeadWrapper>
			</Heading>
			<Hr />

			{products.length === 0 ? (
				<>
					<Head>
						Cart is empty , continue shopping <i className='fas fa-star'></i>
					</Head>
					<Button>
						<NavLink to={'/'}>Continue Shopping</NavLink>
					</Button>
				</>
			) : (
				<>
					{products.map((product, index) => {
						return <Product data={product} key={index} />
					})}
					<Heading>
						<Text>Total</Text>
						<div style={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
							<Price>$ {(amount / 100).toFixed(2)}</Price>
						</div>
					</Heading>
					<div style={{ width: '90%', marginTop: '20px' }}>
						<PayBtn onClick={handleClick}>Confim </PayBtn>
					</div>
				</>
			)}
		</Wrapper>
	)
}

const Wrapper = styled.section`
  width 80%;
  margin: auto;
  margin-top: 5%;
`

const HeadWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 25%;
	margin-left: auto;
`

const Heading = styled.div`
	display: flex;
	justify-content: space-between;
	width: 85%;
	margin: auto;
`
const Text = styled.div`
	font-size: 20px;
	font-weight: light;
`
const Price = styled.p`
	font-weight: bold;
	// display: flex;
	// justify-content: space-between;
	width: 85%;
	margin: auto;
`

const Head = styled.p`
	font-size: 24px;
	text-align: center;
	font-weight: lighter;
`

const U = styled.u`
	text-decoration: none;
	border-bottom: 1px solid black;
`

const Hr = styled.hr`
	width: 90%;
`

const PayBtn = styled.button`
	display: float;
	float: right;
	text-align: center;
	padding: 10px 40px;
	border-radius: 5px;
	box-shadow: 0 1px #e6e5ea;
	margin: 1em;
	// margin-right: 2em;
`

export default Order
