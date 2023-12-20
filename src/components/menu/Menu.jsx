import styles from './menu.module.css'
import { Link } from 'react-router-dom'
import Navigation from '@/components/nav/Navigation'
import { useCartCtx } from "@/context/CartCtx"
export function Menu() {
    const { closeCart } = useCartCtx()
    return (
        <nav className={styles.menu}>
            <Link className={`${styles.navigationLink} ${styles.toggleSubmenu}`} onClick={closeCart} to='shop-all'>Shop All
                <section className={styles.openSubmenu}>
                    <Navigation submenu />
                </section>
            </Link>
            <Link className={styles.navigationLink} onClick={closeCart} to='about'>About</Link>
        </nav>
    )

}
