import { useParams } from "react-router-dom"
import Product from "../../../components/products/Product"
import { useProductCtx } from "@/context/ProductsCtx"
import { Fragment } from "react"
import styles from './css/styles.module.css'
import { capitalizeWord } from '@/utils'
export default function CategoryPage() {
    const { category } = useParams()
    const { products } = useProductCtx()
    const productsCategory = products.filter(product => product.category === category)
    // console.log(productsCategory)
    return (

        <section className={styles.categoryPage}>
            <h2 className="titleXL">{capitalizeWord(category)}</h2>
            <h3 className={'titleMD'}>Total products: <span className={styles.numProducts}>{productsCategory && productsCategory.length}</span></h3>
            <section className="viewCategory">
                <article className="listProducts">
                    <ul className={styles.gridList} >
                        {productsCategory && productsCategory.map((product, prodKey) => {
                            return (
                                <Fragment key={prodKey}>
                                    <Product product={product} />
                                </Fragment>
                            )
                        })}
                    </ul>
                </article>
            </section>
        </section>

    )

}
