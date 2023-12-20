import styles from './css/check.module.css'
export default function CheckOutMyCart() {
    return (
        <section className={styles.chekout}>
            <h2>Checkout My Cart</h2>
            <section>
                <h2>Step 1 Shipping Address</h2>
                <article className={styles.grid}>
                    <section className={styles.containerForm}>
                        <form className={styles.formCheckout} onSubmit={(eve) => eve.preventDefault()}>
                            <div className={`${styles.formControl} ${styles.email}`}>
                                <label htmlFor="email">Email*</label>
                                <input type="text" autoComplete="email" id="email" name="email" required />
                            </div>
                            <div className={`${styles.formControl} ${styles.firstname}`}>
                                <label htmlFor="firstname">First Name*</label>
                                <input type="text" autoComplete="name" id="firstname" name="firstname" required />
                            </div>
                            <div className={`${styles.formControl} ${styles.lastname}`}>
                                <label htmlFor="lastname">Last Name*</label>
                                <input type="text" autoComplete="family-name" id="lastname" name="lastname" required />
                            </div>
                            <div className={`${styles.formControl} ${styles.countryname}`}>
                                <label htmlFor="countryname">Country*</label>
                                <select autoComplete="country-name" id="countryname" name="countryname" required>
                                    <option value="ES" >Spain</option>
                                </select>
                            </div>
                            <div className={`${styles.formControl}  ${styles.address}`}>
                                <label htmlFor="address">Address*</label>
                                <input type="text" autoComplete="address" id="address" name="address" required />
                            </div>

                            <div className={`${styles.formControl}  ${styles.city}`}>
                                <label htmlFor="city">City*</label>
                                <input type="text" autoComplete="city" id="city" name="city" required />
                            </div>
                            <div className={`${styles.formControl}  ${styles.region}`}>
                                <label htmlFor="region">Region</label>
                                <input type="text" autoComplete="region" id="region" name="region" required />
                            </div>
                            <div className={`${styles.formControl}  ${styles.state}`}>
                                <label htmlFor="state">Zip or Postal Code*</label>
                                <input type="text" autoComplete="postal-code" id="state" name="state" required />
                            </div>
                            <div className={`${styles.formControl}  ${styles.phone}`}>
                                <label htmlFor="phone">Phone Number*</label>
                                <input type="tel" autoComplete="tel" id="phone" name="phone" required />
                            </div>
                            <div className={`${styles.formControl}`}>
                                <button type="submit" className={styles.btnsubmit}>Send</button>
                            </div>
                        </form>
                    </section>
                    <aside>
                        <h2>Order Info</h2>
                        <p>
                            Velit culpa irure fugiat fugiat proident quis consequat duis laborum in. Fugiat est exercitation incididunt ad magna. Aute adipisicing aliqua eu aute.
                        </p>
                    </aside>
                </article>
            </section>
            <section>
                <h2>Step 2</h2>
            </section>
            <section>
                <h2>Step 3</h2>
            </section>
        </section>
    )
}