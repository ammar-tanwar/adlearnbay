import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/Home/FirstSection/FirstSection1";
import Course from "../Components/Home/CourseHome/CourseGeneric";
import KeyFeatures from "../Components/Home/KeyFeatures/KeyFeatures";
import WhyLearnbay from "../Components/Home/WhyLearnbay/WhyLearnbay";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupport";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Navbar from "../Components/CoursePage/Navbar/Navbar";

import Footer from "../Components/CoursePage/Footer/Footer";
import React, { useState } from "react";
import BoxShape from "../Components/Boxshape/BoxShape1";
import MultiTabs from "../Components/Home/MultiTabs/MultiTabs";
import CareerImpactHome from "../Components/Home/CareerImpactHome/CareerImpact";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <div>
        <Head>
          <title>Learnbay Courses</title>
          <meta name="description" content="Learnbay Courses" />
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
                        "phoneNumber":"+919731135221"
                    }
                    };
                        s.onload = function() {
                            CreateWhatsappChatWidget(options);
                        };
                        var x = document.getElementsByTagName('script')[0];
                        x.parentNode.insertBefore(s, x);`,
          }}
        /> */}
          {/* <script
          src="//code.tidio.co/mgl99n6cbvvabah9x8jj98no83kdozym.js"
          async
        ></script> */}
        </Head>

        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below Details to get started</p> */}
            <Form popup={true} setTrigger={setPopups} radio={true} />
          </div>
        </Popup>

        <Navbar radio={true} formotp={true} />
        <FirstSection
          formotp={true}
          common={true}
          heading="#1 Domain Specialised Certification Program For"
          headingSpan="Working Professionals"
          des="Use your domain expertise to build a meaningful career. Crack interview
      in top product based MNCs with confidence."
          h1="1:1"
          p1="Dedicated Mentorship"
          h2="100%"
          p2="Assured Interview"
          h3="7+"
          p3="Domain Electives"
          style={{ margin: "20px" }}
          radio={true}
        />
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
        <Course radio={true} common={true} formotp={true} />
        <KeyFeatures />
        <WhyLearnbay radio={true} formotp={true} />
        <MultiTabs />
        <div className={styles.careerImpactNew}>
          <CareerImpactHome />
        </div>
        <LearnSupport />
        <Footer />
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
