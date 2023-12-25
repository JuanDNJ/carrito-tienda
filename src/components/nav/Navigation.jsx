import { Link } from "react-router-dom";
import { useProductCtx } from "@/context/ProductsCtx";
import { useCartCtx } from "@/context/CartCtx"
import { capitalizeWord } from '@/utils'
import styles from './nav.module.css'

export default function Navigation({ children, submenu, subFooter }) {
    const { closeCart } = useCartCtx()
    const { prodCategories } = useProductCtx()
    const renderLinks = prodCategories && prodCategories.map(prodCat =>
        <Link className={'navigationLink'} key={prodCat.id} to={prodCat.url}>
            {capitalizeWord(prodCat.name)}
        </Link>)
    return (
        <nav className={styles.navigation} onClick={closeCart}>
            <section className={`${styles.container} ${submenu && styles.submenu}`}>
                {children ? children : renderLinks}
            </section>
        </nav>
    )
}

