import styles from './css/products.module.css'
import OfferButton from '@/components/buttons/OfferButton';
import { calculateThePorcentage } from '@/utils';
import { Link } from 'react-router-dom';
import { useCartCtx } from "@/context/CartCtx"
import { AddToCartButton } from '@/components/buttons/AddToCartButton';
export default function Product({ product, refProduct }) {
    const { addToCart } = useCartCtx()

    const andlerAddToCart = (product) => {
        console.log(product)
        addToCart(product)
    }

    return (
        <li className={`${styles.itemGridList} ${styles.hoverAnimation}`} ref={refProduct}>
            <article className={`${styles.product} `}>
                <img className={styles.photoProduct} src={product.image} alt="" width={120} />
                <section className={`${styles.bodyProduct}`}>
                    <h2 className={styles.productTitle}>
                        <Link className={styles.linkProductTitle} to={`product/${product.id}`}>{product.title}</Link>
                    </h2>
                    <div className={styles.contentBody}>
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
                            <AddToCartButton clickAddToCart={() => andlerAddToCart(product)} />
                        </span>

                    </div>
                </section>
            </article>
            {product.offer && <OfferButton porcentage={'10'} />}
        </li>
    )

}



// import { useCartCtx } from '@/context/CartCtx'
// const { cart } = useCartCtx()
// const isItemTOCart = cart.length ? cart.map(itemCart => itemCart) : false;
{/* <section style={{
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
        {product.stock >= 1 && (<span>Stock: {product.stock}</span>)}
        {product.stock >= 1 ?
            <>
                {cart && cart.find(itemCart => itemCart.id === product.id) ? <DeleteItemTocartButton prod={product} /> : <AddToCartButton prod={product} />}
            </> :
            <button onClick={() => alert('Empty Stock')} title='Empty Stock'><NoProductsInStockIcon fill={'red'} /></button>
        }
    </div>
</section> */}