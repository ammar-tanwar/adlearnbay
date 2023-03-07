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
import { SytstemDesignCourseData } from "../Data/SystemDesignData";
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
        <title>Data Structure Course Syllabus and DSA Training 2022</title>
        <meta
          name="description"
          content="Best way to learn Data Structures and Algorithms with System Design Course Online, mastering any one coding skill - Interaction in limited batch, No Cost EMI."
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
        {" "}
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
          deskTopPara={SytstemDesignCourseData[0].FirstSection.deskTopPara}
          mTopPara={SytstemDesignCourseData[0].FirstSection.mTopPara}
          mTitle={SytstemDesignCourseData[0].FirstSection.mTitle}
          spanMTitleText={
            SytstemDesignCourseData[0].FirstSection.spanMTitleText
          }
          title={SytstemDesignCourseData[0].FirstSection.title}
          spanTitleText={SytstemDesignCourseData[0].FirstSection.spanTitleText}
          desc={SytstemDesignCourseData[0].FirstSection.desc}
          src={SytstemDesignCourseData[0].FirstSection.src}
          width={SytstemDesignCourseData[0].FirstSection.width}
          height={SytstemDesignCourseData[0].FirstSection.height}
          alt={SytstemDesignCourseData[0].FirstSection.alt}
          srcD={SytstemDesignCourseData[0].FirstSection.srcD}
        />
        <div className={styles.program}>
          <ProgramInfo
            p1={SytstemDesignCourseData[0].ProgramInfo.p1}
            p11={SytstemDesignCourseData[0].ProgramInfo.p11}
            p2={SytstemDesignCourseData[0].ProgramInfo.p2}
            p22={SytstemDesignCourseData[0].ProgramInfo.p22}
            p3={SytstemDesignCourseData[0].ProgramInfo.p3}
            p33={SytstemDesignCourseData[0].ProgramInfo.p33}
            p4={SytstemDesignCourseData[0].ProgramInfo.p4}
            p44={SytstemDesignCourseData[0].ProgramInfo.p44}
          />
        </div>
        <div className="Feature" id="Feature">
          <BoxShape
            title={SytstemDesignCourseData[0].BoxShape.title}
            Box1h5={SytstemDesignCourseData[0].BoxShape.Box1h5}
            box1desc={SytstemDesignCourseData[0].BoxShape.box1desc}
            Box2h5={SytstemDesignCourseData[0].BoxShape.Box2h5}
            box2desc={SytstemDesignCourseData[0].BoxShape.box2desc}
            Box3h5={SytstemDesignCourseData[0].BoxShape.Box3h5}
            box3desc={SytstemDesignCourseData[0].BoxShape.box3desc}
            Box4h5={SytstemDesignCourseData[0].BoxShape.Box4h5}
            box4desc={SytstemDesignCourseData[0].BoxShape.box4desc}
            headh5={SytstemDesignCourseData[0].BoxShape.headh5}
          />
        </div>
        <div className={styles.Feature} id="Feature">
          <BoxShape1
            formotp={true}
            title={SytstemDesignCourseData[0].BoxShape1.title}
            Box1h5={SytstemDesignCourseData[0].BoxShape1.Box1h5}
            box1desc={SytstemDesignCourseData[0].BoxShape1.box1desc}
            Box2h5={SytstemDesignCourseData[0].BoxShape1.Box2h5}
            box2desc={SytstemDesignCourseData[0].BoxShape1.box2desc}
            Box3h5={SytstemDesignCourseData[0].BoxShape1.Box3h5}
            box3desc={SytstemDesignCourseData[0].BoxShape1.box3desc}
            Box4h5={SytstemDesignCourseData[0].BoxShape1.Box4h5}
            box4desc={SytstemDesignCourseData[0].BoxShape1.box4desc}
          />
        </div>
        <CourseReview formotp={true} />
        <SyllabusNew
          formotp={true}
          syllabusFormotp={true}
          syllabus={SytstemDesignCourseData[0].syllabus}
          syllabusDesc={SytstemDesignCourseData[0].syllabusDesc}
          popupHead={SytstemDesignCourseData[0].popupHead}
          CSyllabus={SytstemDesignCourseData[0].CSyllabus}
          CourseHighlights={SytstemDesignCourseData[0].CourseHighlights}
          srcD={SytstemDesignCourseData[0].srcD}
          hours={SytstemDesignCourseData[0].hours}
          project={SytstemDesignCourseData[0].project}
        />
        <ProgramFee
          Fee={SytstemDesignCourseData[0].ProgramFee.Fee}
          Emi={SytstemDesignCourseData[0].ProgramFee.Emi}
          formotp={true}
          CourseFeeAndFinancing={
            SytstemDesignCourseData[0].ProgramFee.CourseFeeAndFinancing
          }
          para="We are dedicated to making our programs accessible. We are committed to helping you find a way to budget for this program and offer a variety of financing options to make it more economical."
          dataScience={true}
        />
        <div className={styles.ProjectWrapper} id="project">
          <Project
            project={SytstemDesignCourseData[0].Project.project}
            domain={SytstemDesignCourseData[0].Project.domain}
            formotp={true}
          />
        </div>
        <Batch
          formotp={true}
          syllabusDesc={SytstemDesignCourseData[0].syllabusDesc}
          syllabus={SytstemDesignCourseData[0].Batch}
          CourseFeeHead={SytstemDesignCourseData[0].BatchCourses.CourseFeeHead}
          CourseFeePara={SytstemDesignCourseData[0].BatchCourses.CourseFeePara}
          CourseFeelist1={
            SytstemDesignCourseData[0].BatchCourses.CourseFeelist1
          }
          CourseFeelist2={
            SytstemDesignCourseData[0].BatchCourses.CourseFeelist2
          }
          CourseFeelist3={
            SytstemDesignCourseData[0].BatchCourses.CourseFeelist3
          }
          CourseFeelist4={
            SytstemDesignCourseData[0].BatchCourses.CourseFeelist4
          }
          CourseFeelist5={
            SytstemDesignCourseData[0].BatchCourses.CourseFeelist5
          }
        />
        <div className={styles.boxContent}>
          <div className={styles.FirstBox}>
            <p className={styles.FirstP}>
              How will the System Design Course help you as an SDE?
            </p>
            <p className={styles.SecondP}>
              System Design is the process of defining, creating, and designing
              systems that meet a company's or organization's specific
              objectives and expectations. A System designer applies modelling
              languages to convey information and knowledge in a system
              structure that is regulated by a uniform set of guidelines and
              criteria. The designs might be expressed in textual or graphical
              modelling languages. System Design can be categorized into High
              level system design and low-level system design. A developer who’s
              trying to switch to product company needs to Learn System Design
              course not only to clear the interview round but also to prove his
              skillset in system designing.
            </p>
          </div>
          <div>
            <div className={styles.InnerBox}>
              <p className={styles.SecondP}>
                The focus of both high-level and low-level system design courses
                is on your ability to build and scale technically based systems
                in general.
              </p>
            </div>
            <div className={styles.InnerBox}>
              <p className={styles.SecondP}>
                In order to establish scalable systems that can serve millions
                of people, system design course will help to overcome
                difficulties.
              </p>
            </div>
            <div className={styles.InnerBox}>
              <p className={styles.SecondP}>
                System Design course will help the transition to product based
                companies easier as they also prepare you for the interview.
              </p>
            </div>
          </div>
        </div>
        <LearnSupport />
        <Footer
          paraTag="Enroll now for Full Stack and DSA Program (Bangalore) and get master in Data Structures and System Design Skills which will help you to transform your career."
          pTag={true}
        />
      </main>
    </div>
  );
}
