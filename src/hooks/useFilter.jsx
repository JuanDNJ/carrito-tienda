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
// const cat = products.filter(product => product.categories && product.categories.filter(cat => filters.categories.includes(cat)))
// console.log(cat)

// return product.categories.filter(category => {
//     return filters.categories.filter(filter => filter === category)
// })

// {
//     let all
//     if (product.categories) {
//         all = product.categories.map(cat => filters.categories.includes(cat))
//         // console.log(fil)
//         // console.log(product)
//         // console.log(inc)
//     }
//     return all
// }