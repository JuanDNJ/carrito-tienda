import styles from '../css/products.module.css'
import { Product } from "./Product"
export function Products({ products }) {

    return (
        <ul className={styles.products}>
            {products.map((product, key) => {
                return (
                    <Product key={product.id} product={product} />
                )
            })}
        </ul>
    )

}
