import { useState } from "react";
import styles from "./components.module.css"

// const busForecast = [
//     {
//         hratual: '20:09',
//         previsao: '23:11',
//         paradaId: 4200953,
//         parada: 'PARADA ROBERTO SELMI DEI B/C'
//     }
// ]

const BusStops = ({ busStops }) => {
    const [optValue, getOptVal] = useState("");

    const getValue = (e) => {
        const paradaId = e.target.value;

        fetch(`http://localhost:1234/bus/bus-stop/${paradaId}/bus-line/${busStops[0].lineId}`)
            .then((resp) => resp.json())
            .then((data) => getOptVal(data));

        console.log('data 2 =>', optValue);
    }

    return (
        <>
            <div className={styles.card__data}>
                <p className={styles.card__text}>
                    Previsão de chegada <br />
                    por ponto:
                </p>
            </div> <br />
            <div className={styles.card__data}>
                <select className={styles.seleqiti} onChange={getValue}>
                    {
                        busStops
                            ? busStops[0].paradas.map((bus) =>
                                <option value={bus.cp} className={styles.card__text}>
                                    {
                                        bus.ed
                                    }
                                </option>
                            )
                            : <option>rua dos pontos</option>
                    }
                </select>
            </div>
            <div className={styles.card__data}>
                {
                    optValue

                        ? optValue.map(val =>
                            <p className={styles.card__text}>Previsão em &#8593; - {val.previsao}</p>
                        )

                        : <p></p>
                }
            </div>
        </>
    )
}

export default BusStops;