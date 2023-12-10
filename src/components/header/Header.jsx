import styles from './header.module.css'
import { MeniIcon } from '../icons/MenuIcon'
import { Filter } from "../filters/Filter"
import { Cart } from "../cart/Cart"
import { Menu } from "../menu/Menu"
export function Header() {

    return (
        <header className={styles.mainHeader}>
            <section className={styles.containerHeader}>
                <div className={styles.logo}>
                    <MeniIcon fill={'red'} />
                    <h1>Clothing</h1>
                </div>
                <Menu />
                <Cart />
                <Filter />
            </section>
        </header>
    )
}