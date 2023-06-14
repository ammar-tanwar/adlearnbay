import Head from "next/head";
import styles from "../../styles/Home.module.css";
import FirstSection from "../../Components/CoursePage/HeroSection/HeroSection1";
import ProgramInfo from "../../Components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../../Components/CoursePage/Boxshapefssds/BoxShape";
import Popup from "../../Components/Popup/Popup";
import Form from "../../Components/Form/Form";
import Navbar from "../../Components/NavbarHome/Navbar";
import Project from "../../Components/CoursePage/Project/Project";
import SyllabusNew from "../../Components/CoursePage/SyllabusNew/SyllabusNew1";
import Footer from "../../Components/FooterHome/Footerfsd";
import { ProgramFee } from "../../Components/CoursePage/ProgramFee/ProgramFee";
import LearnSupport from "../../Components/CoursePage/LearnSupport/LearnSupport";
import React, { useState } from "react";
import { FullStackSoftwareCourseData } from "../../Data/FullStackSoftware";
import SliderTab from "../../Components/CoursePage/SliderTab/SliderTabs";
import CourseReview from "../../Components/CoursePage/CourseReviewdsas/CourseReview";
import DomainFaq from "../../Components/CoursePage/DomainFaq/DomainFaq";
import { DomainFaqCourseData1 } from "../../Components/CoursePage/DomainFaq/DOmainFaqData";
import Batch from "../../Components/CoursePage/BatchDetails/Batch";

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
          content="Learn Full Stack Software Development Course. Get a chance to work with top product based MNCs Companies and participate in live, interactive online sessions led by tech experts to gain real-time project experience."
        />
        <meta
          name="Keywords"
          content="Full Stack Software Development Course, Software Development Course, Full Stack Software Development Training, Full Stack Software Development Program, Full Stack Software Development Institute, Online Full Stack Software Development Course, Learn Full Stack Software development Course"
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
        <script
          src="//code.tidio.co/mgl99n6cbvvabah9x8jj98no83kdozym.js"
          async
        ></script>
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
            {/* <p>Fill the below Details to get started</p> */}

            <Form popup={true} setTrigger={setPopups} dataScience={true} />
          </div>
        </Popup>
        <FirstSection
          dataScience={true}
          formotp={true}
          deskTopPara="Ace the PRODUCT Interviews to achieve your dream job"
          mTopPara="Ace the PRODUCT Interviews to achieve your dream job"
          mTitle="Full Stack Software  "
          spanMTitleText="Development Course"
          title="Full Stack Software  "
          spanTitleText="Development Course"
          desc="Best Interview Prep Course for Top Product Based MNCs"
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/W+Dev.png"
          width="791"
          height="659"
          alt="Full Stack"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
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
        <div className={styles.Feature} id="Feature">
          <BoxShape
            formotp={true}
            title="Why Enroll In Full Stack Software Development Course?"
            Box1h5="Crack MNCs Interview"
            box1desc="Learn in-depth DSA and crack interviews in product-based MNCs"
            Box2h5="1:1 Mentorship"
            box2desc="Guided by mentors working in MNCs to support you for the tech interviews"
            Box3h5="Practical Project Experience"
            box3desc="Gain technical expertise by working on challenging real-world projects"
            Box4h5="Domain Specialization"
            box4desc="Choose Domain electives on your work experience and work on Live Projects"
            headh5="Our proud alumni with successfull career transition"
          />
        </div>
        <DomainFaq FaqData={DomainFaqCourseData1} />
        <CourseReview formotp={true} />
        <SyllabusNew
          dataScience={true}
          formotp={true}
          syllabusFormotp={true}
          syllabus={FullStackSoftwareCourseData[0].syllabus}
          syllabusDesc={FullStackSoftwareCourseData[0].syllabusDesc}
          popupHead="Download Course Brochure"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
          hours="300+ Hours"
          project="12+ Real Time"
        />
        <ProgramFee
          Fee={FullStackSoftwareCourseData[0].ProgramFee.Fee}
          formotp={true}
          Emi={FullStackSoftwareCourseData[0].ProgramFee.Emi}
          CourseFeeAndFinancing="Program Fee & Financing"
          para="We are dedicated to making our programs accessible. We are committed to helping you find a way to budget for this program and offer a variety of financing options to make it more economical."
          dataScience={true}
        />
        <SliderTab />
        <div className={styles.ProjectWrapper} id="project">
          <Project
            formotp={true}
            project={FullStackSoftwareCourseData[0].Project.project}
            domain={FullStackSoftwareCourseData[0].Project.domain}
            projectTitle={FullStackSoftwareCourseData[0].Project.projectTitle}
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
        <LearnSupport organicNum={true} />
        <Footer />
      </main>
    </div>
  );
}
