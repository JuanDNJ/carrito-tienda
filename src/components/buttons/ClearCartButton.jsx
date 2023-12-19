import { DelteToCartIcon } from "../icons/DelteTocartIcon"
import { useCartCtx } from "../../context/CartCtx"
import styles from './buttons.module.css'

export function ClearCartButton({ carts }) {
    const { clearCart } = useCartCtx()

    return (
        <button className={`${styles.btn} ${styles.deleteToCart}`} onClick={() => clearCart(carts)} type="button">
            <DelteToCartIcon fill="#fff" />
        </button>
    )

}
