import styles from './css/styles.module.css'
import Bubble from '@/animations/Bubbles';
import { Fragment } from 'react';
import { useGlobalCtx } from '@/context/GlobalCtx';

export default function WhatsNews() {
    const { initialBubbles } = useGlobalCtx();

    const initBubbles = () => {
        let contBubbles = []
        for (let i = 0; i < initialBubbles; i++) {
            contBubbles = [...contBubbles, {
                id: i, Bubble
            }]
        }
        return contBubbles
    }
    const bubbles = initBubbles()
    // console.log(bubbles)
    return (
        <section className={styles.news}>
            <h3 className={styles.titleNews}>WHAT`S NEW?</h3>
            {bubbles.map((rec, idKey) => {
                const { id, Bubble } = rec
                return (
                    <Fragment key={idKey}>
                        <Bubble top={'-'} />
                    </Fragment>
                )
            })}
        </section>
    )
}