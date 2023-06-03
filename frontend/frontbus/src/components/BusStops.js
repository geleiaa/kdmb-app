import { useState } from "react";
import styles from "./components.module.css"

const BusStops = ({ busStops }) => {
    const [optValue, getOptVal] = useState("");

    const getValue = (e) => {
        const paradaId = e.target.value;

        fetch(`http://localhost:1234/bus/bus-stop/${paradaId}/bus-line/${busStops[0].lineId}`)
            .then((resp) => resp.json())
            .then((data) => getOptVal(data));
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
                <div>
                    {
                        optValue

                            ? optValue.map(val =>
                                <spam>
                                    Previsão de chegada
                                    <p className={styles.card__text}> as {val.previsao}</p>
                                </spam>
                            )

                            : <p></p>
                    }
                </div>
            </div>
        </>
    )
}

export default BusStops;