import { useCart } from "../context/CartCtx"
import { AddTocartIcon } from "./AddtoCartIcon"
export function ToggleCart() {
    const { setIsOpenList, isOpenList } = useCart()
    let fill = "#fff"
    if (isOpenList) fill = "green"

    return (
        <button
            className={`${isOpenList ? "toggle-cart-close" : "toggle-cart-open"}`}
            onClick={() => setIsOpenList(prev => !prev)}
            type="button"
        >
            <AddTocartIcon fill={fill} />
        </button>)
}