import Head from "next/head";
import React, { useState } from "react";
import Popup from "../../Components/Popup/Popup";
import Form from "../../Components/Form/Form";
import Navbar from "../../Components/CoursePage/Navbar/Navbar";

import SliderTab from "../../Components/CoursePage/SliderTab/SliderTabs";
import HeroSection from "../../Components/LightTheme/FirstSection/HeroSection";
import Testimonial from "../../Components/LightTheme/SixthSection/Testimonial";
import SecondSection from "../../Components/LightTheme/SecondSection/SecondSection";
import ThirdSection from "../../Components/LightTheme/ThirdSection/ThirdSection";
import FourthSection from "../../Components/LightTheme/FourthSection/FourthSection";
import SeventhSection from "../../Components/LightTheme/SeventhSection/SeventhSection";
import EightSection from "../../Components/LightTheme/EightSection/EightSection";
import SyllabusSection from "../../Components/LightTheme/SyllabusSection/SyllabusSection";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <div>
        <Head>
          <title>Online Data Science Institute</title>
          <meta
            name="description"
            content="Want to earn salary hike of 250% ? Our Data Science institute 
 will boost salary. Apply Now!"
          />

          <meta
            name="Keywords"
            content="data science institute, data science institute for working professional, data science institute fee, data science institute duration, data science institute syllabus, data science online institute"
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
              "marginBottom":"20",
              "marginRight":"20",
              "position":"right",
              "zIndex":"22222222 !important",
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
          <Navbar
            popup={true}
            brochureButton={true}
            formotp={true}
            s2dataScience={true}
          />
          <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
            <div className="leftPopup">
              <div className="whiteP" />
            </div>
            <div className="RightPopup">
              <h5>Apply For Counselling</h5>
              <Form popup={true} setTrigger={setPopups} />
            </div>
          </Popup>
          <HeroSection
            formotp={true}
            s2dataScience={true}
            deskTopPara="Choose Specialization over Generalization"
            h1="Data Science Institute with"
            hSpan="Domain Specialization for Professionals"
            para="Successfully transition careers through our institute & real-time capstone projects. 
          All while making your previous work experience count!"
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
          <ThirdSection formotp={true} s2dataScience={true} />
          <FourthSection
            h1="Program Highlights"
            img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/online+interactive+sessionn.jpg"
            img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/weekend+and+weekday+batch.jpg"
            img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/extra+dout+clearance+sessionn.jpg"
            img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/Multiple+Domain+Selection+Options.jpg"
          />
          <SyllabusSection
            formotp={true}
            s2dataScience={true}
            desc="Learnbay offers live, interactive online sessions with professionals from top MNCs. Our data science institute feature practical training with real-time projects and case studies."
            Hours="250+ Hours"
            Projects="12+ projects"
            Module0="Preparatory Classes (Programming + Maths)"
            Module1="Python for Data Science"
            Module2="Statistics and Machine Learning"
            Module3="Data Science Course Tools"
            Module4="Artificial Intelligence Tools"
          />
          <SliderTab />
          <Testimonial formotp={true} s2dataScience={true} />
          <SeventhSection />
          <EightSection formotp={true} s2dataScience={true} />
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
          })("d22aede5-fcaf-423d-ab4c-2e49782f9cc2");
      `,
        }}
      />
    </>
  );
}
