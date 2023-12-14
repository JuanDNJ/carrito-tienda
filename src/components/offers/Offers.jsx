import styles from './css/styles.module.css'
import { useProductCtx } from '@/context/ProductsCtx'
import { useGlobalCtx } from '@/context/GlobalCtx';
import { calculateThePorcentage } from '@/utils';
import { AddToCartButton } from '@/components/buttons/AddToCartButton'

export default function Offers() {
    const { products } = useProductCtx();
    const { initialPorcentage } = useGlobalCtx();
    const offers = products.filter(product => product.offer === true)
    const renderOffers = offers.map(offer => {
        return (
            <li className={styles.itemListOffer} key={offer.id}>
                <img className={styles.imageOffer} src={offer.image} alt="" />
                <h2 className={styles.title}>{offer.title}</h2>
                <div className={styles.bottomBox}>
                    <div className={styles.containerPrice}>
                        <span className={styles.price}>€ {offer.price}</span>
                        <span className={styles.discount}>10% € {calculateThePorcentage(offer.price, initialPorcentage)}</span>
                    </div>
                    <div>
                        <AddToCartButton prod={offer} />
                    </div>
                </div>
            </li>
        )
    })
    console.log(offers)
    return (
        <section className={styles.offers}>
            <article>
                <header className={styles.header}>
                    <h2 className={styles.titleHeader}>Offers of the day</h2>
                </header>
                {/* TODO: Refactorizar para escritorio */}
                <section className={styles.containerScroll}>
                    <ul className={styles.listOffers}>
                        {renderOffers}
                    </ul>
                </section>

            </article>
        </section>
    )
}