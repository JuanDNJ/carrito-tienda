import styles from './css/styles.module.css'
import { useFiltersCtx } from '@/context/FilterCtx'
import { useProductCtx } from '@/context/ProductsCtx'
import { Fragment } from 'react'
export default function PaginationProducts({ limit, page }) {
    const { products } = useProductCtx()
    const { filterdProducts } = useFiltersCtx()


    const createButtons = () => {
        const pages = filterdProducts(products).length / limit
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
        <section className={styles.containerButtonPages}>
            <strong>Pages: {renderButtons.length}</strong>
            <div className={styles.renderButtons}>
                {renderButtons}
            </div>
        </section>
    )
}