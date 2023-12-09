import { useContext, createContext, useState, useReducer } from "react";
import { cartActions } from './actions/cartActions'
import { useToggle } from "../hooks/useToggle";


const Ctx = createContext()
const initialState = []

export default function CartProvider({ children }) {

    const { isToggle, setToggle } = useToggle()
    const [state, dispacth] = useReducer(cartActions, initialState)

    const addToCart = (product) => dispacth({
        type: 'ADD_TO_CART',
        payload: product
    })
    const deleteToCart = (product) => dispacth({
        type: 'REMOVE_TO_CART',
        payload: product
    })
    const clearCart = () => dispacth({ type: 'CLEAR_CART' })

    return (
        <Ctx.Provider value={{
            cart: state,
            isToggle,
            setToggle,
            addToCart,
            deleteToCart,
            clearCart,
            dispacth
        }}>
            {children}
        </Ctx.Provider>
    )
}

export function useCart() {
    const ctx = useContext(Ctx)
    if (!ctx) throw new Error("Cannot use")
    return ctx
}

