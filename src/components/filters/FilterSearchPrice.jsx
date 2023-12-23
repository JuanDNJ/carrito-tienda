import { useFiltersCtx } from '@/context/FilterCtx'
import styles from './css/filtersearchprice.module.css'
export default function FilterSearchPrice() {
    const { filters, minPriceFilterId, setFilters } = useFiltersCtx()
    const minPrice = filters.price

    const handlerChangeMinPrice = (event) => {
        console.log(filters)
        setFilters(prev => ({
            ...prev,
            price: event.target.value,
        }))
    }
    return (
        <section className={styles.filterSearchPrice}>
            <strong>Search Price</strong>
            <label htmlFor={minPriceFilterId}>
                <input type="range" min="3" id={minPriceFilterId} max="1000" onChange={handlerChangeMinPrice} />
                <span className={styles.euro}>€</span><strong>{minPrice}</strong>
            </label>
        </section>
    )

}
