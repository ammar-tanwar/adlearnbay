import Head from "next/head";
import React, { useState } from "react";
import Navbar from "../../Components/CoursePage/Navbar/Navbar";
import Form from "../../Components/Form/Form";
import Popup from "../../Components/Popup/Popup";

import FeeSection from "../../Components/CoursePage/FeeMasterSection/Fee";
import SliderTab from "../../Components/CoursePage/SliderTab/SliderTabs";
import EightSection from "../../Components/LightTheme/EightSection/EightSection";
import HeroSection from "../../Components/LightTheme/FirstSectionMaster/HeroSection";
import FourthSection from "../../Components/LightTheme/FourthSection/FourthSection";
import SecondSection from "../../Components/LightTheme/SecondSectionMaster/SecondSection";
import SeventhSection from "../../Components/LightTheme/SeventhSection/SeventhSection";
import Testimonial from "../../Components/LightTheme/SixthSection/Testimonial";
import SyllabusSection from "../../Components/LightTheme/MasterSyllabusSection/SyllabusSection";
import ThirdSection from "../../Components/LightTheme/ThirdSection/ThirdSection";
import JobAbroad from "../../Components/LightTheme/JobAbroad/JobAbroad"

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <div>
        <Head>
          <title>Online Master in Data Science and Analytics</title>
          <meta
            name="description"
            content="Want to earn salary hike of 250% ? Our Master in Data Science and Analytics 
 will boost salary. Apply Now!"
          />

          <meta
            name="Keywords"
            content="Master in Data Science and Analytics, Master in Data Science and Analytics for working professional, Master in Data Science and Analytics fee, Master in Data Science and Analytics duration, Master in Data Science and Analytics syllabus, data science online course"
          />

          <link
            rel="icon"
            href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
          />
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
              <Form popup={true} upSkillingHide={true} setTrigger={setPopups} />
            </div>
          </Popup>
          <HeroSection
            formotp={true}
            s2dataScience={true}
            deskTopPara="Learnbay Excelvarsity"
            h1="Masters in Computer Science:"
            hSpan="Data Science and AI"
            para="Gain work experience of data scientist with real projects"
            sideImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/masternew.webp"
          />
          <SecondSection
            masterDegree = {true}
            p1="60+"
            p11="Countries Recognition "
            p2="90+"
            p22="Transferrable ECTS Credits"
            p3="35K+"
            p33="Trusted Learners"
            p4="1:1 Support"
            p44="Dedicated Program"
          />
          <ThirdSection formotp={true} s2dataScience={true} />
          {/* <FourthSection
            h1="Program Highlights"
            img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/online+interactive+sessionn.jpg"
            img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/weekend+and+weekday+batch.jpg"
            img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/extra+dout+clearance+sessionn.jpg"
            img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/Multiple+Domain+Selection+Options.jpg"
          /> */}
          <JobAbroad/>
          <SyllabusSection
            formotp={true}
            s2dataScience={true}
            
            desc="Curriculum is specifically engineered to meet the expectations of leading tech companies."
            career1 ="Placement Support"
            career2 ="Mock Interviews"
            career3= "Resume BuildUp"
            career4="Unlimited Interview Calls"
            resume
            Module0="Preparatory Classes (Programming + Maths)"
            Module1="Python for Data Science"
            Module2="Statistics and Machine Learning"
            Module3="Master in Data Science and Analytics Tools"
            Module4="Artificial Intelligence Tools"
          />
          <FeeSection
            formotp={true}
            s2dataScience={true}
          
            FeeEmi="₹ 12,292/month"
            FeeHeading="Program Fee & Financing"
            FeeContent1="0% interest rate"
            FeeContent2="No cost EMI"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="15 days refund policy"
            FeeContent6="No additional cost"
            para="Curriculum is specifically engineered to meet the expectations of leading tech companies"
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
          })("4f4d2e98-0778-4fb7-a9c3-af6fd1bedad8");
      `,
        }}
      />
    </>
  );
}
