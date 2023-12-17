import { useCartCtx } from "../../context/CartCtx"

import { CartIcon } from "../icons/CartIcon"
import styles from './buttons.module.css'

export function AddToCartButton({ prod }) {
    const { addProductQuantity } = useCartCtx()
    return (
        <button type="button"
            className={`${styles.btn} ${styles.addToCart}`}
            onClick={() => addProductQuantity(prod)}
        >
            <CartIcon />
        </button>
    )

}
