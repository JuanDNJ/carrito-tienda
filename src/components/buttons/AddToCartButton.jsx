import { useCartCtx } from "../../context/CartCtx"

import { CartIcon } from "../icons/CartIcon"
import styles from './buttons.module.css'

export function AddToCartButton({ prod }) {
    const { addToCart } = useCartCtx()
    return (
        <button type="button"
            className={`${styles.btn} ${styles.addToCart}`}
            onClick={() => addToCart(prod)}
        >
            <CartIcon />
        </button>
    )

}
