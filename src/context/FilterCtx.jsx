import { useContext, createContext, useId } from "react";
import { useFilter as hook } from "../hooks/useFilter";

const Ctx = createContext()

export default function FilterCtx({ children }) {

    const { filters, filterdProducts, setFilters } = hook()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const value = {
        filters,
        minPriceFilterId,
        categoryFilterId,
        setFilters,
        filterdProducts,
    }
    return (
        <Ctx.Provider value={value}>
            {children}
        </Ctx.Provider>
    )
}

function useFiltersCtx() {
    const ctx = useContext(Ctx)
    if (!ctx) throw new Error("No hay contexto");
    return ctx
}

export {
    useFiltersCtx
}