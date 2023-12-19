import { useContext, createContext } from "react";
import { products as initialProducts } from '@/data/products.json';
import { categories as initialCategories } from '@/data/categories.json';
import { useState } from "react";
import { useProductReducer } from "../reducers/productReducer";
const Ctx = createContext()


export default function ProductCtx({ children }) {

    const [prodCategories, setProdCategories] = useState(initialCategories)
    const [state, dispatch] = useProductReducer(initialProducts)


    const addProductToStock = (product) => {
        dispatch({
            type: "ADD_TO_STOCK",
            payload: product
        })
    }
    const deleteProductToStock = (product) => {
        dispatch({
            type: "DELETE_TO_STOCK",
            payload: product
        })
    }
    const value = {
        products: state,
        prodCategories,
        addProductToStock,
        setProdCategories,
        deleteProductToStock
    }

    return (
        <Ctx.Provider value={value}>
            {children}
        </Ctx.Provider>
    )
}

export function useProductCtx() {
    const ctx = useContext(Ctx)
    if (!ctx) throw new Error("Context not available!")
    return ctx
}