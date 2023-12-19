import { useReducer } from "react";
export function productReducer(state, action) {
    const { type: actionType, payload: actionPayload } = action

    switch (actionType) {

        case "ADD_TO_STOCK": {
            const { id, stock } = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)
            if (productInCartIndex >= 0) {
                const newProduct = structuredClone(state)
                if (newProduct[productInCartIndex].stock === 0) return newProduct
                newProduct[productInCartIndex].stock -= 1
                return newProduct
            }
            return [
                ...state,
                {
                    ...actionPayload
                }
            ]
        }
        case "DELETE_TO_STOCK": {
            const { id, stock } = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)
            if (productInCartIndex >= 0) {
                const newProduct = structuredClone(state)
                if (newProduct[productInCartIndex].stock > stock) return newProduct
                newProduct[productInCartIndex].stock += 1
                return newProduct
            }
            return [
                ...state,
                {
                    ...actionPayload
                }
            ]
        }
    }


    return state
}

export function useProductReducer(products) {
    return useReducer(productReducer, products)
}