import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Data Science Certification Course - Learnbay</title>
          <meta name="description" content="Data Science Certification Course - Learnbay" />
          <link rel="icon" href="/Learnbay-Favicon-L.png" />
        </Head>
    </div>
  );
}