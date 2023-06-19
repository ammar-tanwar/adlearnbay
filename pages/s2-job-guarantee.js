import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../Components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../Components/CoursePage/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import Navbar from "../Components/CoursePage/Navbar/Navbar";

import Form from "../Components/Form/Form";
import Certificate from "../Components/CoursePage/Certificatejob/Certificate";
import Project from "../Components/CoursePage/Project/Project";
import OurExpert from "../Components/CoursePage/OurExpert/OurExpert";
import CourseFee from "../Components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../Components/CoursePage/SyllabusNew/SyllabusNew";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupport";
import { JobGuaranteeCourseData } from "../Data/JobGuaranteeData";
import React, { useState } from "react";
import { ProgramFee } from "../Components/CoursePage/ProgramFee/ProgramFee";
import SliderTab from "../Components/CoursePage/SliderTab/SliderTabs";
import CourseReview from "../Components/CoursePage/CourseReview/CourseReview";
import Footer from "../Components/CoursePage/Footer/Footer";

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
        />

        <meta
          name="Keywords"
          content="best data science course with placement assistance, data analytics course with job assistance, online data science course with placement assistance, data analytics online course with placement assistance, placement assistance data science course, job assitance machine learning courses, placement assistance artificial intelligence courses, data analytics course with placement assistance, machine learning course with placement assistance, data science Placement assistance program india, data science course with job assistance india, job assistance data science courses"
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
              "phoneNumber":"+918123327570"
          }
        };
            s.onload = function() {
                CreateWhatsappChatWidget(options);
            };
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);`,
          }}
        />
        {/* <script
          src="//code.tidio.co/mgl99n6cbvvabah9x8jj98no83kdozym.js"
          async
        ></script> */}
      </Head>
      <main>
        {" "}
        <Navbar popup={true} formotp={true} />
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
          formotp={true}
          deskTopPara={JobGuaranteeCourseData[0].FirstSection.deskTopPara}
          deskTopPara1={JobGuaranteeCourseData[0].FirstSection.deskTopPara1}
          spanTitleText={JobGuaranteeCourseData[0].FirstSection.spanTitleText}
          mTitle={JobGuaranteeCourseData[0].FirstSection.mTitle}
          mTopPara={JobGuaranteeCourseData[0].FirstSection.mTopPara}
          spanMTitleText={JobGuaranteeCourseData[0].FirstSection.spanMTitleText}
          mTopPara1={JobGuaranteeCourseData[0].FirstSection.mTopPara1}
          title={JobGuaranteeCourseData[0].FirstSection.title}
          desc={JobGuaranteeCourseData[0].FirstSection.desc}
          width={JobGuaranteeCourseData[0].FirstSection.width}
          height={JobGuaranteeCourseData[0].FirstSection.height}
          src={JobGuaranteeCourseData[0].FirstSection.src}
          alt={JobGuaranteeCourseData[0].FirstSection.alt}
          srcD={JobGuaranteeCourseData[0].FirstSection.srcD}
        />
        <div className={styles.program}>
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
        <div className="Feature" id="Feature">
          <BoxShape
            formotp={true}
            title={JobGuaranteeCourseData[0].BoxShape.title}
            Box1h5={JobGuaranteeCourseData[0].BoxShape.Box1h5}
            box1desc={JobGuaranteeCourseData[0].BoxShape.box1desc}
            Box2h5={JobGuaranteeCourseData[0].BoxShape.Box2h5}
            box2desc={JobGuaranteeCourseData[0].BoxShape.box2desc}
            Box3h5={JobGuaranteeCourseData[0].BoxShape.Box3h5}
            box3desc={JobGuaranteeCourseData[0].BoxShape.box3desc}
            Box4h5={JobGuaranteeCourseData[0].BoxShape.Box4h5}
            box4desc={JobGuaranteeCourseData[0].BoxShape.box4desc}
          />
        </div>
        <CourseReview
          formotp={true}
          p1="Working at HCL"
          p2=" Working at TCS"
          p3="Working at Capgemini"
        />
        <Certificate
          title={JobGuaranteeCourseData[0].Certificate.title}
          desc={JobGuaranteeCourseData[0].Certificate.desc}
          desc2={JobGuaranteeCourseData[0].Certificate.desc2}
          desc3={JobGuaranteeCourseData[0].Certificate.desc3}
          src={JobGuaranteeCourseData[0].Certificate.src}
        />
        <SyllabusNew
          formotp={true}
          syllabusFormotp={true}
          syllabus={JobGuaranteeCourseData[0].syllabus}
          CSyllabus={JobGuaranteeCourseData[0].CSyllabus}
          CourseHighlights={JobGuaranteeCourseData[0].CourseHighlights}
          syllabusDesc={JobGuaranteeCourseData[0].syllabusDesc}
          popupHead={JobGuaranteeCourseData[0].popupHead}
          srcD={JobGuaranteeCourseData[0].srcD}
          hours={JobGuaranteeCourseData[0].hours}
          project={JobGuaranteeCourseData[0].project}
        />
        <OurExpert
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
        <ProgramFee
          formotp={true}
          Emi={JobGuaranteeCourseData[0].ProgramFee.Emi}
          Fee={JobGuaranteeCourseData[0].ProgramFee.Fee}
          CourseFeeAndFinancing={
            JobGuaranteeCourseData[0].ProgramFee.CourseFeeAndFinancing
          }
        />
        <SliderTab />
        <div className={styles.ProjectWrapper} id="project">
          <Project
            formotp={true}
            project={JobGuaranteeCourseData[0].Project.project}
            domain={JobGuaranteeCourseData[0].Project.domain}
            projectTitle={JobGuaranteeCourseData[0].Project.projectTitle}
          />
        </div>
        <CourseFee
          formotp={true}
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
        <LearnSupport />
        <Footer />
      </main>
    </div>
  );
}
