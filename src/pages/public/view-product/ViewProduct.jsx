import { useParams } from "react-router-dom"
export default function ViewProduct() {
    const { product } = useParams()
    return (
        <h2>View Product {product}</h2>
    )
}