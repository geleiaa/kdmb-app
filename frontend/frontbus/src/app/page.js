import Head from "next/head";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
        <meta
          name="Kd meu busão"
          content="website using Next.js"
        />
      </Head>
      <HeaderNav />
      <section>
        <div>
          <label className={styles.wrapper}>
            <input type="text" placeholder="8000-10" name="text" className={styles.input} />
            <span className={styles.placeholder}>N° Linha</span>
          </label>
          &nbsp;&nbsp;
          <label className={styles.wrapper}>
            <input type="text" placeholder="Term. Seila" name="text" className={styles.input} />
            <span className={styles.placeholder}>Nome</span>
          </label>
          &nbsp;&nbsp;
          <label className={styles.wrapper}>
            <input type="text" placeholder="1" name="text" className={styles.input} />
            <span className={styles.placeholder}>Direção</span>
          </label>
        </div>
      </section>

      <section>

        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.card__header}>
              <div className={styles.card__picture}>
                <div className={styles.card__picture_overlay}>&nbsp;</div>
                {/* <img
                  src="img/tour-1-cover.jpg"
                  alt="Tour 1"
                  className={card__picture-img"
                /> */}
              </div>

              <h3 className={styles.heading_tertirary}>
                <span>The Forest Hiker</span>
              </h3>
            </div>

            <div className={styles.card__details}>
              <h4 className={styles.card__sub_heading}>Easy 5-day tour</h4>
              <p className={styles.card__text}>
                Breathtaking hike through the Canadian Banff National Park
              </p>
              <div className={styles.card__data}>
                <svg className={styles.card__icon}>
                  <use href=""></use>
                </svg>
                <span>Banff, Canada</span>
              </div>
              <div className={styles.card__data}>
                <svg className={styles.card__icon}>
                  <use href=""></use>
                </svg>
                <span>April 2021</span>
              </div>
              <div className={styles.card__data}>
                <svg className={styles.card__icon}>
                  <use href=""></use>
                </svg>
                <span>3 stops</span>
              </div>
              <div className={styles.card__data}>
                <svg className={styles.card__icon}>
                  <use href=""></use>
                </svg>
                <span>25 people</span>
              </div>
            </div>

            <div className={styles.card__footer}>
              <p>
                <span className={styles.card__footer_value}>$297</span>
                <span className={styles.card__footer_text}>per person</span>
              </p>
              <p className={styles.card__ratings}>
                <span className={styles.card__footer_value}>4.9</span>
                <span className={styles.card__footer_text}>rating (21)</span>
              </p>
              <a href="#" className={styles.btn}>Details</a>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </>
  )
}
