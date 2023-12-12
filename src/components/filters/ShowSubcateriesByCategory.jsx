import { categories } from '@/data/categories.json'
import { useFiltersCtx } from '@/context/FilterCtx'
import FilterSex from './FilterSex'
import FilterSubCategories from './FilterSubCategories'
import { Fragment } from 'react'

export default function ShowSubcateriesByCategory() {
    const { filters } = useFiltersCtx()
    return (
        <>
            {categories.map((category, keyCat) => {
                if (category.name === filters.category) {
                    return <Fragment key={keyCat}>
                        <FilterSubCategories subcategories={category.subcategories} />
                        {category.sex ? <FilterSex sexes={category.sex} /> : null}
                    </Fragment>
                }
            })}
        </>
    )
}