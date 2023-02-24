import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../Components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../Components/CoursePage/Boxshape/BoxShape";
import Navbar from "../Components/CoursePage/Navbar/Navbar";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Certificate from "../Components/CoursePage/CertificateTab/CertificateTab3";
import Project from "../Components/CoursePage/Project/Project";
import OurExpert from "../Components/CoursePage/OurExpert/OurExpert";
import CourseFee from "../Components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../Components/CoursePage/SyllabusNew/SyllabusNew";
import OtherCertificate from "../Components/CoursePage/OtherCertificate/OtherCertificate";
import { AiCourseData } from "../Data/AiData";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupport";
import React, { useState } from "react";
import SliderTab from "../Components/CoursePage/SliderTab/SliderTabs";
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
        <title>Artificial Intelligence Master Course - Learnbay</title>
        <meta
          name="description"
          content="Advance certification online Artificial Intelligence course with 100% placement 
          assistance and get 1:1 Guaranteed interview calls, 15+ Real-time projects, 1+ 
          Capstone projects, 2 years of course subscription ,Lifetime Access to recorded 
          classes and 24/7 Learner’s support."
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
          deskTopPara={AiCourseData[0].FirstSection.deskTopPara}
          deskTopPara1={AiCourseData[0].FirstSection.deskTopPara1}
          spanTitleText="For Managers and Leaders"
          mTitle="Artificial Intelligence Master Course"
          title="Artificial Intelligence Master Course"
          spanMTitleText="For Managers and Leaders"
          mTopPara={AiCourseData[0].FirstSection.mTopPara}
          mTopPara1={AiCourseData[0].FirstSection.mTopPara1}
          desc={AiCourseData[0].FirstSection.desc}
          width={AiCourseData[0].FirstSection.width}
          height={AiCourseData[0].FirstSection.height}
          src={AiCourseData[0].FirstSection.src}
          alt={AiCourseData[0].FirstSection.alt}
          srcD={AiCourseData[0].FirstSection.srcD}
        />
        <div className={styles.program}>
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
        <div className="Feature" id="Feature">
          <BoxShape
            title="Explore Our Artificial Intelligence Master Programs"
            Box1h5={AiCourseData[0].BoxShape.Box1h5}
            box1desc={AiCourseData[0].BoxShape.box1desc}
            Box2h5={AiCourseData[0].BoxShape.Box2h5}
            box2desc={AiCourseData[0].BoxShape.box2desc}
            Box3h5={AiCourseData[0].BoxShape.Box3h5}
            box3desc={AiCourseData[0].BoxShape.box3desc}
            Box4h5={AiCourseData[0].BoxShape.Box4h5}
            box4desc={AiCourseData[0].BoxShape.box4desc}
            headh5="Watch our alumni making successful Artificial Intelligence Master career transition"
          />
        </div>
        <CourseReview
          p1="Working at HCL"
          p2=" Working at TCS"
          p3="Working at Capgemini"
        />
        <Certificate H4="AI Master Program" />
        <OtherCertificate
          OCHead1={AiCourseData[0].OtherCertificate.OCHead1}
          OCP1={AiCourseData[0].OtherCertificate.OCP1}
          OCHead2={AiCourseData[0].OtherCertificate.OCHead2}
          OCP2={AiCourseData[0].OtherCertificate.OCP2}
          OCHead3={AiCourseData[0].OtherCertificate.OCHead3}
          OCP3={AiCourseData[0].OtherCertificate.OCP3}
          OCHead4={AiCourseData[0].OtherCertificate.OCHead4}
          OCP4={AiCourseData[0].OtherCertificate.OCP4}
        />
        <SyllabusNew
          syllabus={AiCourseData[0].syllabus}
          CSyllabus="Artificial Intelligence Master Course Syllabus"
          CourseHighlights={AiCourseData[0].CourseHighlights}
          syllabusDesc="Learnbay provides Live, Interactive Online Sessions guided by Professionals working in top MNCs. All Artificial Intelligence Master Course sessions are covered practically with real-time industrial projects and case studies."
          popupHead={AiCourseData[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
          hours={AiCourseData[0].hours}
          project={AiCourseData[0].project}
        />
        <OurExpert
          H5="AI Master Tools Covered"
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
        <ProgramFee
          Emi={AiCourseData[0].ProgramFee.Emi}
          Fee={AiCourseData[0].ProgramFee.Fee}
          CourseFeeAndFinancing="Artificial Intelligence Master Course Fee & Financing"
          para="We are dedicated to making our programs accessible. We are committed to helping you find a way to budget for AI Master Course and offer avariety of financing options to make it more economical."
        />
        <SliderTab />
        <div className={styles.ProjectWrapper} id="project">
          <Project
            project={AiCourseData[0].Project.project}
            domain={AiCourseData[0].Project.domain}
            projectTitle={AiCourseData[0].Project.projectTitle}
          />
        </div>
        <CourseFee
          syllabusDesc={AiCourseData[0].syllabusDesc}
          syllabus={AiCourseData[0].Batch}
          CourseFeeHead="Artificial Intelligence Master Course : Batch Details"
          CourseFeePara="Artificial Intelligence Master Online Classroom"
          CourseFeelist1={AiCourseData[0].BatchCourses.CourseFeelist1}
          CourseFeelist2={AiCourseData[0].BatchCourses.CourseFeelist2}
          CourseFeelist3={AiCourseData[0].BatchCourses.CourseFeelist3}
          CourseFeelist4={AiCourseData[0].BatchCourses.CourseFeelist4}
          CourseFeelist5={AiCourseData[0].BatchCourses.CourseFeelist5}
        />
        <LearnSupport />
        <Footer />
      </main>
    </div>
  );
}
