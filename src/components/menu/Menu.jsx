import styles from './menu.module.css'
import { Link } from 'react-router-dom'
import Navigation from '@/components/nav/Navigation'
import { useCartCtx } from "@/context/CartCtx"
export function Menu() {
    const { closeCart } = useCartCtx()
    return (
        <nav className={styles.menu}>
            <div className={`${styles.toggleSubmenu}`} onClick={closeCart}>
                <Link className={`${styles.navigationLink} ${styles.navigationLink}`} to='shop-all'>Shop All</Link>
                <section className={styles.openSubmenu}>
                    <Navigation submenu />
                </section>
            </div>

            <Link className={styles.navigationLink} onClick={closeCart} to='about'>About</Link>
        </nav>
    )

}
