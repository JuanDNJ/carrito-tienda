import styles from './css/icons.module.css'
export default function NereaShopIcon({ nereaColor, nereaStroke, shopColor, shopStroke }) {

    return (
        <svg viewBox='0 0 96 48' xmlns="http://www.w3.org/2000/svg" width={'96'} height={'48'}>
            <text x="0" y="50%" className={styles.nerea} fill={nereaColor} stroke={nereaStroke}>
                Nerea`s
            </text>
            <text x="17%" y="85%" className={styles.shoptspan} fill={shopColor} stroke={shopStroke}>
                Shop
            </text>
        </svg>
    )
}