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
import { DataAnalyticsCourseData } from "../Data/DataAnalyticsData";
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
    <>
      <div>
        <Head>
          <title>Data Analytics Placement course – Learnbay</title>
          <meta
            name="description"
            content="Advance certification online Data Analytics course with 100% placement assistance 
          and get 1:1 Guaranteed interview calls, 8+ Real-time projects, 2 years of course subscription ,Lifetime Access to recorded classes and 
          24/7 Learner’s support."
          />
          <meta
            name="Keywords"
            content="data analytics course, data analytics institute, data analytics course fee, data analytics certification, data analytics training, business analytics course, data analytics course duration, business analytics institute, business analytics certification, business analytics training"
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
            deskTopPara={DataAnalyticsCourseData[0].FirstSection.deskTopPara}
            deskTopPara1={DataAnalyticsCourseData[0].FirstSection.deskTopPara1}
            mTitle="Data Analytics Job Assistance Course - "
            spanMTitleText="Unlimited Interview Calls"
            title="Data Analytics Job Assistance Course "
            spanTitleText="Unlimited Interview Calls"
            mTopPara={DataAnalyticsCourseData[0].FirstSection.mTopPara}
            mTopPara1={DataAnalyticsCourseData[0].FirstSection.mTopPara1}
            desc={DataAnalyticsCourseData[0].FirstSection.desc}
            width={DataAnalyticsCourseData[0].FirstSection.width}
            height={DataAnalyticsCourseData[0].FirstSection.height}
            src={DataAnalyticsCourseData[0].FirstSection.src}
            alt={DataAnalyticsCourseData[0].FirstSection.alt}
            srcD={DataAnalyticsCourseData[0].FirstSection.srcD}
          />
          <div className={styles.program}>
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
          <div className="Feature" id="Feature">
            <BoxShape
              formotp={true}
              title="Explore Our Data Analytics Placement Assistance Programs"
              Box1h5={DataAnalyticsCourseData[0].BoxShape.Box1h5}
              box1desc={DataAnalyticsCourseData[0].BoxShape.box1desc}
              Box2h5={DataAnalyticsCourseData[0].BoxShape.Box2h5}
              box2desc={DataAnalyticsCourseData[0].BoxShape.box2desc}
              Box3h5={DataAnalyticsCourseData[0].BoxShape.Box3h5}
              box3desc={DataAnalyticsCourseData[0].BoxShape.box3desc}
              Box4h5={DataAnalyticsCourseData[0].BoxShape.Box4h5}
              box4desc={DataAnalyticsCourseData[0].BoxShape.box4desc}
              headh5="Watch our alumni making successful  Data Analytics Placement career transition"
            />
          </div>
          <CourseReview
            formotp={true}
            p1="Working at HCL"
            p2=" Working at TCS"
            p3="Working at Capgemini"
          />
          <Certificate
            title={DataAnalyticsCourseData[0].Certificate.title}
            desc={DataAnalyticsCourseData[0].Certificate.desc}
            desc2={DataAnalyticsCourseData[0].Certificate.desc2}
            desc3={DataAnalyticsCourseData[0].Certificate.desc3}
            src={DataAnalyticsCourseData[0].Certificate.src}
            srcD={DataAnalyticsCourseData[0].Certificate.srcD}
          ></Certificate>
          <SyllabusNew
            formotp={true}
            syllabusFormotp={true}
            syllabus={DataAnalyticsCourseData[0].syllabus}
            CSyllabus=" Data Analytics Placement Assistance Course Syllabus"
            CourseHighlights={DataAnalyticsCourseData[0].CourseHighlights}
            syllabusDesc="Learnbay provides Live, Interactive Online Sessions guided by Professionals working in top MNCs. All  Data Analytics Placement Assistance Course sessions are covered practically with real-time industrial projects and case studies."
            popupHead={DataAnalyticsCourseData[0].popupHead}
            srcD={DataAnalyticsCourseData[0].srcD}
            hours={DataAnalyticsCourseData[0].hours}
            project={DataAnalyticsCourseData[0].project}
          />
          <OurExpert
            H5=" Data Analytics Placement Assistance Tools Covered"
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
          <ProgramFee
            formotp={true}
            Emi={DataAnalyticsCourseData[0].ProgramFee.Emi}
            Fee={DataAnalyticsCourseData[0].ProgramFee.Fee}
            CourseFeeAndFinancing=" Data Analytics Placement Course Fee & Financing"
            para="We are dedicated to making our programs accessible. We are committed to helping you find a way to budget for  Data Analytics Placement Assistance Course and offer avariety of financing options to make it more economical."
          />
          <div className={styles.ProjectWrapper} id="project">
            <Project
              formotp={true}
              project={DataAnalyticsCourseData[0].Project.project}
              domain={DataAnalyticsCourseData[0].Project.domain}
              projectTitle={DataAnalyticsCourseData[0].Project.projectTitle}
            />
          </div>
          <CourseFee
            formotp={true}
            syllabusDesc={DataAnalyticsCourseData[0].syllabusDesc}
            syllabus={DataAnalyticsCourseData[0].Batch}
            CourseFeeHead="Data Analytics Placement Assistance Course : Batch Details"
            CourseFeePara="Data Analytics Placement Assistance Online Classroom"
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
          <LearnSupport />
          <Footer />
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
