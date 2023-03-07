import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/CoursePage/HeroSection/HeroSection1";
import ProgramInfo from "../Components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../Components/CoursePage/Boxshape/BoxShape1";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Certificate from "../Components/CoursePage/Certificatejob/Certificate";
import Project from "../Components/CoursePage/Project/Project";
import OurExpert from "../Components/CoursePage/OurExpert/OurExpert";
import CourseFee from "../Components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../Components/CoursePage/SyllabusNew/SyllabusNew1";
import { ProgramFee } from "../Components/CoursePage/ProgramFee/ProgramFee";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupport";
import React, { useState } from "react";
import { JobGuaranteeCourseData } from "../Data/JobGuaranteeData";
import SliderTab from "../Components/CoursePage/SliderTab/SliderTabs";
import CourseReview from "../Components/CoursePage/CourseReview/CourseReview";
import Navbar from "../Components/CoursePage/NavbarDyn/Navbar";
import Footer from "../Components/Footers7/Footers7";

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

        <Navbar
          Href="/data-science-certification-courses-s7"
          Course="Data Science & AI Certification"
          Href1="/advance-ai-ml-certification-s7"
          Course1="Advance AI & ML Certification"
          Href2="/data-science-ai-cert-for-managers-leaders-s7"
          Course2="Data Science & AI Cert. For Managers & Leaders"
          Href3="/job-guarantee-or-money-back-data-science-ai-s7"
          Course3="Data Science and AI Master Program"
        />
        <FirstSection
          dataScience={true}
          deskTopPara="Boost your career opportunities "
          deskTopPara1="by developing relevant skills."
          mTitle="Data Science and AI Program "
          spanMTitleText="With 100% Placement Assistance"
          mTopPara="Boost your career opportunities "
          mTopPara1="by developing relevant skills."
          title="Data Science and AI Program "
          spanTitleText="With 100% Placement Assistance"
          desc="✓ Domain Orientated approach ✓ Assured placement within 18 months."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course5.png"
          width="829"
          height="646"
          alt="AiMl Header"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Master's+Program+%5BWith+Unlimited+Interview+Calls%5D.pdf"
        />
        <div className={styles.program}>
          <ProgramInfo
            p1={JobGuaranteeCourseData[0].ProgramInfo.p1}
            p11={JobGuaranteeCourseData[0].ProgramInfo.p11}
            p2={JobGuaranteeCourseData[0].ProgramInfo.p2}
            p22={JobGuaranteeCourseData[0].ProgramInfo.p22}
            p3={JobGuaranteeCourseData[0].ProgramInfo.p3}
            p33={JobGuaranteeCourseData[0].ProgramInfo.p33}
            p4={JobGuaranteeCourseData[0].ProgramInfo.p4}
            p44={JobGuaranteeCourseData[0].ProgramInfo.p44}
          />
        </div>

        <div className={styles.Feature} id="Feature">
          <BoxShape
            title="Why Enroll In This Program?"
            Box1h5="Custom-fit Training"
            box1desc="Get specially designed modules as per your dream job profile. Learn demanding DS/AI applications."
            Box2h5="Domain Focused"
            box2desc="Obtain cutting-edge skills as per demanding IT-industry standards. Choose from 10+ domains."
            Box3h5="Premium Mentoring"
            box3desc="Experience the latest tips and tricks of mock interviews and CV writing sessions with MAANG Data Science/AI experts."
            Box4h5="Hands-on Experience"
            box4desc="Get diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant establishments."
          />
        </div>

        <CourseReview
          p1="Working at HCL"
          p2=" Working at TCS"
          p3="Working at Capgemini"
        />

        <Certificate
          title={JobGuaranteeCourseData[0].Certificate.title}
          desc={JobGuaranteeCourseData[0].Certificate.desc}
          desc2={JobGuaranteeCourseData[0].Certificate.desc2}
          desc3={JobGuaranteeCourseData[0].Certificate.desc3}
          src={JobGuaranteeCourseData[0].Certificate.src}
        />

        <SyllabusNew
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
          syllabusDesc={JobGuaranteeCourseData[0].syllabusDesc}
          syllabus={JobGuaranteeCourseData[0].Batch}
          CourseFeeHead="Data Science and AI with
          Placement Assistance Program : Batch Details"
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
