import { Link } from "react-router-dom";
import { useProductCtx } from "@/context/ProductsCtx";
import { useCartCtx } from "@/context/CartCtx"
import { capitalizeWord } from '@/utils'
import styles from './nav.module.css'

export default function Navigation({ children, submenu, subFooter }) {
    const { closeCart } = useCartCtx()
    const { prodCategories } = useProductCtx()
    const renderLinks = prodCategories && prodCategories.map(prodCat =>
        <Link className={subFooter ? styles.navigationLink : 'navigationLink'} key={prodCat.id} to={prodCat.url}>
            {capitalizeWord(prodCat.name)}
        </Link>)
    return (
        <nav className={styles.navigation} onClick={closeCart}>
            <section className={`${styles.container} ${submenu && styles.submenu}`}>
                <Link className={`navigationLink`} to='shop-all'>Shop All</Link>
                {children ? children : renderLinks}
            </section>
        </nav>
    )
}

