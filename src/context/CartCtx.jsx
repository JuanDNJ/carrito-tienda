import { useContext, createContext, useMemo } from "react";
import { useToggle } from "../hooks/useToggle";
import { useReducerCart } from "../reducers/cartReducer";

const Ctx = createContext()

export default function CartProvider({ children }) {

    const { isToggle, setToggle } = useToggle()
    const [state, dispacth] = useReducerCart()

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
        dispacth({
            type: 'ADD_TO_PRODUCT_QUANTITY',
            payload: product
        })
    }
    const deleteProductQuantity = (product) => {
        dispacth({
            type: 'DELETE_TO_PRODUCT_QUANTITY',
            payload: product
        })
    }
    const clearCart = (products) => {
        dispacth({ type: 'CLEAR_CART' })
    }

    const values = {
        cart: state,
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

