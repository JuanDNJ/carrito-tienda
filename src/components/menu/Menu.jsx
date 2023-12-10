import styles from './menu.module.css'
import { ToggleCartButton } from "../buttons/ToggleCartButton"
export function Menu() {
    return (
        <section className={styles.menu}>

            <div className={styles.buttons}>
                <ToggleCartButton />
            </div>
        </section>
    )
}