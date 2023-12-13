import { Link } from "react-router-dom";
import { useProductCtx } from "@/context/ProductsCtx";
import { capitalizeWord } from '@/utils'
export default function Navigation() {
    const { prodCategories } = useProductCtx()
    return (
        <nav style={{
            flex: '1 100%',
            display: 'flex',
            gap: '.5rem',
            overflow: 'auto hidden'
        }}>
            {prodCategories.map(prodCat => <Link className="navigationLink" key={prodCat.id} to={prodCat.url}>{capitalizeWord(prodCat.name)}</Link>)}
        </nav>
    )
}