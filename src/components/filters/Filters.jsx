import styles from './css/filters.module.css'
import ShowSubcateriesByCategory from './ShowSubcateriesByCategory'
import FilterCategories from './FilterCategories'


export default function Filters() {

    return (
        <section className={styles.filters}>
            {<section className={styles.category}>
                <FilterCategories />
            </section>}
            <section className={styles.rightContent}>
                <ShowSubcateriesByCategory />
            </section>
        </section >
    )

}

