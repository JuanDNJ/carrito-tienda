import styles from './css/products.module.css'
import Product from '@/components/products/Product'
import { useProductCtx } from '@/context/ProductsCtx'
import Filters from '@/components/filters/Filters'
import { useFiltersCtx } from '@/context/FilterCtx'

export function Products() {
    const { products } = useProductCtx()
    const { filterdProducts } = useFiltersCtx()

    return (
        <article className={styles.shopAll}>
            <h2 className={styles.titlePage}>Shop All</h2>
            <aside className={styles.filterProducts}>
                <Filters />
            </aside>
            <ul className={styles.products}>
                {filterdProducts(products).map((product, key) => {
                    return (
                        <Product key={key} product={product} />
                    )
                })}

            </ul>

        </article>
    )

}
