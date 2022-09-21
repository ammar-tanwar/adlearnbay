import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FirstSection from "../Components/HeroSectionAiMl/HeroSection";
import ProgramInfo from "../Components/ProgramInfo/ProgramInfo";
import GetHired from "../Components/GetHiredAiMl/GetHired";
import Domain from "../Components/Domain/Domain";
import BoxShape from "../Components/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Certificate from "../Components/Certificate/Certificate";
import Project from "../Components/Project/Project";
import Syllabus from "../Components/SyllabusAiMl/Syllabus";
import ToolsCovered from "../Components/ToolsCoveredAdvance/ToolsCovered";
import OurExpert from "../Components/OurExpert/OurExpert";
import Navbar from "../Components/CoursePage/NavbarDyn/Navbar";
import Footer from "../Components/Footers6/Footer";
  

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
              "phoneNumber":"+919606950936"
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
      <Navbar 
      
      Href="/data-science-certification-courses-s6"
      Course="Data Science & AI Certification"

      Href1="/advance-ai-ml-certification-s6"
      Course1="Advance AI & ML Certification"

      Href2="/data-science-ai-cert-for-managers-leaders-s6"
      Course2="Data Science & AI Cert. For Managers & Leaders"

      Href3="/job-guarantee-or-money-back-data-science-ai-s6"
      Course3="100% Placement Assistance – Data Science & AI"
      
      
      
      />
      <FirstSection
        deskTopPara="Experience-based certification course for professionals"
        mTopPara="Experience-based certification course for professionals"
        title="Advanced AI & ML Certification Program"
        spanTitleText="For Top Product based MNC And Startup"
        desc="
        AI Certification Course is designed with Domain Electives and Project Expertise for working professionals having 4+ years of experience in core tech and programming domain."
      />
      <div className={styles.program}>
        <ProgramInfo
          BatchDate="4+ Years Work Experience"
          BatchDuration="Accredited with IBM"
          Placement="15+ Real Time Projects"
          EMI="₹ 9,342/month"
        />
      </div>
      <GetHired />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Get specially designed modules as per your dream AI role. Learn latest ML applications."
          Box2h5="Domain Focused"
          box2desc="Obtain cutting-edge Al and ML skills as per demanding IT-industry standards. Choose any domain of your choice."
          Box3h5="Premium Mentoring"
          box3desc="Enjoy and learn from mock interviews and CV writing workshops with FAANG DS/AI industry experts."
          Box4h5="Hands-on Experience"
          box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant establishments."
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
        popupHead="Download Brochure"
        title="Earn a globally recognized Certified at the end of your learning journey."
        desc="Get access to IBM cloud lab to keep an eye on trending industrial case studies of data mining, time-series forecasting, AI-based database management, and authenticated data handling."
        desc2 ="Experts from IBM share their ideas and tactics to deal with tricky business problems within the regularly changing analytical environments."
        desc3 ="Data Science Leads from IBM as instructors."

      />
      <Syllabus />
      <ToolsCovered />
   
      <div className={styles.ProjectWrapper} id="project">
        <Project domainDetails="2+" projectDetails="15+"/>
      </div>
       
      <Footer />
      </main> 
    </div>
  )
}