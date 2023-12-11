import styles from './menu.module.css'
import { ToggleCartButton } from "../buttons/ToggleCartButton"
import { AccountButton } from '../buttons/AccountButton'

export function Menu() {
    return (
        <nav className={styles.menu}>
            <div className={styles.buttons}>
                <AccountButton />
                <ToggleCartButton />
            </div>
        </nav>
    )

}
