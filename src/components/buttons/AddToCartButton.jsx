import { CartIcon } from "@/components/icons/CartIcon"
import styles from './buttons.module.css'

export function AddToCartButton({ clickAddToCart }) {

    return (
        <button type="button"
            className={`${styles.btn} ${styles.addToCart}`}
            onClick={clickAddToCart}
        >
            <CartIcon />
        </button>
    )

}
