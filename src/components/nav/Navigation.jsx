import { Link } from "react-router-dom";
import { useProductCtx } from "@/context/ProductsCtx";
import { useCartCtx } from "@/context/CartCtx"
import { capitalizeWord } from '@/utils'
import styles from './nav.module.css'

export default function Navigation({ submenu }) {
    const { closeCart } = useCartCtx()
    const { prodCategories } = useProductCtx()
    const renderLinks = prodCategories && prodCategories.map(prodCat =>
        <Link className={styles.navigationLink} onClick={closeCart} key={prodCat.id} to={prodCat.url}>
            {capitalizeWord(prodCat.name)}
        </Link>)

    return (
        <nav className={styles.naviation}>
            <section className={`${styles.container} ${submenu && styles.submenu}`}>
                {renderLinks}
            </section>
        </nav>
    )
}

