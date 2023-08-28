import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../Components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../Components/CoursePage/Boxshape/BoxShape1";
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
import { mastersProgram } from "../Data/mastersProgram";
import SliderTab from "../Components/CoursePage/SliderTab/SliderTabs";
import CourseReview from "../Components/CoursePage/CourseReview/CourseReview";
import DomainFaq from "../Components/CoursePage/DomainFaq/DomainFaq";
import { DomainFaqCourseData1 } from "../Components/CoursePage/DomainFaq/DOmainFaqData";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <div>
        <Head>
          <title>Data Science and AI Master’s Program – Learnbay</title>
          <meta
            name="description"
            content="Online Data Science and AI Master’s Program with 100% placement assistance and 
                    get  1:1 Guaranteed interview calls, 20+ Real-time projects, 3+ Capstone projects, 
                    3 years of course subscription ,Lifetime Access to recorded classes and 24/7 
                    Learner’s support."
          />
          <meta
            name="Keywords"
            content="data science and ai master program, artificial intelligence master's programs, online master's program in artificial intelligence, masters in ai and data science course, masters course artificial intelligence for working professionals, artificial intelligence masters online course, masters program in data science and AI in india, masters course in data science for working professionals, data science masters programs online, best online masters program in artificial intelligence, online masters in ai course,  data science masters course, masters in data science online course, data science and artificial intelligence masters program,  master data science course, masters in data science online program"
          />

          <link
            rel="canonical"
            href="https://www.learnbay.co/data-science-ai-masters-program"
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
          <Navbar popup={true} dataScience={true} formotp={true} />
          <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
            <div className="leftPopup">
              <div className="whiteP" />
            </div>
            <div className="RightPopup">
              <h5>Apply For Counselling</h5>
              {/* <p>Fill the below details to get started</p> */}
              <Form popup={true} setTrigger={setPopups} dataScience={true} />
            </div>
          </Popup>
          <FirstSection
            formotp={true}
            dataScience={true}
            deskTopPara={mastersProgram[0].FirstSection.deskTopPara}
            deskTopPara1={mastersProgram[0].FirstSection.deskTopPara1}
            spanTitleText={mastersProgram[0].FirstSection.spanTitleText}
            mTitle={mastersProgram[0].FirstSection.mTitle}
            mTopPara={mastersProgram[0].FirstSection.mTopPara}
            spanMTitleText={mastersProgram[0].FirstSection.spanMTitleText}
            mTopPara1={mastersProgram[0].FirstSection.mTopPara1}
            title={mastersProgram[0].FirstSection.title}
            desc={mastersProgram[0].FirstSection.desc}
            width={mastersProgram[0].FirstSection.width}
            height={mastersProgram[0].FirstSection.height}
            src={mastersProgram[0].FirstSection.src}
            alt={mastersProgram[0].FirstSection.alt}
            srcD={mastersProgram[0].FirstSection.srcD}
          />
          <div className={styles.program}>
            <ProgramInfo
              p1={mastersProgram[0].ProgramInfo.p1}
              p11={mastersProgram[0].ProgramInfo.p11}
              p2={mastersProgram[0].ProgramInfo.p2}
              p22={mastersProgram[0].ProgramInfo.p22}
              p3={mastersProgram[0].ProgramInfo.p3}
              p33={mastersProgram[0].ProgramInfo.p33}
              p4={mastersProgram[0].ProgramInfo.p4}
              p44={mastersProgram[0].ProgramInfo.p44}
            />
          </div>
          <div className={styles.Feature} id="Feature">
            <BoxShape
              formotp={true}
              title={mastersProgram[0].BoxShape.title}
              Box1h5={mastersProgram[0].BoxShape.Box1h5}
              box1desc={mastersProgram[0].BoxShape.box1desc}
              Box2h5={mastersProgram[0].BoxShape.Box2h5}
              box2desc={mastersProgram[0].BoxShape.box2desc}
              Box3h5={mastersProgram[0].BoxShape.Box3h5}
              box3desc={mastersProgram[0].BoxShape.box3desc}
              Box4h5={mastersProgram[0].BoxShape.Box4h5}
              box4desc={mastersProgram[0].BoxShape.box4desc}
            />
          </div>
          <DomainFaq FaqData={DomainFaqCourseData1} />
          <CourseReview formotp={true} />
          <Certificate />
          <SyllabusNew
            formotp={true}
            syllabusFormotp={true}
            syllabus={mastersProgram[0].syllabus}
            CSyllabus={mastersProgram[0].CSyllabus}
            CourseHighlights={mastersProgram[0].CourseHighlights}
            syllabusDesc={mastersProgram[0].syllabusDesc}
            popupHead={mastersProgram[0].popupHead}
            srcD={mastersProgram[0].srcD}
            hours={mastersProgram[0].hours}
            project={mastersProgram[0].project}
          />
          <OurExpert
            H5="Tools Covered"
            img1={mastersProgram[0].OurExpert.img1}
            img2={mastersProgram[0].OurExpert.img2}
            img3={mastersProgram[0].OurExpert.img3}
            img4={mastersProgram[0].OurExpert.img4}
            img5={mastersProgram[0].OurExpert.img5}
            img6={mastersProgram[0].OurExpert.img6}
            img7={mastersProgram[0].OurExpert.img7}
            img8={mastersProgram[0].OurExpert.img8}
            img9={mastersProgram[0].OurExpert.img9}
            img10={mastersProgram[0].OurExpert.img10}
            img11={mastersProgram[0].OurExpert.img11}
            img12={mastersProgram[0].OurExpert.img12}
            img13={mastersProgram[0].OurExpert.img13}
            img14={mastersProgram[0].OurExpert.img14}
            img15={mastersProgram[0].OurExpert.img15}
            img16={mastersProgram[0].OurExpert.img16}
            img17={mastersProgram[0].OurExpert.img17}
            img18={mastersProgram[0].OurExpert.img18}
            img19={mastersProgram[0].OurExpert.img19}
            img21={mastersProgram[0].OurExpert.img21}
            img22={mastersProgram[0].OurExpert.img22}
            img23={mastersProgram[0].OurExpert.img23}
            img20={mastersProgram[0].OurExpert.img20}
          />
          <ProgramFee
            formotp={true}
            Fee={mastersProgram[0].ProgramFee.Fee}
            Emi={mastersProgram[0].ProgramFee.Emi}
            CourseFeeAndFinancing={
              mastersProgram[0].ProgramFee.CourseFeeAndFinancing
            }
            para={mastersProgram[0].ProgramFee.para}
            dataScience={true}
          />
          <SliderTab />
          <div className={styles.ProjectWrapper} id="project">
            <Project
              formotp={true}
              popupHead={mastersProgram[0].Project.popupHead}
              project={mastersProgram[0].Project.project}
              domain={mastersProgram[0].Project.domain}
              projectTitle={mastersProgram[0].Project.projectTitle}
            />
          </div>
          <CourseFee
            formotp={true}
            syllabusDesc={mastersProgram[0].syllabusDesc}
            syllabus={mastersProgram[0].Batch}
            CourseFeeHead={mastersProgram[0].BatchCourses.CourseFeeHead}
            CourseFeePara={mastersProgram[0].BatchCourses.CourseFeePara}
            CourseFeelist1={mastersProgram[0].BatchCourses.CourseFeelist1}
            CourseFeelist2={mastersProgram[0].BatchCourses.CourseFeelist2}
            CourseFeelist3={mastersProgram[0].BatchCourses.CourseFeelist3}
            CourseFeelist4={mastersProgram[0].BatchCourses.CourseFeelist4}
            CourseFeelist5={mastersProgram[0].BatchCourses.CourseFeelist5}
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
