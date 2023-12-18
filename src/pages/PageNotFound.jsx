import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <section>
            <h1 style={{ color: '#333' }}>Page not found</h1>
            <Link to="home">Return</Link>
        </section>
    )
}