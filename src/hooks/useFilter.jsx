import { useState } from "react";
export function useFilter() {
    const [filters, setFilters] = useState({
        category: 'all',
        price: 1
    })
    const filterdProducts = (products) => {
        return products.filter(product => {
            return product.price >= filters.price && (
                filters.category === 'all' ||
                product.category === filters.category
            )
        })
    }
    return { filters, filterdProducts, setFilters }
}