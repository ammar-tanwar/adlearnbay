import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/Domain/FirstSection/FirstSection";
import BoxShape from "../Components/Domain/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import FormOtp from "../Components/FormOtp/FormOtp";
import Navbar from "../Components/CoursePage/Navbar/Navbar";
import BankingProject from "../Components/Domain/Project/BankingProject";
import OurExpert from "../Components/CoursePage/OurExpert/OurExpert";
import SyllabusNew from "../Components/Domain/SyllabusNew/SyllabusNew";
import Footer from "../Components/CoursePage/Footer/Footer";
import LearnSupport from "../Components/Domain/LearnSupport/LearnSupport";
import React, { useState } from "react";
import { BFSIData } from "../Data/BFSI";
import SliderTab from "../Components/CoursePage/SliderTab/SliderTabs";
import CourseReview from "../Components/Domain/CourseReview/CourseReview";
import CourseDs from "../Components/Domain/CourseHomeDS/Course";
import Image from "next/image";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
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

            <FormOtp popup={true} setTrigger={setPopups} />
          </div>
        </Popup>
        <FirstSection
          ptop="Data Science Domain Specialization Course"
          heading1="Be the"
          headingSpan1="master"
          heading2="of"
          headingSpan2="your domain"
          des="Specialized courses in the Banking, Finance, Services & Insurance (BFSI) domain created to help you get ahead in your career"
          h1="6"
          p1="Industry
        Relevant Projects"
          h2="20+ "
          p2="Case Studies &
        Assignments"
          h3="100%"
          p3="Interview
        Guarantee"
          withOutRadioForm={true}
        />
        <BoxShape
          title="When you learn more,
            you earn more."
          p="Through our courses, you can: "
          box1desc="Earn an increment of up to 200% in your next job
            with your added skill sets"
          box2desc="Succeed in an increasingly competitive market
            with advanced tools and technology"
          box3desc="Master your data analysis skills and create
            a dynamic dashboard to describe your insights"
          box4desc="Develop leadership skills by gaining better knowledge
            of data and make more informed decisions"
        />
        <CourseDs peanutbtrIMG={true} />
        <CourseReview
          p1="Working at HCL"
          p2=" Working at TCS"
          p3="Working at Capgemini"
        />
        <SyllabusNew
          syllabus={BFSIData[0].syllabus}
          CSyllabus={BFSIData[0].CSyllabus}
          CourseHighlights={BFSIData[0].CourseHighlights}
          syllabusDesc={BFSIData[0].syllabusDesc}
          popupHead={BFSIData[0].popupHead}
          hours={BFSIData[0].hours}
          project={BFSIData[0].project}
        />
        <OurExpert
          H5={BFSIData[0].OurExpert.H5}
          img1={BFSIData[0].OurExpert.img1}
          img2={BFSIData[0].OurExpert.img2}
          img3={BFSIData[0].OurExpert.img3}
          img4={BFSIData[0].OurExpert.img4}
          img5={BFSIData[0].OurExpert.img5}
          img6={BFSIData[0].OurExpert.img6}
          img7={BFSIData[0].OurExpert.img7}
          img8={BFSIData[0].OurExpert.img8}
          img9={BFSIData[0].OurExpert.img9}
          img10={BFSIData[0].OurExpert.img10}
          img11={BFSIData[0].OurExpert.img11}
          img12={BFSIData[0].OurExpert.img12}
          img13={BFSIData[0].OurExpert.img13}
          img14={BFSIData[0].OurExpert.img14}
          img15={BFSIData[0].OurExpert.img15}
          img16={BFSIData[0].OurExpert.img16}
          img17={BFSIData[0].OurExpert.img17}
          img18={BFSIData[0].OurExpert.img18}
          img19={BFSIData[0].OurExpert.img19}
          img21={BFSIData[0].OurExpert.img21}
          img22={BFSIData[0].OurExpert.img22}
          img23={BFSIData[0].OurExpert.img23}
          img20={BFSIData[0].OurExpert.img20}
        />
        <div className={styles.transition}>
          <h1>We’ll make sure your career evolution is seamless</h1>
          <p>
            Here’s how you’ll transition from the start till the end of your
            Learnbay journey:
          </p>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/domainpage/TP.png"
            width="1500px"
            height="700px"
            layout="intrinsic"
          />
        </div>
        <SliderTab />
        <div className={styles.ProjectWrapper} id="project">
          <BankingProject
            popupHead={BFSIData[0].Project.popupHead}
            project={BFSIData[0].Project.project}
            domain={BFSIData[0].Project.domain}
            projectTitle={BFSIData[0].Project.projectTitle1}
            props={BFSIData[0].Project}
          />
        </div>
        <LearnSupport />
        <Footer />
      </main>
    </div>
  );
}
