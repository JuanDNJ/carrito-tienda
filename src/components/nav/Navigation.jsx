import { Link } from "react-router-dom";
import { useProductCtx } from "@/context/ProductsCtx";
import { capitalizeWord } from '@/utils'
import styles from './nav.module.css'
export default function Navigation() {
    const { prodCategories } = useProductCtx()
    const renderLinks = prodCategories && prodCategories.map(prodCat =>
        <Link className={styles.navigationLink} key={prodCat.id} to={prodCat.url}>
            {capitalizeWord(prodCat.name)}
        </Link>)

    return (
        <nav className={styles.naviation}>
            <section className={styles.container}>
                {renderLinks}
            </section>
        </nav>
    )
}