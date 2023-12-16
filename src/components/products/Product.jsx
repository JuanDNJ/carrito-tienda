import styles from './css/products.module.css'
import { useCartCtx } from '@/context/CartCtx'
import { DeleteItemTocartButton } from '../buttons/DeleteItemTocartButton'
import { AddToCartButton } from '../buttons/AddToCartButton'
import OfferButton from '@/components/buttons/OfferButton';
import { calculateThePorcentage } from '@/utils';
export default function Product({ product, refProduct }) {
    const { cart } = useCartCtx()




    return (
        <li className={styles.itemGridList} ref={refProduct}>
            <div className={styles.product}>
                <img className={styles.photoProduct} src={product.image} alt="" width={120} />
                <div className={styles.firstChild}>
                    <span className={styles.productTitle}>{product.title}</span>
                </div>
                <section style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    gridArea: 'button',
                    placeItems: 'center'

                }}>
                    <div className={styles.midleChild}>
                        <span className={styles.productPrice} style={{
                            textDecoration: product.offer && 'line-through wavy red',
                        }}>
                            <strong className={styles.euro}>
                                €
                            </strong>
                            {product.price}
                        </span>
                        <span>
                            {product.offer && (<>
                                <strong className={styles.euro}>
                                    €
                                </strong>
                                {calculateThePorcentage(product.price, 10)}
                            </>)}
                        </span>
                    </div>
                    <div className={styles.lastChild} >
                        {cart &&
                            cart.find(res => res.id === product.id) ?
                            <DeleteItemTocartButton prod={product} /> :
                            <AddToCartButton prod={product} />
                        }

                    </div>
                </section>
            </div>
            {product.offer && <OfferButton porcentage={'10'} />}
        </li>
    )

}
