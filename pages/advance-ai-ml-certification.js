import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Advance AI & ML Certification - Learnbay</title>
          <meta name="description" content="Advance AI & ML Certification - Learnbay" />
          <link rel="icon" href="/Learnbay-Favicon-L.png" />
        </Head>
    </div>
  );
}