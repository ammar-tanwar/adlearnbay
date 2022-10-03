import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/CoursePage/HeroSection/HeroSection1";
import ProgramInfo from "../Components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../Components/CoursePage/Boxshapefssds/BoxShape";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Navbar from "../Components/NavbarHome/Navbar";
import Project from "../Components/CoursePage/Project/Project";
import OurExpert from "../Components/CoursePage/OurExpert/OurExpert";
import CourseFee from "../Components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../Components/CoursePage/SyllabusNew/SyllabusNew1";
import Footer from "../Components/FooterHome/Footerfsd";
import { ProgramFee } from "../Components/CoursePage/ProgramFee/ProgramFee";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupportfsd";
import React, { useState } from "react";
import { DsaCourseData } from "../Data/DsaData";
import SliderTab from "../Components/CoursePage/SliderTab/SliderTabs";
import CourseReview from "../Components/CoursePage/CourseReviewdsas/CourseReview";
import DomainFaq from "../Components/CoursePage/DomainFaq/DomainFaq";
import { DomainFaqCourseData1 } from "../Components/CoursePage/DomainFaq/DOmainFaqData";
import Batch from "../Components/CoursePage/BatchDetails/Batch";
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <Head>
        <title>DSA & System Design</title>
        <meta name="description" content="DSA & System Design" />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
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
      <main>  <Navbar popup={true} dataScience={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below Details to get started</p> */}

            <Form popup={true} setTrigger={setPopups} dataScience={true} />
          </div>
        </Popup>
        <FirstSection dataScience={true}
          deskTopPara="MAANG's Best Interview Preparation Course Trained by Top Experts"
          mTopPara="MAANG's Best Interview Preparation Course Trained by Top Experts"
          mTitle="Data Structures & Algorithms"
          spanMTitleText="Top Experts"
          title="Data Structures Algorithms & "
          spanTitleText="System Design Course"
          desc="Perform real-world industrial projects and use-cases."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/dsa-header-image.png"
          width="776"
          height="682"
          alt="Full Stack"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Structure+Algorithm+%26+System+Design+Learnbay.pdf"
        />
        <div className={styles.program}>
          <ProgramInfo
            p1={DsaCourseData[0].ProgramInfo.p1}
            p11={DsaCourseData[0].ProgramInfo.p11}
            p2={DsaCourseData[0].ProgramInfo.p2}
            p22={DsaCourseData[0].ProgramInfo.p22}
            p3={DsaCourseData[0].ProgramInfo.p3}
            p33={DsaCourseData[0].ProgramInfo.p33}
            p4={DsaCourseData[0].ProgramInfo.p4}
            p44={DsaCourseData[0].ProgramInfo.p44}
          />
        </div>

        <div className={styles.Feature} id="Feature">
          <BoxShape
            title="Why Enroll In DSA & System Design?"
            Box1h5="Crack MAANG Interview"
            box1desc="Learn in-depth DSA and crack interviews in product-based MNCs"
            Box2h5="1:1 Mentorship"
            box2desc="Guided by mentors working In MNCs to support you for the tech interviews"
            Box3h5="Practical Project Experience"
            box3desc="Gain technical expertise by working on challenging real-world projects"
            Box4h5="250+ Hiring Partners"
            box4desc="Get dedicated placement support with 100% Interview Guarantee"
          />
        </div>

        <DomainFaq FaqData={DomainFaqCourseData1} />
        <CourseReview />
        
        <SyllabusNew dataScience={true}
          syllabus={DsaCourseData[0].syllabus}
          syllabusDesc={DsaCourseData[0].syllabusDesc}
          popupHead="Download Course Brochure"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          hours="200+ Hours"
          project="12+ Real Time"
        />

        <ProgramFee Fee={DsaCourseData[0].ProgramFee.Fee}
          Emi={DsaCourseData[0].ProgramFee.Emi} CourseFeeAndFinancing="Program Fee & Financing"
          para="We are dedicated to making our programs accessible. We are committed to helping you find a way to budget for this program and offer a variety of financing options to make it more economical." dataScience={true} />
        <SliderTab />

        <div className={styles.ProjectWrapper} id="project">
          <Project popupHead={DsaCourseData[0].Project.popupHead}
            project={DsaCourseData[0].Project.project}
            domain={DsaCourseData[0].Project.domain}
            projectTitle={DsaCourseData[0].Project.projectTitle} />
        </div>

        <Batch
          syllabusDesc={DsaCourseData[0].syllabusDesc}
          syllabus={DsaCourseData[0].Batch}

          CourseFeeHead={DsaCourseData[0].BatchCourses.CourseFeeHead}
          CourseFeePara={DsaCourseData[0].BatchCourses.CourseFeePara}
          CourseFeelist1={DsaCourseData[0].BatchCourses.CourseFeelist1}
          CourseFeelist2={DsaCourseData[0].BatchCourses.CourseFeelist2}
          CourseFeelist3={DsaCourseData[0].BatchCourses.CourseFeelist3}
          CourseFeelist4={DsaCourseData[0].BatchCourses.CourseFeelist4}
          CourseFeelist5={DsaCourseData[0].BatchCourses.CourseFeelist5}
        />
        <LearnSupport />
        <Footer />
      </main>
    </div>
  );
}
