import Head from "next/head";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "../../Components/CoursePage/Navbar/Navbar";
import Form from "../../Components/Form/Form";
import { DataScienceMastersinCS } from "../../Data/DataScienceAiMastersinCS";
import Popup from "../../Components/Popup/Popup";
const MasterSecondSection = dynamic(() =>
  import("../../components/LightTheme/MasterSecondSection/MasterSecondSection")
);
const Testimonial = dynamic(() =>
  import("../../components/LightTheme/Testimonial/Testimonial")
);
const WhoIsProgram = dynamic(() =>
  import("../../components/LightTheme/WhoIsProgram/WhoIsProgram")
);
const WhyLearnbay = dynamic(() =>
  import("../../components/LightTheme/WhyLearnbay/WhyLearnbay")
);

import FeeSection from "../../Components/CoursePage/FeeMasterSection/Fee";
import SliderTab from "../../Components/CoursePage/SliderTab/SliderTabs";
import EightSection from "../../Components/LightTheme/EightSection/EightSection";
import HeroSection from "../../Components/LightTheme/FirstSectionMaster/HeroSection";
import SeventhSection from "../../Components/LightTheme/SeventhSection/SeventhSection";
import SyllabusSection from "../../Components/LightTheme/MasterSyllabusSection/SyllabusSection";
import JobAbroad from "../../Components/LightTheme/JobAbroad/JobAbroad";

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
          <MasterSecondSection />
          <JobAbroad />
          {/* <Testimonial
            heading="Hear it from our Alumni"
            redirectDS={true}
            Testimonial={DataScienceMastersinCS[0].testimonial}
          /> */}
          <WhoIsProgram
            first="B.tech, M.tech, BCA, B.com, M.com, MBA, MCA, M.sc"
            second="Minimum 6 year of  work experience (tech/non-tech)"
            third="Mid-career professionals interested in data science & AI"
            forth="Achieving higher career growth in data science and AI"
          />
          <WhyLearnbay/>
          <SyllabusSection
            formotp={true}
            s2dataScience={true}
            desc="Curriculum is specifically engineered to meet the expectations of leading tech companies."
            career1="Placement Support"
            career2="Mock Interviews"
            career3="Resume BuildUp"
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
