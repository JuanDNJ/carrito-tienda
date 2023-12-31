import { useParams } from "react-router-dom"
export default function ViewProduct() {
    const { product } = useParams()
    return (
        <h2 className="titleXL
        jajajaja">View Product {product}</h2>
    )
}