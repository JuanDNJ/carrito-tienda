import { Link } from 'react-router-dom'
import styles from './css/style.module.css'
export default function ViewCart() {
    return (
        <section className={styles.containerShopping}>
            <h2 className={styles.titlePage}>Shopping Cart</h2>
            <section>
                <span>Items</span>
                <ul>
                    <article>
                        <section className={styles.containerLeft}>
                            <div className={styles.containerImg}>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <Link to="">Título de la imagen</Link>
                            </div>
                        </section>
                        <section className={styles.containerLeft}>
                            Summary
                        </section>
                    </article>
                </ul>
            </section>

        </section>
    )
}

