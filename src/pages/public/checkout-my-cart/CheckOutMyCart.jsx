import styles from './css/check.module.css'
import CheckOutCart from '@/components/forms/CheckOutCart'
export default function CheckOutMyCart() {
    return (
        <section className={styles.chekout}>
            <h2>Checkout My Cart</h2>
            <section>
                <h2>Step 1 Shipping Address</h2>
                <article className={styles.grid}>
                    <section className={styles.containerForm}>
                        <CheckOutCart />
                    </section>
                    <aside>
                        <h2>Order Info</h2>
                        <p>
                            Velit culpa irure fugiat fugiat proident quis consequat duis laborum in. Fugiat est exercitation incididunt ad magna. Aute adipisicing aliqua eu aute.
                        </p>
                    </aside>
                </article>
            </section>
            <section>
                <h2>Step 2</h2>
            </section>
            <section>
                <h2>Step 3</h2>
            </section>
        </section>
    )
}