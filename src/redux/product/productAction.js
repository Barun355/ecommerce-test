import axios from "axios"
import { FETCH_PRODUCT, FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_SUCCESS } from "./productActionType"


export const fetchProduct = () => {
    return {
        type: FETCH_PRODUCT
    }
}

export const fetchProductSuccess = product => {
    // console.log(product)
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: product
    }
}

export const fetchProductFailure = error => {
    return {
        type: FETCH_PRODUCT_FAILURE,
        payload: error
    }
}


export const fetchItem = (id) => {
    return async (dispatch) => {
        dispatch(fetchProduct())
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => dispatch(fetchProductSuccess(response.data)))
        .catch(error => dispatch(fetchProductFailure(error.message)))
        
    }
}