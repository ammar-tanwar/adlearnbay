import Head from "next/head";
import React, { useState } from "react";
import Popup from "../../Components/Popup/Popup";
import Form from "../../Components/Form/Form";
import Navbar from "../../Components/CoursePage/Navbar/Navbar";
import Testimonial from "../../Components/NewCoursePage/SixthSection/Testimonial";
import FourthSection from "../../Components/LightTheme/FourthSection/FourthSection";
import EightSection from "../../Components/LightTheme/EightSection/EightSection";
import SyllabusSection from "../../Components/NewCoursePage/SyllabusSection/SyllabusSection";
import { DataScienceCourseData } from "../../Data/AdvanceDataScienceCourse";

import dynamic from "next/dynamic";

const FirstSection = dynamic(() =>
  import("../../Components/NewCoursePage/FirstSection/FirstSection")
);

const SeventhSection = dynamic(() =>
  import("../../Components/NewCoursePage/SeventhSection/SeventhSection")
);

const SecondSection = dynamic(() =>
  import("../../Components/NewCoursePage/SecondSection/SecondSection")
);

const DomainSection = dynamic(() =>
  import("../../Components/NewCoursePage/DomainSection/DomainSection")
);

const CourseSection = dynamic(() =>
  import("../../Components/NewCoursePage/CourseSection/CourseSectio")
);

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
          <Navbar popup={true} upSkilling={true} />
          <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
            <div className="leftPopup">
              <div className="whiteP" />
            </div>
            <div className="RightPopup">
              <h5>Apply For Counselling</h5>
              <Form popup={true} setTrigger={setPopups} />
            </div>
          </Popup>
          <FirstSection
            FirstTyped="Guaranteed Interview Calls"
            SecondTyped="Capstone Project Certificate"
            ThirdTyped="Live Interactive Classes"
            dataScience={true}
            titleCourse="Data Science Course with Domain Specialization for Professionals"
            brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
            first="Tools"
            second="Tips"
            third="Technology"
            FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/advance+DS+header+image.webp"
            firstToparaImg="Domain Specialization for Professionals"
            firstHeading="Data Science Course with"
            firstTopPara="Choose Specialization over Generalization"
            idss="bfl64ANfSV0"
            srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          />
          <SecondSection
            SecondSectionData={DataScienceCourseData[0].secondSection}
          />
          <CourseSection
            courseSectionData={DataScienceCourseData[0].courseSectionData}
          />
          <FourthSection
            h1="Program Highlights"
            img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/online+interactive+sessionn.jpg"
            img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/weekend+and+weekday+batch.jpg"
            img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/extra+dout+clearance+sessionn.jpg"
            img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/Multiple+Domain+Selection+Options.jpg"
          />
          <SyllabusSection
            desc="Learnbay offers live, interactive online sessions with professionals from top MNCs. Our data science course feature practical training with real-time projects and case studies."
            Hours="250+ Hours"
            Projects="12+ projects"
            Module0="Preparatory Classes (Programming + Maths)"
            Module1="Python for Data Science"
            Module2="Statistics and Machine Learning"
            Module3="Data Science Course Tools"
            Module4="Artificial Intelligence Tools"
          />
          <DomainSection
            domainSectionData={DataScienceCourseData[0].domainSection}
          />
          <Testimonial syllabusBtnHide={true} />
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
          })("fceb50ba-694f-47b1-b0b4-a87dba257192");
      `,
        }}
      />
    </>
  );
}
