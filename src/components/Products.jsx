import { Product } from "./Product"
export function Products({ products }) {

    return (
        <ul className='products'>
            {products.map((product, key) => {
                return (
                    <Product key={product.id} product={product} />
                )
            })}
        </ul>
    )
}