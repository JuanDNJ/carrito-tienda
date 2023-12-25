import styles from './cart.module.css'
import { useCartCtx } from "../../context/CartCtx"
import { ToggleCartButton } from "../buttons/ToggleCartButton"
import { ClearCartButton } from '../buttons/ClearCartButton'
import { DeleteItemTocartButton } from '../buttons/DeleteItemTocartButton'
import TotalPriceCart from './TotalPriceCart'
import { totalPriceProduc } from '@/utils'
import AddProductQuantityButton from '../buttons/AddProductQuantityButton'
import SubtractProductQuantityButton from '../buttons/SubtractProductQuantityButton'
import { Link } from 'react-router-dom'

export function Cart() {

    const { cart, isToggle, toggleCart } = useCartCtx()

    return (
        <section className={`${styles.cart} ${isToggle && styles.toggleCart}`}>
            <header className={styles.headerCart}>
                <div className={styles.options}>
                    {cart && cart.length > 0 && <ClearCartButton carts={cart} />}
                    <ToggleCartButton />
                </div>

            </header>
            <section className={styles.body}>
                <ul className={styles.listCarts}>
                    {cart && cart.map((prod, keyId) => {
                        return (
                            <li className={styles.itemCart} key={keyId}>
                                <img className={styles.imgItemCart} src={prod.image} alt="Image item cart" />
                                <span className={styles.titleCart}>{prod.title}</span>
                                <span className={styles.titleCart}>Total € {totalPriceProduc(prod.price, prod.quantity)}</span>
                                <span className={styles.titleCart}>Stock: {prod.stock}</span>
                                <div className={styles.actions}>
                                    <DeleteItemTocartButton prod={prod} />
                                    <span className={styles.quantityCart}>{prod.quantity}</span>
                                    <SubtractProductQuantityButton prod={prod} />
                                    <AddProductQuantityButton prod={prod} />
                                </div>
                            </li>
                        )
                    })}

                </ul>
            </section>
            <section className={styles.subtotal}>
                {/* <span>Cart Subtotal:</span><span>$500.00</span> */}
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
