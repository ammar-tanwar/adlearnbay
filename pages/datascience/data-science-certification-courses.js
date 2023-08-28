import Head from "next/head";
import styles from "../../styles/Home.module.css";
import FirstSection from "../../Components/CoursePage/HeroSection/HeroSection1";
import ProgramInfo from "../../Components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../../Components/CoursePage/Boxshape/BoxShape1";
import Popup from "../../Components/Popup/Popup";
import Form from "../../Components/Form/Form";
import Navbar from "../../Components/NavbarHome/Navbar";
import Certificate from "../../Components/CoursePage/CertificateTab/CertificateTabAdvance";
import Project from "../../Components/CoursePage/Project/Project";
import OurExpert from "../../Components/CoursePage/OurExpert/OurExpert";
import CourseFee from "../../Components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../../Components/CoursePage/SyllabusNew/SyllabusNew1";
import Footer from "../../Components/FooterHome/Footer";
import { ProgramFee } from "../../Components/CoursePage/ProgramFee/ProgramFee";
import LearnSupport from "../../Components/CoursePage/LearnSupport/LearnSupport";
import React, { useState } from "react";
import { DataScienceCourseData } from "../../Data/DataScienceCourse";
import SliderTab from "../../Components/CoursePage/SliderTab/SliderTabs";
import CourseReview from "../../Components/CoursePage/CourseReview/CourseReview";
import DomainFaq from "../../Components/CoursePage/DomainFaq/DomainFaq";
import { DomainFaqCourseData1 } from "../../Components/CoursePage/DomainFaq/DOmainFaqData";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <div>
        <Head>
          <title>Data Science course - Learnbay</title>
          <meta
            name="description"
            content="Advance certification online data science course with 100% placement assistance 
        and get 1:1 Guaranteed interview calls, 12+ Real-time projects, 1+ Capstone 
        projects, 2 years of course subscription ,Lifetime Access to recorded classes and 
        24/7 Learner’s support."
          />
          <meta
            name="Keywords"
            content="data science course certification, data science online course, data science training, data science course for working professional, data science institute, data science course, data science course duration, data science course fee"
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
          
            deskTopPara="Choose Specialization over Generalization"
            mTopPara="Choose Specialization over Generalization"
            mTitle="Advanced Data Science and AI Program with"
            spanMTitleText="Domain Specialization"
            title="Advanced Data Science and AI Program"
            spanTitleText="with Domain Specialization"
            desc="With new capstone projects, learn how to apply your previous domain expertise to make a successful transition."
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/ADSAI.png"
            width="900"
            height="762"
            alt="data science course"
            srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          />
          <div className={styles.program}>
            <ProgramInfo
              p1={DataScienceCourseData[0].ProgramInfo.p1}
              p11={DataScienceCourseData[0].ProgramInfo.p11}
              p2={DataScienceCourseData[0].ProgramInfo.p2}
              p22={DataScienceCourseData[0].ProgramInfo.p22}
              p3={DataScienceCourseData[0].ProgramInfo.p3}
              p33={DataScienceCourseData[0].ProgramInfo.p33}
              p4={DataScienceCourseData[0].ProgramInfo.p4}
              p44={DataScienceCourseData[0].ProgramInfo.p44}
            />
          </div>
          <div className={styles.Feature} id="Feature">
            <BoxShape
              title="Why Enroll In This Program?"
              Box1h5="1-on-1 Dedication"
              box1desc="Live interactive session with expert for every individual"
              Box2h5="Assured Interview Call"
              box2desc="Get job referrals powered by 250+ hiring partners"
              Box3h5="Premium Mentoring"
              box3desc="Get professionally trained from top product based MNCs and MNC experts"
              Box4h5="Crafted for professional"
              box4desc="Prioritize growth and salary hike with in-demand skillset"
            />
          </div>
          <DomainFaq FaqData={DomainFaqCourseData1} />
          <CourseReview
            p1="Working at HCL"
            p2=" Working at TCS"
            p3="Working at Capgemini"
          />
          <Certificate H4="Data Science Certification Program" />
          <SyllabusNew
          
            syllabus={DataScienceCourseData[0].syllabus}
            syllabusDesc={DataScienceCourseData[0].syllabusDesc}
            popupHead="Download Course Brochure"
            srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
            hours="250+ Hours"
            project="12+ Real Time"
          />
          <OurExpert
            H5="Tools Covered"
            img1={DataScienceCourseData[0].OurExpert.img1}
            img2={DataScienceCourseData[0].OurExpert.img2}
            img3={DataScienceCourseData[0].OurExpert.img3}
            img4={DataScienceCourseData[0].OurExpert.img4}
            img5={DataScienceCourseData[0].OurExpert.img5}
            img6={DataScienceCourseData[0].OurExpert.img6}
            img7={DataScienceCourseData[0].OurExpert.img7}
            img8={DataScienceCourseData[0].OurExpert.img8}
            img9={DataScienceCourseData[0].OurExpert.img9}
            img10={DataScienceCourseData[0].OurExpert.img10}
            img11={DataScienceCourseData[0].OurExpert.img11}
            img12={DataScienceCourseData[0].OurExpert.img12}
            img13={DataScienceCourseData[0].OurExpert.img13}
            img14={DataScienceCourseData[0].OurExpert.img14}
            img15={DataScienceCourseData[0].OurExpert.img15}
            img16={DataScienceCourseData[0].OurExpert.img16}
            img17={DataScienceCourseData[0].OurExpert.img17}
            img18={DataScienceCourseData[0].OurExpert.img18}
            img19={DataScienceCourseData[0].OurExpert.img19}
            img21={DataScienceCourseData[0].OurExpert.img21}
            img22={DataScienceCourseData[0].OurExpert.img22}
            img23={DataScienceCourseData[0].OurExpert.img23}
            img20={DataScienceCourseData[0].OurExpert.img20}
          />
          <ProgramFee
            Fee={DataScienceCourseData[0].ProgramFee.Fee}
            Emi={DataScienceCourseData[0].ProgramFee.Emi}
            CourseFeeAndFinancing="Program Fee & Financing"
            para="We are dedicated to making our programs accessible. We are committed to helping you find a way to budget for this program and offer a variety of financing options to make it more economical."
          
          />
          <SliderTab />
          <div className={styles.ProjectWrapper} id="project">
            <Project
              popupHead={DataScienceCourseData[0].Project.popupHead}
              project={DataScienceCourseData[0].Project.project}
              domain={DataScienceCourseData[0].Project.domain}
              projectTitle={DataScienceCourseData[0].Project.projectTitle}
            />
          </div>
          <CourseFee
            syllabusDesc={DataScienceCourseData[0].syllabusDesc}
            syllabus={DataScienceCourseData[0].Batch}
            CourseFeeHead="Advanced Data Science & AI Program : Batch Details"
            CourseFeePara="Online Classroom"
            CourseFeelist1="Online Interactive Classes"
            CourseFeelist2="Weekend and Weekday Batches"
            CourseFeelist3="Extra Doubt Clearing Sessions"
            CourseFeelist4="Multiple Domain Selection Options"
            CourseFeelist5="Company-based Mock Interviews"
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
          })("9943d22c-e5d6-490d-a01c-0963d7eba2e2");
      `,
        }}
      />
    </>
  );
}
