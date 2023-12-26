import styles from './css/cart.module.css'
import { useCartCtx } from "@/context/CartCtx"
import CloseButton from '@/components/buttons/CloseButton'
import { ClearCartButton } from '@/components/buttons/ClearCartButton'
import TotalPriceCart from './TotalPriceCart'
import ItemListCart from './ItemListCart'
import { Link } from 'react-router-dom'

export function Cart() {
    const { cart, isToggle, toggleCart } = useCartCtx()

    return (
        <section className={`${styles.cart} ${isToggle && styles.toggleCart}`}>
            <header className={styles.headerCart}>
                <div className={styles.options}>
                    {cart && cart.length > 0 && (<span className={styles.clearCart} title="Clear cart">Clear cart <ClearCartButton carts={cart} /></span>)}
                    <CloseButton />
                </div>
            </header>
            <section className={styles.body}>
                <ul className={styles.listCarts}>
                    {cart && cart.map((prod, keyId) => {
                        return (
                            <li className={styles.itemCart} key={keyId}>
                                <ItemListCart itemCart={prod} />
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section className={styles.subtotal}>
                <TotalPriceCart />
            </section>
            <footer className={styles.checkout}>
                <div className={styles.viewCart}>
                    <Link className={styles.linkViewCart} onClick={toggleCart} to="view-my-cart">View and edit cart</Link>
                </div>
                <Link className={styles.linkCheckOut} onClick={toggleCart} to="customers/checkout-my-cart">Go to checkout</Link>
            </footer>
        </section>
    )

}
