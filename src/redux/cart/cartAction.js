import { BUY_ITEM, SELL_ITEM } from "./cartActionType"


export const buyItem = item => {
    return {
        type: BUY_ITEM,
        payload: item
    }
}

export const sellItem = item => {
    return {
        type: SELL_ITEM,
        payload: item
    }
}

