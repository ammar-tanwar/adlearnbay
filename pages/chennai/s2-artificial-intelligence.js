import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Popup from "../../Components/Popup/Popup";
import Form from "../../Components/Form/Form";
import Navbar from "../../Components/CoursePage/Navbar/Navbar";
import CityFooter from "../../Components/CityComponents/CityFooter/CityFooter";
import LearnSupport from "../../Components/CoursePage/LearnSupport/LearnSupport";
import React, { useState } from "react";
import FirstSection from "../../Components/CityComponents/FirstSection/FirstSection";
import HiringPatners from "../../Components/CityComponents/HiringPatnerWithReview/HiringPatners";
import SyllabusNew from "../../Components/CoursePage/SyllabusNew/SyllabusNew";
import CityImage from "../../Components/CityComponents/CityImages/CityImage";
import OurExpert from "../../Components/CoursePage/OurExpert/OurExpert";
import CourseFee from "../../Components/CoursePage/CourseFee/CourseFee";
import Certificate from "../../Components/CoursePage/CertificateTab/CertificateTabAdvance";
import Project from "../../Components/CoursePage/Project/Project";
import SliderTab from "../../Components/CoursePage/SliderTab/SliderTabs";
import ProgramWithHighLight from "../../Components/CityComponents/ProgramWithHighLight/ProgramWithHighLight";
import { AiCourseData } from "../../Data/chennai/AiData";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <Head>
      <title>Artificial Intelligence Course - Learnbay</title>
        <meta
          name="description"
          content="Advance certification online Artificial Intelligence course with 100% placement 
          assistance and get 1:1 Guaranteed interview calls, 15+ Real-time projects, 1+ 
          Capstone projects, 2 years of course subscription ,Lifetime Access to recorded 
          classes and 24/7 Learner’s support."
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
      <main>  <Navbar popup={true} jobDesc={true} />

        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below Details to get started</p> */}

            <Form popup={true} setTrigger={setPopups} jobDesc={true} />
          </div>
        </Popup>
        <FirstSection

          DeskImg="/ChennaiTopWeb.jpg"
        MobImg="/ChennaiTopMob.jpg"
          ProgramData={AiCourseData}
          courseName="Artificial Intelligence Course"
          cityName="In Chennai"
          ptag="Artificial intelligence is the simulation of human intelligence in 
          machines that are programmed to think and act like humans. This 
          course in Chennai is developed for working individuals who want to 
          maximize their present industry expertise and change career."
        />
        <HiringPatners
          topHead="Our Hiring Partner's In Chennai"

        />
       
        <div className={styles.Feature} id="Feature">

          <ProgramWithHighLight
          title={AiCourseData[0].BoxShape.title}
            Box1h5={AiCourseData[0].BoxShape.Box1h5}
            box1desc={AiCourseData[0].BoxShape.box1desc}
            Box2h5={AiCourseData[0].BoxShape.Box2h5}
            box2desc={AiCourseData[0].BoxShape.box2desc}
            Box3h5={AiCourseData[0].BoxShape.Box3h5}
            box3desc={AiCourseData[0].BoxShape.box3desc}
            Box4h5={AiCourseData[0].BoxShape.Box4h5}
            box4desc={AiCourseData[0].BoxShape.box4desc}

            HHeading="Course Details"
            Duration="350+ Hours"
            InterviewCalls=" 10 "
            Projects="15+"
            CourseFee="₹ 95,000 +GST "
            Domain="7+"
          />
        </div>

        <SyllabusNew
        syllabus={AiCourseData[0].syllabus}
        CSyllabus="Artificial Intelligence Course Syllabus In Chennai"
        CourseHighlights={AiCourseData[0].CourseHighlights}
        syllabusDesc={AiCourseData[0].syllabusDesc}
        popupHead={AiCourseData[0].popupHead}
        hours={AiCourseData[0].hours}
        project={AiCourseData[0].project}
      />
      <CityImage 
      DeskImg="/CenterCityChennaiWeb.jpg"
      MobImg="/CenterCityChennaiMob.jpg"
      cityName="சென்னை"
      
      />
        
        <OurExpert
          H5={AiCourseData[0].OurExpert.H5}
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
        <Certificate
        H4="Artificial Intelligence Program In Chennai"
      />
      <div className={styles.ProjectWrapper} id="project">
        <Project popupHead={AiCourseData[0].Project.popupHead}
          project={AiCourseData[0].Project.project}
          domain={AiCourseData[0].Project.domain}
          projectTitle="Hands-on Projects In Chennai" />
      </div>
      <SliderTab />

      <CourseFee
          syllabusDesc={AiCourseData[0].syllabusDesc}
          syllabus={AiCourseData[0].Batch}

          CourseFeeHead={AiCourseData[0].BatchCourses.CourseFeeHead}
          CourseFeePara={AiCourseData[0].BatchCourses.CourseFeePara}
          CourseFeelist1={AiCourseData[0].BatchCourses.CourseFeelist1}
          CourseFeelist2={AiCourseData[0].BatchCourses.CourseFeelist2}
          CourseFeelist3={AiCourseData[0].BatchCourses.CourseFeelist3}
          CourseFeelist4={AiCourseData[0].BatchCourses.CourseFeelist4}
          CourseFeelist5={AiCourseData[0].BatchCourses.CourseFeelist5}
        />



      <LearnSupport
        headForCity={true}
        cityName="24/7 Learner’s Support In Chennai"
      />
      <CityFooter 
      cityName="Chennai"/>
      </main>
    </div>
  );
}
