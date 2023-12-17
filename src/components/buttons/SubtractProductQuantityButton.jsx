import { useCartCtx } from "@/context/CartCtx"
import styles from './buttons.module.css'
import { RemoveIcon } from "../icons/RemoveIcon"
export default function SubtractProductQuantityButton({ prod }) {
    const { deleteProductQuantity } = useCartCtx()
    return (
        <button onClick={() => deleteProductQuantity(prod)} className={`${styles.btn} ${styles.removeProductQuantity}`}>
            <RemoveIcon fill="#fff" />
        </button>
    )
}