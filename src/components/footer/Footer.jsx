import { Link } from 'react-router-dom'
import styles from './footer.module.css'
import NereaShopIcon from '@/components/icons/NereaShopIcon'
import Navigation from '@/components/nav/Navigation'
export function Footer() {

    return (
        <footer className={styles.footer}>
            <section className={styles.containerFooter}>
                <div className={styles.logo}>
                    <Link to='../carrito-tienda/'>
                        <NereaShopIcon className={styles.logo}
                            nereaColor='var(--color-gold)'
                            nereaStroke='var(--color-light)'
                            shopColor='var(--color-light)'
                            shopStroke='var(--color-gold)'
                        />
                    </Link>
                </div>
                <details open className={styles.categories}>
                    <summary>Shop</summary>
                    <Navigation submenu subFooter />
                </details>
                <details open className={styles.customer}>
                    <summary>Customers</summary>
                    <Navigation submenu >
                        <Link className={styles.navigationLink} to='view-my-cart'>Cart</Link>
                        <Link className={styles.navigationLink} to='contact'>Contact us</Link>
                        <Link className={styles.navigationLink} to='info-shop'>Info</Link>
                        <Link className={styles.navigationLink} to='privacy-policy'>Privacy policy</Link>
                        <Link className={styles.navigationLink} to='terms-and-conditions'>Terms & conditions</Link>
                    </Navigation>
                </details>
                <details open className={styles.fack}>
                    <summary>Contact</summary>

                    <form className={styles.notificationsActive} onClick={(event) => event.preventDefault()}>
                        <label htmlFor='email'>
                            <strong>Activate notifications</strong>
                            <input type="email" id="email" name="email" autoComplete='email' placeholder='Enter your email' required />
                        </label>
                        <div>
                            <input type="checkbox" id="cons" name="cons" />
                            <span>Yes, please, I would like Nerea's to use my information for personalized communications. See the <Link to=''>Privacy</Link> Statement for more details.</span>
                        </div>
                        <button type='submit'>Send</button>
                    </form>
                </details>
            </section>
            <address>
                <Link to='../carrito-tienda/'>www.nereasshop.com</Link>
                <div>
                    <h4>Prueba técnica de React <span>@juanDNJ</span></h4>
                    <h5>Shoping Cart con context & useReducer</h5>
                </div>
            </address>
        </footer>

    )
}