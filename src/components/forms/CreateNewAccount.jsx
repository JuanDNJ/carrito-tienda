import styles from './css/styles.module.css'
import { useEffect, useRef, useState } from 'react'

export default function CreateNewAccount() {
    const refPassword = useRef()
    const refConfirmPassword = useRef()
    const [showPasswords, setShowPasswords] = useState({
        pass: false,
        confirm: false
    })

    const handlerOnChange = (checked) => {
        setShowPasswords({
            pass: event.target.checked,
            confirm: event.target.checked
        })
    }

    useEffect(() => {
        if (!refPassword.current && !refConfirmPassword.current) return

        if (showPasswords.pass && showPasswords.confirm) {
            refPassword.current.type = 'text'
            refConfirmPassword.current.type = 'text'
        } else {
            refPassword.current.type = 'password'
            refConfirmPassword.current.type = 'password'
        }


    }, [showPasswords.confirm, showPasswords.pass])
    return (
        <article className={`${styles.createNewAccount}`}>
            <h2 className='titleMD'>Create New Customer Account</h2>
            <form>

                <label>
                    <span>Fisrst Name*</span>
                    <input type="text" autoComplete="name" required />
                </label>

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
                        <input ref={refPassword} type="password" autoComplete="password" required />
                    </label>
                    <label>
                        <span>Confirm Password*</span>
                        <input ref={refConfirmPassword} type="password" autoComplete="password" required />
                    </label>
                    <label className="showpassword">
                        <input type="checkbox" onChange={(event) => handlerOnChange(event.target.checked)} name="showpassword" />
                        <span>Show Password</span>
                    </label>
                </div>
                <div>
                    <button type="submit">Create Account</button>
                </div>
            </form>
        </article>
    )
}