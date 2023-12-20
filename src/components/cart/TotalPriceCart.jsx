import { useCartCtx } from "@/context/CartCtx"
import { totalPriceCart } from "../../utils"

export default function TotalPriceCart() {
    const { cart } = useCartCtx()
    const lengthCarts = cart.length

    return (
        <div style={{
            flex: '1 100%',
            color: '#333'
        }}>
            <h3 style={{ padding: '0', margin: '0' }}>
                Total purchase:
            </h3>
            {lengthCarts !== 0 && <span style={{ padding: '0', margin: '0' }}>€{totalPriceCart(cart)}</span>}
        </div>
    )
}