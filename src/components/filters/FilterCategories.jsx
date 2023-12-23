import styles from './css/filterscategory.module.css'
import { categories } from '@/data/categories.json'
import { useFiltersCtx } from '@/context/FilterCtx'
import { capitalizeWord } from '@/utils'
import { useEffect, useState } from 'react'

export default function FilterCategories() {

    const { filters, categoryFilterId, setFilters } = useFiltersCtx()
    const [catSelected, setCatSelected] = useState('all')


    const handlerChangeCategory = (event) => {
        setCatSelected(() => event.target.value)
        console.log(filters)

    }
    useEffect(() => {
        setFilters(prev => ({
            ...prev,
            category: catSelected,
            sex: null
        }))
    }, [catSelected])
    return (
        <section className={styles.category}>
            <strong>Filter By Category</strong>
            <label htmlFor={categoryFilterId}>
                <select id={categoryFilterId} name="categories" defaultValue={'all'} onChange={handlerChangeCategory}>
                    <option value={'all'}>All</option>
                    {categories.map((category, key) => <option value={category.name} key={key}>{capitalizeWord(category.name)}</option>)}
                </select>
            </label>
        </section>

    )

}
