import styles from './filters.module.css'
import { categories } from '../../data/cat.json'
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
                {filters.category !== 'all' && (
                    <>
                        {categories.map((category, key) => {
                            if (category.name === filters.category && category.subcategories.length) {
                                if (category.sex) {
                                    return (
                                        <div key={key}>
                                            <label htmlFor={'all'}>
                                                <span>All</span>
                                                <input type="radio" onChange={handlerChangeSubcategory} id="all" name="subcategory" value={'all'} />
                                            </label>
                                            {category.sex.map((s, key) => (<>
                                                <label htmlFor={s.name}>
                                                    <span>{s.name}</span>
                                                    <input type="radio" onChange={handlerChangeSex} id={s.name} name="sex" value={s.name} />
                                                </label>
                                            </>))}
                                            {category.subcategories.map((subcategory, key) => (<>
                                                <label htmlFor={subcategory.name}>
                                                    <span>{subcategory.name}</span>
                                                    <input type="radio" onChange={handlerChangeSubcategory} id={subcategory.name} name="subcategory" value={subcategory.name} />
                                                </label>
                                            </>))}
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={key}>
                                            <label htmlFor={'all'}>
                                                <span>All</span>
                                                <input type="radio" onChange={handlerChangeSubcategory} id="all" name="subcategory" value={'all'} />
                                            </label>
                                            {category.subcategories.map((subcategory, key) => (<>
                                                <label htmlFor={subcategory.name}>
                                                    <span>{subcategory.name}</span>
                                                    <input type="radio" onChange={handlerChangeSubcategory} id={subcategory.name} name="subcategory" value={subcategory.name} />
                                                </label>
                                            </>))}
                                        </div>
                                    )
                                }

                            }
                            return null
                        })}
                    </>
                )}


                {/* {filters.category === "clothing" && <div className={styles.sex}>
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

                {filters.category === "electronics" && <div className={styles.subcategory}>
                    <label htmlFor={'allElectronics'}>
                        <span>All</span>
                        <input type="radio" onChange={handlerChangeSubcategory} id="allElectronics" name="subcategory" value={'all'} />
                    </label>
                    <label htmlFor={'hardDrive'}>
                        <span>Hard drive</span>
                        <input type="radio" onChange={handlerChangeSubcategory} id="hardDrive" name="subcategory" value={'hard drive'} />
                    </label>
                    <label htmlFor={'monitors'}>
                        <span>Monitors</span>
                        <input type="radio" onChange={handlerChangeSubcategory} id="monitors" name="subcategory" value={'monitors'} />
                    </label>
                    <label htmlFor={'laptops'}>
                        <span>Laptops</span>
                        <input type="radio" onChange={handlerChangeSubcategory} id="laptops" name="subcategory" value={'laptops'} />
                    </label>
                </div>}

                {filters.category === "jewelery" && <div className={styles.jewelery}>
                    <label htmlFor={'allElectronics'}>
                        <span>All</span>
                        <input type="radio" onChange={handlerChangeSubcategory} id="allElectronics" name="subcategory" value={'all'} />
                    </label>
                    <label htmlFor={'hardDrive'}>
                        <span>Gold drive</span>
                        <input type="radio" onChange={handlerChangeSubcategory} id="hardDrive" name="subcategory" value={'gold'} />
                    </label>
                    <label htmlFor={'monitors'}>
                        <span>Silver</span>
                        <input type="radio" onChange={handlerChangeSubcategory} id="monitors" name="subcategory" value={'silver'} />
                    </label>

                </div>} */}
            </section>
        </form >
    )
}