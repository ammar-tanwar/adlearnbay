import Head from "next/head";
import React, { useState } from "react";
import Navbar from "../../Components/CoursePage/Navbar/Navbar";
import Form from "../../Components/Form/Form";
import Popup from "../../Components/Popup/Popup";

import FeeSection from "../../Components/CoursePage/FeeSection/Fee";
import SliderTab from "../../Components/CoursePage/SliderTab/SliderTabs";
import EightSection from "../../Components/LightTheme/EightSection/EightSection";
import HeroSection from "../../Components/LightTheme/FirstSection/HeroSection";
import FourthSection from "../../Components/LightTheme/FourthSection/FourthSection";
import SecondSection from "../../Components/LightTheme/SecondSection/SecondSection";
import SeventhSection from "../../Components/LightTheme/SeventhSection/SeventhSection";
import Testimonial from "../../Components/LightTheme/SixthSection/Testimonial";
import SyllabusSection from "../../Components/LightTheme/SyllabusSection/SyllabusSection";
import ThirdSection from "../../Components/LightTheme/ThirdSection/ThirdSection";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <div>
        <Head>
          <title>Finance and Banking (BFSI) Course - Learnbay</title>
          <meta name="robots" content="index, follow" />
          <meta
            name="description"
            content="This Financial Analyst Course for BFSI Professionals will help you advance your career in finance analytics. Acquire BFSI-specific knowledge. Enroll Now"
          />
          <meta name="keywords" content="Banking & Finance Analytics Program" />
          <link
            rel="icon"
            href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
          />
          <link
            rel="canonical"
            href="https://www.learnbay.co/data-science-for-bfsi-professional"
          />
        </Head>
        <main>
          {" "}
          <Navbar
            popup={true}
            brochureButton={true}
            upSkillingHide={true}
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
            deskTopPara="Ready to master the finance domain?"
            h1="Data Science and AI"
            hSpan="for BFSI Professionals"
            para="Successfully transition careers through our courses & real-time capstone projects. 
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
            desc="Learnbay offers live, interactive online sessions with professionals from top MNCs. Our BFSI course feature practical training with real-time projects and case studies."
            Hours="250+ Hours"
            Projects="12+ projects"
            Module0="Banking, Financial Services and Insurance (BFSI)"
            Module1="Python for Data Science"
            Module2="Statistics and Machine Learning"
            Module3="Data Science and AI Tools"
            Module4="Deployment (AWS+Azure)"
          />
          <FeeSection
            formotp={true}
            s2dataScience={true}
            Fee="₹ 89,000 + 18% GST"
            FeeEmi="₹ 8,752/month"
            FeeHeading="Program Fee & Financing"
            FeeContent1="0% interest rate"
            FeeContent2="No cost EMI"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="15 days refund policy"
            FeeContent6="No additional cost"
            para="Invest in your future with quality education"
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
