import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/Home/FirstSection/FirstSection1";
import BoxShape from "../Components/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import FormOtp from "../Components/FormOtp/FormOtp";
import Navbar from "../Components/CoursePage/Navbar/Navbar";
import Project from "../Components/CoursePage/Project/Project";
import BankingProject from "../Components/CoursePage/Project/BankingProject";
import OurExpert from "../Components/CoursePage/OurExpert/OurExpert";
import CourseFee from "../Components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../Components/CoursePage/SyllabusNew/SyllabusNew";
import Footer from "../Components/CoursePage/Footer/Footer";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupport";
import React, { useState } from "react";
import { BFSIData } from "../Data/BFSI";
import SliderTab from "../Components/CoursePage/SliderTab/SliderTabs";
import CourseReview from "../Components/CoursePage/CourseReview/CourseReview";
import CourseDs from "../Components/Marketing/CourseHomeDS/Course";
import Image from "next/image";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <Head>
        <title>
          Data Science course - Learnbay
        </title>
        <meta
          name="description"
          content="Advance certification online data science course with 100% placement assistance 
          and get 1:1 Guaranteed interview calls, 12+ Real-time projects, 1+ Capstone 
          projects, 2 years of course subscription ,Lifetime Access to recorded classes and 
          24/7 Learner’s support."
        />
        <meta name="Keywords" content="data science course certification, data science online course, data science training, data science course for working professional, data science institute, data science course, data science course duration, data science course fee" />
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
      <main>  <Navbar popup={true} formotpForS3DS={true} />

        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below Details to get started</p> */}

            <FormOtp popup={true} setTrigger={setPopups} brief={true} currentCompany={true} />
          </div>
        </Popup>
        <FirstSection
          ptop="Domain Specialization & Project Expertise"
          heading="Banking, Finance, Services & Insurance Domain"
          headingSpan="(BFSI)"
          des="Develop leadership skills by gaining a better knowledge of data and making more informed choices regarding prospects, customers, product lines, market opportunities, and team performance."
          h1="6"
          p1="Industry
        Relevant Projects"
          h2="20+ "
          p2="Case Studies &
        Assignments"
          h3="100%"
          p3="Interview
        Guarantee"
        formotpForS3DS={true}
        />



        <div className={styles.container} id="Feature">
          <BoxShape formotpForS3DS={true}
            title="Why domain
            specialization?"

            box1desc="Data science skill efficacy is all
            about using your domain-specific
            knowledge in a balanced way using
            data-driven methods."

            box2desc="As a result, if you don't have domain
            expertise, your data science abilities
            are useless.
            "

            box3desc="Even so, these are the main reasons
            why experienced workers seeking
            career changes are in greater
            demand."

            box4desc="Learn how to succeed in an increasingly competitive market with
            advanced tools and technology by using proven methodology.
            "
          />
        </div>

        <CourseDs formotpForS3DS={true}/>
        <CourseReview
          p1="Working at HCL"
          p2=" Working at TCS"
          p3="Working at Capgemini"
          formotpForS3DS={true}
        />

        <SyllabusNew
          syllabus={BFSIData[0].syllabus}
          CSyllabus={BFSIData[0].CSyllabus}
          CourseHighlights={BFSIData[0].CourseHighlights}
          syllabusDesc={BFSIData[0].syllabusDesc}
          popupHead={BFSIData[0].popupHead}
          hours={BFSIData[0].hours}
          project={BFSIData[0].project}
          formotpForS3DS={true}
          syllabusFormotp={true}
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

       
       
        <div className={styles.transitionProcess}>
        <h1>Transition Process</h1>
       
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Infographic+2.jpg"
            width="1500px"
            height="500px"
            layout="responsive"
          />
        </div>

        <div className={styles.ProjectWrapper} id="project">
          <BankingProject popupHead={BFSIData[0].Project.popupHead}
            project={BFSIData[0].Project.project}
            domain={BFSIData[0].Project.domain}
            projectTitle={BFSIData[0].Project.projectTitle1} formotpForS3DS={true}
            props={BFSIData[0].Project}
          />
        </div>

        <SliderTab />
        <div className={styles.ProjectWrapper} id="project">
          <Project popupHead={BFSIData[0].Project.popupHead}
            project={BFSIData[0].Project.project}
            domain={BFSIData[0].Project.domain}
            projectTitle={BFSIData[0].Project.projectTitle} formotpForS3DS={true} />
        </div>

        <CourseFee
          syllabusDesc={BFSIData[0].syllabusDesc}
          syllabus={BFSIData[0].Batch}

          CourseFeeHead={BFSIData[0].BatchCourses.CourseFeeHead}
          CourseFeePara={BFSIData[0].BatchCourses.CourseFeePara}
          CourseFeelist1={BFSIData[0].BatchCourses.CourseFeelist1}
          CourseFeelist2={BFSIData[0].BatchCourses.CourseFeelist2}
          CourseFeelist3={BFSIData[0].BatchCourses.CourseFeelist3}
          CourseFeelist4={BFSIData[0].BatchCourses.CourseFeelist4}
          CourseFeelist5={BFSIData[0].BatchCourses.CourseFeelist5}
          formotpForS3DS={true}
        />
        <LearnSupport />
        <Footer />
      </main>
    </div>
  );
}
