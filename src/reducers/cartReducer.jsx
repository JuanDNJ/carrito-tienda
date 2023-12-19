import { useReducer } from "react";

export const initialState = []

export const CART_ACTIONS_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_TO_CART: 'REMOVE_TO_CART',
    CLEAR_CART: 'CLEAR_CART',
    ADD_TO_PRODUCT_QUANTITY: 'ADD_TO_PRODUCT_QUANTITY',
    DELETE_TO_PRODUCT_QUANTITY: 'DELETE_TO_PRODUCT_QUANTITY'

}

export const cartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action



    switch (actionType) {

        case CART_ACTIONS_TYPES.ADD_TO_CART: {

            return [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1,
                    stock: actionPayload.stock <= 1 ? 0 : actionPayload.stock -= 1
                }
            ]
        }
        case CART_ACTIONS_TYPES.ADD_TO_PRODUCT_QUANTITY: {
            const { id, stock } = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)

            if (productInCartIndex >= 0) {
                const newCart = structuredClone(state)

                if (newCart[productInCartIndex].stock === 0) return newCart
                newCart[productInCartIndex].quantity += 1
                newCart[productInCartIndex].stock -= 1
                return newCart
            }

            return [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1

                }
            ]
        }
        case CART_ACTIONS_TYPES.DELETE_TO_PRODUCT_QUANTITY: {
            const { id } = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)

            if (productInCartIndex >= 0) {
                const newCart = structuredClone(state)
                if (newCart[productInCartIndex].quantity <= 1) return newCart
                newCart[productInCartIndex].quantity -= 1
                newCart[productInCartIndex].stock += 1
                return newCart
            }

            return [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1

                }
            ]
        }
        case CART_ACTIONS_TYPES.REMOVE_TO_CART: {
            const { id } = actionPayload
            return state.filter(item => item.id !== id)
        }
        case CART_ACTIONS_TYPES.CLEAR_CART: {
            return initialState
        }

    }

    return state
}

export const useReducerCart = () => useReducer(cartReducer, initialState)




