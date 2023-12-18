import { Link } from "react-router-dom";
import { useProductCtx } from "@/context/ProductsCtx";
import { capitalizeWord } from '@/utils'
export default function Navigation() {
    const { prodCategories } = useProductCtx()
    console.log(location.pathname)
    return (
        <nav style={{
            flex: '1 100%',
            display: 'flex',
            overflow: 'auto hidden'
        }}>
            {prodCategories.map(prodCat => <Link className="navigationLink" key={prodCat.id} to={location.pathname + prodCat.url}>{capitalizeWord(prodCat.name)}</Link>)}
        </nav>
    )
}