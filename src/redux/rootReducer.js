import { combineReducers } from "redux";
import { cartReducer, productReducer, productsReducer } from "./index";

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    product: productReducer
})

export default rootReducer;