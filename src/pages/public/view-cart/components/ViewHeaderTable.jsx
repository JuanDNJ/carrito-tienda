import styles from '../css/headertable.module.css'
export default function ViewHeaderTable() {
    return (
        <header className={`${styles.headerTable}`}>
            <strong className={styles.strongItems}>Items</strong>
            <strong className={styles.strongPrice}>Price</strong>
            <strong className={styles.strongQuantity}>Qty</strong>
            <strong className={styles.strongSubtotal}>Subtotal</strong>
        </header>
    )
}