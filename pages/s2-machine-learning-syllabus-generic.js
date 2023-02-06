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
      <title>Learn machine learning online course</title>
        <meta
          name="description"
          content="Top Online Machine Learning Institute with 3 years 
of course subscription and Lifetime access to recoded classes"
        />

        <meta
          name="Keywords"
          content="ml course, online ml course, machine learning course with  placement assistance , machine learning course fee, machine learning course, machine learning course duration, online machine learning course"
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
        <Navbar popup={true} brochureButton={true} DownloadSyllabus={true}/>
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
          h1="Machine Learning Course"
          hSpan="For Professionals"
          para="Successfully transition careers through our courses & real-time capstone projects. 
          All while making your previous work experience count!"
          sideImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/Machine+learning.jpg"
        />
        <SecondSection
          p1="IBM Certified"
          p11="Capstone Projects"
          p2="5-star"
          p22="Industry-standard Training"
          p3="3-year"
          p33="Subscription Model"
          p4="1:1 Support"
          p44="Dedicated Program" />
        <ThirdSection DownloadSyllabus={true}/>
        <FourthSection
          h1="Program Highlights"
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/online+interactive+sessionn.jpg"
          img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/weekend+and+weekday+batch.jpg"
          img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/extra+dout+clearance+sessionn.jpg"
          img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/Multiple+Domain+Selection+Options.jpg"
        />
        <SyllabusSection
          desc="Learnbay offers live, interactive online sessions with professionals from top MNCs. Our machine learning courses feature practical training with real-time projects and case studies."
          Hours="350+ Hours"
          Projects="15+ projects"
          Module0="Preparatory Classes (Programming + Maths)"
          Module1="Python for Data Science"
          Module2="Statistics and Machine Learning"
          Module3="Data Science Course Tools"
          Module4="Artificial Intelligence Course Tools"
        />
        <SliderTab />
        <Testimonial />
        <SeventhSection />
        <EightSection DownloadSyllabus={true}/>
      </main>
    </div>
  );
}