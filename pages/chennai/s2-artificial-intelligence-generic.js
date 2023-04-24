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
import CourseFee from "../../Components/CoursePage/CourseFee/CourseFee";
import Certificate from "../../Components/CoursePage/CertificateTab/CertificateTabAdvance";
import Project from "../../Components/CoursePage/Project/Project";
import SliderTab from "../../Components/CoursePage/SliderTab/SliderTabs";
import ProgramWithHighLight from "../../Components/CityComponents/ProgramWithHighLight/ProgramWithHighLight";
import { AiCourseData } from "../../Data/chennai/AiData";
import ProgramInfo from "../../Components/CoursePage/ProgramInfo/ProgramInfo";
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <Head>
        <title>Learn Online Artificial Intelligence Course</title>
        <meta
          name="description"
          content="Top Artificial Intelligence course with Domain specialization and
get 100% placement assistance "
        />
        <meta
          name="Keywords"
          content="artificial intelligence course institute, artificial intelligence course fee, artificial intelligence certification, artificial intelligence training, advance artificial intelligence course, artificial intelligence course duration, artificial intelligence online course, artificial intelligence course, artificial intelligence course for working professional"
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
        <Navbar popup={true} jobDesc={true} formotp={true} />
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
          formotp={true}
          DeskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/ChennaiTopWeb.jpg"
          MobImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/ChennaiTopMob.jpg"
          courseName="Artificial Intelligence Course"
          cityName="In Chennai"
          ptag="Artificial intelligence is the simulation of human intelligence in 
          machines that are programmed to think and act like humans. This 
          course in Chennai is developed for working individuals who want to 
          maximize their present industry expertise and change career."
        />
        <div className={styles.program1}>
          <ProgramInfo
            p1={AiCourseData[0].ProgramInfo.p1}
            p11={AiCourseData[0].ProgramInfo.p11}
            p2={AiCourseData[0].ProgramInfo.p2}
            p22={AiCourseData[0].ProgramInfo.p22}
            p3={AiCourseData[0].ProgramInfo.p3}
            p33={AiCourseData[0].ProgramInfo.p33}
            p4={AiCourseData[0].ProgramInfo.p4}
            p44={AiCourseData[0].ProgramInfo.p44}
          />
        </div>
        <HiringPatners topHead="Our Hiring Partner's In Chennai" />
        <div className={styles.Feature} id="Feature">
          <ProgramWithHighLight
            title="Artificial Intelligence Course Features in Chennai"
            Box1h5={AiCourseData[0].BoxShape.Box1h5}
            box1desc={AiCourseData[0].BoxShape.box1desc}
            Box2h5={AiCourseData[0].BoxShape.Box2h5}
            box2desc={AiCourseData[0].BoxShape.box2desc}
            Box3h5={AiCourseData[0].BoxShape.Box3h5}
            box3desc={AiCourseData[0].BoxShape.box3desc}
            Box4h5={AiCourseData[0].BoxShape.Box4h5}
            box4desc={AiCourseData[0].BoxShape.box4desc}
            HHeading="Course Details"
            Duration="350+ Hours"
            InterviewCalls=" 10 "
            Projects="15+"
            CourseFee="₹ 1,05,000 +GST "
            Domain="7+"
          />
        </div>
        <SyllabusNew
          formotp={true}
          syllabus={AiCourseData[0].syllabus}
          CSyllabus="Artificial Intelligence Course Syllabus In Chennai"
          CourseHighlights={AiCourseData[0].CourseHighlights}
          syllabusDesc={AiCourseData[0].syllabusDesc}
          popupHead={AiCourseData[0].popupHead}
          hours={AiCourseData[0].hours}
          project={AiCourseData[0].project}
        />
        <CityImage
          formotp={true}
          DeskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/CenterCityChennaiWeb.jpg"
          MobImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/CenterCityChennaiMob.jpg"
          cityName="சென்னை"
        />
        <OurExpert
          H5="Artificial Intelligence Tools Covered"
          img1={AiCourseData[0].OurExpert.img1}
          img2={AiCourseData[0].OurExpert.img2}
          img3={AiCourseData[0].OurExpert.img3}
          img4={AiCourseData[0].OurExpert.img4}
          img5={AiCourseData[0].OurExpert.img5}
          img6={AiCourseData[0].OurExpert.img6}
          img7={AiCourseData[0].OurExpert.img7}
          img8={AiCourseData[0].OurExpert.img8}
          img9={AiCourseData[0].OurExpert.img9}
          img10={AiCourseData[0].OurExpert.img10}
          img11={AiCourseData[0].OurExpert.img11}
          img12={AiCourseData[0].OurExpert.img12}
          img13={AiCourseData[0].OurExpert.img13}
          img14={AiCourseData[0].OurExpert.img14}
          img15={AiCourseData[0].OurExpert.img15}
          img16={AiCourseData[0].OurExpert.img16}
          img17={AiCourseData[0].OurExpert.img17}
          img18={AiCourseData[0].OurExpert.img18}
          img19={AiCourseData[0].OurExpert.img19}
          img21={AiCourseData[0].OurExpert.img21}
          img22={AiCourseData[0].OurExpert.img22}
          img23={AiCourseData[0].OurExpert.img23}
          img20={AiCourseData[0].OurExpert.img20}
        />
        <Certificate H4="Artificial Intelligence Program In Chennai" />
        <div className={styles.ProjectWrapper} id="project">
          <Project
            formotp={true}
            popupHead={AiCourseData[0].Project.popupHead}
            project={AiCourseData[0].Project.project}
            domain={AiCourseData[0].Project.domain}
            projectTitle="Hands-on Projects In Chennai"
          />
        </div>
        <SliderTab />
        <CourseFee
          formotp={true}
          syllabusDesc={AiCourseData[0].syllabusDesc}
          syllabus={AiCourseData[0].Batch}
          CourseFeeHead={AiCourseData[0].BatchCourses.CourseFeeHead}
          CourseFeePara={AiCourseData[0].BatchCourses.CourseFeePara}
          CourseFeelist1={AiCourseData[0].BatchCourses.CourseFeelist1}
          CourseFeelist2={AiCourseData[0].BatchCourses.CourseFeelist2}
          CourseFeelist3={AiCourseData[0].BatchCourses.CourseFeelist3}
          CourseFeelist4={AiCourseData[0].BatchCourses.CourseFeelist4}
          CourseFeelist5={AiCourseData[0].BatchCourses.CourseFeelist5}
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
