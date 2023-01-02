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
import { DataScienceCourseData } from "../../Data/bangalore/DataScienceCourse";
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
        <title>Data Science course - Learnbay</title>
        <meta
          name="description"
          content="Advance certification online data science course with 100% placement assistance 
          and get 1:1 Guaranteed interview calls, 12+ Real-time projects, 1+ Capstone 
          projects, 2 years of course subscription ,Lifetime Access to recorded classes and 
          24/7 Learner’s support."
        />
        <meta
          name="Keywords"
          content="data science course certification, data science online course, data science training, data science course for working professional, data science institute, data science course, data science course duration, data science course fee"
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
          DeskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/BengaluruTopWeb.jpg"
          MobImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/BengaluruTopMob.jpg"
          courseName="Data Science Course"
          cityName="In Bangalore"
          ptag="Data science is the study of data with the aim of gaining critical 
        business insights. It is a multidisciplinary method for analyzing massive
        volumes of data. This course in Bangalore will provide you with hands-
        on experience with technologies such as R, Python, Tableau, Hadoop, 
        and so on."
        />

        <div className={styles.program1}>
          <ProgramInfo
            p1={DataScienceCourseData[0].ProgramInfo.p1}
            p11={DataScienceCourseData[0].ProgramInfo.p11}
            p2={DataScienceCourseData[0].ProgramInfo.p2}
            p22={DataScienceCourseData[0].ProgramInfo.p22}
            p3={DataScienceCourseData[0].ProgramInfo.p3}
            p33={DataScienceCourseData[0].ProgramInfo.p33}
            p4={DataScienceCourseData[0].ProgramInfo.p4}
            p44={DataScienceCourseData[0].ProgramInfo.p44}
          />
        </div>
        <HiringPatners topHead="Our Hiring Partner's In Bangalore" />

        <div className={styles.Feature} id="Feature">
          <ProgramWithHighLight
            title={DataScienceCourseData[0].BoxShape.title}
            Box1h5={DataScienceCourseData[0].BoxShape.Box1h5}
            box1desc={DataScienceCourseData[0].BoxShape.box1desc}
            Box2h5={DataScienceCourseData[0].BoxShape.Box2h5}
            box2desc={DataScienceCourseData[0].BoxShape.box2desc}
            Box3h5={DataScienceCourseData[0].BoxShape.Box3h5}
            box3desc={DataScienceCourseData[0].BoxShape.box3desc}
            Box4h5={DataScienceCourseData[0].BoxShape.Box4h5}
            box4desc={DataScienceCourseData[0].BoxShape.box4desc}
            HHeading="Course Details"
            Duration="250+ Hours"
            InterviewCalls=" 10 "
            Projects="12+"
            CourseFee="₹ 95,000 +GST "
            Domain="7+"
          />
        </div>

        <SyllabusNew
          syllabus={DataScienceCourseData[0].syllabus}
          CSyllabus="Data Science Course Syllabus In Bangalore"
          CourseHighlights={DataScienceCourseData[0].CourseHighlights}
          syllabusDesc={DataScienceCourseData[0].syllabusDesc}
          popupHead={DataScienceCourseData[0].popupHead}
          hours={DataScienceCourseData[0].hours}
          project={DataScienceCourseData[0].project}
        />

        <CityImage
          DeskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/CenterCityBangaloreWeb.jpg"
          MobImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/CenterCityBangaloreMob.jpg"
          cityName="ಬೆಂಗಳೂರು"
        />
        <OurExpert
          H5={DataScienceCourseData[0].OurExpert.H5}
          img1={DataScienceCourseData[0].OurExpert.img1}
          img2={DataScienceCourseData[0].OurExpert.img2}
          img3={DataScienceCourseData[0].OurExpert.img3}
          img4={DataScienceCourseData[0].OurExpert.img4}
          img5={DataScienceCourseData[0].OurExpert.img5}
          img6={DataScienceCourseData[0].OurExpert.img6}
          img7={DataScienceCourseData[0].OurExpert.img7}
          img8={DataScienceCourseData[0].OurExpert.img8}
          img9={DataScienceCourseData[0].OurExpert.img9}
          img10={DataScienceCourseData[0].OurExpert.img10}
          img11={DataScienceCourseData[0].OurExpert.img11}
          img12={DataScienceCourseData[0].OurExpert.img12}
          img13={DataScienceCourseData[0].OurExpert.img13}
          img14={DataScienceCourseData[0].OurExpert.img14}
          img15={DataScienceCourseData[0].OurExpert.img15}
          img16={DataScienceCourseData[0].OurExpert.img16}
          img17={DataScienceCourseData[0].OurExpert.img17}
          img18={DataScienceCourseData[0].OurExpert.img18}
          img19={DataScienceCourseData[0].OurExpert.img19}
          img21={DataScienceCourseData[0].OurExpert.img21}
          img22={DataScienceCourseData[0].OurExpert.img22}
          img23={DataScienceCourseData[0].OurExpert.img23}
          img20={DataScienceCourseData[0].OurExpert.img20}
        />
        <Certificate H4="Data Science Certification Program In Bangalore" />
        <div className={styles.ProjectWrapper} id="project">
          <Project
            popupHead={DataScienceCourseData[0].Project.popupHead}
            project={DataScienceCourseData[0].Project.project}
            domain={DataScienceCourseData[0].Project.domain}
            projectTitle="Hands-on Projects In Bangalore"
          />
        </div>
        <SliderTab />

        <CourseFee
          syllabusDesc={DataScienceCourseData[0].syllabusDesc}
          syllabus={DataScienceCourseData[0].Batch}
          CourseFeeHead={DataScienceCourseData[0].BatchCourses.CourseFeeHead}
          CourseFeePara={DataScienceCourseData[0].BatchCourses.CourseFeePara}
          CourseFeelist1={DataScienceCourseData[0].BatchCourses.CourseFeelist1}
          CourseFeelist2={DataScienceCourseData[0].BatchCourses.CourseFeelist2}
          CourseFeelist3={DataScienceCourseData[0].BatchCourses.CourseFeelist3}
          CourseFeelist4={DataScienceCourseData[0].BatchCourses.CourseFeelist4}
          CourseFeelist5={DataScienceCourseData[0].BatchCourses.CourseFeelist5}
        />
        <LearnSupport
          headForCity={true}
          cityName="24/7 Learner’s Support In Bangalore"
        />
        <CityFooter cityName="Bangalore" />
      </main>
    </div>
  );
}
