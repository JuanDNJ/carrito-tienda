import styles from './css/itemcart.module.css'
import { DeleteItemTocartButton } from '@/components/buttons/DeleteItemTocartButton'
import { totalPriceProduc } from '@/utils'
import AddProductQuantityButton from '@/components/buttons/AddProductQuantityButton'
import SubtractProductQuantityButton from '@/components/buttons/SubtractProductQuantityButton'
import { Link } from 'react-router-dom'

export default function ItemListCart({ itemCart }) {
    return (
        <article className={styles.containerItem}>
            <img className={styles.imgItemCart} src={itemCart.image} alt="Image item cart" />
            <section className={styles.itemBody}>
                <div className={styles.containerTop}>
                    <Link className={styles.itemLink} to="#">{itemCart.title}</Link>
                </div>
                <div className={styles.containerBottom}>
                    <span>Qty:</span>
                    <div className={styles.containerBottomActions}>
                        <SubtractProductQuantityButton prod={itemCart} />
                        <span className={styles.quantityCart}>{itemCart.quantity}</span>
                        <AddProductQuantityButton prod={itemCart} />
                    </div>
                </div>
            </section>
            <div className={styles.actions}>
                <span className={styles.deleteItem}>
                    <DeleteItemTocartButton prod={itemCart} />
                </span>
                <span className={styles.titleCart}>€ {totalPriceProduc(itemCart.price, itemCart.quantity)}</span>
            </div>
        </article>
    )

}
