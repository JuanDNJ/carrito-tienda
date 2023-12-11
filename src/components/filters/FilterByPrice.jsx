import styles from './css/filters.module.css'
import { useFiltersCtx } from '@/context/FilterCtx'
import { capitalizeWord } from '@/utils';

export default function FilterByPrice() {
    const { filters, setFilters } = useFiltersCtx();
    const handlerOrderByMinor = () => {
        setFilters((prev) => {
            return ({
                ...prev,
                minor: true,
                elderly: false
            })
        })
    }
    const handlerOrderByElderly = () => {
        setFilters((prev) => {
            return ({
                ...prev,
                minor: false,
                elderly: true
            })
        })
    }
    return (
        <div className={styles.orderByPrice}>
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