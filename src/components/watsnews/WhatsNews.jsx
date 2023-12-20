import styles from './css/styles.module.css'
import Bubble from '@/animations/Bubbles';
import { Fragment } from 'react';
import { useGlobalCtx } from '@/context/GlobalCtx';

export default function WhatsNews() {

    return (
        <section className={styles.news}>
            <h3 className={styles.titleNews}>WHAT`S NEW?</h3>
        </section>
    )
}