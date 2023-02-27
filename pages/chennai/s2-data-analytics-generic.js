import Head from "next/head";
import React, { useState } from "react";
import { DataAnalyticsCourseData } from "../../Data/chennai/DataAnalyticsData";
import styles from "../../styles/Home.module.css";
import Popup from "../../Components/Popup/Popup";
import Form from "../../Components/Form/Form";
import Navbar from "../../Components/CoursePage/Navbar/Navbar";
import CityFooter from "../../Components/CityComponents/CityFooter/CityFooter";
import LearnSupport from "../../Components/CoursePage/LearnSupport/LearnSupport";
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
import ProgramInfo from "../../Components/CoursePage/ProgramInfo/ProgramInfo";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <Head>
        <title>Data Analytics Course</title>
        <meta
          name="description"
          content="Top Online Data Analytics Course with 2 years of 
course subscription and 24/7 support"
        />{" "}
        <meta
          name="Keywords"
          content="data analytics course, data analytics institute, data analytics course fee, data analytics certification, data analytics training, business analytics course, data analytics course duration, business analytics institute, business analytics certification, business analytics training"
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
        <Navbar popup={true} jobDesc={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below Details to get started</p> */}

            <Form popup={true} setTrigger={setPopups} jobDesc={true} />
          </div>
        </Popup>
        <FirstSection
          DeskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/ChennaiTopWeb.jpg"
          MobImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/ChennaiTopMob.jpg"
          courseName="Data Analytics Course"
          cityName="In Chennai"
          ptag="Data analytics is the process of examining data sets to identify trends 
        and develop conclusions about the information contained within them. 
        This course in Chennai is developed for working individuals who want 
        to maximize their present industry expertise and change career."
        />
        <div className={styles.program1}>
          <ProgramInfo
            p1={DataAnalyticsCourseData[0].ProgramInfo.p1}
            p11={DataAnalyticsCourseData[0].ProgramInfo.p11}
            p2={DataAnalyticsCourseData[0].ProgramInfo.p2}
            p22={DataAnalyticsCourseData[0].ProgramInfo.p22}
            p3={DataAnalyticsCourseData[0].ProgramInfo.p3}
            p33={DataAnalyticsCourseData[0].ProgramInfo.p33}
            p4={DataAnalyticsCourseData[0].ProgramInfo.p4}
            p44={DataAnalyticsCourseData[0].ProgramInfo.p44}
          />
        </div>
        <HiringPatners topHead="Our Hiring Partner's In Chennai" />
        <div className={styles.Feature} id="Feature">
          <ProgramWithHighLight
            title="Data Analytic Course Features in Chennai"
            Box1h5={DataAnalyticsCourseData[0].BoxShape.Box1h5}
            box1desc={DataAnalyticsCourseData[0].BoxShape.box1desc}
            Box2h5={DataAnalyticsCourseData[0].BoxShape.Box2h5}
            box2desc={DataAnalyticsCourseData[0].BoxShape.box2desc}
            Box3h5={DataAnalyticsCourseData[0].BoxShape.Box3h5}
            box3desc={DataAnalyticsCourseData[0].BoxShape.box3desc}
            Box4h5={DataAnalyticsCourseData[0].BoxShape.Box4h5}
            box4desc={DataAnalyticsCourseData[0].BoxShape.box4desc}
            HHeading="Course Details"
            Duration="180+ Hours"
            InterviewCalls=" 5 "
            Projects="8+"
            CourseFee="₹ 75,000 +GST "
            Domain="7+"
          />
        </div>
        <SyllabusNew
          syllabus={DataAnalyticsCourseData[0].syllabus}
          CSyllabus="Data Analytics Course Syllabus In Chennai"
          CourseHighlights={DataAnalyticsCourseData[0].CourseHighlights}
          syllabusDesc={DataAnalyticsCourseData[0].syllabusDesc}
          popupHead={DataAnalyticsCourseData[0].popupHead}
          hours={DataAnalyticsCourseData[0].hours}
          project={DataAnalyticsCourseData[0].project}
        />
        <CityImage
          DeskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/CenterCityChennaiWeb.jpg"
          MobImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/CenterCityChennaiMob.jpg"
          cityName="சென்னை"
        />
        <OurExpert
          H5="Tools Covered"
          img1={DataAnalyticsCourseData[0].OurExpert.img1}
          img2={DataAnalyticsCourseData[0].OurExpert.img2}
          img3={DataAnalyticsCourseData[0].OurExpert.img3}
          img4={DataAnalyticsCourseData[0].OurExpert.img4}
          img5={DataAnalyticsCourseData[0].OurExpert.img5}
          img6={DataAnalyticsCourseData[0].OurExpert.img6}
          img7={DataAnalyticsCourseData[0].OurExpert.img7}
          img8={DataAnalyticsCourseData[0].OurExpert.img8}
          img9={DataAnalyticsCourseData[0].OurExpert.img9}
          img10={DataAnalyticsCourseData[0].OurExpert.img10}
          img11={DataAnalyticsCourseData[0].OurExpert.img11}
          img12={DataAnalyticsCourseData[0].OurExpert.img12}
          img13={DataAnalyticsCourseData[0].OurExpert.img13}
          img14={DataAnalyticsCourseData[0].OurExpert.img14}
          img15={DataAnalyticsCourseData[0].OurExpert.img15}
          img16={DataAnalyticsCourseData[0].OurExpert.img16}
          img17={DataAnalyticsCourseData[0].OurExpert.img17}
          img18={DataAnalyticsCourseData[0].OurExpert.img18}
          img19={DataAnalyticsCourseData[0].OurExpert.img19}
          img21={DataAnalyticsCourseData[0].OurExpert.img21}
          img22={DataAnalyticsCourseData[0].OurExpert.img22}
          img23={DataAnalyticsCourseData[0].OurExpert.img23}
          img20={DataAnalyticsCourseData[0].OurExpert.img20}
        />
        <Certificate H4="Data Analytics Certification Course In Chennai" />
        <div className={styles.ProjectWrapper} id="project">
          <Project
            popupHead={DataAnalyticsCourseData[0].Project.popupHead}
            project={DataAnalyticsCourseData[0].Project.project}
            domain={DataAnalyticsCourseData[0].Project.domain}
            projectTitle="Hands-on Projects In Chennai"
          />
        </div>
        <SliderTab />
        <CourseFee
          syllabusDesc={DataAnalyticsCourseData[0].syllabusDesc}
          syllabus={DataAnalyticsCourseData[0].Batch}
          CourseFeeHead={DataAnalyticsCourseData[0].BatchCourses.CourseFeeHead}
          CourseFeePara={DataAnalyticsCourseData[0].BatchCourses.CourseFeePara}
          CourseFeelist1={
            DataAnalyticsCourseData[0].BatchCourses.CourseFeelist1
          }
          CourseFeelist2={
            DataAnalyticsCourseData[0].BatchCourses.CourseFeelist2
          }
          CourseFeelist3={
            DataAnalyticsCourseData[0].BatchCourses.CourseFeelist3
          }
          CourseFeelist4={
            DataAnalyticsCourseData[0].BatchCourses.CourseFeelist4
          }
          CourseFeelist5={
            DataAnalyticsCourseData[0].BatchCourses.CourseFeelist5
          }
        />
        <LearnSupport
          headForCity={true}
          cityName="24/7 Learner’s Support In Chennai"
        />
        <CityFooter cityName="Chennai" />
      </main>
    </div>
  );
}