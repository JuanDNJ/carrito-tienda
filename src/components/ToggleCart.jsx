import { useCartCtx } from "../context/CartCtx"
import { CartIcon } from "./CartIcon"
export function ToggleCart() {
    const { isToggle, setToggle } = useCartCtx()
    let fill = "#fff"
    if (isToggle) fill = "green"

    return (
        <button
            className={`${isToggle ? "toggle-cart-close" : "toggle-cart-open"}`}
            onClick={() => setToggle(prev => !prev)}
            type="button"
        >
            <CartIcon fill={fill} />
        </button>)
}