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
    <div>
      <Head>
        <title>Data Analytics Certification Course – Learnbay</title>
        <meta
          name="description"
          content="Advance certification Course online Data Analytics Certification Course with 100% placement assistance 
          and get 1:1 Guaranteed interview calls, 8+ Real-time projects, 2 years of Certification Course subscription ,Lifetime Access to recorded classes and 
          24/7 Learner’s support."
        />{" "}
        <meta
          name="Keywords"
          content="data analytics Certification Course, data analytics institute, data analytics Certification Course fee, data analytics certification Course, data analytics training, business analytics Certification Course, data analytics Certification Course duration, business analytics institute, business analytics certification Course, business analytics training"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
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
 "messageText":"I am looking for course, and free career counselling session.",
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
        <Navbar popup={true} brochureButton={true} formotp={true} />
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
          deskTopPara="Get ahead of the competition with popular skill sets."
          h1="Data Analytics Certification Course in "
          hSpan="Bangalore"
          para="Training based on real-time projects specially designed for working professionals who aspire of having a lucrative career."
          sideImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/Bangalore-generic.jpg"
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
        <ThirdSection formotp={true} />
        <FourthSection
          h1="Program Highlights"
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/online+interactive+sessionn.jpg"
          img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/weekend+and+weekday+batch.jpg"
          img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/extra+dout+clearance+sessionn.jpg"
          img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/Multiple+Domain+Selection+Options.jpg"
        />
        <SyllabusSection
          formotp={true}
          desc="Learnbay offers live, interactive online sessions with professionals from top MNCs. Our Data Analytics Certification Course feature practical training with real-time projects and case studies."
          Hours="180+ Hours"
          Projects="8+ projects"
          Module0="Preparatory Classes (Programming + Maths)"
          Module1="Python Programming"
          Module2="Statistics & Basic Machine Learning"
          Module3="Data Analytics Course Tools"
          Module4="Essentials Tools"
        />
        <SliderTab />
        <Testimonial formotp={true} />
        <SeventhSection />
        <EightSection formotp={true} />
      </main>
    </div>
  );
}
