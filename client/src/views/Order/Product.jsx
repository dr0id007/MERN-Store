import React from 'react'
import styled from 'styled-components'
import {useSelector , useDispatch} from 'react-redux'
import { AiOutlineDelete  } from 'react-icons/ai'

const Product = (props) => {
    const {data} = props
    const dispatch = useDispatch()

    console.log("props data" , data._id)

    const handleDelete = () => {
        dispatch({type: 'REMOVE_PRODUCT' , payload: {id: data._id} })
    }

    return (
        <Wrapper>
            <Flex>
            <Title>{data.name}</Title>
            <div style={{display: 'flex' ,justifyContent: 'space-around' , width: '20%' }}>
            <Price>$ {data.price}</Price>
            <Price>{data.quantity || 1}</Price>
            <button onClick={handleDelete} ><AiOutlineDelete /></button>
            </div>
            </Flex>
            <Hr />
        </Wrapper>
    )
}

const Wrapper = styled.section`
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: auto;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: light;
`;

const Price = styled.p`
    font-weight: bold;
`;

const Hr = styled.hr`
    width: 90%;
`;

export default Product
