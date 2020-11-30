const initialState = {
    products: [] 
}

const removeProduct = (state , value) => {
    const res = state.filter(e => e._id !== value)
    console.log('res' , res)
    // if (res.length === 0)
    return res;
}

const reducer = (state=initialState , action) => {
    switch(action.type) {
        case 'ADD_PRODUCT': {
            console.log('add called')
            return {...state , products: [...state.products , action.payload] }
        }
        case 'REMOVE_PRODUCT': {
            console.log('remove called')
            const res = removeProduct(state.products , action.payload.id)
            return {...state , products: res }
        }
        default: return state
    }
}

export default reducer;