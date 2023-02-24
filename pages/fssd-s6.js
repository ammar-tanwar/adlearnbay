import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../Components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../Components/CoursePage/Boxshapefssds/BoxShape";
import Popup from "../Components/Popup/Popup";
import Navbar from "../Components/CoursePage/Navbar/Navbar";
import Form from "../Components/Form/Form";
import Project from "../Components/CoursePage/Projectfswd/Project";
import { ProgramFee } from "../Components/CoursePage/ProgramFee/ProgramFee";
import { FullStackSoftwareCourseData } from "../Data/FullStackSoftware";
import SyllabusNew from "../Components/CoursePage/SyllabusNew/SyllabusNew";
import CourseReview from "../Components/CoursePage/CourseReviewdsas/CourseReview";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupportfsd";
import Footer from "../Components/CoursePage/Footer/Footerfsd";
import BoxShape1 from "../Components/CoursePage/BoxshapeFssd/BoxShape";
import React, { useState } from "react";
import Batch from "../Components/CoursePage/BatchDetails/Batch";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <Head>
        <title>Full Stack Software Development Course</title>
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <meta
          name="description"
          content="Learn Full Stack Software Development Course. Get a chance to work with Maang Companies and participate in live, interactive online sessions led by tech experts to gain real-time project experience."
        />
        <meta
          name="Keywords"
          content="Full Stack Software Development Course, Software Development Course, Full Stack Software Development Training, Full Stack Software Development Program, Full Stack Software Development Institute, Online Full Stack Software Development Course, Learn Full Stack Software development Course"
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
                        "phoneNumber":"+919731135221"
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
        <Navbar popup={true} formotp={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <Form popup={true} setTrigger={setPopups} />
          </div>
        </Popup>
        <FirstSection
          formotp={true}
          deskTopPara={FullStackSoftwareCourseData[0].FirstSection.deskTopPara}
          mTopPara={FullStackSoftwareCourseData[0].FirstSection.mTopPara}
          mTitle={FullStackSoftwareCourseData[0].FirstSection.mTitle}
          spanMTitleText={
            FullStackSoftwareCourseData[0].FirstSection.spanMTitleText
          }
          title={FullStackSoftwareCourseData[0].FirstSection.title}
          spanTitleText={
            FullStackSoftwareCourseData[0].FirstSection.spanTitleText
          }
          desc={FullStackSoftwareCourseData[0].FirstSection.desc}
          src={FullStackSoftwareCourseData[0].FirstSection.src}
          width={FullStackSoftwareCourseData[0].FirstSection.width}
          height={FullStackSoftwareCourseData[0].FirstSection.height}
          alt={FullStackSoftwareCourseData[0].FirstSection.alt}
          srcD={FullStackSoftwareCourseData[0].FirstSection.srcD}
        />
        <div className={styles.program}>
          <ProgramInfo
            p1={FullStackSoftwareCourseData[0].ProgramInfo.p1}
            p11={FullStackSoftwareCourseData[0].ProgramInfo.p11}
            p2={FullStackSoftwareCourseData[0].ProgramInfo.p2}
            p22={FullStackSoftwareCourseData[0].ProgramInfo.p22}
            p3={FullStackSoftwareCourseData[0].ProgramInfo.p3}
            p33={FullStackSoftwareCourseData[0].ProgramInfo.p33}
            p4={FullStackSoftwareCourseData[0].ProgramInfo.p4}
            p44={FullStackSoftwareCourseData[0].ProgramInfo.p44}
          />
        </div>
        <div className="Feature" id="Feature">
          <BoxShape
            title={FullStackSoftwareCourseData[0].BoxShape.title}
            Box1h5={FullStackSoftwareCourseData[0].BoxShape.Box1h5}
            box1desc={FullStackSoftwareCourseData[0].BoxShape.box1desc}
            Box2h5={FullStackSoftwareCourseData[0].BoxShape.Box2h5}
            box2desc={FullStackSoftwareCourseData[0].BoxShape.box2desc}
            Box3h5={FullStackSoftwareCourseData[0].BoxShape.Box3h5}
            box3desc={FullStackSoftwareCourseData[0].BoxShape.box3desc}
            Box4h5={FullStackSoftwareCourseData[0].BoxShape.Box4h5}
            box4desc={FullStackSoftwareCourseData[0].BoxShape.box4desc}
            headh5={FullStackSoftwareCourseData[0].BoxShape.headh5}
          />
        </div>
        <div className={styles.Feature} id="Feature">
          <BoxShape1
            formotp={true}
            title={FullStackSoftwareCourseData[0].BoxShape1.title}
            Box1h5={FullStackSoftwareCourseData[0].BoxShape1.Box1h5}
            box1desc={FullStackSoftwareCourseData[0].BoxShape1.box1desc}
            Box2h5={FullStackSoftwareCourseData[0].BoxShape1.Box2h5}
            box2desc={FullStackSoftwareCourseData[0].BoxShape1.box2desc}
            Box3h5={FullStackSoftwareCourseData[0].BoxShape1.Box3h5}
            box3desc={FullStackSoftwareCourseData[0].BoxShape1.box3desc}
            Box4h5={FullStackSoftwareCourseData[0].BoxShape1.Box4h5}
            box4desc={FullStackSoftwareCourseData[0].BoxShape1.box4desc}
          />
        </div>
        <CourseReview formotp={true} />
        <SyllabusNew
          formotp={true}
          syllabus={FullStackSoftwareCourseData[0].syllabus}
          syllabusDesc={FullStackSoftwareCourseData[0].syllabusDesc}
          popupHead={FullStackSoftwareCourseData[0].popupHead}
          CSyllabus={FullStackSoftwareCourseData[0].CSyllabus}
          CourseHighlights={FullStackSoftwareCourseData[0].CourseHighlights}
          srcD={FullStackSoftwareCourseData[0].srcD}
          hours={FullStackSoftwareCourseData[0].hours}
          project={FullStackSoftwareCourseData[0].project}
          syllabusFormotp={true}
        />
        <ProgramFee
          Fee={FullStackSoftwareCourseData[0].ProgramFee.Fee}
          Emi={FullStackSoftwareCourseData[0].ProgramFee.Emi}
          formotp={true}
          CourseFeeAndFinancing={
            FullStackSoftwareCourseData[0].ProgramFee.CourseFeeAndFinancing
          }
        />
        <div className={styles.ProjectWrapper} id="project">
          <Project
            project={FullStackSoftwareCourseData[0].Project.project}
            domain={FullStackSoftwareCourseData[0].Project.domain}
            formotp={true}
          />
        </div>
        <Batch
          formotp={true}
          syllabusDesc={FullStackSoftwareCourseData[0].syllabusDesc}
          syllabus={FullStackSoftwareCourseData[0].Batch}
          CourseFeeHead={
            FullStackSoftwareCourseData[0].BatchCourses.CourseFeeHead
          }
          CourseFeePara={
            FullStackSoftwareCourseData[0].BatchCourses.CourseFeePara
          }
          CourseFeelist1={
            FullStackSoftwareCourseData[0].BatchCourses.CourseFeelist1
          }
          CourseFeelist2={
            FullStackSoftwareCourseData[0].BatchCourses.CourseFeelist2
          }
          CourseFeelist3={
            FullStackSoftwareCourseData[0].BatchCourses.CourseFeelist3
          }
          CourseFeelist4={
            FullStackSoftwareCourseData[0].BatchCourses.CourseFeelist4
          }
          CourseFeelist5={
            FullStackSoftwareCourseData[0].BatchCourses.CourseFeelist5
          }
        />
        <LearnSupport />
        <Footer
          paraTag="Enroll now for DSA and Full stack software development course and get master as a Full stack Developer which will help you to transform your career."
          pTag={true}
        />
      </main>
    </div>
  );
}
