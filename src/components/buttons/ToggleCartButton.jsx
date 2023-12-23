import './buttons.module.css'
import { useCartCtx } from "../../context/CartCtx"
import { CartIcon } from "../icons/CartIcon"
import styles from './buttons.module.css'

export function ToggleCartButton({ fill }) {

    const { isToggle, toggleCart } = useCartCtx()

    return (
        <button
            className={`${styles.btn} ${isToggle ? styles.toggleCartClose : styles.toggleCartOpen}`}
            onClick={toggleCart}
            type="button"
        >
            <CartIcon fill={fill} />
        </button>
    )

}
