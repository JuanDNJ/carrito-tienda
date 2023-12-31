import styles from './styles.module.css'
import WhatsNews from '@/components/watsnews/WhatsNews'
import Offers from '@/components/offers/Offers'
import ShopAll from '../shop-all/ShopAll'
import Bento from '@/components/bento/Bento'
import BentoItem from '@/components/bento/BentoItem'
import { Link } from 'react-router-dom'
import { categories } from '@/data/categories.json'

export default function HomePage() {

    const renderBentoItems = categories.map((cat, keyCat) => {
        return (
            <BentoItem key={keyCat} className={`bento-item small md-col-${cat.bentoColumn}`}>
                <Link className={styles.ImgLink} to={`../${cat.url}`}>
                    <img className='img-bento-item' src={cat.photoUrl} alt={`Category image ${cat.name}`} />
                </Link>
            </BentoItem>
        )
    })


    return (
        <section >
            <h2 className={styles.titlePage}>Home</h2>
            <article className={styles.initialPage}>
                <WhatsNews />
                <Bento className={`bentoGrid grid-cols-10`} >
                    {renderBentoItems}
                </Bento>
                <Offers />
                <ShopAll />
            </article>
        </section>
    )

}
