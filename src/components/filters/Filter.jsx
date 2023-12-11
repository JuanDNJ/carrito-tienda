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

    const handlerChangeSubcategory = (event) => {
        setFilters(prev => ({
            ...prev,
            subcategory: event.target.value
        }))
    }

    return (
        <form className={styles.filters}>
            <section className={styles.category}>
                <label htmlFor={minPriceFilterId}>
                    <input type="range" min="3" id={minPriceFilterId} max="1000" onChange={handlerChangeMinPrice} />
                    <span className={styles.euro}>€</span><strong>{minPrice}</strong>
                </label>
                <label htmlFor={categoryFilterId}>
                    <select id={categoryFilterId} name="categories" defaultValue={'all'} onChange={handlerChangeMinCategory}>
                        <option value={'all'}>All</option>
                        {categories.map((category, key) => <option value={category.name} key={key}>{category.name}</option>)}
                    </select>
                </label>
            </section>
            <section className={styles.rightContent}>
                {/** TODO: Refactorizar */}
                {filters.category !== 'all' && (
                    <>
                        {categories.map((category, keyCat) => {
                            return <div key={keyCat}>
                                {category.name === filters.category && category.subcategories.length && <>
                                    {category.sex &&
                                        <div className='containerFilterSex'>
                                            <label htmlFor={'allsex'}>
                                                <span>All sex</span>
                                                <input type="radio" onChange={handlerChangeSex} id="allsex" name="sex" value={'all'} />
                                            </label>
                                            {category.sex.map((s, keySex) => (
                                                <label key={keySex} htmlFor={s.name}>
                                                    <span>{s.name}</span>
                                                    <input type="radio" onChange={handlerChangeSex} id={s.name} name="sex" value={s.name} />
                                                </label>
                                            ))}
                                        </div>
                                    }
                                    <div className='containerFilterSubcategorie'>
                                        <label htmlFor={'allsubcategory'}>
                                            <span>All Products</span>
                                            <input type="radio" onChange={handlerChangeSubcategory} id="allsubcategory" name="subcategory" value={'all'} />
                                        </label>
                                        {category.subcategories.map((subcategory, keysub) => (
                                            <label key={keysub} htmlFor={subcategory.name}>
                                                <span>{subcategory.name}</span>
                                                <input type="radio" onChange={handlerChangeSubcategory} id={subcategory.name} name="subcategory" value={subcategory.name} />
                                            </label>
                                        ))}
                                    </div>
                                </>}
                            </div>
                        })}
                    </>
                )}
            </section>
        </form >
    )

}
