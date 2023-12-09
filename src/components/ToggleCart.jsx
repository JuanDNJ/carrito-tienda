import { useCart } from "../context/CartCtx"
import { AddTocartIcon } from "./AddtoCartIcon"
export function ToggleCart() {
    const { isToggle, setToggle } = useCart()
    let fill = "#fff"
    if (isToggle) fill = "green"

    return (
        <button
            className={`${isToggle ? "toggle-cart-close" : "toggle-cart-open"}`}
            onClick={() => setToggle(prev => !prev)}
            type="button"
        >
            <AddTocartIcon fill={fill} />
        </button>)
}