import BusStops from './BusStops';
import styles from './components.module.css';

const BusCard = ({ busao }) => {
    return (
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
                        <span>N° da linha: {busao ? busao[0].linha : "Ex: 5154-10"}</span>
                    </h4>
                </div>
                <div className={styles.card__details}>
                    <h4 className={styles.card__sub_heading}>
                        {
                            busao ? busao[0].name : "Ex: TERM. STO. AMARO"
                        }
                    </h4> <br /><br />

                    <BusStops busStops={busao} />
                </div>
                <div className={styles.card__footer}>
                    <p>
                        <span className={styles.card__footer_value}></span>
                        <span className={styles.card__footer_text}>
                            Direção:
                            {
                                busao
                                    ? busao[0].direcao === 1 ? " Indo..." : " Voltando..."
                                    : ""
                            }
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default BusCard;