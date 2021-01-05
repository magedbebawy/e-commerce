import CartActionsTypes from './cart.types'

export const toggleCartHidden =()=>({
    type: CartActionsTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CartActionsTypes.ADD_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: CartActionsTypes.REMOVE_ITEM,
    payload: item
})

export const clearItem = (item) => ({
    type: CartActionsTypes.CLEAR_ITEM,
    payload: item
})

