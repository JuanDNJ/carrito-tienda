import styles from './header.module.css'
import { Menu } from "@/components/menu/Menu"
import { Link } from 'react-router-dom'
import { ToggleCartButton } from "@/components/buttons/ToggleCartButton"
import NereaShopIcon from '@/components/icons/NereaShopIcon'

export function Header() {

    return (
        <header className={styles.mainHeader}>
            <section className={styles.customers}>
                <span className={styles.small}>
                    Welcome to the <i>Nerea`s</i> &nbsp;shop
                    <Link className='navigationLink' to="customers/signin">Signin</Link>or
                    <Link className='navigationLink' to="customers/create">Create an Account</Link></span>
            </section>
            <section className={styles.containerHeader}>
                <article className={styles.top}>
                    <section className={styles.logo}>
                        <Link className='linkLogo' to="home">
                            <NereaShopIcon
                                nereaColor='var(--color-gold)'
                                nereaStroke='var(--color-light)'
                                shopColor='var(--color-light)'
                                shopStroke='var(--color-gold)'
                            />
                        </Link>
                    </section>
                    <section className={styles.containerMenu}>
                        <Menu />
                        <ToggleCartButton fill='var(--color-light)' />
                    </section>
                </article>
            </section>
        </header >
    )

}

