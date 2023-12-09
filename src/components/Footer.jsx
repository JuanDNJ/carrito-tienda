
import { useFiltersCtx } from "../context/FilterCtx";
export function Footer() {
    const { filters } = useFiltersCtx()
    return (
        <footer className="footer">
            <h4>Prueba técnica de React <span>@juanDNJ</span></h4>
            <h5>Shoping Cart con context & useReducer</h5>
            <pre>{JSON.stringify(filters, null, 2)}</pre>
        </footer>

    )
}