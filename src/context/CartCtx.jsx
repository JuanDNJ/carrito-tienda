import { useContext, createContext, useMemo } from "react";
import { useToggle } from "../hooks/useToggle";
import { useReducerCart } from "../reducers/cartReducer";

const Ctx = createContext()

import { useProductCtx } from "./ProductsCtx";
export default function CartProvider({ children }) {

    const { isToggle, setToggle } = useToggle()
    const [state, dispacth] = useReducerCart()
    const { addProductToStock, deleteProductToStock } = useProductCtx()
    const cart = state;

    if (cart.length) {
        console.log(cart.length)
    }
    const addToCart = (product) => {

        dispacth({
            type: 'ADD_TO_CART',
            payload: product
        })
    }
    const deleteToCart = (product) => dispacth({
        type: 'REMOVE_TO_CART',
        payload: product
    })
    const addProductQuantity = (product) => {
        addProductToStock(product)
        dispacth({
            type: 'ADD_TO_PRODUCT_QUANTITY',
            payload: product
        })
    }
    const deleteProductQuantity = (product) => {
        deleteProductToStock(product)
        dispacth({
            type: 'DELETE_TO_PRODUCT_QUANTITY',
            payload: product
        })
    }
    const clearCart = () => dispacth({ type: 'CLEAR_CART' })

    const values = {
        cart,
        isToggle,
        setToggle,
        addToCart,
        deleteToCart,
        clearCart,
        dispacth,
        deleteProductQuantity,
        addProductQuantity

    };

    return (
        <Ctx.Provider value={values}>
            {children}
        </Ctx.Provider>
    )
}

export function useCartCtx() {
    const ctx = useContext(Ctx)
    if (!ctx) throw new Error("Cannot use")
    return ctx
}

