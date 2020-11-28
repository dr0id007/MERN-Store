import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Card = (props) => {
    const {data} = props
    console.log("props" , props)

    return (
          <CardWrapper className="card text-center product pt-2 border-0 h-100 rounded-0">
            <img className="img-fluid d-block mx-auto" src="https://raw.githubusercontent.com/solodev/bootstrap-cards-shopping-cart/master/images/gear-tshirt.jpg" alt="Mission T-Shirts Gear Image" />
            <div className="card-body py-0 ">
              <h5 className="card-title font-weight-semi-bold mb-3 w-xl-220p mx-auto">{data.name}</h5>
              <Price className="price">${data.price}</Price>
            </div>
            <p className="btn w-100 px-4 mx-auto">
            <NavLink to={`/product/${data._id}`} className="btn btn-dark btn-lg w-100" >
                Buy Now  
            </NavLink>
              </p>
          </CardWrapper>
    )
}

const CardWrapper = styled.div`
    background: #f1f1f1;
    margin: 2em;
    max-width: 280px;
    max-height: 500px;
    padding: 0em;
`; 
  
const Price = styled.p`
    font-size: 1.75rem;
`;

export default Card
