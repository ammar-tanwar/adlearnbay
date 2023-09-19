import Head from "next/head";
import styles from "../../styles/Home.module.css";
import FirstSection from "../../Components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../../Components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../../Components/CoursePage/Boxshape/BoxShape1";
import Popup from "../../Components/Popup/Popup";
import Navbar from "../../Components/NavbarHome/Navbar";
import Footer from "../../Components/FooterHome/Footer";
import Form from "../../Components/Form/Form";
import Certificate from "../../Components/CoursePage/Certificatejob/Certificate";
import Project from "../../Components/CoursePage/Project/Project";
import OurExpert from "../../Components/CoursePage/OurExpert/OurExpert";
import CourseFee from "../../Components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../../Components/CoursePage/SyllabusNew/SyllabusNew";
import { BusinessAnalyticsCourseData } from "../../Data/BusinessAnalyticsData";
import React, { useState } from "react";
import LearnSupport from "../../Components/LearnSupport/LearnSupport";
import DomainFaq from "../../Components/CoursePage/DomainFaq/DomainFaq";
import CourseReview from "../../Components/CoursePage/CourseReview/CourseReview";
import { ProgramFee } from "../../Components/CoursePage/ProgramFee/ProgramFee";
import { DomainFaqCourseData2 } from "../../Components/CoursePage/DomainFaq/DOmainFaqData";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <div>
        <Head>
          <title>Business Analytics Certification Program</title>
          <meta
            name="description"
            content="Business Analytics Certification Program"
          />
          <link
            rel="icon"
            href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
          />
          <link
            rel="canonical"
            href="https://www.learnbay.co/datascience/business-analytics-certification-course"
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
              {/* <p>Fill the below details to get started</p> */}
              <Form popup={true} setTrigger={setPopups} />
            </div>
          </Popup>
          <FirstSection
            deskTopPara="Develop Work-Ready Skills "
            deskTopPara1="You Can Use Right Away"
            mTopPara="Develop Work-Ready Skills "
            mTopPara1="You Can Use Right Away"
            mTitle="Business Analytics Certification Program "
            spanMTitleText="For Non-tech Professionals"
            title="Business Analytics Certification Program "
            spanTitleText="For Non-tech Professionals"
            desc="Training based on real-time projects specially designed for working professionals who aspire of having a lucrative career."
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/Businesss+Analytics.png"
            width="674"
            height="623"
            alt="AiMl Header"
            srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Certification+Program+Learnbay.pdf"
          />
          <div className={styles.program}>
            <ProgramInfo
              p1="Aimed for"
              p11="Early professionals"
              p2="12 LPA - 20 LPA"
              p22="Salary Package"
              p3="1:1"
              p33="Career Support"
              p4="Financing as low as"
              p44="₹  14,750/month"
            />
          </div>
          <div className={styles.Feature} id="Feature">
            <BoxShape
              title="Why Enroll In This Program?"
              Box1h5="Custom-fit Training"
              box1desc="Get specially designed modules as per your dream Business Analytics role. Learn innovative BI applications."
              Box2h5="Exclusive Hackathons"
              box2desc="Hone newly earned coding skills through multiple coding competitions. Exclusively arranged by Learnbay experts."
              Box3h5="Premium Mentoring"
              box3desc="Experience the latest tips and tricks of mock interviews and CV writing sessions with top product based MNCs experts."
              Box4h5="Hands-on Experience"
              box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant companies."
            />
          </div>
          <DomainFaq FaqData={DomainFaqCourseData2} />
          <CourseReview
            p1="Working at HCL"
            p2=" Working at TCS"
            p3="Working at Capgemini"
          />
          <Certificate
            title="Course Completion Certificate from IBM"
            desc="Complete your training with the internationally recognized certificate."
            desc2="Validate your Business Analytics skills with IBM Course Completion Certificate."
            desc3="Get acknowledged in IT sector by adding IBM Certificate to your profile."
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BA-DA.jpeg"
          />
          <SyllabusNew
            CSyllabus={BusinessAnalyticsCourseData[0].CSyllabus}
            CourseHighlights={BusinessAnalyticsCourseData[0].CourseHighlights}
            syllabus={BusinessAnalyticsCourseData[0].syllabus}
            syllabusDesc={BusinessAnalyticsCourseData[0].syllabusDesc}
            popupHead={BusinessAnalyticsCourseData[0].popupHead}
            srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Certification+Program+Learnbay.pdf"
            hours="200+ Hours"
            project="8+ Real Time"
          />
          <OurExpert
            H5="Tools Covered"
            img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
            img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/2.png"
            img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/3.png"
            img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/4.png"
            img5="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/5.png"
            img6="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/6.png"
            img7="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/7.png"
            img8="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/8.png"
            img9="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/9.png"
            img10="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/10.png"
            img11="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/11.png"
            img12="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/12.png"
            img13="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/13.png"
            img14="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/14.png"
            img15="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/15.png"
            img16="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/16.png"
            img17="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/17.png"
            img18="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/18.png"
            img19="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/19.png"
            img21="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/7.png"
            img22="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/8.png"
            img23="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/9.png"
            img20="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/24.jpeg"
          />
          <ProgramFee
            Fee="₹  75,000 + 18% GST"
            Emi="₹  14,750/month"
            CourseFeeAndFinancing="Program Fee & Financing"
            para="We are dedicated to making our programs accessible. We are committed to helping you find a way to budget for this program and offer a variety of financing options to make it more economical."
          />
          <div className={styles.ProjectWrapper} id="project">
            <Project
              projectTitle="Hands-on Projects"
              project="8+ Projects"
              domain="7+"
            />
          </div>
          <CourseFee
            syllabus={BusinessAnalyticsCourseData[0].Batch}
            BA={true}
            
            CourseFeeHead="Business Analytics Program : Batch Details"
            CourseFeePara="Online Classroom"
            CourseFeelist1="Online Interactive Classes"
            CourseFeelist2="Weekend and Weekday Batches"
            CourseFeelist3="Extra Doubt Clearing Sessions"
            CourseFeelist4="Project-Based Learning"
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
          })("4f4d2e98-0778-4fb7-a9c3-af6fd1bedad8");
      `,
        }}
      />
    </>
  );
}
