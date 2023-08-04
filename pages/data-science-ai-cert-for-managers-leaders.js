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
import { DsaiManagersCourseData } from "../Data/DataScienceManagers";
import SliderTab from "../Components/CoursePage/SliderTab/SliderTabs";
import CourseReview from "../Components/CoursePage/CourseReview/CourseReview";
import DomainFaq from "../Components/CoursePage/DomainFaq/DomainFaq";
import OtherCertificate from "../Components/CoursePage/OtherCertificate6/OtherCertificate";
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
          <title>
            Data Science and Artificial Intelligence Program For Managers and
            Leaders - Learnbay
          </title>
          <meta
            name="description"
            content="Advance certification online  Data Science and Artificial Intelligence Program For Managers and Leaders course with 100% placement assistance 
        and get 1:1 Guaranteed interview calls, 15+ Real-time projects, 1+ Capstone 
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
              "phoneNumber":"+917349222263"
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
          <Navbar popup={true} dataScience={true} />
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
          <FirstSection
            dataScience={true}
            deskTopPara="Be a leader with Domain Specialization"
            mTopPara="Be a leader with Domain Specialization"
            title="Data Science and Artificial Intelligence Program"
            mTitle="Data Science and Artificial Intelligence Program"
            spanTitleText=" For Managers and Leaders"
            spanMTitleText=" For Managers and Leaders"
            desc="Learn under the guidance of seasoned professionals to ace product-based MNC interviews, and earn capstone project certification."
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/Managers+%26+Leaders.png"
            width="758"
            height="602"
            alt="AiMl Header"
            srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
          />
          <div className={styles.program}>
            <ProgramInfo
              p1={DsaiManagersCourseData[0].ProgramInfo.p1}
              p11={DsaiManagersCourseData[0].ProgramInfo.p11}
              p2={DsaiManagersCourseData[0].ProgramInfo.p2}
              p22={DsaiManagersCourseData[0].ProgramInfo.p22}
              p3={DsaiManagersCourseData[0].ProgramInfo.p3}
              p33={DsaiManagersCourseData[0].ProgramInfo.p33}
              p4={DsaiManagersCourseData[0].ProgramInfo.p4}
              p44={DsaiManagersCourseData[0].ProgramInfo.p44}
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
              box3desc="Enjoy and learn from mock interviews and CV writing workshops with top product based MNCs AI/ML industry experts."
              Box4h5="Hands-on Experience"
              box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant companies."
            />
          </div>
          <DomainFaq FaqData={DomainFaqCourseData1} />
          <CourseReview
            p1="Working at HCL"
            p2=" Working at TCS"
            p3="Working at Capgemini"
          />
          <Certificate H4=" Certification Program" />
          <OtherCertificate
            OCHead1="Machine Learning with Python"
            OCP1="Validate your python expertise for ML algo designing."
            OCHead2="Python for Data Science"
            OCP2="Get certified on your advanced python skills."
            OCHead3="Deep Learning Fundamentals"
            OCP3="Earn industrial badge on neural networks, and convolutional networks like DL skills."
            OCHead4="Sectoral Analytics Fundamentals – HR"
            OCP4="Obtain certification in the use of analytical best practices in HR decision-making."
            OCHead5="Sectoral Analytics Fundamentals – Marketing"
            OCP5="Obtain certification in the use of analytical best practices in marketing decision-making."
            OCHead6="Sectoral Analytics Fundamentals – Finance"
            OCP6="Obtain certification in the use of analytical best practices in financial decision-making."
          />
          <SyllabusNew
            dataScience={true}
            syllabus={DsaiManagersCourseData[0].syllabus}
            syllabusDesc={DsaiManagersCourseData[0].syllabusDesc}
            popupHead="Download Course Brochure"
            srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
            hours="400+ Hours"
            project="15+ Real Time"
          />
          <OurExpert
            H5="Tools Covered"
            img1={DsaiManagersCourseData[0].OurExpert.img1}
            img2={DsaiManagersCourseData[0].OurExpert.img2}
            img3={DsaiManagersCourseData[0].OurExpert.img3}
            img4={DsaiManagersCourseData[0].OurExpert.img4}
            img5={DsaiManagersCourseData[0].OurExpert.img5}
            img6={DsaiManagersCourseData[0].OurExpert.img6}
            img7={DsaiManagersCourseData[0].OurExpert.img7}
            img8={DsaiManagersCourseData[0].OurExpert.img8}
            img9={DsaiManagersCourseData[0].OurExpert.img9}
            img10={DsaiManagersCourseData[0].OurExpert.img10}
            img11={DsaiManagersCourseData[0].OurExpert.img11}
            img12={DsaiManagersCourseData[0].OurExpert.img12}
            img13={DsaiManagersCourseData[0].OurExpert.img13}
            img14={DsaiManagersCourseData[0].OurExpert.img14}
            img15={DsaiManagersCourseData[0].OurExpert.img15}
            img16={DsaiManagersCourseData[0].OurExpert.img16}
            img17={DsaiManagersCourseData[0].OurExpert.img17}
            img18={DsaiManagersCourseData[0].OurExpert.img18}
            img19={DsaiManagersCourseData[0].OurExpert.img19}
            img21={DsaiManagersCourseData[0].OurExpert.img21}
            img22={DsaiManagersCourseData[0].OurExpert.img22}
            img23={DsaiManagersCourseData[0].OurExpert.img23}
            img20={DsaiManagersCourseData[0].OurExpert.img20}
          />
          <ProgramFee
            Emi="₹ 10,325/month"
            Fee="₹ 1,05,000 +GST"
            CourseFeeAndFinancing="Program Fee & Financing"
            para="We are dedicated to making our programs accessible. We are committed to helping you find a way to budget for this program and offer a variety of financing options to make it more economical."
          />
          <SliderTab />
          <div className={styles.ProjectWrapper} id="project">
            <Project
              popupHead={DsaiManagersCourseData[0].Project.popupHead}
              project={DsaiManagersCourseData[0].Project.project}
              domain={DsaiManagersCourseData[0].Project.domain}
              projectTitle={DsaiManagersCourseData[0].Project.projectTitle}
            />
          </div>
          <CourseFee
            syllabusDesc={DsaiManagersCourseData[0].syllabusDesc}
            syllabus={DsaiManagersCourseData[0].Batch}
            CourseFeeHead="Data Science & AI For Managers Program : Batch Details"
            CourseFeePara="Online Classroom"
            CourseFeelist1="Online Interactive Classes"
            CourseFeelist2="Weekend and Weekday Batches"
            CourseFeelist3="Extra Doubt Clearing Sessions"
            CourseFeelist4="Multiple Domains + Project Expertise"
            CourseFeelist5="Company-based Mock Interviews"
          />
          <LearnSupport organicNum={true} />
          <Footer />
        </main>
      </div>
      {/* <script
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
          })("d22aede5-fcaf-423d-ab4c-2e49782f9cc2");
      `,
        }}
      /> */}
    </>
  );
}
