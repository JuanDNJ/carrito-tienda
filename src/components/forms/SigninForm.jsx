import { Link } from 'react-router-dom'
import styles from './css/styles.module.css'
import { useEffect, useRef, useState } from 'react'
export default function SigninForm() {
    const [isShowPassword, setShowPassword] = useState(false)
    const inputPassword = useRef()
    useEffect(() => {
        if (!inputPassword.current) return
        if (isShowPassword) {
            inputPassword.current.type = 'text'
        } else {
            inputPassword.current.type = 'password'
        }

    }, [isShowPassword])

    return (
        <form className={styles.formLogin} onSubmit={(event) => event.preventDefault()}>
            <div className={styles.formControl}>
                <label htmlFor='email'>Email*</label>
                <input type="email" autoComplete='email' required />
            </div>
            <div className={styles.formControl}>
                <label htmlFor='email'>Password*</label>
                <input ref={inputPassword} type="password" autoComplete='password' required />
            </div>
            <div className={`${styles.formControl} ${styles.formControlRow}`}>
                <input type="checkbox" onChange={(event) => setShowPassword(event.target.checked)} /> <span>Show Password</span>
            </div>
            <div className={`${styles.formControl} ${styles.formControlRow}`}>
                <button type="submit" className={`${styles.btnsubmit} ${styles.btnslogin}`}>Login</button>
                <Link className={`${styles.linkForm}`} to="../forgot-password"><span>Forgot your Password?</span></Link>
            </div>
        </form>
    )
}