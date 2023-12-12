import { useCartCtx } from "../../context/CartCtx"
import { AddToCartIcon } from "../icons/AddToCartIcon"
import styles from './buttons.module.css'

export function AddToCartButton({ prod }) {
    const { addToCart } = useCartCtx()
    return (
        <button type="button"
            className={`${styles.btn} ${styles.addToCart}`}
            onClick={() => addToCart(prod)}
        >
            <AddToCartIcon />
        </button>
    )

}
