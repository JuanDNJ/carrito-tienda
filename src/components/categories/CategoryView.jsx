import styles from './css/categoryview.module.css'
import { Link } from 'react-router-dom'
export default function CategoryView() {
    return (
        <section className={styles.gridHomeCategories}>
            <article className={styles.itemGridCat}>
                <Link className={styles.ImgLink} to='../category/jewelery'>
                    <img className={styles.img} src="https://img.freepik.com/premium-photo/golden-bracelets-earrings-rings-jewelery-gold-water-background-luxury-glamour-holiday-beauty-design-jewelry-brand-ads_360074-54396.jpg?w=2000" alt="" />
                </Link>
                <Link className={styles.link} to='../category/jewelery'>Jewelery</Link>
            </article>
            <article className={styles.itemGridCat}>
                <Link className={styles.ImgLink} to='../category/clothing'>
                    <img className={styles.img} src="https://media.burford.co.uk/images/SNY04089.jpg_edit.width-1440_05001m7uKQ0crRoI.jpg" alt="" />
                </Link>
                <Link className={styles.link} to='../category/clothing'>Clothing</Link>
            </article>
            <article className={styles.itemGridCat}>
                <Link className={styles.ImgLink} to='../category/electronics'>
                    <img className={styles.img} src="https://d2csxpduxe849s.cloudfront.net/media/E32629C6-9347-4F84-81FEAEF7BFA342B3/C0DBF8AC-DB0E-4621-96C05D3B6E366D02/E142C7C6-62EF-4320-A6C2DB6EB2B3F4E1/WebsiteJpg_XL-FELEC_Main%20Visual_Purple_Website.jpg" alt="" />
                </Link>
                <Link className={styles.link} to='../category/electronics'>Electronics</Link>
            </article>
            <article className={styles.itemGridCat}>
                <Link className={styles.ImgLink} to='../category/shoes'>
                    <img className={styles.img} src="https://hips.hearstapps.com/hmg-prod/images/shoe-pile-2023-0109-preview-6446d61957fde.jpg?crop=0.555xw:0.472xh;0.345xw,0.284xh&resize=768:*" alt="" />
                </Link>
                <Link className={styles.link} to='../category/shoes'>Shoes</Link>
            </article>
            <article className={styles.itemGridCat}>
                <Link className={styles.ImgLink} to='../category/home appliances'>
                    <img className={styles.img} src="https://www.midea.com/content/dam/midea-aem/gulf/kv3.jpg" alt="" />
                </Link>
                <Link className={styles.link} to='../category/home appliances'>Home Appliances</Link>
            </article>
        </section>
    )
}