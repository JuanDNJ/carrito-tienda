import { products as initialProducts } from '@/data/products.json'
import { Fragment, useState } from "react";
import { Products } from '@/components/products/old/Products'
import { useFiltersCtx } from '@/context/FilterCtx'

export default function HomePage() {
    const { filterdProducts } = useFiltersCtx()
    const [allProducts] = useState(initialProducts)
    const filteredProducts = filterdProducts(allProducts)
    return (
        <Fragment>
            <h2>Home page</h2>
            <Products products={filteredProducts} />
        </Fragment>
    )

}
