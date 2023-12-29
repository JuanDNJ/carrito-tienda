import styles from './css/tableproducts.module.css';
import { Link } from 'react-router-dom'
import { useCartCtx } from '@/context/CartCtx'
import EditIcon from '@/components/icons/EditIcon'
import TrashIcon from '@/components/icons/TrashIcon'

export default function ViewTableProducts() {

    const { cart } = useCartCtx()

    return (
        <table>
            <thead>
                <tr>
                    <th className={`${styles.colth} ${styles.items}`}>Items</th>
                    <th></th>
                    <th className={styles.colth}>Price</th>
                    <th className={styles.colth}>Quantity</th>
                    <th className={styles.colth}>Subtotal</th>
                </tr>
            </thead>
            {cart && cart.map((item, keyItem) => {
                return (
                    <tbody key={keyItem}>
                        <tr>
                            <td rowSpan={4}>
                                <div className={styles.photoProduct}>
                                    <Link to="">
                                        <img src={item.image} alt="Product image" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.coltd}>
                                <div className={styles.info}>
                                    <Link to="#">
                                        <h2>{item.title}</h2>
                                    </Link>
                                    <div className={styles.editQuantity}>
                                        <button className={styles.btn}>
                                            -
                                        </button>
                                        <span className={styles.editViewQty}>{item.quantity}</span>
                                        <button className={styles.btn}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className={styles.coltd}>
                                <span>{item.price}</span>
                            </td>
                            <td className={styles.coltd}>
                                <span>{item.quantity}</span>
                            </td>
                            <td className={styles.coltd}>
                                <span>33.00</span>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.coltd} colSpan={4}>
                                <div className={styles.actions}>
                                    <button className={styles.btn}>
                                        <EditIcon fill="#333" />
                                    </button>
                                    <button className={styles.btn}>
                                        <TrashIcon fill="#333" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                )
            })}
            <tfoot>
                <tr>
                    <td colSpan={5} className={styles.coltdfoot}>
                        <div className={styles.footerActions}>
                            <button className={styles.btnfooteractions}>Pay Cart</button>
                            <button className={styles.btnfooteractions}>Clear Cart</button>
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}