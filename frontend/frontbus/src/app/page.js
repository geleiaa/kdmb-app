import Head from "next/head";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import styles from './page.module.css';

const busao = {
  name: "TERM. CAPELINHA",
  linha: "6475-10",
  direcao: 1,
  location: {
    lat: "1234",
    lng: "5678"
  },
  previsao: "17:00"
}

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
        <div className={styles.bus_input}>
          <label>
            <input placeholder="N° da Linha" className={styles.input_style} type="text" />
          </label>
          &nbsp;&nbsp;
          <label>
            <input placeholder="Nome do Bus" className={styles.input_style} type="text" />
          </label>
          &nbsp;&nbsp;
          <label>
            <input placeholder="Direção" className={styles.input_style} type="text" />
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

              <h4 className={styles.heading_tertirary}>
                <span>N° da linha: {busao.linha}</span>
              </h4>
            </div>

            <div className={styles.card__details}>
              <h4 className={styles.card__sub_heading}>{busao.name}</h4>
              {/* <p className={styles.card__text}>
                Breathtaking hike through the Canadian Banff National Park
              </p> */}
              <div className={styles.card__data}>
                <svg className={styles.card__icon}>
                  <use href=""></use> {/* icon image */}
                </svg>
                <span>Direção: {busao.direcao} <br />
                  1-indo <br /> 2-voltando
                </span>
              </div>
              {/* <div className={styles.card__data}>
                <svg className={styles.card__icon}>
                  <use href=""></use>
                </svg>
                <span>April 2021</span>
              </div> */}
              <div className={styles.card__data}>
                <svg className={styles.card__icon}>
                  <use href=""></use>
                </svg>
                <span>Previsão de chegada: {busao.previsao}</span>
              </div>
              {/* <div className={styles.card__data}>
                <svg className={styles.card__icon}>
                  <use href=""></use>
                </svg>
                <span>25 people</span>
              </div> */}
            </div>

            <div className={styles.card__footer}>
              <p>
                <span className={styles.card__footer_value}>Localização:</span>
                <span className={styles.card__footer_text}></span>
              </p>
              {/* <p className={styles.card__ratings}>
                <span className={styles.card__footer_value}>4.9</span>
                <span className={styles.card__footer_text}>rating (21)</span>
              </p> */}
              <a href="#" className={styles.btn}>Detalhes<br/>
              lat -{busao.location.lat}, <br/>
              lng -{busao.location.lng}
              </a>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </>
  )
}
