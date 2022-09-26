import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/CoursePage/HeroSection/HeroSection1";
import ProgramInfo from "../Components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../Components/CoursePage/Boxshape/BoxShape1";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Navbar from "../Components/NavbarHome/Navbar";
import Certificate from "../Components/CoursePage/CertificateTab/CertificateTabAdvance";
import Project from "../Components/CoursePage/Project/Project";
import OurExpert from "../Components/CoursePage/OurExpert/OurExpert";
import CourseFee from "../Components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../Components/CoursePage/SyllabusNew/SyllabusNew1";
import Footer from "../Components/FooterHome/Footer";
import { ProgramFee } from "../Components/CoursePage/ProgramFee/ProgramFee";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupport";
import React, { useState } from "react"; 
import { AiCourseData } from "../Data/AiData";
import SliderTab from "../Components/CoursePage/SliderTab/SliderTabs";
import CourseReview from "../Components/CoursePage/CourseReview/CourseReview";
import DomainFaq from "../Components/CoursePage/DomainFaq/DomainFaq";
import { DomainFaqCourseData1 } from "../Components/CoursePage/DomainFaq/DOmainFaqData";
import OtherCertificate from "../Components/CoursePage/OtherCertificate/OtherCertificate";
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
    <Head>
    <title>Artificial Intelligence and Machine Learning Program</title>
    <meta
      name="description"
      content="Artificial Intelligence and Machine Learning Program"
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
      <main>  <Navbar popup={true} dataScience={true} />
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
        <FirstSection dataScience={true}
        deskTopPara="Boost Your Professional Growth "
          deskTopPara1="To a Whole New Level"
          spanTitleText="Advance Program"
          mTitle="Artificial Intelligence and Machine Learning"
          mTopPara="Boost Your Professional Growth "
          spanMTitleText="Advance Program"
          mTopPara1="To a Whole New Level"
          title="Artificial Intelligence and Machine Learning"
          desc="With demanding industry projects, you can acquire the most advanced technical expertise possible. Be a master even without a master's degree."
          width="721"
          height="632"
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course3.png"
          alt="AiMl Header"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
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

        <div className={styles.Feature} id="Feature">
        <BoxShape
        title="Why Enroll In This Program?"
            Box1h5="Custom-fit Training"
            box1desc="Get specially designed modules as per your dream AI role. Learn latest ML applications."
            Box2h5="Domain Focused"
            box2desc="Obtain cutting-edge Al and ML skills as per demanding IT-industry standards. Choose any domain of your choice."
            Box3h5="Premium Mentoring"
            box3desc="Enjoy and learn from mock interviews and CV writing workshops with MAANG AI/ML industry experts."
            Box4h5="Hands-on Experience"
            box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant companies."
      />
        </div>
        <DomainFaq FaqData={DomainFaqCourseData1} />
        <CourseReview
        p1="Working at HCL"
        p2=" Working at TCS"
        p3="Working at Capgemini" />

        <Certificate
          H4=" Certification Program"
        />
        <OtherCertificate
          OCHead1="Deep Learning Fundamentals"
          OCP1="Earn industrial badge on neural networks, and convolutional networks like DL skills."
          OCHead2="Deep Learning with TensorFlow"
          OCP2="Get certified for your Industrial-level TensorFlow application expertise."
          OCHead3="Machine Learning with Python"
          OCP3="Validate your python expertise for ML algo designing."
          OCHead4="Accelerating Deep Learning with GPUs"
          OCP4="Industrial badge on GPU handling mastery for Cloud, AI & ML."
        />
        <SyllabusNew dataScience={true}
          syllabus={AiCourseData[0].syllabus}
          syllabusDesc={AiCourseData[0].syllabusDesc}
          popupHead="Download Course Brochure"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          hours="350+ Hours"
          project="15+ Real Time"
        />
        <OurExpert
          H5="Tools Covered"
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
        <ProgramFee Fee={AiCourseData[0].ProgramFee.Fee}
          Emi={AiCourseData[0].ProgramFee.Emi} CourseFeeAndFinancing="Program Fee & Financing"
          para="We are dedicated to making our programs accessible. We are committed to helping you find a way to budget for this program and offer a variety of financing options to make it more economical."  dataScience={true} />
        <SliderTab />

        <div className={styles.ProjectWrapper} id="project">
          <Project popupHead={AiCourseData[0].Project.popupHead}
            project={AiCourseData[0].Project.project}
            domain={AiCourseData[0].Project.domain}
            projectTitle={AiCourseData[0].Project.projectTitle} />
        </div>

        <CourseFee
          syllabusDesc={AiCourseData[0].syllabusDesc}
          syllabus={AiCourseData[0].Batch}
          CourseFeeHead="AI and ML Program : Batch Details"
          CourseFeePara="Online Classroom"
          CourseFeelist1="Online Interactive Classes"
          CourseFeelist2="Weekend and Weekday Batches"
          CourseFeelist3="Extra Doubt Clearance Sessions"
          CourseFeelist4="Multiple Domain Selection Options"
          CourseFeelist5="Company-based Mock Interviews"
        />
        <LearnSupport />
        <Footer />
      </main>
    </div>
  );
}
