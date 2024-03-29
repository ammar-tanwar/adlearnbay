import Head from "next/head";
import React, { useState } from "react";
import Batch from "../Components/CoursePage/BatchDetails/Batch";
import BoxShape from "../Components/CoursePage/Boxshapefssds/BoxShape";
import CourseReview from "../Components/CoursePage/CourseReviewdsas/CourseReview";
import { DomainFaqCourseData1 } from "../Components/CoursePage/DomainFaq/DOmainFaqData";
import DomainFaq from "../Components/CoursePage/DomainFaq/DomainFaq";
import FirstSection from "../Components/CoursePage/HeroSection/HeroSection1";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupport";
import { ProgramFee } from "../Components/CoursePage/ProgramFee/ProgramFee";
import ProgramInfo from "../Components/CoursePage/ProgramInfo/ProgramInfo";
import Project from "../Components/CoursePage/Project/Project";
import SliderTab from "../Components/CoursePage/SliderTab/SliderTabs";
import SyllabusNew from "../Components/CoursePage/SyllabusNew/SyllabusNew1";
import Footer from "../Components/FooterHome/Footerfsd";
import Form from "../Components/Form/Form";
import Navbar from "../Components/NavbarHome/Navbar";
import Popup from "../Components/Popup/Popup";
import { FullStackWebCourseData } from "../Data/FullStackWebData";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <div>
        <Head>
          <title> Web Development Course</title>
          <meta
            name="description"
            content="Download the   Web Development Course Syllabus to know the Web Development Course with 100% Interactive Learning and get Certification"
          />
          <meta
            name="Keywords"
            content="  Web Development Course,   Web Development Course training ,   Web Development Course institute in India, best   Web Development Course institute,   Web developer Course ,  Web developer Course certification,   Web developer Course training institute , advanced   Web developer Course ,   Web developer Course with placement guarantee,   Web developer Course with IBM certification"
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
              "phoneNumber":"+917349222263"
          }
        };
            s.onload = function() {
                CreateWhatsappChatWidget(options);
            };
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);`,
            }}
          /> */}
        </Head>
        <main>
          {" "}
          <Navbar popup={true} dataScience={true} formotp={true} />
          <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
            <div className="leftPopup">
              <div className="whiteP" />
            </div>
            <div className="RightPopup">
              <h5>Apply For Counselling</h5>
              <Form popup={true} upSkillingHide={true} setTrigger={setPopups} />
            </div>
          </Popup>
          <FirstSection
            formotp={true}
            deskTopPara={FullStackWebCourseData[0].FirstSection.deskTopPara}
            mTopPara={FullStackWebCourseData[0].FirstSection.mTopPara}
            mTitle={FullStackWebCourseData[0].FirstSection.mTitle}
            spanMTitleText={
              FullStackWebCourseData[0].FirstSection.spanMTitleText
            }
            title={FullStackWebCourseData[0].FirstSection.title}
            spanTitleText={FullStackWebCourseData[0].FirstSection.spanTitleText}
            desc={FullStackWebCourseData[0].FirstSection.desc}
            src={FullStackWebCourseData[0].FirstSection.src}
            width={FullStackWebCourseData[0].FirstSection.width}
            height={FullStackWebCourseData[0].FirstSection.height}
            alt={FullStackWebCourseData[0].FirstSection.alt}
            srcD={FullStackWebCourseData[0].FirstSection.srcD}
          />
          <div className={styles.program}>
            <ProgramInfo
              p1={FullStackWebCourseData[0].ProgramInfo.p1}
              p11={FullStackWebCourseData[0].ProgramInfo.p11}
              p2={FullStackWebCourseData[0].ProgramInfo.p2}
              p22={FullStackWebCourseData[0].ProgramInfo.p22}
              p3={FullStackWebCourseData[0].ProgramInfo.p3}
              p33={FullStackWebCourseData[0].ProgramInfo.p33}
              p4={FullStackWebCourseData[0].ProgramInfo.p4}
              p44={FullStackWebCourseData[0].ProgramInfo.p44}
            />
          </div>
          <div className="Feature" id="Feature">
            <BoxShape
              title="Why Enroll In   Web Development Course?"
              Box1h5={FullStackWebCourseData[0].BoxShape.Box1h5}
              box1desc={FullStackWebCourseData[0].BoxShape.box1desc}
              Box2h5={FullStackWebCourseData[0].BoxShape.Box2h5}
              box2desc={FullStackWebCourseData[0].BoxShape.box2desc}
              Box3h5={FullStackWebCourseData[0].BoxShape.Box3h5}
              box3desc={FullStackWebCourseData[0].BoxShape.box3desc}
              Box4h5={FullStackWebCourseData[0].BoxShape.Box4h5}
              box4desc={FullStackWebCourseData[0].BoxShape.box4desc}
              headh5="Our proud alumni with successfull career transition"
            />
          </div>
          <DomainFaq FaqData={DomainFaqCourseData1} />
          <CourseReview formotp={true} />
          <SyllabusNew
            formotp={true}
            syllabusFormotp={true}
            syllabus={FullStackWebCourseData[0].syllabus}
            syllabusDesc={FullStackWebCourseData[0].syllabusDesc}
            popupHead={FullStackWebCourseData[0].popupHead}
            CSyllabus={FullStackWebCourseData[0].CSyllabus}
            CourseHighlights={FullStackWebCourseData[0].CourseHighlights}
            srcD={FullStackWebCourseData[0].srcD}
            hours={FullStackWebCourseData[0].hours}
            project={FullStackWebCourseData[0].project}
          />
          <ProgramFee
            Fee={FullStackWebCourseData[0].ProgramFee.Fee}
            Emi={FullStackWebCourseData[0].ProgramFee.Emi}
            formotp={true}
            CourseFeeAndFinancing="Program Fee & Financing"
            para="We are dedicated to making our programs accessible. We are committed to helping you find a way to budget for this program and offer a variety of financing options to make it more economical."
            dataScience={true}
          />
          <SliderTab />
          <div className={styles.ProjectWrapper} id="project">
            <Project
              formotp={true}
              project={FullStackWebCourseData[0].Project.project}
              domain={FullStackWebCourseData[0].Project.domain}
              projectTitle={FullStackWebCourseData[0].Project.projectTitle}
            />
          </div>
          <Batch
            WebDev={true}
            formotp={true}
            syllabusDesc={FullStackWebCourseData[0].syllabusDesc}
            syllabus={FullStackWebCourseData[0].Batch}
            CourseFeeHead={FullStackWebCourseData[0].BatchCourses.CourseFeeHead}
            CourseFeePara={FullStackWebCourseData[0].BatchCourses.CourseFeePara}
            CourseFeelist1={
              FullStackWebCourseData[0].BatchCourses.CourseFeelist1
            }
            CourseFeelist2={
              FullStackWebCourseData[0].BatchCourses.CourseFeelist2
            }
            CourseFeelist3={
              FullStackWebCourseData[0].BatchCourses.CourseFeelist3
            }
            CourseFeelist4={
              FullStackWebCourseData[0].BatchCourses.CourseFeelist4
            }
            CourseFeelist5={
              FullStackWebCourseData[0].BatchCourses.CourseFeelist5
            }
          />
          <LearnSupport organicNum={true} />
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
