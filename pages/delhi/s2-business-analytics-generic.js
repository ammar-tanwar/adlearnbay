import Head from "next/head";
import React, { useState } from "react";
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
import { BusinessAnalyticsCourseData } from "../../Data/delhi/BusinessAnalyticsData";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <Head>
        <title>Business Analytics course</title>
        <meta
          name="description"
          content="Top Online Business Analytics Course with 
3 years of course subscription & 24/7 support"
        />
        <meta
          name="Keywords"
          content="business analyst course fee, business analyst course details, course of business analystics, business analytics programs, business analytics online course, business analytics course for working professionals, business analytics course, Learn online business analytics course"
        />
        <meta
          name="Keywords"
          content="business analyst course fee, business analyst course details, course of business analystics, business analytics programs, business analytics online course, business analytics course for working professionals, business analytics course, Learn online business analytics course"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/business-analytics-certification-course"
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
          DeskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/DelhiTopWeb.jpg"
          MobImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/DelhiTopMob.jpg"
          courseName="Business Analytics Course"
          cityName="In Delhi"
          ptag="Business analytics is the process of examining data sets to identify trends 
          and develop conclusions about the information contained within them. 
          Improve your knowledge with this course in Delhi and get 100% 
          Placement Assistance."
        />
        <div className={styles.program1}>
          <ProgramInfo
            p1={BusinessAnalyticsCourseData[0].ProgramInfo.p1}
            p11={BusinessAnalyticsCourseData[0].ProgramInfo.p11}
            p2={BusinessAnalyticsCourseData[0].ProgramInfo.p2}
            p22={BusinessAnalyticsCourseData[0].ProgramInfo.p22}
            p3={BusinessAnalyticsCourseData[0].ProgramInfo.p3}
            p33={BusinessAnalyticsCourseData[0].ProgramInfo.p33}
            p4={BusinessAnalyticsCourseData[0].ProgramInfo.p4}
            p44={BusinessAnalyticsCourseData[0].ProgramInfo.p44}
          />
        </div>
        <HiringPatners topHead="Our Hiring Partner's In Delhi" />
        <div className={styles.Feature} id="Feature">
          <ProgramWithHighLight
            title={BusinessAnalyticsCourseData[0].BoxShape.title}
            Box1h5={BusinessAnalyticsCourseData[0].BoxShape.Box1h5}
            box1desc={BusinessAnalyticsCourseData[0].BoxShape.box1desc}
            Box2h5={BusinessAnalyticsCourseData[0].BoxShape.Box2h5}
            box2desc={BusinessAnalyticsCourseData[0].BoxShape.box2desc}
            Box3h5={BusinessAnalyticsCourseData[0].BoxShape.Box3h5}
            box3desc={BusinessAnalyticsCourseData[0].BoxShape.box3desc}
            Box4h5={BusinessAnalyticsCourseData[0].BoxShape.Box4h5}
            box4desc={BusinessAnalyticsCourseData[0].BoxShape.box4desc}
            HHeading="Course Details"
            Duration="200+ Hours"
            InterviewCalls=" 5 "
            Projects="8+"
            CourseFee="₹ 75,000 +GST "
            Domain="7+"
          />
        </div>
        <SyllabusNew
          syllabus={BusinessAnalyticsCourseData[0].syllabus}
          CSyllabus="Business Analytics Course Syllabus In Delhi"
          CourseHighlights={BusinessAnalyticsCourseData[0].CourseHighlights}
          syllabusDesc={BusinessAnalyticsCourseData[0].syllabusDesc}
          popupHead={BusinessAnalyticsCourseData[0].popupHead}
          hours={BusinessAnalyticsCourseData[0].hours}
          project={BusinessAnalyticsCourseData[0].project}
        />
        <CityImage
          DeskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/CenterCityDelhiWeb.jpg"
          MobImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/CenterCityDelhiMob.jpg"
          cityName="दिल्ली"
        />
        <OurExpert
          H5={BusinessAnalyticsCourseData[0].OurExpert.H5}
          img1={BusinessAnalyticsCourseData[0].OurExpert.img1}
          img2={BusinessAnalyticsCourseData[0].OurExpert.img2}
          img3={BusinessAnalyticsCourseData[0].OurExpert.img3}
          img4={BusinessAnalyticsCourseData[0].OurExpert.img4}
          img5={BusinessAnalyticsCourseData[0].OurExpert.img5}
          img6={BusinessAnalyticsCourseData[0].OurExpert.img6}
          img7={BusinessAnalyticsCourseData[0].OurExpert.img7}
          img8={BusinessAnalyticsCourseData[0].OurExpert.img8}
          img9={BusinessAnalyticsCourseData[0].OurExpert.img9}
          img10={BusinessAnalyticsCourseData[0].OurExpert.img10}
          img11={BusinessAnalyticsCourseData[0].OurExpert.img11}
          img12={BusinessAnalyticsCourseData[0].OurExpert.img12}
          img13={BusinessAnalyticsCourseData[0].OurExpert.img13}
          img14={BusinessAnalyticsCourseData[0].OurExpert.img14}
          img15={BusinessAnalyticsCourseData[0].OurExpert.img15}
          img16={BusinessAnalyticsCourseData[0].OurExpert.img16}
          img17={BusinessAnalyticsCourseData[0].OurExpert.img17}
          img18={BusinessAnalyticsCourseData[0].OurExpert.img18}
          img19={BusinessAnalyticsCourseData[0].OurExpert.img19}
          img21={BusinessAnalyticsCourseData[0].OurExpert.img21}
          img22={BusinessAnalyticsCourseData[0].OurExpert.img22}
          img23={BusinessAnalyticsCourseData[0].OurExpert.img23}
          img20={BusinessAnalyticsCourseData[0].OurExpert.img20}
        />
        <Certificate H4="Business Analytics Program In Delhi" />
        <div className={styles.ProjectWrapper} id="project">
          <Project
            popupHead={BusinessAnalyticsCourseData[0].Project.popupHead}
            project={BusinessAnalyticsCourseData[0].Project.project}
            domain={BusinessAnalyticsCourseData[0].Project.domain}
            projectTitle="Hands-on Projects In Delhi"
          />
        </div>
        <SliderTab />
        <CourseFee
          syllabusDesc={BusinessAnalyticsCourseData[0].syllabusDesc}
          syllabus={BusinessAnalyticsCourseData[0].Batch}
          CourseFeeHead={
            BusinessAnalyticsCourseData[0].BatchCourses.CourseFeeHead
          }
          CourseFeePara={
            BusinessAnalyticsCourseData[0].BatchCourses.CourseFeePara
          }
          CourseFeelist1={
            BusinessAnalyticsCourseData[0].BatchCourses.CourseFeelist1
          }
          CourseFeelist2={
            BusinessAnalyticsCourseData[0].BatchCourses.CourseFeelist2
          }
          CourseFeelist3={
            BusinessAnalyticsCourseData[0].BatchCourses.CourseFeelist3
          }
          CourseFeelist4={
            BusinessAnalyticsCourseData[0].BatchCourses.CourseFeelist4
          }
          CourseFeelist5={
            BusinessAnalyticsCourseData[0].BatchCourses.CourseFeelist5
          }
        />
        <LearnSupport
          headForCity={true}
          cityName="24/7 Learner’s Support In Delhi"
        />
        <CityFooter cityName="Delhi" />
      </main>
    </div>
  );
}
