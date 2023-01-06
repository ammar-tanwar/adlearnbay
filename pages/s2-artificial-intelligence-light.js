import Head from "next/head";
import React, { useState } from "react";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Navbar from "../Components/CoursePage/Navbar/Navbar";
import SliderTab from "../Components/CoursePage/SliderTab/SliderTabs";
import HeroSection from "../Components/LightTheme/FirstSection/HeroSection";
import Testimonial from "../Components/LightTheme/SixthSection/Testimonial";
import SecondSection from "../Components/LightTheme/SecondSection/SecondSection";
import ThirdSection from "../Components/LightTheme/ThirdSection/ThirdSection";
import FourthSection from "../Components/LightTheme/FourthSection/FourthSection";
import SeventhSection from "../Components/LightTheme/SeventhSection/SeventhSection";
import EightSection from "../Components/LightTheme/EightSection/EightSection";
import SyllabusSection from "../Components/LightTheme/SyllabusSection/SyllabusSection";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <Head>
        <title>Data Science course - Learnbay</title>
        <meta
          name="description"
          content="Advance certification online data science course with 100% placement assistance 
          and get 1:1 Guaranteed interview calls, 12+ Real-time projects, 1+ Capstone 
          projects, 2 years of course subscription ,Lifetime Access to recorded classes and 
          24/7 Learner’s support."
        />

        <meta
          name="Keywords"
          content="data science course certification, data science online course, data science training, data science course for working professional, data science institute, data science course, data science course duration, data science course fee"
        />

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
        {" "}
        <Navbar popup={true} brochureButton={true} />
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
        deskTopPara="Boost Your Professional Growth To a Whole New Level"
          h1="Advance Artificial Intelligence Course"
          hSpan="With Domain Specialization"
          para="With demanding industry projects, you can acquire the most advanced technical expertise possible. Be a master even without a master's degree."
          sideImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/DataScinceLight1.png"
        />
        <SecondSection
          p1="Global Recognition"
          p11="From IBM"
          p2="Industry Standard"
          p22="Training"
          p3="Career Assistance"
          p33="For Professionals"
          p4="Financing as low as"
          p44="₹ 10,325/month" />
        <ThirdSection />
        <FourthSection
          h1="Program Highlights"
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/DataScinceLight1.png"
          img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/DataScinceLight1.png"
          img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/DataScinceLight1.png"
          img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/DataScinceLight1.png"
        />
        <SyllabusSection
          desc="Learnbay provides Live, Interactive Online Sessions guided by Professionals working in top MNCs. All Artificial Intelligence Course sessions are covered practically with real-time industrial projects and case studies."
          Hours="350+ Hours"
          Projects="15+ projects"
          Module0="Preparatory Classes (Programming + Maths)"
          Module1="Python for Data Science"
          Module2="Statistics and Machine Learning"
          Module3="Data Science Course Tools"
          Module4="Artificial Intelligence Tools"
        />
        <SliderTab />
        <Testimonial />
        <SeventhSection />
        <EightSection />
      </main>
    </div>
  );
}
