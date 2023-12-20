import { Link } from "react-router-dom";
import { useProductCtx } from "@/context/ProductsCtx";
import { capitalizeWord } from '@/utils'
import styles from './nav.module.css'
export default function Navigation() {
    const { prodCategories } = useProductCtx()

    return (
        <nav className={styles.naviation}>
            {prodCategories.map(prodCat => <Link className="navigationLink" key={prodCat.id} to={prodCat.url}>{capitalizeWord(prodCat.name)}</Link>)}
        </nav>

    )
}