const initialState = {
    user: {},
    auth: false
}

const reducer = (state=initialState , action) => {
    switch(action.type) {
        case 'SET_AUTH': {
            console.log("auth reducer called" , action.payload)
            const {auth , user} = action.payload
            return {...state , auth: auth , user: user } 
        }
        default: return state
    }
}

export default reducer;