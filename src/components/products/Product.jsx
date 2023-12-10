import styles from './products.module.css'
import { useCartCtx } from '../../context/CartCtx'
import { CartIcon } from '../icons/CartIcon'
import { DelteToCartIcon } from '../icons/DelteTocartIcon'

export function Product({ product }) {

    const { cart, addToCart, deleteToCart } = useCartCtx()
    const handlerAddCart = (product) => {
        addToCart(product)
    }
    const handlerDeleteProduct = (product) => {
        deleteToCart(product)
    }
    return (
        <li>
            <img className={styles.photoProduct} src={product.image} alt={product.title} />
            <div className={styles.firstChild}>
                <span>{product.title}</span>
            </div>
            <div className={styles.midleChild}>
                <strong>€</strong>&nbsp;<span>{product.price}</span>
            </div>
            <div className={styles.lastChild} >
                {cart && cart.find(res => res.id === product.id) ?
                    <button title='Delete to cart' className={styles.deleteToCart} type='button' onClick={() => handlerDeleteProduct(product)}>
                        <DelteToCartIcon fill="#fff" />
                    </button> :
                    <button title='Add to cart' type='button' onClick={() => handlerAddCart(product)}>
                        <CartIcon fill="#fff" />
                    </button>}
            </div>
        </li>
    )
}