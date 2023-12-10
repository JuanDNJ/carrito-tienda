import styles from './products.module.css'
import { useCartCtx } from '../../context/CartCtx'
import { DeleteItemTocartButton } from '../buttons/DeleteItemTocartButton'
import { AddToCartButton } from '../buttons/AddToCartButton'

export function Product({ product }) {

    const { cart } = useCartCtx()

    return (
        <li className={styles.product}>
            <img className={styles.photoProduct} src={product.image} alt={product.title} />
            <div className={styles.firstChild}>
                <span className={styles.productTitle}>{product.title}</span>
            </div>
            <div className={styles.midleChild}>
                <strong className={styles.euro}>
                    €
                </strong>
                &nbsp;
                <span className={styles.productPrice}>
                    {product.price}
                </span>
            </div>
            <div className={styles.lastChild} >
                {cart &&
                    cart.find(res => res.id === product.id) ?
                    <DeleteItemTocartButton prod={product} /> :
                    <AddToCartButton prod={product} />
                }
            </div>
        </li>
    )

}
