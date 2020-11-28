import axios from 'axios';
import Data from '../config/default.json';
let url = Data.url

export const getAllProducts = () => {
    return axios.get(url+'/api/product')
    .then(res => {
        return res.data;
    }).catch(err => {
        console.log('err' , err)
    })
}

export const getProductById = (id) => {
    return axios.get(url+'/api/product/'+id)
    .then(res => {
        return res.data;
    }).catch(err => {
        console.log('err' , err)
    })
}