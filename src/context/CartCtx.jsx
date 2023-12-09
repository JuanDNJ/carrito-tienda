import { useContext, createContext, useState } from "react";

const Ctx = createContext()

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [isOpenList, setIsOpenList] = useState(false)

    const addProdut = (product) => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(() => newCart)
        }
        setCart((prev) => (
            [...prev, {
                ...product,
                quantity: 1
            }]
        ))
    }
    const deleteProdut = (product) => {
        setCart((prev) => prev.filter(item => item.id !== product.id))

    }
    const clearProduts = () => {
        setCart(() => [])
    }
    return (
        <Ctx.Provider value={{
            cart, isOpenList, addProdut, deleteProdut, clearProduts, setIsOpenList
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

