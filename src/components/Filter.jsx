import { categories } from '../data/categories.json'
import { useFiltersCtx } from '../context/FilterCtx'

export function Filter() {
    const { filters, setFilters, minPriceFilterId, categoryFilterId } = useFiltersCtx()

    const minPrice = filters.price


    const handlerChangeMinPrice = (event) => {
        setFilters(prev => ({
            ...prev,
            price: event.target.value
        }))

    }
    const handlerChangeMinCategory = (event) => {
        setFilters(prev => ({
            ...prev,
            category: event.target.value
        }))

    }
    return (
        <section className='filters'>
            <label htmlFor={minPriceFilterId}>
                <input type="range" min="5" id={minPriceFilterId} max="1000" onChange={handlerChangeMinPrice} />
                <span>${minPrice}</span>
            </label>
            <label htmlFor={categoryFilterId}>
                <select id={categoryFilterId} name="categories" defaultValue={categories[1].name} onChange={handlerChangeMinCategory}>
                    {categories.map((category, key) => <option value={category.name} key={key}>{category.name}</option>)}
                </select>
            </label>
        </section>
    )
}