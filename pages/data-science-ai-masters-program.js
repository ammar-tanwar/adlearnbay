import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../Components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../Components/CoursePage/Boxshape/BoxShape1";
import Popup from "../Components/Popup/Popup";
import Navbar from "../Components/NavbarHome/Navbar";
import Footer from "../Components/FooterHome/Footer";
import Form from "../Components/Form/Form";
import Certificate from "../Components/CoursePage/Certificatejob/Certificate";
import Project from "../Components/CoursePage/Project/Project";
import OurExpert from "../Components/CoursePage/OurExpert/OurExpert";
import CourseFee from "../Components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../Components/CoursePage/SyllabusNew/SyllabusNew";
import LearnSupport from "../Components/LearnSupport/LearnSupport";
import { JobGuaranteeCourseData } from "../Data/JobGuaranteeData";
import React, { useState } from "react";
import { ProgramFee } from "../Components/CoursePage/ProgramFee/ProgramFee";
import { DomainFaqCourseData1 } from "../Components/CoursePage/DomainFaq/DOmainFaqData";
import SliderTab from "../Components/CoursePage/SliderTab/SliderTabs";
import DomainFaq from "../Components/CoursePage/DomainFaq/DomainFaq";
import CourseReview from "../Components/CoursePage/CourseReview/CourseReview";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <Head>
        <title>Data Science and AI Master Program</title>
        <meta name="description" content="Data Science and AI Master Program" />
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
        <Navbar popup={true} dataScience={true} />
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
          dataScience={true}
          deskTopPara="Boost your career opportunities "
          deskTopPara1="by developing relevant skills"
          mTitle="Data Science and AI Master Program "
          spanMTitleText="With Unlimited Interview Calls"
          mTopPara="Boost your career opportunities "
          mTopPara1="by developing relevant skills"
          title="Data Science and AI Master Program "
          spanTitleText="With Unlimited Interview Calls"
          desc="A complete guide with real-life exercises & domain oriented approach."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/DSAI+Masters.png"
          width="829"
          height="646"
          alt="AiMl Header"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Master's+Program+%5BWith+Unlimited+Interview+Calls%5D.pdf"
        />
        <ProgramInfo
          p1="Aimed for"
          p11="Working Professionals"
          p2="35 LPA - 50 LPA"
          p22="Salary Package"
          p3="1:1"
          p33="Career Support"
          p4="Financing as low as"
          p44="₹ 12,292/month"
        />
        <BoxShape
          title="Why Enroll In This Program?"
          Box1h5="Custom-fit Training"
          box1desc="Get specially designed modules as per your dream job profile. Learn demanding DS/AI applications."
          Box2h5="Domain Focused"
          box2desc="Obtain cutting-edge skills as per demanding IT-industry standards. Choose from 10+ domains."
          Box3h5="Premium Mentoring"
          box3desc="Experience the latest tips and tricks of mock interviews and CV writing sessions with top product based MNCs Data Science/AI experts."
          Box4h5="Hands-on Experience"
          box4desc="Get diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant establishments."
        />
        <DomainFaq FaqData={DomainFaqCourseData1} />
        <CourseReview />
        <Certificate
          title={JobGuaranteeCourseData[0].Certificate.title}
          desc={JobGuaranteeCourseData[0].Certificate.desc}
          desc2={JobGuaranteeCourseData[0].Certificate.desc2}
          desc3={JobGuaranteeCourseData[0].Certificate.desc3}
          src={JobGuaranteeCourseData[0].Certificate.src}
        />
        <SyllabusNew
          CSyllabus="Syllabus"
          CourseHighlights="Program Highlights"
          syllabus={JobGuaranteeCourseData[0].syllabus}
          syllabusDesc={JobGuaranteeCourseData[0].syllabusDesc}
          popupHead="Download Course Brochure"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          hours="500+ Hours"
          project="20+ Real Time"
        />
        <OurExpert
          H5="Tools Covered"
          img1={JobGuaranteeCourseData[0].OurExpert.img1}
          img2={JobGuaranteeCourseData[0].OurExpert.img2}
          img3={JobGuaranteeCourseData[0].OurExpert.img3}
          img4={JobGuaranteeCourseData[0].OurExpert.img4}
          img5={JobGuaranteeCourseData[0].OurExpert.img5}
          img6={JobGuaranteeCourseData[0].OurExpert.img6}
          img7={JobGuaranteeCourseData[0].OurExpert.img7}
          img8={JobGuaranteeCourseData[0].OurExpert.img8}
          img9={JobGuaranteeCourseData[0].OurExpert.img9}
          img10={JobGuaranteeCourseData[0].OurExpert.img10}
          img11={JobGuaranteeCourseData[0].OurExpert.img11}
          img12={JobGuaranteeCourseData[0].OurExpert.img12}
          img13={JobGuaranteeCourseData[0].OurExpert.img13}
          img14={JobGuaranteeCourseData[0].OurExpert.img14}
          img15={JobGuaranteeCourseData[0].OurExpert.img15}
          img16={JobGuaranteeCourseData[0].OurExpert.img16}
          img17={JobGuaranteeCourseData[0].OurExpert.img17}
          img18={JobGuaranteeCourseData[0].OurExpert.img18}
          img19={JobGuaranteeCourseData[0].OurExpert.img19}
          img21={JobGuaranteeCourseData[0].OurExpert.img21}
          img22={JobGuaranteeCourseData[0].OurExpert.img22}
          img23={JobGuaranteeCourseData[0].OurExpert.img23}
          img20={JobGuaranteeCourseData[0].OurExpert.img20}
        />
        <ProgramFee
          Fee={JobGuaranteeCourseData[0].ProgramFee.Fee}
          Emi={JobGuaranteeCourseData[0].ProgramFee.Emi}
          CourseFeeAndFinancing="Program Fee & Financing"
          para="We are dedicated to making our programs accessible. We are committed to helping you find a way to budget for this program and offer a variety of financing options to make it more economical."
          dataScience={true}
        />
        <SliderTab />
        <div className={styles.ProjectWrapper} id="project">
          <Project
            popupHead={JobGuaranteeCourseData[0].Project.popupHead}
            project={JobGuaranteeCourseData[0].Project.project}
            domain={JobGuaranteeCourseData[0].Project.domain}
            projectTitle={JobGuaranteeCourseData[0].Project.projectTitle}
          />
        </div>
        <CourseFee
          dataScience={true}
          syllabus={JobGuaranteeCourseData[0].Batch}
          CourseFeeHead="Data Science and AI Master Program : Batch Details"
          CourseFeePara="Online Classroom"
          CourseFeelist1="Online Interactive Classes"
          CourseFeelist2="Weekend and Weekday Batches"
          CourseFeelist3="Extra Clearance Sessions"
          CourseFeelist4="Multiple Domain & Project Experties Selection Options"
          CourseFeelist5="Company-based Mock Interviews"
        />
        <LearnSupport />
        <Footer />
      </main>
    </div>
  );
}
