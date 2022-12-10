import { FETCH_PRODUCTS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from "./productsActionType";


const initilalState = {
    loading: false,
    data: [],
    error: ''
}


export const productsReducer = (state = initilalState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                loading: true
            }

        case FETCH_PRODUCTS_SUCCESS:
            // console.log(action.payload)
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        
        case FETCH_PRODUCTS_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return state;
    }
}

