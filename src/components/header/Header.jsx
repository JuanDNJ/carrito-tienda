import styles from './header.module.css'
import Navigation from '../nav/Navigation'
import { Cart } from "../cart/Cart"
import { Menu } from "../menu/Menu"
import { Link } from 'react-router-dom'
import { ToggleCartButton } from "../buttons/ToggleCartButton"

export function Header() {

    return (
        <header className={styles.mainHeader}>
            <section className={styles.customers}>
                <span className={styles.small}> Welcome to the shop <Link className='navigationLinkCustomer' to="customers/signin">Signin</Link> or <Link className='navigationLinkCustomer' to="customers/create">Create an account</Link></span>
            </section>
            <section className={styles.containerHeader}>
                <article className={styles.top}>
                    <section className={styles.logo}>
                        <h1>Nerea`s <span style={{ fontSize: 'small' }}>Shop</span></h1>
                    </section>
                    <section className={styles.containerMenu}>
                        <Menu />
                        <ToggleCartButton />
                    </section>
                </article>
                <Cart />
                <Navigation />
            </section>

        </header >
    )

}

