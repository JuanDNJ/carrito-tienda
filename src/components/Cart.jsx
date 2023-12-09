import { DelteToCartIcon } from "./DelteTocartIcon"
import { useCartCtx } from "../context/CartCtx"
import { ToggleCart } from "./ToggleCart"
import { AddToCartIcon } from "./AddToCartIcon"

export function Cart() {

    const { cart, deleteToCart, addToCart, clearCart, isToggle } = useCartCtx()

    return (
        <>
            {isToggle && <div className="cart">
                <ToggleCart />
                {cart && cart.length > 0 &&
                    <button onClick={() => clearCart()} type="button"> <DelteToCartIcon fill="#fff" /></button>
                }
                <ul className="list-carts">
                    {cart && cart.map((prod, keyId) => {
                        return (
                            <li style={{ display: 'flex', gap: '1rem', flexDirection: 'column', placeItems: 'center', border: '1px solid gray', padding: '1rem', textAlign: 'center' }} key={keyId}>
                                <img src={prod.image} alt="" width={96} />
                                <span>{prod.title}</span>
                                <button onClick={() => deleteToCart(prod)} type="button">
                                    <DelteToCartIcon fill="#fff" />
                                </button>
                                <button onClick={() => addToCart(prod)} type="button">
                                    <AddToCartIcon />
                                </button>
                            </li>
                        )
                    })}
                </ul>

            </div>}
        </>
    )
}