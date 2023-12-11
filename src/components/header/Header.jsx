import styles from './header.module.css'
import { MenuIcon } from '../icons/MenuIcon'
import { Filters } from "../filters/Filters"
import { Cart } from "../cart/Cart"
import { Menu } from "../menu/Menu"

export function Header() {

    return (
        <header className={styles.mainHeader}>
            <section className={styles.containerHeader}>
                <div className={styles.logo}>
                    <MenuIcon fill={'red'} />
                    <h1>Clothing</h1>
                </div>
                <Menu />
                <Cart />
                <Filters />
            </section>
        </header>
    )

}
