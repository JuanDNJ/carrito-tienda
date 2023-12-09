import { IS_DEVELOPMENT } from "../config";
import { useFilters } from "../context/FilterCtx";
export function Footer() {
    const { filters } = useFilters()
    return (
        <footer className="footer">
            <h4>Prueba técnica de React <span>@juanDNJ</span></h4>
            <h5>Shoping Cart con context & useReducer</h5>
            {IS_DEVELOPMENT && <pre>{JSON.stringify(filters, null, 2)}</pre>}
        </footer>
    )
}