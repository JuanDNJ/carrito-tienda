import { useCartCtx } from "../../context/CartCtx"
import { DelteToCartIcon } from "../icons/DelteTocartIcon"
import styles from './buttons.module.css'
export function DeleteItemTocartButton({ prod }) {
    const { deleteToCart } = useCartCtx()
    return (
        <button className={`${styles.btn} ${styles.deleteToCart}`} onClick={() => deleteToCart(prod)} type="button">
            <DelteToCartIcon fill="#fff" />
        </button>
    )
}