import { combineReducers } from "redux";
import {cartReducer} from "./index";

const rootReducer = combineReducers({
    cart: cartReducer,
})

export default rootReducer;