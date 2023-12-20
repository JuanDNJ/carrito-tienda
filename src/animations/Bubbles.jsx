import styles from './css/styles.module.css'
import { useGlobalCtx } from '@/context/GlobalCtx';

export default function Bubble({ top }) {
    const { initialBubbles } = useGlobalCtx();
    const random = (number, floor = true) => floor ? Math.floor(Math.random() * number) : Math.random()
    const bubblesRandom = random(initialBubbles)
    const r = random(255)
    const g = random(255)
    const b = random(255)
    const a = random(null, false)
    const positionY = random(1024)
    const positionX = random(1280)

    let animation = {
        top: 'BubblefloatTop 60s linear infinite alternate',
        bottom: 'BubblefloatBottom 60s linear infinite alternate'
    }

    const animationStyle = {
        top: positionY + 'px',
        left: positionX + 'px',
        background: `rgba(${r},${g},${b},${a})`,
        borderColor: `rgba(${r},${g},${b},${a})`,
        animation: bubblesRandom <= (initialBubbles / 2) ? animation.top : animation.bottom
    }
    return (
        <span style={animationStyle} className={styles.burbuja}></span>
    )
}

/* Para usarlo 
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
console.log(bubbles)

 {bubbles.map((rec, idKey) => {
        const { id, Bubble } = rec
        return (
            <Fragment key={idKey}>
                <Bubble top={'-'} />
            </Fragment>
        )
})} }
*/