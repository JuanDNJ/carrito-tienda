import styles from './header.module.css'
import { MenuIcon } from '../icons/MenuIcon'
// import { Filters } from "../filters/Filters"
import { Cart } from "../cart/Cart"
import { Menu } from "../menu/Menu"
import CategoriesProducts from '../categories/CategoriesProducts'
import { Link } from 'react-router-dom'
import Navigation from '../nav/Navigation'
export function Header() {

    return (
        <header className={styles.mainHeader}>
            <section className={styles.containerHeader}>
                <div className={styles.logo}>
                    <h1>Nerea`s <span style={{ fontSize: 'small' }}>Shop</span></h1>
                </div>
                <Menu />
                <Cart />
                <Navigation />
                {/* <CategoriesProducts /> */}
                {/* <Filters /> */}
            </section>

        </header>
    )

}
