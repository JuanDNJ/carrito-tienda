import { Link } from 'react-router-dom'
import styles from './css/styles.module.css'
import SigninForm from '@/components/forms/SigninForm'
export default function Signin() {
    return (
        <section className={styles.containerCustomers}>
            <article className={styles.customerLogin}>
                <div className={styles.customerTitle}>
                    <strong>Login Customers</strong>
                </div>
                <p className={styles.paragraf}>If you have an account, login in with your email and password.</p>
                <SigninForm />
            </article>
            <article className={styles.newCustomers}>
                <div className={styles.customerTitle}>
                    <strong>New Customers</strong>
                </div>
                <p className={styles.paragraf}>If you have not created an account yet, you will not get the benefits such as gifts, receiving offers only for customers and many more benefits. What are you waiting for, create your account.</p>
                <div className={styles.formControl}>
                    <Link className={styles.linkFormCreateCustomers} to="../create">Create an Account</Link>
                </div>
            </article>
        </section>
    )
}