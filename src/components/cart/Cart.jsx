import styles from './cart.module.css'
import { useCartCtx } from "../../context/CartCtx"
import { ToggleCartButton } from "../buttons/ToggleCartButton"
import { ClearCartButton } from '../buttons/ClearCartButton'
import { DeleteItemTocartButton } from '../buttons/DeleteItemTocartButton'
import { AddToCartButton } from '../buttons/AddToCartButton'

export function Cart() {

    const { cart, addToCart, isToggle } = useCartCtx()

    return (
        <>
            {isToggle && <div className={styles.cart}>
                <div className={styles.options}>
                    {cart && cart.length > 0 && <ClearCartButton />}
                    <ToggleCartButton />
                </div>
                <ul className={styles.listCarts}>
                    {cart && cart.map((prod, keyId) => {
                        return (
                            <li className={styles.itemCart} key={keyId}>
                                <img className={styles.imgItemCart} src={prod.image} alt="Image item cart" />
                                <span className={styles.titleCart}>{prod.title}</span>
                                <div className={styles.actions}>
                                    <DeleteItemTocartButton prod={prod} />
                                    <span className={styles.quantityCart}>{prod.quantity}</span>
                                    <AddToCartButton prod={prod} />
                                </div>
                            </li>
                        )
                    })}
                </ul>

            </div>}
        </>
    )

}
