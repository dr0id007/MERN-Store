import React , {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getProductById} from '../../api/product';
import styled from 'styled-components'
import { BsBag } from 'react-icons/bs'

const ProductView = (props) => {

    const { id } = useParams()
    console.log("props" , id)
    const [loading , setLoading ] = useState(true)
    const [data , setData] = useState('')

    const init =  async() => {
        const res = await getProductById(id)
        console.log("res" , res)
        setData(res)
        setLoading(false)
    }

    useEffect(() => {
        init()   
    } , [])

    if(loading) {
        return 'loading..'
    }

    return (
        <MainWrapper>
            <LeftSection>
            <img className="img-fluid d-block mx-auto" src="https://raw.githubusercontent.com/solodev/bootstrap-cards-shopping-cart/master/images/gear-tshirt.jpg" alt="Mission T-Shirts Gear Image" />
            </LeftSection>
            <RightSection>
                <Head>{data.name}</Head>
                <Hr />
                <Text>See more from Brand</Text>
                <Text>{data.description}</Text>
                <Price>$ {data.price}</Price>
                <Small>Quantity</Small>
                <input type="number" defaultValue={1} />
                <br />
                <Btn>Remove from Bag <BsBag/> </Btn>

            </RightSection>
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
    display: flex;
    width: 50%;
    margin: auto;
    margin-top: 10%;
`;

const LeftSection = styled.section`
    max-width: 400px;
    max-height: 500px;
`;
const RightSection = styled.section`
    background:#f6f7f8;
    margin-left: 20px;
    width: 100%;
    padding: 10px;
`;

const Head = styled.p`
    font-size: 22px;
`;

const Text = styled.p`
    font-size: 14px;
`;
const Price = styled.p`
    font-weight: bold;
`;

const Small = styled.p`
    font-size: 12px;
    margin-bottom: 0px;
`;

const Hr = styled.hr`
    width: 90%;
`;

const Btn = styled.button`
    
`;

export default ProductView
