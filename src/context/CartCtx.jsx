import { useContext, createContext, useMemo } from "react";
import { useToggle } from "../hooks/useToggle";
import { useReducerCart } from "../reducers/cartReducer";

const Ctx = createContext()


export default function CartProvider({ children }) {

    const { isToggle, setToggle } = useToggle()
    const [state, dispacth] = useReducerCart()
    const cart = state;

    const addToCart = (product) => dispacth({
        type: 'ADD_TO_CART',
        payload: product
    })
    const deleteToCart = (product) => dispacth({
        type: 'REMOVE_TO_CART',
        payload: product
    })
    const clearCart = () => dispacth({ type: 'CLEAR_CART' })

    const values = {
        cart,
        isToggle,
        setToggle,
        addToCart,
        deleteToCart,
        clearCart,
        dispacth
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

