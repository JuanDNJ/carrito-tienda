import { useCartCtx } from "@/context/CartCtx"
import styles from './buttons.module.css'
import { RemoveIcon } from "../icons/RemoveIcon"
export default function SubtractProductQuantityButton({ prod }) {
    const { deleteProductQuantity } = useCartCtx()
    return (
        <>
            {prod.quantity > 1 ? <button onClick={() => deleteProductQuantity(prod)} className={`${styles.btn} ${styles.removeProductQuantity}`}>
                <RemoveIcon fill="#fff" />
            </button> : <button className={`${styles.btn} ${styles.disabledRemoveProductQuantity}`}>
                <RemoveIcon fill="#fff" />
            </button>}
        </>

    )
}