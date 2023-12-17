import { useCartCtx } from "@/context/CartCtx"
import { totalPriceCart } from "../../utils"

export default function TotalPriceCart() {
    const { cart } = useCartCtx()
    const lengthCarts = cart.length

    return (
        <div style={{
            flex: '1 100%',
            padding: '1rem',
            background: '#333'
        }}>
            <h3 style={{ padding: '0', margin: '0' }}>Total products: {lengthCarts}</h3>
            {lengthCarts !== 0 && <h3 style={{ padding: '0', margin: '0' }}>Shpping total: € {totalPriceCart(cart)}</h3>}
        </div>
    )
}