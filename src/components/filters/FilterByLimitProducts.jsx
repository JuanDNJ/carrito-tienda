import { useFiltersCtx } from '@/context/FilterCtx'
export default function FilterByLimitProducts() {
    const { filterdProducts } = useFiltersCtx()
    const pagination = (limit, page) => {
        const pages = filterdProducts(products).reduce((accumulator, currentElement, currentIndex) => {
            const pageIndex = Math.floor(currentIndex / limit);
            if (!accumulator[pageIndex]) {
                accumulator[pageIndex] = []; // Inicializa la página si aún no existe
            }
            accumulator[pageIndex].push(currentElement);
            return accumulator;
        }, [])
        return pages[page]
    }
    const changeLimit = (event) => {
        setSettingsPagination(prev => ({ ...prev, limit: event.target.value }))
    }
    const [settingsPagination, setSettingsPagination] = useState({
        limit: 20,
        page: 0
    })

    return (
        <div>
            <input type="range" name="limit" min="5" max="20" onInput={changeLimit} value={settingsPagination.limit} /> Limit: {settingsPagination.limit}
        </div>
    )
}