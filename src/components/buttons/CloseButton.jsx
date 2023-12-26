import CloseIcon from "../icons/CloseIcon"
import { useCartCtx } from "@/context/CartCtx"
export default function CloseButton() {
    const { toggleCart } = useCartCtx()
    return (
        <button type="button" onClick={toggleCart} style={{
            cursor: 'pointer'
        }}>
            <CloseIcon fill={'var(--color-delete)'} />
        </button>
    )
}