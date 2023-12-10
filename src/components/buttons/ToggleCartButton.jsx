import './buttons.module.css'
import { useCartCtx } from "../../context/CartCtx"
import { CartIcon } from "../icons/CartIcon"
import styles from './buttons.module.css'

export function ToggleCartButton() {

    const { isToggle, setToggle } = useCartCtx()
    let fill = "#fff"

    return (
        <button
            className={`${isToggle ? styles.toggleCartClose : styles.toggleCartOpen}`}
            onClick={() => setToggle(prev => !prev)}
            type="button"
        >
            <CartIcon fill={fill} />
        </button>
    )

}
