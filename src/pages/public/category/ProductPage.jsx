import { useParams } from "react-router-dom"
export default function ProductPage() {
    const { product } = useParams()

    return (

        <section >
            <h2>{product}</h2>
        </section>

    )

}