import { categories } from '@/data/categories.json'
import { useFiltersCtx } from '@/context/FilterCtx'
import FilterSex from './FilterSex'
import FilterSubCategories from './FilterSubCategories'

export default function ShowSubcateriesByCategory() {
    const { filters } = useFiltersCtx()
    return (<>
        {filters.category !== 'all' && (
            <>
                {categories.map((category, keyCat) => {
                    return <div key={keyCat}>
                        {category.name === filters.category && category.subcategories.length && <>
                            {category.sex && <FilterSex sexes={category.sex} />}
                            <FilterSubCategories subcategories={category.subcategories} />
                        </>}
                    </div>
                })}
            </>
        )}
    </>)
}