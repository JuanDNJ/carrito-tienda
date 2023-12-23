import styles from './css/filtersbyprice.module.css'
import { useFiltersCtx } from '@/context/FilterCtx'
import { capitalizeWord } from '@/utils';

export default function FilterByPrice() {
    const { filters, setFilters } = useFiltersCtx();
    const handlerOrderByMinor = () => {
        console.log(filters)
        setFilters((prev) => ({
            ...prev,
            minor: true,
            elderly: false
        }))
    }
    const handlerOrderByElderly = () => {
        console.log(filters)
        setFilters((prev) => ({
            ...prev,
            minor: false,
            elderly: true
        }))
    }
    return (
        <div className={styles.orderByPrice}>
            <strong>Filter By Price</strong>
            <label htmlFor={'minor'}>
                <span>{capitalizeWord('minor')} Price</span>
                <input type="radio" onChange={handlerOrderByMinor} id="minor" name="orderbyprice" />
            </label>
            <label htmlFor={'elderly'}>
                <span>{capitalizeWord('elderly')} Price</span>
                <input type="radio" onChange={handlerOrderByElderly} id="elderly" name="orderbyprice" />
            </label>
        </div>
    )
}