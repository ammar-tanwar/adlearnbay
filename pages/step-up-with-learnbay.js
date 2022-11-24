import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Navbar from "../Components/NavbarA/Navbar";
import Footer from "../Components/CoursePage/Footer/Footer";
import CareerImpactHome from "../Components/Home/CareerImpactHome/CareerImpact"
import CourseDs from "../Components/Marketing/CourseHomeDS/Course";
import CourseFs from "../Components/Marketing/CourseHomeFS/Course";
import MultiTabs from "../Components/Marketing/MultiTabs/MultiTabs";
import React, { useState } from "react";

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
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>
        <Navbar radio={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below Details to get started</p> */}

            <Form popup={true} setTrigger={setPopups} />
          </div>
        </Popup>
        <div className={styles.formqS}>
          <div className={styles.formS}>
            <h5>Make Great Career With India’s Finest Edtech Platform</h5>
            <p>Book a session for FREE!</p>
            <Form radio={true} />
          </div>
          <div className={styles.forml}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/landing+page.png"
              width="870"
              height="666"
              layout="intrinsic"
              alt="data science course in bangalore"
            />
            <div className={styles.infoS}>
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
        <div className={styles.formqSA}>
          <div className={styles.formSA}>
            <h5>About Us</h5>
            <p>
              Learnbay is an edtech platform dedicated exclusively to
              professionals. We provide Data Science and Full Stack Development
              programs dedicated to professionals only. More than 10,000+
              professionals had a successful and safe career transition with a
              250% salary hike from Learnbay, since 2015.
            </p>
          </div>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/about+us.png"
              width="870"
              height="666"
              layout="intrinsic"
              alt="data science course in bangalore"
            />
          </div>
        </div>
        <CourseDs />
        <CourseFs />
        <div className={styles.imgH}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Hiring-partner-review.png"
              width="1600px"
              height="82px"
              layout="intrinsic"
              alt="data science course in bangalore"
            />
          </div>
      <MultiTabs />
      <CareerImpactHome />
        <Footer numEmailHide={true}/>
      </main>
    </div>
  );
}
