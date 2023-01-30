import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../Components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../Components/CoursePage/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Navbar from "../Components/CoursePage/Navbar/Navbar";
import Certificate from "../Components/CoursePage/CertificateTab/CertificateTabAdvance";
import Project from "../Components/CoursePage/Project/Project";
import OurExpert from "../Components/CoursePage/OurExpert/OurExpert";
import CourseFee from "../Components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../Components/CoursePage/SyllabusNew/SyllabusNew";
import Footer from "../Components/CoursePage/Footer/Footer";
import { ProgramFee } from "../Components/CoursePage/ProgramFee/ProgramFee";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupport";
import React, { useState } from "react";
import { DataScienceCourseData } from "../Data/DataScienceCourse";
import SliderTab from "../Components/CoursePage/SliderTab/SliderTabs";
import CourseReview from "../Components/CoursePage/CourseReview/CourseReview";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <Head>
        <title>Data Science Training course - Learnbay</title>
        <meta
          name="description"
          content="Advance certification online data science course with 100% placement assistance 
          and get 1:1 Guaranteed interview calls, 12+ Real-time projects, 1+ Capstone 
          projects, 2 years of course subscription ,Lifetime Access to recorded classes and 
          24/7 Learner’s support."
        />

        <meta
          name="Keywords"
          content="Data Science training, Data Science training, Data Science training institute, Data Science online training, Data Science training  fee, advanced ml training certification, Data Science training for working professional, advanced Data Science training certification, advanced ml training"
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
        {" "}
        <Navbar popup={true} />
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
          popupHead={DataScienceCourseData[0].FirstSection.popupHead}
          deskTopPara={DataScienceCourseData[0].FirstSection.deskTopPara}
          mTopPara={DataScienceCourseData[0].FirstSection.mTopPara}
          mTitle="Data Science Training "
          spanMTitleText="For Managers and Leaders"
          title="Data Science Training "
          spanTitleText="For Managers and Leaders"
          desc={DataScienceCourseData[0].FirstSection.desc}
          src={DataScienceCourseData[0].FirstSection.src}
          width={DataScienceCourseData[0].FirstSection.width}
          height={DataScienceCourseData[0].FirstSection.height}
          alt={DataScienceCourseData[0].FirstSection.alt}
          srcD={DataScienceCourseData[0].FirstSection.srcD}
        />
        <div className={styles.program}>
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
        <div className={styles.Feature} id="Feature">
          <BoxShape
            title="Explore Our Data Science Training Programs"
            Box1h5={DataScienceCourseData[0].BoxShape.Box1h5}
            box1desc={DataScienceCourseData[0].BoxShape.box1desc}
            Box2h5={DataScienceCourseData[0].BoxShape.Box2h5}
            box2desc={DataScienceCourseData[0].BoxShape.box2desc}
            Box3h5={DataScienceCourseData[0].BoxShape.Box3h5}
            box3desc={DataScienceCourseData[0].BoxShape.box3desc}
            Box4h5={DataScienceCourseData[0].BoxShape.Box4h5}
            box4desc={DataScienceCourseData[0].BoxShape.box4desc}
            headh5="Watch our alumni making successful Data Science Training career transition"
          />
        </div>
        <CourseReview
          p1="Working at HCL"
          p2=" Working at TCS"
          p3="Working at Capgemini"
        />
        <Certificate H4="Data Science Training Program" />
        <SyllabusNew
          syllabus={DataScienceCourseData[0].syllabus}
          CSyllabus="Data Science Training Syllabus"
          CourseHighlights="Course Highlights"
          syllabusDesc="Learnbay provides Live, Interactive Online Sessions guided by Professionals working in top MNCs. All Data Science Training Course sessions are covered practically with real-time industrial projects and case studies."
          popupHead={DataScienceCourseData[0].popupHead}
          hours={DataScienceCourseData[0].hours}
          project={DataScienceCourseData[0].project}
        />
        <OurExpert
          H5="Data Science Tools Covered"
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
        <ProgramFee
          Fee={DataScienceCourseData[0].ProgramFee.Fee}
          Emi={DataScienceCourseData[0].ProgramFee.Emi}
          CourseFeeAndFinancing="Data Science Training Fee & Financing"
          para="We are dedicated to making our programs accessible. We are committed to helping you find a way to budget for Training Data Science Certification Course and offer avariety of financing options to make it more economical."
        />
        <SliderTab />
        <div className={styles.ProjectWrapper} id="project">
          <Project
            popupHead={DataScienceCourseData[0].Project.popupHead}
            project={DataScienceCourseData[0].Project.project}
            domain={DataScienceCourseData[0].Project.domain}
            projectTitle={DataScienceCourseData[0].Project.projectTitle}
          />
        </div>
        <CourseFee
          syllabusDesc={DataScienceCourseData[0].syllabusDesc}
          syllabus={DataScienceCourseData[0].Batch}
          CourseFeeHead="Data Science Training : Batch Details"
          CourseFeePara="Data Science Training Online Classroom"
          CourseFeelist1={DataScienceCourseData[0].BatchCourses.CourseFeelist1}
          CourseFeelist2={DataScienceCourseData[0].BatchCourses.CourseFeelist2}
          CourseFeelist3={DataScienceCourseData[0].BatchCourses.CourseFeelist3}
          CourseFeelist4={DataScienceCourseData[0].BatchCourses.CourseFeelist4}
          CourseFeelist5={DataScienceCourseData[0].BatchCourses.CourseFeelist5}
        />
        <LearnSupport />
        <Footer />
      </main>
    </div>
  );
}
