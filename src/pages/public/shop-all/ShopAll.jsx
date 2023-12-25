import styles from './css/styles.module.css'
import Filters from '@/components/filters/Filters'
import Product from '@/components/products/Product'
import { Fragment, useState } from 'react'
import { useProductCtx } from '@/context/ProductsCtx'
import { useFiltersCtx } from '@/context/FilterCtx'
import FilterByLimitProducts from '@/components/filters/FilterByLimitProducts'
import PaginationProducts from '@/components/pagination/PaginationProducts'

export default function ShopAll() {
    const { products } = useProductCtx()
    const { filterdProducts } = useFiltersCtx()
    const [settingsPagination, setSettingsPagination] = useState({
        limit: 20,
        page: 0
    })

    const pagination = (limit, page) => {
        const pages = filterdProducts(products).reduce((accumulator, currentElement, currentIndex) => {
            const pageIndex = Math.floor(currentIndex / limit);
            if (!accumulator[pageIndex]) {
                accumulator[pageIndex] = []; // Inicializa la página si aún no existe
            }
            accumulator[pageIndex].push(currentElement);
            return accumulator;
        }, [])
        return pages[page]
    }

    const page = (newPage) => {
        setSettingsPagination(prev => ({ ...prev, page: newPage }))
    }
    const changeLimit = (event) => {
        console.log(event)
        setSettingsPagination(prev => ({ ...prev, limit: event.target.value }))
    }
    const renderPagination = pagination(settingsPagination.limit, settingsPagination.page)

    return (
        <article className={styles.shopAll}>
            <h2 className={styles.titlePage}>Shop All</h2>
            <aside className={styles.filterProducts}>
                <FilterByLimitProducts initialLimit={settingsPagination.limit} limit={changeLimit} />
                <Filters />
            </aside>
            <section className={styles.areaProducts}>
                <ul className={styles.renderPagination}>
                    {renderPagination && renderPagination.map((product, key) => {
                        return (
                            <Product key={key} product={product} />
                        )
                    })}
                </ul>
            </section>
            <PaginationProducts page={page} limit={settingsPagination.limit} />
        </article>
    )

}