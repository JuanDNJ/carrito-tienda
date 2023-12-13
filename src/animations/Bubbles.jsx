import './css/styles.css'
export default function Bubble({ top }) {
    const initialBubbles = 500;
    const random = (number, floor = true) => floor ? Math.floor(Math.random() * number) : Math.random()
    const bubblesRandom = random(initialBubbles)
    const r = random(255)
    const g = random(255)
    const b = random(255)
    const a = random(null, false)
    const positionY = random(1024)
    const positionX = random(1280)

    let animation = {
        top: 'floatTop 60s linear infinite alternate',
        bottom: 'floatBottom 60s linear infinite alternate'
    }

    return (
        <span style={{
            top: positionY + 'px',
            left: positionX + 'px',
            background: `rgba(${r},${g},${b},${a})`,
            borderColor: `rgba(${r},${g},${b},${a})`,
            animation: bubblesRandom <= (initialBubbles / 2) ? animation.top : animation.bottom
        }} className='burbuja'></span>
    )
}