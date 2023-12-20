import { useParams } from "react-router-dom"
export default function ProductHome() {
    const { product } = useParams()

    return (

        <section >
            <h2>{product}</h2>
        </section>

    )

}