import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/HeroSection/HeroSection";
import ProgramInfo from "../Components/ProgramInfo/ProgramInfo";
import GetHired from "../Components/GetHired/GetHired";
import BoxShape from "../Components/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Certificate from "../Components/Certificatejob/Certificate";
import Project from "../Components/Project/Project";
import Syllabus from "../Components/Syllabus/Syllabus";
import ToolsCovered from "../Components/ToolsCovered/ToolsCovered";
import OurExpert from "../Components/OurExpert/OurExpert";
import Navbar from "../Components/Navbars8/Navbar";
import Footer from "../Components/Footers8/Footer";
import React, { useState } from "react";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>100% Placement Assistance Course - Learnbay</title>
        <meta
          name="description"
          content="Advance certification 100% placement assistance course with 1:1 Guaranteed 
        interview calls, 20+ Real-time projects, 3+ Capstone projects, 3 years of course 
        subscription ,Lifetime Access to recorded classes and 24/7 Learner’s support."
        />
        <meta
          name="Keywords"
          content="best data science course with placement assistance, data analytics course with job assistance, online data science course with placement assistance, data analytics online course with placement assistance, placement assistance data science course, job assitance machine learning courses, placement assistance artificial intelligence courses, data analytics course with placement assistance, machine learning course with placement assistance, data science Placement assistance program india, data science course with job assistance india, job assistance data science courses"
        />

        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?77928';
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = url;
            var options = {
          "enabled":true,
          "chatButtonSetting":{
              "backgroundColor":"#4dc247",
              "ctaText":"",
              "borderRadius":"10",
              "marginLeft":"0",
              "marginBottom":"30",
              "marginRight":"30",
              "position":"right"
          },
          "brandSetting":{
              "brandName":"Learnbay",
              "brandSubTitle":"The Learner's Path",
              "brandImg":"https://course.learnbay.co/Learnbay-Favicon-L.png",
              "welcomeText":"Hi there! How can I help you?",
 "messageText":"I am looking for course, and free career counselling session.",
              "backgroundColor":"#0a5f54",
              "ctaText":"Start Chat",
              "borderRadius":"25",
              "autoShow":false,
              "phoneNumber":"+919986049187"
          }
        };
            s.onload = function() {
                CreateWhatsappChatWidget(options);
            };
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);`,
          }}
        /> */}
        <script
          src="//code.tidio.co/mgl99n6cbvvabah9x8jj98no83kdozym.js"
          async
        ></script>
      </Head>
      <main>
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
        <Navbar radio={true} />
        <FirstSection
          deskTopPara="Experience-based certification course for professionals"
          mTopPara="Experience-based certification course for professionals"
          title="Data Science and AI Program"
          spanTitleText="With 100% Placement Assistance"
          desc="The course has been designed specifically for working professionals who choose to advance their careers in Data Science and AI."
        />
        <div className={styles.program}>
          <ProgramInfo
            BatchDate="2+ Years Work Experience"
            BatchDuration="Accredited with IBM"
            Placement="20+ Real Time Projects"
            EMI="₹ 10,816/month"
          />
        </div>
        <GetHired />
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In This Program"
            Box1h5="Custom-fit Training"
            box1desc="Get specially designed molecules as per your dream DS/AI role. Learn demanding DS/AI applications."
            Box2h5="Domain Focused"
            box2desc="Obtain cutting-edge DS/Al skills as per demanding IT-industry standards. Choose from 10+ domains."
            Box3h5="Premium Mentoring"
            box3desc="Enjoy the edge of mock interviews and CV writing workshops with FAANG Data Science/AI whizzes."
            Box4h5="Hands-on Experience"
            box4desc="Get diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant establishments."
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
            <p>
              Reach out and a learning consultant will get in touch with you
              shortly.
            </p>
          </div>
          <div className={styles.right}>
            <button onClick={popupShow}>Enquire Now</button>
          </div>
        </div>
        <Certificate
          popupHead="Download Brochure"
          title="Earn a globally recognized Certified at the end of your learning journey."
          desc="Get access to IBM cloud lab to keep an eye on trending industrial case studies of data mining, time-series forecasting, AI-based database management, and authenticated data handling."
          desc2="Experts from IBM share their ideas and tactics to deal with tricky business problems within the regularly changing analytical environments."
          desc3="Data Science Leads from IBM as instructors."
        />
        <Syllabus />
        <ToolsCovered />
        <div className={styles.ProjectWrapper} id="project">
          <Project domainDetails="7+" projectDetails="20+" />
        </div>

        <Footer />
      </main>
    </div>
  );
}
