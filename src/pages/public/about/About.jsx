import styles from './css/style.module.css'
import shopAbout from '@/assets/images/shop-about.jpg'
import shopCommunity from '@/assets/images/shop-community.jpg'
import shopEnvironmet from '@/assets/images/shop-environmet.jpg'

export default function About() {
    return (
        <section className={styles}>
            <h2 className='titlePage'>About</h2>
            <section className={styles.containerAbout}>
                <article className={styles.infoAbout}>
                    <section className={styles.containerInfo}>
                        <h2>About the Shop</h2>
                        <p>
                            Anim elit qui occaecat ad voluptate veniam pariatur ex occaecat nisi aliquip elit anim sint.
                            Et elit aute in ex et tempor aliqua sunt qui eu veniam consectetur ex. Ex ad voluptate laborum ullamco est.
                        </p>
                        <p>
                            Ut proident in labore pariatur dolore occaecat pariatur eiusmod aliquip nulla incididunt incididunt minim.
                            Laborum laboris est voluptate Lorem exercitation voluptate.
                            Veniam exercitation fugiat deserunt voluptate ad commodo fugiat sit Lorem nisi nostrud cillum officia officia.
                            Eu dolore nostrud magna minim est proident ipsum Lorem id labore.
                        </p>
                    </section>
                    <section className={styles.containerImg}>
                        <img className={styles.img} src={shopAbout} alt="Shop Aboout" />
                    </section>
                </article>
                <article className={styles.infoCommunity}>
                    <section className={styles.containerInfo}>
                        <h2>Connetc to the Community</h2>
                        <p>
                            Anim elit qui occaecat ad voluptate veniam pariatur ex occaecat nisi aliquip elit anim sint.
                            Et elit aute in ex et tempor aliqua sunt qui eu veniam consectetur ex. Ex ad voluptate laborum ullamco est.
                            Ut proident in labore pariatur dolore occaecat pariatur eiusmod aliquip nulla incididunt incididunt minim.
                        </p>
                        <p>
                            Laborum laboris est voluptate Lorem exercitation voluptate.
                            Veniam exercitation fugiat deserunt voluptate ad commodo fugiat sit Lorem nisi nostrud cillum officia officia.
                            Eu dolore nostrud magna minim est proident ipsum Lorem id labore.
                        </p>
                    </section>
                    <section className={styles.containerImg}>
                        <img className={styles.img} src={shopCommunity} alt="Shop Aboout" />
                    </section>
                </article>
                <article className={styles.infoEnvironmet}>
                    <section className={styles.containerInfo}>

                        <h2>Let`s take care of the environmet</h2>
                        <p>
                            Anim elit qui occaecat ad voluptate veniam pariatur ex occaecat nisi aliquip elit anim sint.
                            Et elit aute in ex et tempor aliqua sunt qui eu veniam consectetur ex. Ex ad voluptate laborum ullamco est.
                            Ut proident in labore pariatur dolore occaecat pariatur eiusmod aliquip nulla incididunt incididunt minim.
                        </p>
                        <p>
                            Laborum laboris est voluptate Lorem exercitation voluptate.
                            Veniam exercitation fugiat deserunt voluptate ad commodo fugiat sit Lorem nisi nostrud cillum officia officia.
                            Eu dolore nostrud magna minim est proident ipsum Lorem id labore.
                        </p>
                    </section>
                    <section className={styles.containerImg}>
                        <img className={styles.img} src={shopEnvironmet} alt="Shop Aboout" />
                    </section>
                </article>
            </section>
        </section>
    )
}