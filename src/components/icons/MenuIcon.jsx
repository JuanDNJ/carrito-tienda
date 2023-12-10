import styles from './icons.module.css'
export function MeniIcon({ fill }) {
    return (
        <svg className={styles.menuBars} xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36" fill={fill}>
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
    )
}