import { useContext, createContext, useState, useId } from "react";

const Ctx = createContext()

export default function FilterProvider({ children }) {

    const [filters, setFilters] = useState({
        category: 'all',
        price: 1
    })
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const filterdProducts = (products) => {
        return products.filter(product => {
            return product.price >= filters.price && (
                filters.category === 'all' ||
                product.category === filters.category
            )
        })
    }

    const value = {
        filters,
        setFilters,
        filterdProducts,
        minPriceFilterId,
        categoryFilterId
    }
    return (
        <Ctx.Provider value={value}>
            {children}
        </Ctx.Provider>
    )
}

export function useFilters() {
    const ctx = useContext(Ctx)
    if (!ctx) throw new Error("No hay contexto");
    return ctx
}