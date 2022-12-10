import { BUY_ITEM, SELL_ITEM } from "./cartActionType";


const initialState = {
    total: 0
}



export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ITEM:
            return {
                ...state,
                total: state.total + 1
            }

        case SELL_ITEM:
            return {
                ...state,
                total: state.total - 1
            }
            
        default:
            return state
    }
}
