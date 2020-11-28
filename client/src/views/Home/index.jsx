import React from 'react'
import {connect} from 'react-redux'
import {mapStateToProps} from '../../reducers/reducer'
import { useDispatch , useSelector } from 'react-redux'
import CardView from './CardView'
import styled from 'styled-components'

const Home = (props) => {
    const state = useSelector(state => state)
    console.log("home props" , props , state)
    return (
        <div>
            <Head><U>All Products</U></Head>
            <CardView />
        </div>
    )
}

const Head = styled.p`
    font-size: 24px;
    text-align: center;
    font-weight: lighter;
`;

const U = styled.u` 
    text-decoration: none;
    border-bottom: 1px solid black;
`;

// export default connect(mapStateToProps)(Home)

export default Home;