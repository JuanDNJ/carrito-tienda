import { AccountCircleIcon } from '../icons/AccountCircleIcon'
import styles from './buttons.module.css'

export function AccountButton() {
    return (
        <button className={styles.accountButton}>
            <AccountCircleIcon fill='#fff' />
        </button>
    )
}