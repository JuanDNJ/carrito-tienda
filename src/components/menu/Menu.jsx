import styles from './menu.module.css'
import { Link } from 'react-router-dom'

export function Menu() {
    return (
        <nav className={styles.menu}>
            <Link className='navigationLink' to='shop-all'>Shop All</Link>
            <Link className='navigationLink' to='about'>About</Link>
        </nav>
    )

}
