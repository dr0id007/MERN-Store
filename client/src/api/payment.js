import axios from 'axios'
import Data from '../config/default.json';
let url = Data.url

export const createOrder = ({amount , currency}) => {
    console.log('amount' , amount)
    return axios.post(url+'/api/payment/order' , {amount , currency}).then(res => {
        return res.data
    }).catch(err => {
        console.log(err)
    })
}

export const processOrder = (values) => {
    console.log('val' , values)
    return axios.post(url+'/api/payment/success' , values).then(res => {
        return res.data
    }).catch(err => {
        console.log(err)
    })
}