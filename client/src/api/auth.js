import axios from 'axios';
import Data from '../config/default.json';
let url = Data.url

export const isAuth = async() => {
    axios.defaults.headers.common['auth-token'] = localStorage.getItem('auth-token');
    console.log(localStorage.getItem('auth-token'))
    return await axios.get(url+'/api/auth').then(res => {
        return { user: res.data , auth:true}
    }).catch(err => {
        console.log('err' , err)
        return {auth: false , user: null}
    })
}

export const signIn = async(values) => {
    return await axios.post(url+'/api/auth/login' , values).then(res => {
       return res.data.token
    }).catch(err => {
        console.log("err" , err)
    })
}

export const signUp = async(values) => {
    return await axios.post(url+'/api/users' , values)
    .then(res => {
        return res.data.token
    }).catch(err => {
        console.log('err' , err)
    })
}