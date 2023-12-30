import './css/bento.css'
export default function BentoItem(props) {

    const { children } = props

    return (
        <article {...props}>
            {children}
        </article>
    )
}