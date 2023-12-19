import { useReducer } from "react";
import { products } from '@/data/products.json';

export function productReducer(state, action) {
    const { type: actionType, payload: actionPayload } = action

    switch (actionType) {

        case "ADD_TO_STOCK": {
            const { id, stock } = actionPayload
            const stockInit = stock
            console.log(stockInit)
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
            const { id, stock, quantity } = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)
            console.log(stock)
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
        case "USE_STOCK_INITIAL": {

            const red = actionPayload.reduce((A, B) => {
                if (!A.quantity) {
                    console.log(false)
                }
                return [...A, {
                    id: B.id,
                    quantity: B.quantity
                }]
            }, [])

            let producsTemporal = []
            red.forEach(element => {
                console.log(state.findIndex(item => item.id === element.id))
                console.log(element)
                if (state.findIndex(item => item.id === element.id) >= 0) {
                    producsTemporal = products.map(p => {
                        if (p.id === element.id) {
                            p.stock += element.quantity
                            console.log(p)
                        }
                        return p
                    })
                }

            });
            console.log(actionPayload)
            console.log(red)
            console.log(producsTemporal)
            // return producsTemporal
            // return products
        }
    }


    return state
}

export function useProductReducer() {
    return useReducer(productReducer, products)
}