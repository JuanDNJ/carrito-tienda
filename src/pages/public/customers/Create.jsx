export default function Create() {
    return (
        <section>
            <h2>Create New Customer Accopunt</h2>
            <form>
                <div>
                    <label>
                        <span>Fisrst Name*</span>
                        <input type="text" autoComplete="name" required />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Last Name*</span>
                        <input type="text" autoComplete="lastname" required />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Email*</span>
                        <input type="Email" autoComplete="Email" required />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Password*</span>
                        <input type="password" autoComplete="password" required />
                    </label>
                    <label>
                        <span>Confirm Password*</span>
                        <input type="password" autoComplete="password" required />
                    </label>
                    <label className="showpassword">
                        <input type="checkbox" name="showpassword" />
                        <span>Show Password</span>
                    </label>
                </div>
                <div>
                    <button type="submit">Create Account</button>
                </div>
            </form>
        </section>
    )
}