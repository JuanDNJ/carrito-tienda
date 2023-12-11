import { useState } from "react";
export function useFilter() {
    const [filters, setFilters] = useState({
        category: 'all',
        subcategory: 'all',
        sex: 'all',
        price: 1
    })
    console.log(filters)
    const filterdProducts = (products) => {
        return products.filter(product => {
            return product.price >= filters.price &&
                (
                    filters.category === 'all' || product.category === filters.category &&
                    (filters.sex === 'all' || filters.sex === null || product.sex === filters.sex) &&
                    (filters.subcategory === 'all' || product.subcategory === filters.subcategory)
                )
        })
    }
    return { filters, filterdProducts, setFilters }
}
