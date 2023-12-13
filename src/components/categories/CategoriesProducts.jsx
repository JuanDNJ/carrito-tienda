import { categories } from '@/data/categories.json'
import styles from './css/categories.module.css'
import { useFiltersCtx } from '@/context/FilterCtx'
import { capitalizeWord } from '@/utils'
import MenuFiltersOpenIcon from '../icons/MenuFiltersOpenIcon'
import MenuFiltersCloseIcon from '@/components/icons/MenuFiltersCloseIcon'
import { useGlobalCtx } from '@/context/GlobalCtx'
export default function CategoriesProducts() {

    const { filters, setFilters } = useFiltersCtx()
    const { isOpenFilters, toogleOpenFilters } = useGlobalCtx()
    const handlerClicCategorie = (event) => {

        setFilters(prev => {
            return ({
                ...prev,
                category: event.target.value,
                subcategory: 'all',

            })
        })
    }
    const handlerClicSubCategorie = (event) => {

        setFilters(prev => {
            return ({
                ...prev,
                subcategory: event.target.value
            })
        })
    }
    const renderButtonsCategories = categories.map((category, catKey) => {
        return (


            <button style={{

                border: '1px solid transparent',
                fontSize: '.8rem',
                padding: '.2rem',
                maxWidth: '150px',
                textAlign: 'justify',
                background: category.name === filters.category ? '#fff' : 'transparent',
                color: category.name === filters.category ? '#333' : 'silver'
            }} type='button' onClick={handlerClicCategorie} key={catKey} value={category.name}>
                {capitalizeWord(category.name)}
            </button>

        )
    })
    const category = categories.find(category => {
        if (category.name === filters.category) {
            return category
        }
    })


    const renderSubcategories = category && category.subcategories.map((subcategory, subKey) => {

        return <button style={{
            fontSize: '.8rem',
            textAlign: 'justify',
        }} type='button' onClick={handlerClicSubCategorie} key={subKey} value={subcategory.name}>{capitalizeWord(subcategory.name)}</button>


    })

    return (
        <section className={styles.containerCategories}>
            <article className={styles.categories}>
                <div onClick={toogleOpenFilters} className={styles.containerOpenFilters}>
                    {isOpenFilters ? <MenuFiltersCloseIcon fill={'#9009'} /> : <MenuFiltersOpenIcon fill={'#fff'} />}
                </div>
                <div className={styles.containerButtons}>
                    {renderButtonsCategories}

                </div>
                <article className={styles.subcategories}>
                    {renderSubcategories}
                </article>
            </article>

        </section>
    )
}