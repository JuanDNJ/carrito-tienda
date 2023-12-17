import styles from './css/styles.module.css'
import NavigateNextIcon from '@/components/icons/NavigateNextIcon'
import NavigateBeforeIcon from '@/components/icons/NavigateBeforeIcon'
import { useProductCtx } from '@/context/ProductsCtx'
import { useGlobalCtx } from '@/context/GlobalCtx';


import { Fragment, useRef } from 'react';

import Product from '@/components/products/Product'

export default function Offers() {
    const { header, titleHeader, containerScroll, listOffers, btnBefore, btnNext } = styles
    const { products } = useProductCtx();
    const { initialPorcentage } = useGlobalCtx();
    const offers = products.filter(product => product.offer === true)
    const ul = useRef(null)
    const refProduct = useRef()

    const renderOffers = offers.map(offer => {
        return (<Fragment key={offer.id}>
            <Product product={offer} refProduct={refProduct} />
        </Fragment>
        )
    })

    const handlerScroll = (scrollOffset) => {
        if (ul.current) {
            const w = ul.current.clientWidth
            if (scrollOffset === 0) ul.current.scrollLeft -= w
            if (scrollOffset === 1) ul.current.scrollLeft += w
        }

    }

    return (
        <section className={styles.offers}>
            <article>
                <header className={header}>
                    <h2 className={titleHeader}>Offers of the day</h2>
                </header>
                <section className={containerScroll}>
                    <ul ref={ul} className={listOffers}>
                        {renderOffers}
                    </ul>
                    <button className={btnBefore} onClick={() => handlerScroll(0)}>
                        <NavigateBeforeIcon fill="darkred" />
                    </button>
                    <button className={btnNext} onClick={() => handlerScroll(1)}>
                        <NavigateNextIcon fill="darkred" />
                    </button>
                </section>
            </article>
        </section>
    )

}
