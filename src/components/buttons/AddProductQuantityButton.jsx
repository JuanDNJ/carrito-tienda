import { useCartCtx } from "@/context/CartCtx"
import { AddToCartIcon } from "../icons/AddToCartIcon"
import styles from './buttons.module.css'
export default function AddProductQuantityButton({ prod }) {
    const { addProductQuantity } = useCartCtx()
    return (
        <>
            {
                prod.stock === 0 ? <button disabled className={`${styles.btn} ${styles.disabledAddProductQuantity}`}>
                    <AddToCartIcon fill="#333" />
                </button> : <button onClick={() => addProductQuantity(prod)} className={`${styles.btn} ${styles.addProductQuantity}`}>
                    <AddToCartIcon fill="#333" />
                </button>
            }
        </>

    )
}