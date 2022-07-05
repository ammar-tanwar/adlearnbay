import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FirstSection from "../Components/HeroSectionfsw/HeroSection";
import ProgramInfo from "../Components/ProgramInfo/ProgramInfo";
import GetHired from "../Components/GetHiredFsw/GetHired";
import BoxShape from "../Components/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Certificate from "../Components/CertificateFsw1/Certificate";
import Project from "../Components/Projectfswd/Project";
import Syllabus from "../Components/Syllabusfsw1/Syllabus";
import ToolsCovered from "../Components/ToolsCoveredfs/ToolsCovered";
import OurExpert from "../Components/OurExpert/OurExpert";
import Navbar from "../Components/Navbarfsds1/Navbar";
import Footer from "../Components/Footerfsds1/Footer";
  
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
              "phoneNumber":"917349222263"
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
          <p>Fill the below Details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <Navbar />
      <FirstSection
        deskTopPara="Be a demanding Developer to stay ahead"
        mTopPara="Be a demanding Developer to stay ahead"
        title="Full Stack Web Development Program"
        desc="As a seasoned web developer, you'll have an advantage in the employment market. Experts from MNCs teach you their unique methods via hands-on projects."
      />
      <div className={styles.program}>
        <ProgramInfo
          BatchDate="Working Professionals"
          BatchDuration="Accredited with IBM"
          Placement="12+ Real Time Projects"
          EMI="₹ 9k to 15k*(9 Months)"
        />
      </div>
      <GetHired />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Learn with modules created just for your dream job. Become  an extraordinarily demanding web developer."
          Box2h5="Interactive Learning"
          box2desc="Enjoy an offline-like learning experience, even online. 100% interactive and live classes. Hybrid learning option also available."
          Box3h5="Premium Mentoring"
          box3desc="Take advantage of MAANG web developer simulated mock interviews. Hone your skills through webathons."
          Box4h5="Hands-on Experience"
          box4desc="Gain diligent experience in real-world projects ranging from advanced level complexity to amazing deployment scopes."
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
        title="Global Recognition : Course Completion Certificate from IBM"
        desc="Complete your training with the internationally recognized certificate."
        desc2 ="Validate your Web Development skills with IBM Course Completion Certificate."
        desc3 ="Get acknowledged in IT sector by adding IBM Certificate to your profile."

      />
      <Syllabus />
      <ToolsCovered />
      <div className={styles.ProjectWrapper} id="project">
        <Project />
      </div>
       
      <Footer />
      </main> 
    </div>
  )
}
