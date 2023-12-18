import { Link } from 'react-router-dom'
import { AccountCircleIcon } from '../icons/AccountCircleIcon'
import styles from './buttons.module.css'

export function AccountButton() {
    return (
        <Link className={`${styles.btn} ${styles.accountButton}`} to="/carrito-tienda/account"><AccountCircleIcon fill='#fff' /></Link>
    )
}