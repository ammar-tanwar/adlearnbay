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
import Batch from "../Components/LightTheme/BatchDetails/Batch";
import { ProgramFee } from "../Components/LightTheme/ProgramFee/ProgramFee";
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
        <title>Data Science and AI Master Program</title>
        <meta
          name="description"
          content="Want to earn salary hike of 250% ? Our Data Science and AI Master Program 
 will boost salary. Apply Now!"
        />

        <meta
          name="Keywords"
          content="data science and ai master course, Data Science and ai master course for working professional, Data Science and ai master course fee, data science and ai master course duration, data science and ai master course syllabus, data science and ai master online course, data science and ai master program"
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
              "phoneNumber":"+919986049187"
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
          deskTopPara="Boost your career opportunities by developing relevant skills"
          h1="Data Science and AI Master Program"
          hSpan="With Unlimited Interview Calls"
          para="A complete guide with real-life exercises & domain oriented approach."
          sideImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/master-generic.png"
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
          desc="Learnbay offers live, interactive online sessions with professionals from top MNCs. Our Data Science and AI Master Program feature practical training with real-time projects and case studies."
          Hours="500+ Hours"
          Projects="20+ projects"
          Module0="Preparatory Classes (Programming + Maths)"
          Module1="Python for Data Science"
          Module2="Statistics and Machine Learning"
          Module3="Data Science and AI Course Tools"
          Module4="Essentials Tools"
        />
        <SliderTab />
        <ProgramFee
          formotp={true}
          Emi="₹ 12,292/month"
          Fee="₹ 1,25,000 + 18% GST"
          CourseFeeAndFinancing="Data Science and AI Master Program"
          para="We are dedicated to making our Data Science and AI Master Program accessible.  We are committed to helping you find a way to budget for this Course and offer a variety of financing options to make it more economical."
          dataScience={true}
        />
        <Batch
          DataScience={true}
          CourseFeeHead="Data Science and AI Master Program : Batch Details"
        />
        <Testimonial formotp={true} />
        <SeventhSection />
        <EightSection formotp={true} />
      </main>
    </div>
  );
}
