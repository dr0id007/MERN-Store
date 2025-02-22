import React , {useState , useEffect} from 'react'
import Card from '../../components/Cards/card'
import {getAllProducts} from '../../api/product'
import Loader from '../../components/Loader/loader'

const CardView = (props) => {
    
    const [loading , setLoading] = useState(true)
    const [products , setProducts] = useState([])


    const init = async() => {
        const res = await getAllProducts()
        console.log('res' , res)
        setProducts(res)
        setLoading(false)
    }

    useEffect(() => {
        init()
    } , [])

    if(loading) {
        return <Loader />
    }

    return (
        <div className="d-flex flex-wrap col-10 mx-auto">   
            {products.map((data,index) => {
                return <Card data={data} key={index} />
            })}
        </div>
    )
}

export default CardView
