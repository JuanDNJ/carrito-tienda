import styles from './css/filters.module.css'
import ShowSubcateriesByCategory from './ShowSubcateriesByCategory'
import FilterCategories from './FilterCategories'

export function Filters() {

    return (
        <form className={styles.filters}>
            <section className={styles.category}>
                <FilterCategories />

            </section>
            <section className={styles.rightContent}>
                <ShowSubcateriesByCategory />
            </section>
        </form >
    )

}
