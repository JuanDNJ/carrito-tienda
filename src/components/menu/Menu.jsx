import styles from './menu.module.css'
import { ToggleCartButton } from "../buttons/ToggleCartButton"
import { AccountButton } from '../buttons/AccountButton'
import { Link } from 'react-router-dom'

export function Menu() {
    return (
        <nav className={styles.menu}>
            <article className={styles.buttons}>
                <span className={styles.small}> Welcome to the shop <Link className='navigationLinkCustomer' to="customer/signin">Signin</Link> or <Link className='navigationLinkCustomer' to="customer/create">Create an account</Link></span>
                {/* <AccountButton /> */}
                <ToggleCartButton />
            </article>
        </nav>
    )

}
