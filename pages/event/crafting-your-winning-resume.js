import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../styles/DataScienceEvent.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import FirstSection from "../../Components/NewWebinar/FirstSection/FirstSection";
import SliderTabs from "../../Components/NewWebinar/SliderTab/SliderTabs";
import BottomSection from "../../Components/NewWebinar/BottomSection/BottomSection";

export default function DataScienceEvent() {
  const [mobile, setMobile] = useState(false);


  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, [mobile]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Crafting Your Winning Resume - Learnbay</title>
        <meta
          name="description"
          content="Crafting Your Winning Resume - Learnbay"
        />
        <meta
          name="Keywords"
          content="Crafting Your Winning Resume - Learnbay"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
      </Head>
      <Navbar event={true} eventDateInfo={true} formotp={true} />
      <FirstSection />
      <SliderTabs />
      <BottomSection />
    </div>
  );
}

