import styles from './cart.module.css'
import { DelteToCartIcon } from "../icons/DelteTocartIcon"
import { useCartCtx } from "../../context/CartCtx"
import { ToggleCart } from "../buttons/ToggleCart"
import { AddToCartIcon } from "../icons/AddToCartIcon"

export function Cart() {

    const { cart, deleteToCart, addToCart, clearCart, isToggle } = useCartCtx()

    return (
        <>
            {isToggle && <div className={styles.cart}>
                <div className={styles.options}>
                    <ToggleCart />
                    {cart && cart.length > 0 &&
                        <button onClick={() => clearCart()} type="button"> <DelteToCartIcon fill="#fff" /></button>
                    }
                </div>
                <ul className={styles.listCarts}>
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