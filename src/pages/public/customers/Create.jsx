import styles from './css/styles.module.css';
import CreateNewAccount from '@/components/forms/CreateNewAccount';
export default function Create() {
    return (
        <section className={`${styles.containerCustomers} ${styles.createCustomers}`}>
            <CreateNewAccount />
        </section>
    )
}