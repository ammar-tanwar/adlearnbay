import Head from "next/head";
import React, { useState } from "react";
import Navbar from "../Components/CoursePage/Navbar/Navbar";
import Form from "../Components/Form/Form";
import Popup from "../Components/Popup/Popup";

import SliderTab from "../Components/CoursePage/SliderTab/SliderTabs";
import CourseSection from "../Components/LightTheme/CourseSection/CourseSection";
import EightSection from "../Components/LightTheme/EightSection/EightSection";
import HeroSection from "../Components/LightTheme/FirstSection/HeroSection";
import ProgramHighlights from "../Components/LightTheme/ProgramHighlights/ProgramHighlights";
import SecondSection from "../Components/LightTheme/SecondSection/SecondSection";
import SeventhSection from "../Components/LightTheme/SeventhSection/SeventhSection";
import Testimonial from "../Components/LightTheme/SixthSection/Testimonial";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <div>
        <Head>
          <title>Online Data Science Course</title>
          <meta
            name="description"
            content="Want to earn salary hike of 250% ? Our Data Science course 
 will boost salary. Apply Now!"
          />

          <meta
            name="Keywords"
            content="data science course, data science course for working professional, data science course fee, data science course duration, data science course syllabus, data science online course"
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
              "phoneNumber":"+918123327570"
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
        <main>
          {" "}
          <Navbar popup={true} brochureButton={true} upSkillingHide={true} />
          <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
            <div className="leftPopup">
              <div className="whiteP" />
            </div>
            <div className="RightPopup">
              <h5>Apply For Counselling</h5>
              <Form popup={true} upSkillingHide={true} setTrigger={setPopups} />
            </div>
          </Popup>
          <HeroSection
            deskTopPara="Get Certified & Move Towards Dream Job"
            h1="#1 Domain Specialised Certification Program For "
            hSpan="Working Professionals"
            para="Use your domain expertise to build a meaningful career. Crack interview in top product based MNCs with confidence."
            sideImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/data+science+and+ai.jpg"
          />
          <SecondSection
            p1="IBM Certified"
            p11="Capstone Projects"
            p2="5-star"
            p22="Industry-standard Training"
            p3="3-year"
            p33="Subscription Model"
            p4="1:1 Support"
            p44="Dedicated Program"
          />
          <CourseSection />
          <ProgramHighlights formCommon={true} />
          <SliderTab />
          <Testimonial />
          <SeventhSection />
          <EightSection />
        </main>
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
