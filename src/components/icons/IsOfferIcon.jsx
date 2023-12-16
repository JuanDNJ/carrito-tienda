import styles from './icons.module.css'
export default function IsOfferIcon({ fill, porcentage }) {
    const { text, tspan } = styles
    return (
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'}>
            <circle cx="50%" cy="50%" r="256" fill='red' />
            <text x="9%" y="65%" class={text}>
                {porcentage}<tspan class={tspan}>%</tspan>
            </text>
        </svg>


    )
}