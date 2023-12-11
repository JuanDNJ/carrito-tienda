import styles from './css/filters.module.css'
import { categories } from '@/data/categories.json'
import { useFiltersCtx } from '@/context/FilterCtx'
import { capitalizeWord } from '@/utils'
export default function FilterCategories() {
    const { filters, minPriceFilterId, categoryFilterId, setFilters } = useFiltersCtx()
    const minPrice = filters.price
    const handlerChangeMinPrice = (event) => {
        setFilters(prev => ({
            ...prev,
            price: event.target.value,
            sex: null
        }))

    }

    const handlerChangeMinCategory = (event) => {
        setFilters(prev => ({
            ...prev,
            category: event.target.value,
            sex: null
        }))

    }
    return (
        <>
            <label htmlFor={minPriceFilterId}>
                <input type="range" min="3" id={minPriceFilterId} max="1000" onChange={handlerChangeMinPrice} />
                <span className={styles.euro}>€</span><strong>{minPrice}</strong>
            </label>
            <label htmlFor={categoryFilterId}>
                <select id={categoryFilterId} name="categories" defaultValue={'all'} onChange={handlerChangeMinCategory}>
                    <option value={'all'}>All</option>
                    {categories.map((category, key) => <option value={category.name} key={key}>{capitalizeWord(category.name)}</option>)}
                </select>
            </label>
        </>
    )
}