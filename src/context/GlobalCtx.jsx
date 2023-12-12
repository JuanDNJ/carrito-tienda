import { createContext, useContext, useState } from "react";


const Ctx = createContext();

export default function GlobalCtx({ children }) {

    const [isOpenFilters, setIsOpenFilters] = useState(false)
    const toogleOpenFilters = () => {
        setIsOpenFilters(prev => !prev)
    }
    const value = { isOpenFilters, toogleOpenFilters }

    return (
        <Ctx.Provider value={value}>
            {children}
        </Ctx.Provider>
    )

}

export function useGlobalCtx() {
    const ctx = useContext(Ctx)
    if (!ctx) throw new Error("No context provided")
    return ctx
}