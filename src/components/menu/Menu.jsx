import styles from './menu.module.css'
import { ToggleCart } from "../buttons/ToggleCart"
export function Menu() {
    return (
        <section className={styles.menu}>

            <div className={styles.buttons}>
                <ToggleCart />
            </div>
        </section>
    )
}