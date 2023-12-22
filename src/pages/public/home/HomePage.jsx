import styles from './styles.module.css'
import WhatsNews from '@/components/watsnews/WhatsNews'
import Offers from '@//components/offers/Offers'
import { Link } from 'react-router-dom'
import ShopAll from '../shop-all/ShopAll'
function HomePage() {

    return (
        <section className='initialPage'>
            <h2 className={styles.titlePage}>Home</h2>
            <WhatsNews />
            <section className={styles.gridHomeCategories}>
                <article className={styles.itemGridCat}>
                    <Link className={styles.ImgLink} to='/'>
                        <img className={styles.img} src="https://img.freepik.com/premium-photo/golden-bracelets-earrings-rings-jewelery-gold-water-background-luxury-glamour-holiday-beauty-design-jewelry-brand-ads_360074-54396.jpg?w=2000" alt="" />
                    </Link>
                    <Link className={styles.link} to='/'>Jewelery</Link>
                </article>
                <article className={styles.itemGridCat}>
                    <Link className={styles.ImgLink} to='/'>
                        <img className={styles.img} src="https://media.burford.co.uk/images/SNY04089.jpg_edit.width-1440_05001m7uKQ0crRoI.jpg" alt="" />
                    </Link>
                    <Link className={styles.link} to='/'>Clothing</Link>
                </article>
                <article className={styles.itemGridCat}>
                    <Link className={styles.ImgLink} to='/'>
                        <img className={styles.img} src="https://d2csxpduxe849s.cloudfront.net/media/E32629C6-9347-4F84-81FEAEF7BFA342B3/C0DBF8AC-DB0E-4621-96C05D3B6E366D02/E142C7C6-62EF-4320-A6C2DB6EB2B3F4E1/WebsiteJpg_XL-FELEC_Main%20Visual_Purple_Website.jpg" alt="" />
                    </Link>
                    <Link className={styles.link} to='/'>Electronics</Link>
                </article>
                <article className={styles.itemGridCat}>
                    <Link className={styles.ImgLink} to='/'>
                        <img className={styles.img} src="https://hips.hearstapps.com/hmg-prod/images/shoe-pile-2023-0109-preview-6446d61957fde.jpg?crop=0.555xw:0.472xh;0.345xw,0.284xh&resize=768:*" alt="" />
                    </Link>
                    <Link className={styles.link} to='/'>Shoes</Link>
                </article>
                <article className={styles.itemGridCat}>
                    <Link className={styles.ImgLink} to='/'>
                        <img className={styles.img} src="https://www.midea.com/content/dam/midea-aem/gulf/kv3.jpg" alt="" />
                    </Link>
                    <Link className={styles.link} to='/'>Home Appliances</Link>
                </article>
            </section>
            <Offers />
            <ShopAll />
        </section>

    )

}

export default HomePage

