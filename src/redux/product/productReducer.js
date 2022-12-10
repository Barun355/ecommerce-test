import { FETCH_PRODUCT, FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_SUCCESS } from "./productActionType";

const initialState = {
    loading: false,
    item: [],
    error: ''
}



export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            return {
                ...state,
                loading: true
            }
        
        case FETCH_PRODUCT_SUCCESS:
            return {
                loading: false,
                item: action.payload,
                error: ''
            }
        
        case FETCH_PRODUCT_FAILURE:
            return {
                loading: false,
                item: [],
                error: action.payload
            }
        default:
            return state;
    }
}
