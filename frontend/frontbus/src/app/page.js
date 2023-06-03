"use client"
import Head from "next/head";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import styles from './page.module.css';
import { useRef, useState } from "react";
import BusCard from "@/components/BusCard";

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
