import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/Home/FirstSection/FirstSection1";
import Course from "../Components/Home/CourseHome/Course";
import KeyFeatures from "../Components/Home/KeyFeatures/KeyFeatures";
import WhyLearnbay from "../Components/Home/WhyLearnbay/WhyLearnbay";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupport";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Navbar from "../Components/NavbarHome/Navbar";
import Footer from "../Components/FooterHome/Footer";
import React, { useState } from "react";
import BoxShape from "../Components/Boxshape/BoxShape1"
import MultiTabs from "../Components/Home/MultiTabs/MultiTabs";
import FormSection from "../Components/Home/FormSection/FormSection"
import CareerImpactHome from "../Components/Home/CareerImpactHome/CareerImpact"

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
        <script
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
              "messageText":"Hello, I have a question about {{page_link}}",
              "backgroundColor":"#0a5f54",
              "ctaText":"Start Chat",
              "borderRadius":"25",
              "autoShow":false,
              "phoneNumber":"+917795687988"
          }
        };
            s.onload = function() {
                CreateWhatsappChatWidget(options);
            };
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);`,
          }}
        />
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

      <Navbar radio={true} />
      <FirstSection style={{ margin: "20px" }} radio={true} />
      <div className={styles.boxWrap}>
        <h2>Get Certified & Move Towards Your Dream Job</h2>
        <p className={styles.boxp}>
          Our Domain Specialisation and Industry Certified Capstone Projects helps you to
          make your past work experience relevant
        </p>
        <div className={styles.boxShape}>
          <BoxShape />
        </div>
      </div>
      <Course radio={true} />
      <KeyFeatures />
      <WhyLearnbay radio={true} />
      <MultiTabs />
      <FormSection dataScience={true} />
      <CareerImpactHome />
      <LearnSupport  organicNum={true}/>
      <Footer />
    </div>

  );
}
