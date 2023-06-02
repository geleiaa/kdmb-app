"use client"
import Head from "next/head";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import styles from './page.module.css';
import { useRef, useState } from "react";
import BusCard from "@/components/BusCard";

// const busData = [
//   {
//     lineId: 1317,
//     name: "TERM. BANDEIRA",
//     linha: "6475-10",
//     direcao: 1,
//     paradas: [
//       {
//         cp: 706325,
//         np: "PARADA 14 BIS B/C",
//         ed: "",
//         py: -23.555934,
//         px: -46.650112
//       },
//       {
//         cp: 3407076,
//         np: "Parada Marina Cintra - B/C",
//         ed: "",
//         py: -23.577172,
//         px: -46.672544
//       },
//       {
//         cp: 4200953,
//         np: "GETULIO VARGAS B/C",
//         ed: "R DOUTOR PLINIO BARRETO/ R PROFESSOR PICAROLO",
//         py: -23.558836,
//         px: -46.653843
//       },
//       {
//         cp: 440015158,
//         np: "ESTADOS UNIDOS B/C",
//         ed: "R CRAVINHOS/ R HAITI",
//         py: -23.570012,
//         px: -46.661799
//       },
//       {
//         cp: 440015161,
//         np: "JOSE MARIA LISBOA B/C",
//         ed: "R JOSE MARIA LISBOA/ AL FRANCA",
//         py: -23.566834,
//         px: -46.658743
//       },
//       {
//         cp: 440015164,
//         np: "GUIANAS B/C",
//         ed: "AV BRASIL/ R ESPERIA",
//         py: -23.574389,
//         px: -46.667594
//       },
//       {
//         cp: 670016557,
//         np: "PARADA MUSEU JUDAICO DE SP - B/C",
//         ed: "VDTO MARTINHO PRADO/ R MAJOR QUEDINHO",
//         py: -23.551241,
//         px: -46.64583
//       }
//     ]
//   }
// ]

export default function Home() {
  const [busao, getbusaoData] = useState('');

  const lineRef = useRef();
  const directonRef = useRef();

  const submitBus = () => {
    //e.prevenDefault();

    const line = lineRef.current.value;
    const dir = directonRef.current.value;

    fetch(`http://localhost:1234/bus/line/${line}/direction/${dir}`)
      .then((resp) => resp.json())
      .then((data) => getbusaoData(data));

    console.log('data =>', busao);
  }

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
            <input ref={lineRef} placeholder="5154-10" className={styles.input_style} type="text" />
          </label>
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          <label>
            <input ref={directonRef} placeholder="1 = ida, 2 = volta" className={styles.input_style} type="text" />
          </label>
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          <button onClick={submitBus} className={styles.butaum}>
            Ver busao
          </button>
        </div>
      </section>
      <section>
        <BusCard busao={busao} />
      </section>
      <Footer />
    </>
  )
}
