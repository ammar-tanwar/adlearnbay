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
import { MlCourseData } from "../Data/MlData";
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
        <title>Machine Learning Placement Assistance Course – Learnbay</title>
        <meta
          name="description"
          content="Advance certification online Machine Learning course with 100% placement 
          assistance and get 1:1 Guaranteed interview calls, 15+ Real-time projects, 1+ 
          Capstone projects, 2 years of course subscription ,Lifetime Access to recorded 
          classes and 24/7 Learner’s support."
        />

        <meta
          name="Keywords"
          content="machine learning course, machine learning training, machine learning course institute, machine learning online course, machine learning course fee, advanced ml certification, machine learning course for working professional, advanced machine learning certification, advanced ml courses"
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
          deskTopPara={MlCourseData[0].FirstSection.deskTopPara}
          deskTopPara1={MlCourseData[0].FirstSection.deskTopPara1}
          spanTitleText="Unlimited Interview Calls"
          mTitle=" Machine Learning Job Assistance Course -"
          title=" Machine Learning Job Assistance Course"
          spanMTitleText="Unlimited Interview Calls"
          mTopPara1={MlCourseData[0].FirstSection.mTopPara1}
          mTopPara={MlCourseData[0].FirstSection.mTopPara}
          desc={MlCourseData[0].FirstSection.desc}
          width={MlCourseData[0].FirstSection.width}
          height={MlCourseData[0].FirstSection.height}
          src={MlCourseData[0].FirstSection.src}
          alt={MlCourseData[0].FirstSection.alt}
          srcD={MlCourseData[0].FirstSection.srcD}
        />
        <div className={styles.program}>
          <ProgramInfo
            p1={MlCourseData[0].ProgramInfo.p1}
            p11={MlCourseData[0].ProgramInfo.p11}
            p2={MlCourseData[0].ProgramInfo.p2}
            p22={MlCourseData[0].ProgramInfo.p22}
            p3={MlCourseData[0].ProgramInfo.p3}
            p33={MlCourseData[0].ProgramInfo.p33}
            p4={MlCourseData[0].ProgramInfo.p4}
            p44={MlCourseData[0].ProgramInfo.p44}
          />
        </div>
        <div className="Feature" id="Feature">
          <BoxShape
            title="Explore Our Machine Learning Placement Programs"
            Box1h5={MlCourseData[0].BoxShape.Box1h5}
            box1desc={MlCourseData[0].BoxShape.box1desc}
            Box2h5={MlCourseData[0].BoxShape.Box2h5}
            box2desc={MlCourseData[0].BoxShape.box2desc}
            Box3h5={MlCourseData[0].BoxShape.Box3h5}
            box3desc={MlCourseData[0].BoxShape.box3desc}
            Box4h5={MlCourseData[0].BoxShape.Box4h5}
            box4desc={MlCourseData[0].BoxShape.box4desc}
            headh5="Watch ours alumni making successful Machine Learning Placement career transition"
          />
        </div>
        <CourseReview
          p1="Working at HCL"
          p2=" Working at TCS"
          p3="Working at Capgemini"
        />
        <Certificate H4="Machine Learning Placement Assistance Program" />
        <OtherCertificate
          OCHead1={MlCourseData[0].OtherCertificate.OCHead1}
          OCP1={MlCourseData[0].OtherCertificate.OCP1}
          OCHead2={MlCourseData[0].OtherCertificate.OCHead2}
          OCP2={MlCourseData[0].OtherCertificate.OCP2}
          OCHead3={MlCourseData[0].OtherCertificate.OCHead3}
          OCP3={MlCourseData[0].OtherCertificate.OCP3}
          OCHead4={MlCourseData[0].OtherCertificate.OCHead4}
          OCP4={MlCourseData[0].OtherCertificate.OCP4}
        />
        <SyllabusNew
          syllabus={MlCourseData[0].syllabus}
          CSyllabus="Machine Learning Placement Assistance Course Syllabus"
          CourseHighlights={MlCourseData[0].CourseHighlights}
          syllabusDesc="Learnbay provides Live, Interactive Online Sessions guided by Professionals working in top MNCs. All Machine Learning Placement Assistance Course sessions are covered practically with real-time industrial projects and case studies."
          popupHead={MlCourseData[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
          hours={MlCourseData[0].hours}
          project={MlCourseData[0].project}
        />
        <OurExpert
          H5="Machine Learning Tools Covered"
          img1={MlCourseData[0].OurExpert.img1}
          img2={MlCourseData[0].OurExpert.img2}
          img3={MlCourseData[0].OurExpert.img3}
          img4={MlCourseData[0].OurExpert.img4}
          img5={MlCourseData[0].OurExpert.img5}
          img6={MlCourseData[0].OurExpert.img6}
          img7={MlCourseData[0].OurExpert.img7}
          img8={MlCourseData[0].OurExpert.img8}
          img9={MlCourseData[0].OurExpert.img9}
          img10={MlCourseData[0].OurExpert.img10}
          img11={MlCourseData[0].OurExpert.img11}
          img12={MlCourseData[0].OurExpert.img12}
          img13={MlCourseData[0].OurExpert.img13}
          img14={MlCourseData[0].OurExpert.img14}
          img15={MlCourseData[0].OurExpert.img15}
          img16={MlCourseData[0].OurExpert.img16}
          img17={MlCourseData[0].OurExpert.img17}
          img18={MlCourseData[0].OurExpert.img18}
          img19={MlCourseData[0].OurExpert.img19}
          img21={MlCourseData[0].OurExpert.img21}
          img22={MlCourseData[0].OurExpert.img22}
          img23={MlCourseData[0].OurExpert.img23}
          img20={MlCourseData[0].OurExpert.img20}
        />
        <ProgramFee
          Emi={MlCourseData[0].ProgramFee.Emi}
          Fee={MlCourseData[0].ProgramFee.Fee}
          CourseFeeAndFinancing=" Machine Learning Placement Assistance Course Fee & Financing"
          para="We are dedicated to making our programs accessible. We are committed to helping you find a way to budget for Machine Learning Placement Assistance Course and offer avariety of financing options to make it more economical."
        />
        <SliderTab />
        <div className={styles.ProjectWrapper} id="project">
          <Project
            project={MlCourseData[0].Project.project}
            domain={MlCourseData[0].Project.domain}
            projectTitle={MlCourseData[0].Project.projectTitle}
          />
        </div>
        <CourseFee
          syllabusDesc={MlCourseData[0].syllabusDesc}
          syllabus={MlCourseData[0].Batch}
          CourseFeeHead="Machine Learning Placement Assistance Course : Batch Details"
          CourseFeePara="Machine Learning Placement Assistance Online Classroom"
          CourseFeelist1={MlCourseData[0].BatchCourses.CourseFeelist1}
          CourseFeelist2={MlCourseData[0].BatchCourses.CourseFeelist2}
          CourseFeelist3={MlCourseData[0].BatchCourses.CourseFeelist3}
          CourseFeelist4={MlCourseData[0].BatchCourses.CourseFeelist4}
          CourseFeelist5={MlCourseData[0].BatchCourses.CourseFeelist5}
        />
        <LearnSupport />
        <Footer />
      </main>
    </div>
  );
}
