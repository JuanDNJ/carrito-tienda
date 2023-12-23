import { useFiltersCtx } from '@/context/FilterCtx'
import { capitalizeWord } from '@/utils'
import styles from './css/filters-subcategory.module.css'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
export default function FilterSubCategories({ subcategories }) {

    const { filters, setFilters } = useFiltersCtx()
    const [subCatSelected, setSubCatSelected] = useState('all')
    const refSub = useRef()

    const handlerChangeSubcategory = (event) => {
        setSubCatSelected(() => event.target.value)
    }

    useEffect(() => {

        if (subCatSelected === 'all') {
            refSub.current.checked = true
        } else {
            refSub.current.checked = false
        }

        setFilters(prev => ({
            ...prev,
            subcategory: subCatSelected
        }))

    }, [subCatSelected])

    return (
        <div className={styles.containerFilterSubcategorie}>
            <strong>Filter by SubCategory</strong>
            <label htmlFor={filters.category}>
                <span>All {capitalizeWord(filters.category)}</span>
                <input ref={refSub} type="radio" onChange={handlerChangeSubcategory} id={filters.category} name="select" value={'all'} />

            </label>

            {subcategories.map((subcategory, keysub) => (
                <label key={keysub} htmlFor={subcategory.name}>
                    <span>{capitalizeWord(subcategory.name)}</span>
                    <input type="radio" onChange={handlerChangeSubcategory} id={subcategory.name} name="select" value={subcategory.name} />
                </label>
            ))}
        </div>
    )
}