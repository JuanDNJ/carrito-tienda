import styles from './css/filters.module.css'
import ShowSubcateriesByCategory from './ShowSubcateriesByCategory'
import FilterCategories from './FilterCategories'
import FilterByPrice from './FilterByPrice'
import FilterSearchPrice from './FilterSearchPrice'
export default function Filters() {

    return (
        <section className={styles.filters}>
            <FilterSearchPrice />
            <FilterCategories />
            <FilterByPrice />
            <ShowSubcateriesByCategory />
            <button onClick={() => { alert('Open modal filter') }}>Open Filter</button>
        </section >

    )

}

