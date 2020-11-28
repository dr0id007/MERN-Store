const initialState = {
    user: {a: "asd"},
    test: 'hello'
}

export const mapStateToProps = (state) => {
    return state
}

export const mapDispatchToProp = (dispatch) => {
    return {
        setUser: (userObject) => {
            dispatch({type: 'ADD' , payload: userObject})
        }
    }
}

const reducer = (state=initialState , action) => {
    switch(action.type) {
        case 'ADD': {
            console.log('add called')
            return {...state}
        }

        case 'DELETE': {
            console.log('add called')
            return {...state}
        }

        case 'SET_AUTH': {
            console.log("auth reducer called" , action.payload)
            const {auth , user} = action.payload
            return {...state , auth: auth , user: user } 
        }
        default: return state
    }
}

export default reducer;