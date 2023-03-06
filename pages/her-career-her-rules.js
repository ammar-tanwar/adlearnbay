import Head from "next/head";
import styles from "../styles/Home.module.css";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Navbar from "../Components/Marketing/Navbar/Navbar";
import Footer from "../Components/CoursePage/Footer/Footer";
import React, { useState } from "react";
import FirstSection from "../Components/Marketing/FirstSection/FirstSection";
import CourseSection from "../Components/Marketing/CourseSection/Course";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <Head>
        <title>Learnbay Courses</title>
        <meta name="description" content="Learnbay Courses" />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
      </Head>
      <main>
        <Navbar radio={true} stepupJobExp={true} />
        <Popup
          trigger={popups}
          setTrigger={setPopups}
          className="popupInnersotp"
          formIMG={true}
        >
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below Details to get started</p> */}

            <Form popup={true} setTrigger={setPopups} stepupJobExp={true} referral={true}/>
          </div>
        </Popup>
        <FirstSection />
        <div className={styles.WDHead}>
          <h1>Our Courses</h1>
        </div>
        <CourseSection />
        <div className={styles.WDHead}>
          <h1>About Learnbay</h1>
          <p>
            We are a leading provider of specialized courses in Data Science,
            AI, ML, and Full Stack. We are dedicated to helping working
            professionals advance their careers and gain the technical expertise
            needed to succeed in the fast-paced world of technology.
          </p>
          <p>
            <b>Some of our standout features include:</b>
          </p>
          <div className={styles.WDFeatureD}>
            <div className={styles.WDFeature}>
              <div className={styles.WDlist}>
                <p>
                  <FaCheck /> Learn from tech experts
                </p>
                <p>
                  <FaCheck /> Personalised mentorship
                </p>
                <p>
                  <FaCheck /> Industry-specific syllabus
                </p>
                <p>
                  <FaCheck /> 250+ hiring partners
                </p>
              </div>
              <p className={styles.WDstrip}>
                <FaCheck /> 100% guaranteed interview calls
              </p>
            </div>
          </div>
          <div className={styles.WDFeatureM}>
            <div className={styles.WDFeature}>
              <div className={styles.WDlist}>
                <p>
                  <FaCheck /> Learn from tech experts
                </p>
                <p>
                  <FaCheck /> Personalised mentorship
                </p>
                <p>
                  <FaCheck /> Industry-specific syllabus
                </p>
                <p>
                  <FaCheck /> 250+ hiring partners
                </p>
              </div>
              <p className={styles.WDstrip}>
                <FaCheck /> 100% guaranteed interview calls
              </p>
              <div className={styles.imgNew}>
              <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/WD-Feature-right.png"
          width="220"
          height="400"
          layout="intrinsic"
          loading="lazy"
        />
        </div>
            </div>
          </div>
        </div>
        <div className={styles.WDformbg}>
          <div className={styles.FormThank}>
            <h4>You're one step closer to speaking with a Career Counsellor</h4>
            <Form radio={true} stepupJobExp={true} referral={true}/>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
