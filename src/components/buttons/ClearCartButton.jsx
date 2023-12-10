import { DelteToCartIcon } from "../icons/DelteTocartIcon"
import { useCartCtx } from "../../context/CartCtx"
import styles from './buttons.module.css'

export function ClearCartButton() {
    const { clearCart } = useCartCtx()

    return (
        <button className={styles.deleteToCart} onClick={() => clearCart()} type="button">
            <DelteToCartIcon fill="#fff" />
        </button>
    )

}
