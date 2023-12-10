import { useState } from "react";
export function useFilter() {
    const [filters, setFilters] = useState({
        category: 'all',
        sex: 'all',
        price: 1
    })

    const filterdProducts = (products) => {
        return products.filter(product => {
            return product.price >= filters.price && (
                filters.category === 'all' ||
                product.category === filters.category &&
                (
                    filters.sex === 'all' || filters.sex === null || product.sex === filters.sex
                )
            )
        })
    }
    return { filters, filterdProducts, setFilters }
}
