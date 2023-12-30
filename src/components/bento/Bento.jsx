
import './css/bento.css'
export default function Bento(props) {
    const { children } = props;
    return (

        <section {...props} >
            {children}
        </section>
    )
}