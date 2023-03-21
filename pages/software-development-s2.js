import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/Domain/FirstSection/FirstSection";
import BoxShape from "../Components/Domain/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Navbar from "../Components/CoursePage/Navbar/Navbar";
import BankingProject from "../Components/Domain/Project/BankingProject";
import SyllabusNew from "../Components/Domain/SyllabusNew/SyllabusNew";
import Footer from "../Components/CoursePage/Footer/Footer";
import LearnSupport from "../Components/Domain/LearnSupport/LearnSupport";
import React, { useState } from "react";
import { SoftwareData } from "../Data/Domain";
import CourseReview from "../Components/Domain/CourseReview/CourseReview";
import FAQNew from "../Components/LightTheme/FAQNew/FAQNewcer";
import {
  FaqData9,
  DomainFaqData9,
  PaymentFaqData9,
  CapstoneFaqData9,
  jobFaqData9,
  MentorshipFaqData9,
  SupportFaqData9,
} from "../Components/LightTheme/FAQNew/FaqData";
import Image from "next/image";

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
          content="Full Stack Software Development Course,Best Full Stack Software Development Course, Online Full Stack Software Development Course, Learn Full Stack Software development Course"
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
          image={true}
          fullStackContent={true}
          imagesrc="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/fssd-generic.jpeg"
          ptop="Ace the PRODUCT Interviews to achieve your dream job"
          heading1="Full Stack"
          headingSpan1=" Software Development"
          heading2="Course"
          headingSpan2="Become an Expert Today!"
          des="Work on 12+ real-time projects, get hired at top MNCs with a salary of up to 18LPA."
          h1="12+"
          p1={SoftwareData[0].FirstSection.p1}
          h2="300+"
          p2="Hours Live sessions"
          h3={SoftwareData[0].FirstSection.h3}
          p3={SoftwareData[0].FirstSection.p3}
          withOutRadioForm={true}
        />
        <BoxShape
          p={SoftwareData[0].BoxShape.p}
          title={SoftwareData[0].BoxShape.title}
          box1desc="Earn a package with a 200% increment with added advanced skill sets"
          box2desc="Learn trending tools & technology to ace in repetitively changing competitive market "
          box3desc="Master your Full Stack Software Development skills and create a dynamic profile"
          box4desc="Develop leadership skills by gaining better knowledge and making more informed decisions"
        />
        {/* <CourseDs peanutbtrIMG={true} /> */}
        <div className={styles.section4}>
          <div className={styles.section41}>
            <h2>You’re one step closer to becoming a Software Developer</h2>
            <p>
              Register for our Full Stack Software Development program and take
              your career to places like never before.
            </p>
            <div className={styles.section42}>
              <p>
                Hands-on
                <br />
                <span>Experience</span>
              </p>
              <p>
                Premium 1-on-1
                <br />
                <span> Mentoring</span>
              </p>
              <p>
                Unlimited
                <br />
                <span>Job Interview Calls</span>
              </p>
              <p>
                250% <br />
                <span>Salary Hike</span>
              </p>
            </div>
          </div>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/What+makes+us+different+flip-min.png"
              width="519"
              height="350"
              layout="intrinsic"
            />
          </div>
        </div>
        <CourseReview
          fullStackContent={true}
          p1={SoftwareData[0].CourseReview.p1}
          p2={SoftwareData[0].CourseReview.p2}
          p3={SoftwareData[0].CourseReview.p3}
          h1={SoftwareData[0].CourseReview.h1}
          h2={SoftwareData[0].CourseReview.h2}
          h2p={SoftwareData[0].CourseReview.h2p}
          hSRC={SoftwareData[0].CourseReview.hSRC}
          rewHead={SoftwareData[0].CourseReview.rewHead}
        />
        <SyllabusNew
          syllabus={SoftwareData[0].syllabus}
          CSyllabus={SoftwareData[0].CSyllabus}
          CourseHighlights={SoftwareData[0].CourseHighlights}
          syllabusDesc={SoftwareData[0].syllabusDesc}
          popupHead={SoftwareData[0].popupHead}
          hours={SoftwareData[0].hours}
          project={SoftwareData[0].project}
        />
        <div className={styles.ProjectWrapper} id="project">
          <BankingProject
            popupHead={SoftwareData[0].Project.popupHead}
            project={SoftwareData[0].Project.project}
            domain={SoftwareData[0].Project.domain}
            projectTitle={SoftwareData[0].Project.projectTitle1}
            props={SoftwareData[0].Project}
          />
        </div>
        <FAQNew
          FaqDatas={FaqData9}
          DomainFaqDatas={DomainFaqData9}
          PaymentFaqDatas={PaymentFaqData9}
          CapstoneFaqDatas={CapstoneFaqData9}
          jobFaqDatas={jobFaqData9}
          MentorshipFaqDatas={MentorshipFaqData9}
          SupportFaqDatas={SupportFaqData9}
        />
        <LearnSupport />
        <Footer fullStackContt={true}/>
      </main>
    </div>
  );
}
