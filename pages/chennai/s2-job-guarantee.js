import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Popup from "../../Components/Popup/Popup";
import Form from "../../Components/Form/Form";
import Navbar from "../../Components/CoursePage/Navbar/Navbar";
import CityFooter from "../../Components/CityComponents/CityFooter/CityFooter";
import LearnSupport from "../../Components/CoursePage/LearnSupport/LearnSupport";
import React, { useState } from "react";
import FirstSection from "../../Components/CityComponents/FirstSection/FirstSection";
import HiringPatners from "../../Components/CityComponents/HiringPatnerWithReview/HiringPatners";
import SyllabusNew from "../../Components/CoursePage/SyllabusNew/SyllabusNew";
import CityImage from "../../Components/CityComponents/CityImages/CityImage";
import OurExpert from "../../Components/CoursePage/OurExpert/OurExpert";
import Certificate from "../../Components/CoursePage/CertificateTab/CertificateTabAdvance";
import Project from "../../Components/CoursePage/Project/Project";
import SliderTab from "../../Components/CoursePage/SliderTab/SliderTabs";
import ProgramWithHighLight from "../../Components/CityComponents/ProgramWithHighLight/ProgramWithHighLight";
import CourseFee from "../../Components/CoursePage/CourseFee/CourseFee";
import { JobGuaranteeCourseData } from "../../Data/chennai/JobGuaranteeData";
import ProgramInfo from "../../Components/CoursePage/ProgramInfo/ProgramInfo";
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <Head>
        <title>100% Placement Assistance Course - Learnbay</title>
        <meta
          name="description"
          content="Advance certification 100% placement assistance course with 1:1 Guaranteed 
          interview calls, 20+ Real-time projects, 3+ Capstone projects, 3 years of course 
          subscription ,Lifetime Access to recorded classes and 24/7 Learner’s support."
        /><meta name="Keywords" content="best data science course with placement assistance, data analytics course with job assistance, online data science course with placement assistance, data analytics online course with placement assistance, placement assistance data science course, job assitance machine learning courses, placement assistance artificial intelligence courses, data analytics course with placement assistance, machine learning course with placement assistance, data science Placement assistance program india, data science course with job assistance india, job assistance data science courses" />

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
      <main>  <Navbar popup={true} />

        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below Details to get started</p> */}

            <Form popup={true} setTrigger={setPopups} />
          </div>
        </Popup>
        <FirstSection
        DeskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/CenterCityChennaiWeb.jpg"
                    MobImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/CenterCityChennaiMob.jpg"
        courseName="100% Placement Assistance Program "
        cityName="In Chennai"
        ptag="Real-time industrial projects will help you gain the finest level of 
        technical expertise. Be a Master without a Master’s degree. This course
        in Chennai is developed for working individuals who want to maximize 
        their present industry expertise and change career."
      />
      <div className={styles.program1}>
      <ProgramInfo
        p1={JobGuaranteeCourseData[0].ProgramInfo.p1}
        p11={JobGuaranteeCourseData[0].ProgramInfo.p11}
        p2={JobGuaranteeCourseData[0].ProgramInfo.p2}
        p22={JobGuaranteeCourseData[0].ProgramInfo.p22}
        p3={JobGuaranteeCourseData[0].ProgramInfo.p3}
        p33={JobGuaranteeCourseData[0].ProgramInfo.p33}
        p4={JobGuaranteeCourseData[0].ProgramInfo.p4}
        p44={JobGuaranteeCourseData[0].ProgramInfo.p44}
      />
    </div>
      <HiringPatners
        topHead="Our Hiring Partner's In Chennai"

      />
      <div className={styles.Feature} id="Feature">

        <ProgramWithHighLight
        title={JobGuaranteeCourseData[0].BoxShape.title}
        Box1h5={JobGuaranteeCourseData[0].BoxShape.Box1h5}
        box1desc={JobGuaranteeCourseData[0].BoxShape.box1desc}
        Box2h5={JobGuaranteeCourseData[0].BoxShape.Box2h5}
        box2desc={JobGuaranteeCourseData[0].BoxShape.box2desc}
        Box3h5={JobGuaranteeCourseData[0].BoxShape.Box3h5}
        box3desc={JobGuaranteeCourseData[0].BoxShape.box3desc}
        Box4h5={JobGuaranteeCourseData[0].BoxShape.Box4h5}
        box4desc={JobGuaranteeCourseData[0].BoxShape.box4desc}
        jobGuarantee = {true}
          HHeading="Course Details"
          Duration="500+ Hours"
          InterviewCalls="unlimited"
          Projects="20+"
          CourseFee="₹ 1,10,000 +GST"
          Domain="7+"
        />
      </div>

      <SyllabusNew
        syllabus={JobGuaranteeCourseData[0].syllabus}
        CSyllabus="100% Job Assistance Course Syllabus In Chennai"
        CourseHighlights={JobGuaranteeCourseData[0].CourseHighlights}
        syllabusDesc={JobGuaranteeCourseData[0].syllabusDesc}
        popupHead={JobGuaranteeCourseData[0].popupHead}
        hours={JobGuaranteeCourseData[0].hours}
        project={JobGuaranteeCourseData[0].project}
      />
      <CityImage 
      DeskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/CenterCityChennaiWeb.jpg"
      MobImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/CenterCityChennaiMob.jpg"
      cityName="சென்னை"
      />
        
        <OurExpert
          H5={JobGuaranteeCourseData[0].OurExpert.H5}
          img1={JobGuaranteeCourseData[0].OurExpert.img1}
          img2={JobGuaranteeCourseData[0].OurExpert.img2}
          img3={JobGuaranteeCourseData[0].OurExpert.img3}
          img4={JobGuaranteeCourseData[0].OurExpert.img4}
          img5={JobGuaranteeCourseData[0].OurExpert.img5}
          img6={JobGuaranteeCourseData[0].OurExpert.img6}
          img7={JobGuaranteeCourseData[0].OurExpert.img7}
          img8={JobGuaranteeCourseData[0].OurExpert.img8}
          img9={JobGuaranteeCourseData[0].OurExpert.img9}
          img10={JobGuaranteeCourseData[0].OurExpert.img10}
          img11={JobGuaranteeCourseData[0].OurExpert.img11}
          img12={JobGuaranteeCourseData[0].OurExpert.img12}
          img13={JobGuaranteeCourseData[0].OurExpert.img13}
          img14={JobGuaranteeCourseData[0].OurExpert.img14}
          img15={JobGuaranteeCourseData[0].OurExpert.img15}
          img16={JobGuaranteeCourseData[0].OurExpert.img16}
          img17={JobGuaranteeCourseData[0].OurExpert.img17}
          img18={JobGuaranteeCourseData[0].OurExpert.img18}
          img19={JobGuaranteeCourseData[0].OurExpert.img19}
          img21={JobGuaranteeCourseData[0].OurExpert.img21}
          img22={JobGuaranteeCourseData[0].OurExpert.img22}
          img23={JobGuaranteeCourseData[0].OurExpert.img23}
          img20={JobGuaranteeCourseData[0].OurExpert.img20}
        />
        <Certificate
          H4="100% Job Assistance Program In Chennai"
        />
        <div className={styles.ProjectWrapper} id="project">
          <Project popupHead={JobGuaranteeCourseData[0].Project.popupHead}
            project={JobGuaranteeCourseData[0].Project.project}
            domain={JobGuaranteeCourseData[0].Project.domain}
            projectTitle="Hands-on Projects In Chennai" />
        </div>
        <SliderTab />
        <CourseFee
          syllabusDesc={JobGuaranteeCourseData[0].syllabusDesc}
          syllabus={JobGuaranteeCourseData[0].Batch}

          CourseFeeHead={JobGuaranteeCourseData[0].BatchCourses.CourseFeeHead}
          CourseFeePara={JobGuaranteeCourseData[0].BatchCourses.CourseFeePara}
          CourseFeelist1={JobGuaranteeCourseData[0].BatchCourses.CourseFeelist1}
          CourseFeelist2={JobGuaranteeCourseData[0].BatchCourses.CourseFeelist2}
          CourseFeelist3={JobGuaranteeCourseData[0].BatchCourses.CourseFeelist3}
          CourseFeelist4={JobGuaranteeCourseData[0].BatchCourses.CourseFeelist4}
          CourseFeelist5={JobGuaranteeCourseData[0].BatchCourses.CourseFeelist5}
        />
        <LearnSupport
          headForCity={true}
          cityName="24/7 Learner’s Support In Chennai"
        />
        <CityFooter 
        cityName="Chennai"/>
      </main>
    </div>
  );
}
