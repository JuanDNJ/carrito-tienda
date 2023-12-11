import { useFiltersCtx } from '@/context/FilterCtx'
import { capitalizeWord } from '@/utils'

export default function FilterSubCategories({ subcategories }) {

    const { filters, setFilters } = useFiltersCtx()

    const handlerChangeSubcategory = (event) => {
        setFilters(prev => ({
            ...prev,
            subcategory: event.target.value
        }))
    }

    return (
        <div className='containerFilterSubcategorie'>
            <label htmlFor={'allsubcategory'}>
                <span>All {capitalizeWord(filters.category)}</span>
                <input type="radio" onChange={handlerChangeSubcategory} id="allsubcategory" name="subcategory" value={'all'} />
            </label>
            {subcategories.map((subcategory, keysub) => (
                <label key={keysub} htmlFor={subcategory.name}>
                    <span>{capitalizeWord(subcategory.name)}</span>
                    <input type="radio" onChange={handlerChangeSubcategory} id={subcategory.name} name="subcategory" value={subcategory.name} />
                </label>
            ))}
        </div>
    )
}