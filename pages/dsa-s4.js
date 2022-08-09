import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/HeroSectionfsw/HeroSection";
import ProgramInfo from "../Components/ProgramInfo/ProgramInfo";
import GetHired from "../Components/GetHiredFsw/GetHired";
import BoxShape from "../Components/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Certificate from "../Components/CertificateFsw/Certificate";
import Project from "../Components/Projectfswd/Project";
import Syllabus from "../Components/Syllabusdsa/Syllabus";
import ToolsCovered from "../Components/ToolsCoveredfs/ToolsCovered";
import OurExpert from "../Components/OurExpert/OurExpert";
import Navbar from "../Components/Navbarfsds4/Navbar";
import Footer from "../Components/Footerfsds4/Footer";

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
            <p>Fill the below Details to get started</p>
            <Form popup={true} setTrigger={setPopups} />
          </div>
        </Popup>
        <Navbar />
        <FirstSection
          deskTopPara="Ace your coding interview at MAANG and Achieve your Dream Job"
          mTopPara="Ace your coding interview at MAANG and Achieve your Dream Job"
          title="Data Structures & Algorithms"
          title1=" and System Design"
          desc="Best interview prep course for top product-based MNC's. Sharpen your skills with real-time project experience."
        />
        <div className={styles.program}>
          <ProgramInfo
            eligibility="300% Highest"
            BatchDate="Salary Achieved"
            certification="100% Guaranteed "
            BatchDuration="Job Referrals"
            noCost="No Cost EMI"
            placement="Personal Mentor"
            Placement="1:1 Dedicated"
            EMI="Starting at 6999"
          />
        </div>
        <GetHired dsa={true} />
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In This Program"
            Box1h5="Custom-fit Training"
            box1desc="Learn with modules created just for your dream job. Become an extraordinarily demanding software developer."
            Box2h5="Exclusive Hackathon"
            box2desc="Sharpen your skills through multiple exclusive hackathons. Upskill your designing skills and coding speed."
            Box3h5="Premium Mentoring"
            box3desc="Exclusive mock interview sessions by experienced industry experts. Capstone projects under MNC software developer’s guidance."
            Box4h5="Hands-on Experience"
            box4desc="Learn by working hard on real-world projects that range from advanced levels of complexity to large-scale deployments."
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
        <Syllabus />

        <div className={styles.ProjectWrapper} id="project">
          <Project />
        </div>

        <Footer />
      </main>
    </div>
  );
}
