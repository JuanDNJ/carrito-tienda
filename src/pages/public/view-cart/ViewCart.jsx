import styles from './css/style.module.css'
import ViewCartProduct from './components/ViewCartProduct'
import ViewHeaderTable from './components/ViewHeaderTable'
export default function ViewCart() {
    return (
        <section className={styles.containerShopping}>
            <h2 className={styles.titlePage}>Shopping Cart</h2>
            <article className={styles.cartProducts}>
                <ViewHeaderTable />
                <section className={styles.bodyTable}>
                    <ul className={styles.listCartProduct}>
                        <ViewCartProduct />
                    </ul>
                </section>
            </article>
            <section className={styles.summary}>
                <span className={styles.firstChildSummary}>Summary</span>
            </section>
        </section>
    )
}

