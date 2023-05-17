import Head from "next/head";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import styles from './page.module.css';

const busao = [
  {
    name: "TERM. PRINC. ISABEL",
    linha: "5154-10",
    direcao: 1,
    paradas: [
      {
        cp: 340015750,
        np: "PARADA 1 - PORTUGAL B/C",
        ed: "R DEMOSTENES/ R LUISIANIA",
        py: -23.611994,
        px: -46.677742
      },
      {
        cp: 530015318,
        np: "JURUCE B/C",
        ed: "AV ARATAS/ AV JURUCE",
        py: -23.606836,
        px: -46.66517
      },
      {
        cp: 530015319,
        np: "MOEMA B/C",
        ed: "AV SABIA/ AV JURITI",
        py: -23.603016,
        px: -46.661581
      },
      {
        cp: 530015320,
        np: "REPUBLICA DO LIBANO B/C",
        ed: "AV INDIANOPOLIS/ R PRESTES JOAO",
        py: -23.599261,
        px: -46.658076
      }
    ],
    previsao: {
      hr: "01:27",
      ps: [
        {
          cp: 720015611,
          np: "",
          py: -23.620215,
          px: -46.700154,
          vs: []
        }
      ]
    }
  }
]


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
            <input placeholder="5154-10" className={styles.input_style} type="text" />
          </label>
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          <label>
            <input placeholder="1 = ida, 2 = volta" className={styles.input_style} type="text" />
          </label>
        </div>
      </section>

      <section>

        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.card__header}>
              <div className={styles.card__picture}>
                <div className={styles.card__picture_overlay}>&nbsp;</div>
                <img
                  src="images/onibus-image.png"
                  alt="bus img"
                  className={styles.card__picture_img}
                />
              </div>

              <h4 className={styles.heading_tertirary}>
                <span>N° da linha: {busao[0].linha}</span>
              </h4>
            </div>

            <div className={styles.card__details}>
              <h4 className={styles.card__sub_heading}>{busao[0].name}</h4>
              {/* <p className={styles.card__text}>
                Breathtaking hike through the Canadian Banff National Park
              </p> */}
              <div className={styles.card__data}>
                <svg className={styles.card__icon}>
                  <use href=""></use> {/* icon image */}
                </svg>
                <span>Direção: {busao[0].direcao} <br />
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
                <span>Previsão de chegada: {busao[0].previsao.ps.vs}</span>
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
                <span className={styles.card__footer_value}>{busao[0].paradas[0].np}</span>
                <span className={styles.card__footer_text}></span>
              </p>
              {/* <p className={styles.card__ratings}>
                <span className={styles.card__footer_value}>4.9</span>
                <span className={styles.card__footer_text}>rating (21)</span>
              </p> */}
              <a href="#" className={styles.btn}>Detalhes:</a>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </>
  )
}
