import styles from './css/styles.module.css'
export default function CheckOutCart() {
    return (
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
            <div className={`${styles.formControl}  ${styles.postalCode}`}>
                <label htmlFor="postalcode">Zip or Postal Code*</label>
                <input type="text" autoComplete="postal-code" id="postalcode" name="postalcode" required />
            </div>
            <div className={`${styles.formControl}  ${styles.phone}`}>
                <label htmlFor="phone">Phone Number*</label>
                <input type="tel" autoComplete="tel" id="phone" name="phone" required />
            </div>
            <div className={`${styles.formControl}`}>
                <button type="submit" className={styles.btnsubmit}>Send</button>
            </div>
        </form>
    )
}