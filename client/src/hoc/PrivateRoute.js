import React , {useState , useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {Route} from 'react-router-dom'
import {isAuth} from '../api/auth'
import Loader from '../components/Loader/loader'

const PrivateRoute = ({component:Component , ...props}) => {

    const [loading , setLoading] = useState(false)
    const [isLogged , setIsLogged] = useState(false)
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const init = async () =>  {
       const res =  await isAuth()
       setIsLogged(res.auth)
       dispatch({ type: 'SET_AUTH' , payload: {user: res.user , auth: res.auth} })
    }
    
    useEffect(() => {
        init()
    } , [])

    if(loading) {
        return <Loader />
    }

    return <Route {...props} render={(props) => 
    { return <Component {...props} auth={isLogged} /> }} /> 
}

export default PrivateRoute
