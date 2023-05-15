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
import React, { useState } from "react";
import { BusinessAnalyticsCourseData } from "../Data/BusinessAnalyticsData";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupport";
import CourseReview from "../Components/CoursePage/CourseReview/CourseReview";
import { ProgramFee } from "../Components/CoursePage/ProgramFee/ProgramFee";
import Footer from "../Components/CoursePage/Footer/Footer";

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
              "phoneNumber":"+919986049187"
          }
        };
            s.onload = function() {
                CreateWhatsappChatWidget(options);
            };
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);`,
          }}
        /> */}
        <script
          src="//code.tidio.co/mgl99n6cbvvabah9x8jj98no83kdozym.js"
          async
        ></script>
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
          deskTopPara={BusinessAnalyticsCourseData[0].FirstSection.deskTopPara}
          deskTopPara1={
            BusinessAnalyticsCourseData[0].FirstSection.deskTopPara1
          }
          spanTitleText={
            BusinessAnalyticsCourseData[0].FirstSection.spanTitleText
          }
          mTitle={BusinessAnalyticsCourseData[0].FirstSection.mTitle}
          mTopPara={BusinessAnalyticsCourseData[0].FirstSection.mTopPara}
          spanMTitleText={
            BusinessAnalyticsCourseData[0].FirstSection.spanMTitleText
          }
          mTopPara1={BusinessAnalyticsCourseData[0].FirstSection.mTopPara1}
          title={BusinessAnalyticsCourseData[0].FirstSection.title}
          desc={BusinessAnalyticsCourseData[0].FirstSection.desc}
          width={BusinessAnalyticsCourseData[0].FirstSection.width}
          height={BusinessAnalyticsCourseData[0].FirstSection.height}
          src={BusinessAnalyticsCourseData[0].FirstSection.src}
          alt={BusinessAnalyticsCourseData[0].FirstSection.alt}
          srcD={BusinessAnalyticsCourseData[0].FirstSection.srcD}
        />
        <div className={styles.program}>
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
        <div className="Feature" id="Feature">
          <BoxShape
            formotp={true}
            title="Explore Our Business Analytics Certification Programs"
            Box1h5={BusinessAnalyticsCourseData[0].BoxShape.Box1h5}
            box1desc={BusinessAnalyticsCourseData[0].BoxShape.box1desc}
            Box2h5={BusinessAnalyticsCourseData[0].BoxShape.Box2h5}
            box2desc={BusinessAnalyticsCourseData[0].BoxShape.box2desc}
            Box3h5={BusinessAnalyticsCourseData[0].BoxShape.Box3h5}
            box3desc={BusinessAnalyticsCourseData[0].BoxShape.box3desc}
            Box4h5={BusinessAnalyticsCourseData[0].BoxShape.Box4h5}
            box4desc={BusinessAnalyticsCourseData[0].BoxShape.box4desc}
            headh5="Watch our alumni making successful Business Analytics career transition"
          />
        </div>
        <CourseReview
          formotp={true}
          p1="Working at HCL"
          p2=" Working at TCS"
          p3="Working at Capgemini"
        />
        <Certificate
          title="Course Completion Certificate from IBM"
          desc="Complete your training with the internationally recognized certificate."
          desc2="Validate your Business Analytics skills with IBM Course Completion Certificate."
          desc3="Get acknowledged in IT sector by adding IBM Certificate to your profile."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BA-DA.jpeg"
        ></Certificate>
        <SyllabusNew
          formotp={true}
          syllabusFormotp={true}
          syllabus={BusinessAnalyticsCourseData[0].syllabus}
          CSyllabus={BusinessAnalyticsCourseData[0].CSyllabus}
          CourseHighlights={BusinessAnalyticsCourseData[0].CourseHighlights}
          syllabusDesc={BusinessAnalyticsCourseData[0].syllabusDesc}
          popupHead={BusinessAnalyticsCourseData[0].popupHead}
          srcD={BusinessAnalyticsCourseData[0].srcD}
          hours={BusinessAnalyticsCourseData[0].hours}
          project={BusinessAnalyticsCourseData[0].project}
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
        <ProgramFee
          formotp={true}
          Emi={BusinessAnalyticsCourseData[0].ProgramFee.Emi}
          Fee={BusinessAnalyticsCourseData[0].ProgramFee.Fee}
          CourseFeeAndFinancing={
            BusinessAnalyticsCourseData[0].ProgramFee.CourseFeeAndFinancing
          }
          para={BusinessAnalyticsCourseData[0].ProgramFee.para}
        />
        <div className={styles.ProjectWrapper} id="project">
          <Project
            formotp={true}
            project={BusinessAnalyticsCourseData[0].Project.project}
            domain={BusinessAnalyticsCourseData[0].Project.domain}
            projectTitle={BusinessAnalyticsCourseData[0].Project.projectTitle}
          />
        </div>
        <CourseFee
          formotp={true}
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
        <LearnSupport />
        <Footer />
      </main>
    </div>
  );
}
