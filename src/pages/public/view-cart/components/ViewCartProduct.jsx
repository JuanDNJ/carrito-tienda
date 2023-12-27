import styles from '../css/viewcartproduct.module.css'
import { Link } from 'react-router-dom'
import { useCartCtx } from '@/context/CartCtx'
import { Fragment } from 'react'

export default function ViewCartProduct() {

    const { cart } = useCartCtx()
    console.log(cart)
    const renderCartList = cart && cart.map((product, keyProd) => {
        return (
            <article key={keyProd} className={`${styles.cartProduct}`}>
                <section className={styles.containerImg}>
                    <img src={product.image} alt="Product Image" />
                </section>
                <section className={styles.containerTitleProduct}>
                    <Link className={`${styles.linkCartProduct}`} to="">{product.title}</Link>
                </section>
                <section className={styles.containerInfoProduct}>
                    <strong className={styles.productPrice}>€{product.price}</strong>
                    <strong className={styles.productQuantity}>{product.quantity}</strong>
                    <strong className={styles.productSubtotal}>€30.00</strong>
                </section>
                <footer className={styles.footerCartProduct}>
                    <button>Edit</button>
                    <button>Delete</button>
                </footer>
            </article>
        )
    })
    return (
        <Fragment>
            {renderCartList}
        </Fragment>
    )
}