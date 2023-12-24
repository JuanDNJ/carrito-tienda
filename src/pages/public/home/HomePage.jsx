import styles from './styles.module.css'
import WhatsNews from '@/components/watsnews/WhatsNews'
import Offers from '@/components/offers/Offers'
import { Link } from 'react-router-dom'
import ShopAll from '../shop-all/ShopAll'
import CategoryView from '@/components/categories/CategoryView'
export default function HomePage() {

    return (
        <section className='initialPage'>
            <h2 className={styles.titlePage}>Home</h2>
            <WhatsNews />
            <CategoryView />
            <Offers />
            <ShopAll />
        </section>
    )

}
