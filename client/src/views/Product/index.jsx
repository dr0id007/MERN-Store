import React, { useState, useEffect } from 'react'
import { useParams, useHistory, NavLink } from 'react-router-dom'
import { getProductById } from '../../api/product'
import styled from 'styled-components'
import { BsBag } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../../components/Reviews/Rating'
import Reviews from './Reviews'
import Loader from '../../components/Loader/loader'

const ProductView = (props) => {
	const { id } = useParams()
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState('')
	const dispatch = useDispatch()
	const history = useHistory()
	const [quantity, setQuantity] = useState(1)
	const [price, setPrice] = useState()

	const init = async () => {
		const res = await getProductById(id)
		console.log('res', res)
		setData(res)
		setPrice(res.price)
		setLoading(false)
	}

	useEffect(() => {
		init()
	}, [])

	const handleAddToCart = async () => {
		await dispatch({ type: 'ADD_PRODUCT', payload: { ...data, price, quantity } })
		history.push('/order')
	}

	const handleSelectChange = (value) => {
		setQuantity(value)
		console.log('asd', value)
		setPrice((value * data.price).toFixed(2))
	}

	const renderQuantity = () => {
		var rows = []
		for (let i = 0; i < 10; i++) {
			rows.push(
				<option onSelect={() => setQuantity(i + 1)} key={i}>
					{i + 1}
				</option>
			)
		}
		return <>{rows}</>
	}

	if (loading) {
		return <Loader />
	}

	return (
		<>
			<div className='container'>
				<NavLink className='btn btn-light my-3' to='/'>
					Go Back
				</NavLink>
				<title>{data.name}</title>
				<Row>
					<Col md={6}>
						<Image src={data.image} alt={data.name} fluid />
					</Col>
					<Col md={3}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h3>{data.name}</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								<Rating value={data.rating} text={`${data.reviewCount || 0} reviews`} />
							</ListGroup.Item>
							<ListGroup.Item>Price: ${data.price}</ListGroup.Item>
							<ListGroup.Item>Description: {data.description}</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col md={3}>
						<SideCard>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<Row>
										<Col>Price:</Col>
										<Col>
											<strong>${price}</strong>
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col>Status:</Col>
										<Col>
											{'In Stock'}
											{/* {data.countInStock > 0 ? 'In Stock' : 'Out Of Stock'} */}
										</Col>
									</Row>
								</ListGroup.Item>

								<ListGroup.Item>
									<Row>
										<Col>Qty</Col>
										<Col>
											<Form.Control
												as='select'
												value={quantity}
												onChange={(e) => handleSelectChange(e.target.value)}
											>
												{renderQuantity()}
											</Form.Control>
										</Col>
									</Row>
								</ListGroup.Item>

								<ListGroup.Item>
									<Button
										onClick={handleAddToCart}
										className='btn-block'
										type='button'
										//   disabled={product.countInStock === 0}
									>
										Add To Cart
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</SideCard>
					</Col>
				</Row>
				<Reviews />
			</div>
		</>
	)
}

const SideCard = styled(Card)`
	max-width: 250px;
`

export default ProductView
