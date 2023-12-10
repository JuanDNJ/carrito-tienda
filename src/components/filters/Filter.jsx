import styles from './filters.module.css'
import { categories } from '../../data/categories.json'
import { useFiltersCtx } from '../../context/FilterCtx'

export function Filter() {
    const { filters, setFilters, minPriceFilterId, categoryFilterId } = useFiltersCtx()

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
    const handlerChangeSex = (event) => {
        setFilters(prev => ({
            ...prev,
            sex: event.target.value
        }))

    }
    return (
        <form className={styles.filters}>
            <label htmlFor={minPriceFilterId}>
                <input type="range" min="0" id={minPriceFilterId} max="1000" onChange={handlerChangeMinPrice} />
                <span>${minPrice}</span>
            </label>
            <label htmlFor={categoryFilterId}>
                <select id={categoryFilterId} name="categories" defaultValue={'all'} onChange={handlerChangeMinCategory}>
                    {categories.map((category, key) => <option value={category.name} key={key}>{category.name}</option>)}
                </select>
            </label>

            {filters.category === "clothing" && <div className={styles.sex}>
                <label htmlFor={'all'}>
                    <span>All</span>
                    <input type="radio" onChange={handlerChangeSex} id="all" name="sex" value={'all'} />
                </label>
                <label htmlFor={'men'}>
                    <span>Men</span>
                    <input type="radio" onChange={handlerChangeSex} id="men" name="sex" value={'men'} />
                </label>
                <label htmlFor={'women'}>
                    <span>Women</span>
                    <input type="radio" onChange={handlerChangeSex} id="women" name="sex" value={'women'} />
                </label>
            </div>}
        </form >
    )
}