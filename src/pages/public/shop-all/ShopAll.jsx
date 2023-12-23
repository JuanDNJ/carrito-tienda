import styles from './css/styles.module.css'
import Filters from '@/components/filters/Filters'
import Product from '@/components/products/Product'
import { Fragment, useState } from 'react'
import { useProductCtx } from '@/context/ProductsCtx'
import { useFiltersCtx } from '@/context/FilterCtx'
export default function ShopAll() {
    const { products } = useProductCtx()
    const { filterdProducts } = useFiltersCtx()

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


    const [settingsPagination, setSettingsPagination] = useState({
        limit: 20,
        page: 0
    })



    const page = (newPage) => {
        setSettingsPagination(prev => ({ ...prev, page: newPage }))
    }
    const changeLimit = (event) => {
        setSettingsPagination(prev => ({ ...prev, limit: event.target.value }))
    }
    const renderPagination = pagination(settingsPagination.limit, settingsPagination.page)

    const createButtons = () => {
        const pages = filterdProducts(products).length / settingsPagination.limit
        let buttons = []
        for (let i = 0; i < pages; i++) {
            buttons = [...buttons, {
                id: i,
                page: i + 1
            }]
        }
        return buttons
    }

    // Create an render buttons
    const buttons = createButtons()
    const renderButtons = buttons.map((btn, key) => {
        return (
            <Fragment key={key}>
                <button className={styles.btnRender} onClick={() => page(btn.id)}>{btn.page}</button>
            </Fragment>
        )
    })

    return (
        <article className={styles.shopAll}>
            <h2 className={styles.titlePage}>Shop All</h2>
            <aside className={styles.filterProducts}>
                <div>
                    <input type="range" name="limit" min="5" max="20" onInput={changeLimit} value={settingsPagination.limit} /> Limit: {settingsPagination.limit}
                </div>
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
            <section className={styles.containerButtonPages}>
                <strong>Pages: {renderButtons.length}</strong>
                <div className={styles.renderButtons}>
                    {renderButtons}
                </div>
            </section>
        </article>
    )

}