import styles from './cart.module.css'
import { useCartCtx } from "../../context/CartCtx"
import { ToggleCartButton } from "../buttons/ToggleCartButton"
import { ClearCartButton } from '../buttons/ClearCartButton'
import { DeleteItemTocartButton } from '../buttons/DeleteItemTocartButton'
import { AddToCartButton } from '../buttons/AddToCartButton'
import { useEffect, useState } from 'react'

export function Cart() {

    const { cart, addToCart, isToggle } = useCartCtx()


    const lengthCarts = cart.length
    const reducir = cart.reduce((A, B) => [...A, B.price * B.quantity], [])
    const total = reducir.reduce((A, B) => A + B, 0)

    return (
        <>
            {isToggle && <div className={styles.cart}>
                <div className={styles.options}>
                    {cart && cart.length > 0 && <ClearCartButton />}
                    <ToggleCartButton />
                </div>
                <ul className={styles.listCarts}>
                    <h3>Total products : {lengthCarts}</h3>
                    <h3>Shpping total :{Math.round(total * 100) / 100}</h3>
                    {cart && cart.map((prod, keyId) => {
                        return (
                            <li className={styles.itemCart} key={keyId}>
                                <img className={styles.imgItemCart} src={prod.image} alt="Image item cart" />
                                <span className={styles.titleCart}>{prod.title}</span>
                                <span className={styles.titleCart}>Total € {prod.totalPrice ? prod.totalPrice : prod.price}</span>

                                <div className={styles.actions}>
                                    <DeleteItemTocartButton prod={prod} />
                                    <span className={styles.quantityCart}>{prod.quantity}</span>
                                    <AddToCartButton prod={prod} />
                                </div>
                            </li>
                        )
                    })}

                </ul>

            </div>}
        </>
    )

}
