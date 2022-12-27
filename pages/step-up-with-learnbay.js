import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Event/Form/Form";
import Navbar from "../Components/Marketing/Navbar/Navbar";
import Footer from "../Components/CoursePage/Footer/Footer";
import CareerImpactHome from "../Components/Home/CareerImpactHome/CareerImpact";
import BoxShape from "../Components/Boxshape/BoxShape1";
import SliderTabDS from "../Components/Marketing/SliderTabDS/SliderTabs";
import SliderTabFS from "../Components/Marketing/SliderTabFS/SliderTabs";
import HiringPatners from "../Components/Marketing/HiringPatnerWithReview/HiringPatners";
import CourseDs from "../Components/Marketing/CourseHomeDS/Course";
import CourseFs from "../Components/Marketing/CourseHomeFS/Course";
import React, { useState } from "react";
import {
  FaUserFriends,
  FaCompress,
  FaAddressCard,
  FaClone,
} from "react-icons/fa";

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
        <Navbar radio={true} stepupJobExp={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal" formIMG={true}>
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below Details to get started</p> */}

            <Form popup={true} setTrigger={setPopups} stepupJobExp={true} />
          </div>
        </Popup>
        <div className={styles.formqS}>
          <div className={styles.formS}>
            <h5>Earning in peanuts? Upskill with Learnbay</h5>
            <p>Book 1-1 free counselling session</p>
            <div>
              <div className={styles.rightF}>
                <section className={styles.form}>
                  <Form radio={true} stepupJobExp={true} />
                </section>
              </div>
            </div>
          </div>
          <div className={styles.forml}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/marketing/header.png"
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
        {/* <div className={styles.MVDiv}>
          <div className={styles.FirstDiv}>
            <div className={styles.FirstImg}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/marketing/mission.png"
                width="517"
                height="380"
                layout="intrinsic"
                alt="data science course in bangalore"
              />
            </div>
            <div className={styles.FirstText}>
              <h3>Mission</h3>
              <p className={styles.list}>
                Safeguarding your career, even under the most unstable job
                market scenario, via the acquisition of emerging
                technology-based unique skills.
              </p>
              <div className={styles.DivIcon}>
                <div className={styles.iconBox}>
                  <FaUserFriends
                    className={styles.BoxIconuser}
                    alt="data science course in bangalore"
                  />
                  <p> Literate everyone with data science knowledge.</p>
                </div>
                <div className={styles.iconBox}>
                  <FaCompress
                    className={styles.BoxIconcompress}
                    alt="data science course in bangalore"
                  />
                  <p>
                    Bust the myth that only IT pros can have lucrative careers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.MiddleDiv}>
            <div className={styles.FirstText}>
              <h3>Vision</h3>
              <p className={styles.list}>
                To lead the industrial training sector by generating demanding
                professionals with future proof technical skills and knowledge.
              </p>
              <div className={styles.DivIcon}>
                <div className={styles.iconBox}>
                  <FaAddressCard
                    className={styles.BoxIconcard}
                    alt="Learnbay data science course"
                  />
                  <p>Provide scopes to techies & non-techies all alike.</p>
                </div>
                <div className={styles.iconBox}>
                  <FaClone className={styles.BoxIconclone} />
                  <p>Ensure an extremely personalized learning experience.</p>
                </div>
              </div>
            </div>
            <div className={styles.MiddleImg}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/marketing/vision.png"
                width="517"
                height="330"
                layout="intrinsic"
                alt="data science course"
              />
            </div>
          </div>
        </div> */}
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
            <div className={styles.aboutStep}>
              <div className={styles.aboutBox}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/marketing/mission+(1).png"
                  width="100"
                  height="100"
                  layout="intrinsic"
                  alt="data science course in bangalore"
                />
                <p>
                  Safeguarding your career, even under the most unstable job market scenario, via the acquisition of emerging technology-based unique skills.
                </p>
              </div>
              <div className={styles.aboutBox}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/marketing/vision+2.png"
                  width="100"
                  height="100"
                  layout="intrinsic"
                  alt="data science course in bangalore"
                />
                <p>
                  To lead the industrial training sector by generating demanding professionals with future proof technical skills and knowledge.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/marketing/logo+609x619.png"
              width="870"
              height="666"
              layout="intrinsic"
              alt="data science course in bangalore"
            />
          </div>
        </div>
        <CourseDs />
        <SliderTabDS />
        <CourseFs />
        <HiringPatners topHead="Our Hiring Partners" />
        {/* <MultiTabs /> */}
        <div className={styles.boxWrap}>
          <h2>Get Certified & Move Towards Your Dream Job</h2>
          <p className={styles.boxp}>
            Our Domain Specialisation and Industry Certified Capstone Projects
            helps you to make your past work experience relevant
          </p>
          <div className={styles.boxShape}>
            <BoxShape />
          </div>
        </div>
        <CareerImpactHome />
        <Footer numEmailHide={true} />
      </main>
    </div>
  );
}
