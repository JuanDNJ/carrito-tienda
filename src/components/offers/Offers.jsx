import styles from './css/styles.module.css'
import { useProductCtx } from '@/context/ProductsCtx'
import { useGlobalCtx } from '@/context/GlobalCtx';
import { calculateThePorcentage } from '@/utils';
import { AddToCartButton } from '@/components/buttons/AddToCartButton'
import NavigateNextIcon from '@/components/icons/NavigateNextIcon'
import NavigateBeforeIcon from '@/components/icons/NavigateBeforeIcon'
import { useRef } from 'react';

export default function Offers() {
    const { header, titleHeader, containerScroll, listOffers, btnBefore, btnNext } = styles
    const { products } = useProductCtx();
    const { initialPorcentage } = useGlobalCtx();
    const offers = products.filter(product => product.offer === true)
    const ul = useRef(null)



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
    const handlerClick = (scrollOffset) => {
        console.log(scrollOffset)

        if (ul.current) {
            console.log(ul.current.clientWidth / offers.length)
            const w = (offers.length * 32) + (ul.current.clientWidth / offers.length)
            if (scrollOffset === 0) {

                ul.current.scrollLeft -= w
            } else {
                ul.current.scrollLeft += w
            }

        }
    }
    // console.log(offers)
    return (
        <section className={styles.offers}>
            <article>
                <header className={header}>
                    <h2 className={titleHeader}>Offers of the day</h2>
                </header>
                {/* TODO: Refactorizar para escritorio */}

                <section className={containerScroll}>
                    <ul ref={ul} className={listOffers}>
                        {renderOffers}
                    </ul>
                    <button className={btnBefore} onClick={() => handlerClick(0)}>
                        <NavigateBeforeIcon />
                    </button>
                    <button className={btnNext} onClick={() => handlerClick(1)}>
                        <NavigateNextIcon />
                    </button>
                </section>

            </article>
        </section>
    )
}