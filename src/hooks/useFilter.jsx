import { useState } from "react";
import {
    sortByPriceMinor,
    sortByPriceElderly
} from "../utils";

export function useFilter() {

    const [filters, setFilters] = useState({
        category: 'all',
        subcategory: 'all',
        sex: 'all',
        price: 3,
        minor: null,
        elderly: null
    })

    const filterdProducts = (products) => {
        const clone = structuredClone(products)
        const filterProducts = clone.filter(product => {
            return product.price >= filters.price &&
                (
                    filters.category === 'all' || product.category === filters.category &&
                    (filters.sex === 'all' || filters.sex === null || product.sex === filters.sex) &&
                    (filters.subcategory === 'all' || product.subcategory === filters.subcategory)
                )
        })
        if (filters.minor) return filterProducts.toSorted(sortByPriceMinor)
        if (filters.elderly) return filterProducts.toSorted(sortByPriceElderly)
        return filterProducts
    }

    return { filters, filterdProducts, setFilters }

}

