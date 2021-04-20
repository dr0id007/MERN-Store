import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useSeletor, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from '../Reviews/Rating'

const CardComp = (props) => {
	const { data } = props
	const history = useHistory()
	const dispatch = useDispatch()

	const handleAddProduct = async () => {
		await dispatch({ type: 'ADD_PRODUCT', payload: { ...data } })
		history.push(`/product/${data._id}`)
	}
	// console.log("props" , props)

	return (
		<CardWrapper className='my-3 p-3 rounded'>
			<Link to={`/product/${data._id}`}>
				{/* <Card.Img src={data.image} variant='top' /> */}
				<Card.Img className='' width='300' src={data.image} alt='Mission T-Shirts Gear Image' />
			</Link>

			<Card.Body>
				<Link to={`/product/${data._id}`}>
					<Card.Title as='div'>
						<strong>{data.name}</strong>
					</Card.Title>
				</Link>

				<Card.Text as='div'>
					<Rating value={data.rating || 0} text={`${data.reviewCount || 0} reviews`} />
				</Card.Text>

				<Card.Text as='h3'>${data.price.toFixed(2)}</Card.Text>
			</Card.Body>
		</CardWrapper>
	)

	//       <CardWrapper className="card text-center product pt-2 border-0 h-100 rounded-0">
	//         <img className="img-fluid d-block mx-auto" src="https://raw.githubusercontent.com/solodev/bootstrap-cards-shopping-cart/master/images/gear-tshirt.jpg" alt="Mission T-Shirts Gear Image" />
	//         <div className="card-body py-0 ">
	//           <h5 className="card-title font-weight-semi-bold mb-3 w-xl-220p mx-auto">{data.name}</h5>
	//           <Price className="price">${data.price}</Price>
	//         </div>
	//         <p className="btn w-100 px-4 mx-auto">
	//         <button onClick={handleAddProduct} className="btn btn-dark btn-lg w-100" >
	//             Buy Now
	//         </button>
	//           </p>
	//       </CardWrapper>
	// )
}

const CardWrapper = styled(Card)`
	// background: #f1f1f1;
	margin: 1em;
	max-width: 280px;
	max-height: 500px;
	padding: 0em;
`

const Price = styled.p`
	font-size: 1.75rem;
`

export default CardComp
