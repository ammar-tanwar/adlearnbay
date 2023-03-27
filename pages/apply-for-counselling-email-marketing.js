import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import Navbar from "../Components/NavbarA/Navbar";
import OfferPopup from "../Components/OfferPopup/OfferPopup";
import Footer from "../Components/FooterA/Footer";
import Form from "../Components/Form/Form";
import Image from "next/image";
function Counselling() {
  return (
    <div className={styles.container1}>
      <Head>
        <title>Learnbay Courses</title>
        <meta name="description" content="Learnbay Courses" />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
      </Head>
      <Navbar radio={true} />
      <div className={styles.formq1}>
        <div className={styles.formr}>
          <Form radio={true} />
        </div>
        <div className={styles.forml}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/home-page-header.webp"
            width="870"
            height="666"
            layout="intrinsic"
            alt="data science course in bangalore"
          />
          <div className={styles.info}>
            <div className={styles.left}>
              <h5>1:1</h5>
              <p>Dedicated Mentorship</p>
            </div>
            <div className={styles.middle}>
              <h5>100%</h5>
              <p>Assured Interview</p>
            </div>
            <div className={styles.right}>
              <h5>7+</h5>
              <p>Domain Electives</p>
            </div>
          </div>
        </div>
      </div>
      <Footer mobileNum={true} />
      <OfferPopup />
    </div>
  );
}

export default Counselling;
