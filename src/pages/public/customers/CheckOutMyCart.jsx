import styles from './css/styles.module.css'
import CheckOutCart from '@/components/forms/CheckOutCart'
export default function CheckOutMyCart() {
    return (
        <section className={`${styles.containerCustomers} ${styles.customerCheckout}`}>
            <article className={styles.checkout}>
                <h2 className='titleMD'>Checkout My Cart</h2>
                <section>
                    <h2 className='titleS'>Step 1 Shipping Address</h2>
                    <article className={styles.grid}>
                        <section className={styles.containerForm}>
                            <CheckOutCart />
                        </section>
                        <aside>
                            <h2 className='titleMD'>Order Info</h2>
                            <p>
                                Velit culpa irure fugiat fugiat proident quis consequat duis laborum in. Fugiat est exercitation incididunt ad magna. Aute adipisicing aliqua eu aute.
                            </p>
                        </aside>
                    </article>
                </section>
                <section>
                    <h2 className='titleS'>Step 2</h2>
                </section>
                <section>
                    <h2 className='titleS'>Step 3</h2>
                </section>
            </article>
        </section>
    )
}