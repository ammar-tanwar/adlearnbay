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
    <div>
      <Head>
        <title>Data Analytics Certification Program</title>
        <meta
          name="description"
          content="Data Analytics Certification Program"
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
      <main>  <Navbar popup={true} />

        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below Details to get started</p> */}

            <Form popup={true} setTrigger={setPopups}  radio={true} />
          </div>
        </Popup>
        <FirstSection
          deskTopPara={DataAnalyticsCourseData[0].FirstSection.deskTopPara}
          deskTopPara1={DataAnalyticsCourseData[0].FirstSection.deskTopPara1}
          spanTitleText={DataAnalyticsCourseData[0].FirstSection.spanTitleText}
          mTitle={DataAnalyticsCourseData[0].FirstSection.mTitle}
          mTopPara={DataAnalyticsCourseData[0].FirstSection.mTopPara}
          spanMTitleText={DataAnalyticsCourseData[0].FirstSection.spanMTitleText}
          mTopPara1={DataAnalyticsCourseData[0].FirstSection.mTopPara1}
          title={DataAnalyticsCourseData[0].FirstSection.title}
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
            title={DataAnalyticsCourseData[0].BoxShape.title}
            Box1h5={DataAnalyticsCourseData[0].BoxShape.Box1h5}
            box1desc={DataAnalyticsCourseData[0].BoxShape.box1desc}
            Box2h5={DataAnalyticsCourseData[0].BoxShape.Box2h5}
            box2desc={DataAnalyticsCourseData[0].BoxShape.box2desc}
            Box3h5={DataAnalyticsCourseData[0].BoxShape.Box3h5}
            box3desc={DataAnalyticsCourseData[0].BoxShape.box3desc}
            Box4h5={DataAnalyticsCourseData[0].BoxShape.Box4h5}
            box4desc={DataAnalyticsCourseData[0].BoxShape.box4desc}
            headh5={DataAnalyticsCourseData[0].BoxShape.headh5}

          />
        </div>
        <CourseReview
          p1="Working at HCL"
          p2=" Working at TCS"
          p3="Working at Capgemini" />
        <Certificate
          title={DataAnalyticsCourseData[0].Certificate.title}
          desc={DataAnalyticsCourseData[0].Certificate.desc}
          desc2={DataAnalyticsCourseData[0].Certificate.desc2}
          desc3={DataAnalyticsCourseData[0].Certificate.desc3}
          src={DataAnalyticsCourseData[0].Certificate.src}
          srcD={DataAnalyticsCourseData[0].Certificate.srcD}
        ></Certificate>

        <SyllabusNew
          syllabus={DataAnalyticsCourseData[0].syllabus}
          CSyllabus={DataAnalyticsCourseData[0].CSyllabus}
          CourseHighlights={DataAnalyticsCourseData[0].CourseHighlights}
          syllabusDesc={DataAnalyticsCourseData[0].syllabusDesc}
          popupHead={DataAnalyticsCourseData[0].popupHead}
          srcD={DataAnalyticsCourseData[0].srcD}
          hours={DataAnalyticsCourseData[0].hours}
          project={DataAnalyticsCourseData[0].project}
        />
        <OurExpert
          H5={DataAnalyticsCourseData[0].OurExpert.H5}

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
        <ProgramFee Emi={DataAnalyticsCourseData[0].ProgramFee.Emi}
          Fee={DataAnalyticsCourseData[0].ProgramFee.Fee}
          CourseFeeAndFinancing={DataAnalyticsCourseData[0].ProgramFee.CourseFeeAndFinancing}
          para={DataAnalyticsCourseData[0].ProgramFee.para} />
        <div className={styles.ProjectWrapper} id="project">
          <Project project={DataAnalyticsCourseData[0].Project.project}
            domain={DataAnalyticsCourseData[0].Project.domain}
            projectTitle={DataAnalyticsCourseData[0].Project.projectTitle} />
        </div>


        <CourseFee
          syllabusDesc={DataAnalyticsCourseData[0].syllabusDesc}
          syllabus={DataAnalyticsCourseData[0].Batch}

          CourseFeeHead={DataAnalyticsCourseData[0].BatchCourses.CourseFeeHead}
          CourseFeePara={DataAnalyticsCourseData[0].BatchCourses.CourseFeePara}
          CourseFeelist1={DataAnalyticsCourseData[0].BatchCourses.CourseFeelist1}
          CourseFeelist2={DataAnalyticsCourseData[0].BatchCourses.CourseFeelist2}
          CourseFeelist3={DataAnalyticsCourseData[0].BatchCourses.CourseFeelist3}
          CourseFeelist4={DataAnalyticsCourseData[0].BatchCourses.CourseFeelist4}
          CourseFeelist5={DataAnalyticsCourseData[0].BatchCourses.CourseFeelist5}
        />



        <LearnSupport />
        <Footer />
      </main>
    </div>
  );
}
