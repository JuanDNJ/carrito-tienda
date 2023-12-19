import styles from './cart.module.css'
import { useCartCtx } from "../../context/CartCtx"
import { ToggleCartButton } from "../buttons/ToggleCartButton"
import { ClearCartButton } from '../buttons/ClearCartButton'
import { DeleteItemTocartButton } from '../buttons/DeleteItemTocartButton'
import TotalPriceCart from './TotalPriceCart'
import { totalPriceProduc } from '@/utils'
import AddProductQuantityButton from '../buttons/AddProductQuantityButton'
import SubtractProductQuantityButton from '../buttons/SubtractProductQuantityButton'

export function Cart() {

    const { cart, isToggle } = useCartCtx()

    return (
        <>
            {isToggle && <div className={styles.cart}>
                <header className={styles.headerCart}>
                    <div className={styles.options}>
                        {cart && cart.length > 0 && <ClearCartButton />}
                        <ToggleCartButton />
                    </div>
                    <TotalPriceCart />
                </header>
                <ul className={styles.listCarts}>

                    {cart && cart.map((prod, keyId) => {
                        return (
                            <li className={styles.itemCart} key={keyId}>
                                <img className={styles.imgItemCart} src={prod.image} alt="Image item cart" />
                                <span className={styles.titleCart}>{prod.title}</span>
                                <span className={styles.titleCart}>Total € {totalPriceProduc(prod.price, prod.quantity)}</span>
                                <span className={styles.titleCart}>Stock: {prod.stock}</span>
                                <div className={styles.actions}>
                                    <DeleteItemTocartButton prod={prod} />
                                    <span className={styles.quantityCart}>{prod.quantity}</span>
                                    <SubtractProductQuantityButton prod={prod} />
                                    <AddProductQuantityButton prod={prod} />
                                </div>
                            </li>
                        )
                    })}

                </ul>

            </div>}
        </>
    )

}
