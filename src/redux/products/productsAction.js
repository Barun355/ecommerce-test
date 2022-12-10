import axios from "axios"
import { FETCH_PRODUCTS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from "./productsActionType"

export const fetchProducts = () => {
    return {
        type: FETCH_PRODUCTS
    }
}

export const fetchProductsSuccess = products => {
    // console.log(products.data)
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductsFailure = error => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}


export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchProducts())
        axios.get('https://fakestoreapi.com/products')
        .then(response => dispatch(fetchProductsSuccess(response.data)))
        .catch(error => dispatch(fetchProductsFailure(error.message)))
        
    }
}