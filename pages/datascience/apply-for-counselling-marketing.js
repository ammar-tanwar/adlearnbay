import Head from "next/head";
import styles from "../../styles/Home.module.css";
import React from "react";
import Navbar from "../../Components/NavbarA/Navbar";

import Footer from "../../Components/FooterA/Footer";
import Form from "../../Components/Form/Form";
import Image from "next/image";
function Counselling() {
  return (
    <>
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
            <h1 className={styles.markH1}>
              #1 Domain Specialised Certification Program For{" "}
              <span className={styles.markSpan}>Working Professionals</span>
            </h1>
            <p className={styles.markP}>Book 1-1 FREE counselling session</p>
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
        <Footer mobileNum={true} email={true} />
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function (botId) {
        var s = document.createElement("script");
        s.async = true;
        s.type = 'text/javascript';
        s.src = "https://app.chat360.io/widget/chatbox/common_scripts/script.js";
        s.onload = function () {
          window.loadChat360Bot(botId);
        };
        s.onerror = function (err) {
          console.error(err);
        };
        document.body.appendChild(s);
      })("4f4d2e98-0778-4fb7-a9c3-af6fd1bedad8");
  `,
        }}
      />
    </>
  );
}

export default Counselling;
