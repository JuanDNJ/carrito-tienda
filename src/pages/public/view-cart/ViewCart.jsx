import styles from './css/style.module.css'
import ViewTableProducts from './components/ViewTableProducts'
export default function ViewCart() {
    return (
        <section className={styles.containerShopping}>
            <h2 className={styles.titlePage}>Shopping Cart</h2>
            <article className={styles.cartProducts}>
                <ViewTableProducts />
            </article>
            <aside className={styles.containerSummary}>
                <article className={styles.summary}>
                    <h2 className={styles.titleSummary}>Summary</h2>
                </article>
            </aside>
        </section>
    )
}

