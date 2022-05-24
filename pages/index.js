import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstSection from "../components/Data/HeroSection/HeroSection";
import ProgramInfo from "../components/Data/ProgramInfo/ProgramInfo";
import GetHired from "../components/Data/GetHired/GetHired";
import Domain from "../components/Data/Domain/Domain";
import BoxShape from "../components/Data/Boxshape/BoxShape";
import Popup from "../components/Data/Popup/Popup";
import Form from "../components/Data/Form/Form";
import Certificate from "../components/Data/Certificate/Certificate";
import Project from "../components/Data/Project/Project";
import Syllabus from "../components/Data/Syllabus/Syllabus";
import ToolsCovered from "../components/Data/ToolsCovered/ToolsCovered";
import OurExpert from "../components/Data/OurExpert/OurExpert";
import React, { useState } from "react";


export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Learnbay Courses</title>
        <meta name="description" content="Learnbay Courses" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <p>Fill the below Details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <FirstSection
        deskTopPara="Experience-based certification course for professionals"
        mTopPara="Experience-based certification course for professionals"
        title="Data Science and AI Certification Course With"
        spanTitleText="100% Job Guarantee or Money Back"
        desc="The course has been designed specifically for Tech Leads with 2 to 8 years of experience who choose to advance their careers in Data Science and AI, and it comes with a 100% Job Guarantee Data Science and AI Certification Course or money back policy."
      />
      <div className={styles.program}>
        <ProgramInfo
          BatchDate="2+ Years Work Experience"
          BatchDuration="Accredited with IBM"
          Placement="15+ Real Time Projects"
          EMI="₹ 16k/month*(9 Months)"
        />
      </div>
      <GetHired />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Learning modules"
          box1desc="Learn with modules created just for your dream job. Preparatory session for non-programmers."
          Box2h5="Domain-oriented Data Science Mastery"
          box2desc="Obtain data science skills on industry standards as Domain Expertise is in high demand."
          Box3h5="A Worry-free course with Job Guarantee"
          box3desc="Get advantage of personalized mock interviews and resume-writing sessions with FAANG professionals."
          Box4h5="Industrial Project Expertise"
          box4desc="Get hands-on experience working on projects, spanning from mid- to-high level complexity directly from firms."
        />
      </div>
      <div className={styles.ExpertWrapper}>
        <div className={styles.expert}>
          <h5>Our experts are from:</h5>
        </div>
        <div className={styles.expertBody}>
          <OurExpert />
        </div>
      </div>
      <div className={styles.cta}>
        <div className={styles.left}></div>
        <div className={styles.middle}>
          <h6>Talk to our team directly.</h6>
          <p>Reach out and a learning consultant will get in touch with you shortly.</p>
        </div>
        <div className={styles.right}>
          <button onClick={popupShow}>Enquire Now</button>
        </div>
      </div>
      <Certificate
        popupHead="Download Full stack Brochure"
        title="Earn a globally recognized IBM Certified Data Scientist Badge at the end of your learning journey."
        desc="Get access to IBM cloud lab to keep an eye on trending industrial case studies of data mining, time-series forecasting, AI-based database management, and authenticated data handling."
        desc2 ="Experts from IBM share their ideas and tactics to deal with tricky business problems within the regularly changing analytical environments."
        desc3 ="Data Science Leads from IBM as instructors."

      />
      <Syllabus />
      <ToolsCovered />
      <Domain />
      <div className={styles.ProjectWrapper} id="project">
        <Project />
      </div>
      </main> 
    </div>
  )
}
