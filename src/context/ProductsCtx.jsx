import { useContext, createContext } from "react";
import { products as initialProducts } from '@/data/products.json';
import { categories as initialCategories } from '@/data/categories.json';
import { useState } from "react";

const Ctx = createContext()


export default function ProductCtx({ children }) {


    const [products, setProducts] = useState(initialProducts)
    const [prodCategories, setProdCategories] = useState(initialCategories)

    const value = {
        products,
        prodCategories,
        setProducts,
        setProdCategories
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