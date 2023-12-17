import { useCartCtx } from "@/context/CartCtx"
import { AddToCartIcon } from "../icons/AddToCartIcon"
import styles from './buttons.module.css'
export default function AddProductQuantityButton({ prod }) {
    const { addProductQuantity } = useCartCtx()
    return (
        <button onClick={() => addProductQuantity(prod)} className={`${styles.btn} ${styles.addProductQuantity}`}>
            <AddToCartIcon fill="#fff" />
        </button>
    )
}