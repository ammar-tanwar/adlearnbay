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
import Certificate from "../../Components/CoursePage/CertificateTab/CertificateTabAdvance";
import Project from "../../Components/CoursePage/Project/Project";
import SliderTab from "../../Components/CoursePage/SliderTab/SliderTabs";
import ProgramWithHighLight from "../../Components/CityComponents/ProgramWithHighLight/ProgramWithHighLight";
import CourseFee from "../../Components/CoursePage/CourseFee/CourseFee";
import { mastersProgram } from "../../Data/hyderabad/mastersProgram";
import ProgramInfo from "../../Components/CoursePage/ProgramInfo/ProgramInfo";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <Head>
        <title>Data Science and AI Master’s Program – Learnbay</title>
        <meta
          name="description"
          content="Online Data Science and AI Master’s Program with 100% placement assistance and 
                    get  1:1 Guaranteed interview calls, 20+ Real-time projects, 3+ Capstone projects, 
                    3 years of course subscription ,Lifetime Access to recorded classes and 24/7 
                    Learner’s support."
        />{" "}
        <meta
          name="Keywords"
          content="data science and ai master program, artificial intelligence master's programs, online master's program in artificial intelligence, masters in ai and data science course, masters course artificial intelligence for working professionals, artificial intelligence masters online course, masters program in data science and AI in india, masters course in data science for working professionals, data science masters programs online, best online masters program in artificial intelligence, online masters in ai course,  data science masters course, masters in data science online course, data science and artificial intelligence masters program,  master data science course, masters in data science online program"
        />
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
          DeskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/HyderabadTopWeb.jpg"
          MobImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/HyderabadTopMob.jpg"
          courseName="Data Science and AI Master Program"
          cityName="In Hyderabad"
          ptag="Learn from experienced professionals how to ace product-based MNC 
                    interviews and receive IBM Certification. Join this course in Hyderabad & 
                    Accelerate your career with a Master’s in Data Science and AI."
        />
        <div className={styles.program1}>
          <ProgramInfo
            p1={mastersProgram[0].ProgramInfo.p1}
            p11={mastersProgram[0].ProgramInfo.p11}
            p2={mastersProgram[0].ProgramInfo.p2}
            p22={mastersProgram[0].ProgramInfo.p22}
            p3={mastersProgram[0].ProgramInfo.p3}
            p33={mastersProgram[0].ProgramInfo.p33}
            p4={mastersProgram[0].ProgramInfo.p4}
            p44={mastersProgram[0].ProgramInfo.p44}
          />
        </div>
        <HiringPatners topHead="Our Hiring Partner's In Hyderabad" />
        <div className="Feature" id="Feature">
          <ProgramWithHighLight
            title={mastersProgram[0].BoxShape.title}
            Box1h5={mastersProgram[0].BoxShape.Box1h5}
            box1desc={mastersProgram[0].BoxShape.box1desc}
            Box2h5={mastersProgram[0].BoxShape.Box2h5}
            box2desc={mastersProgram[0].BoxShape.box2desc}
            Box3h5={mastersProgram[0].BoxShape.Box3h5}
            box3desc={mastersProgram[0].BoxShape.box3desc}
            Box4h5={mastersProgram[0].BoxShape.Box4h5}
            box4desc={mastersProgram[0].BoxShape.box4desc}
            jobGuarantee={true}
            HHeading="Course Details"
            Duration="500+ Hours"
            InterviewCalls="Unlimited"
            Projects="20+"
            CourseFee="₹ 1,25,000 +GST"
            Domain="7+"
          />
        </div>
        <SyllabusNew
          syllabus={mastersProgram[0].syllabus}
          CSyllabus="Data Science and AI Master Course Syllabus In Hyderabad"
          CourseHighlights={mastersProgram[0].CourseHighlights}
          syllabusDesc={mastersProgram[0].syllabusDesc}
          popupHead={mastersProgram[0].popupHead}
          hours={mastersProgram[0].hours}
          project={mastersProgram[0].project}
        />
        <CityImage
          DeskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/CenterCityHyderabadWeb.jpg"
          MobImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/CenterCityHyderabadMob.jpg"
          cityName="హైదరాబాద్"
        />
        <OurExpert
          H5={mastersProgram[0].OurExpert.H5}
          img1={mastersProgram[0].OurExpert.img1}
          img2={mastersProgram[0].OurExpert.img2}
          img3={mastersProgram[0].OurExpert.img3}
          img4={mastersProgram[0].OurExpert.img4}
          img5={mastersProgram[0].OurExpert.img5}
          img6={mastersProgram[0].OurExpert.img6}
          img7={mastersProgram[0].OurExpert.img7}
          img8={mastersProgram[0].OurExpert.img8}
          img9={mastersProgram[0].OurExpert.img9}
          img10={mastersProgram[0].OurExpert.img10}
          img11={mastersProgram[0].OurExpert.img11}
          img12={mastersProgram[0].OurExpert.img12}
          img13={mastersProgram[0].OurExpert.img13}
          img14={mastersProgram[0].OurExpert.img14}
          img15={mastersProgram[0].OurExpert.img15}
          img16={mastersProgram[0].OurExpert.img16}
          img17={mastersProgram[0].OurExpert.img17}
          img18={mastersProgram[0].OurExpert.img18}
          img19={mastersProgram[0].OurExpert.img19}
          img21={mastersProgram[0].OurExpert.img21}
          img22={mastersProgram[0].OurExpert.img22}
          img23={mastersProgram[0].OurExpert.img23}
          img20={mastersProgram[0].OurExpert.img20}
        />
        <Certificate H4="Master's Program In Hyderabad" />
        <div className={styles.ProjectWrapper} id="project">
          <Project
            popupHead={mastersProgram[0].Project.popupHead}
            project={mastersProgram[0].Project.project}
            domain={mastersProgram[0].Project.domain}
            projectTitle="Hands-on Projects In Hyderabad"
          />
        </div>
        <SliderTab />
        <CourseFee
          syllabusDesc={mastersProgram[0].syllabusDesc}
          syllabus={mastersProgram[0].Batch}
          CourseFeeHead={mastersProgram[0].BatchCourses.CourseFeeHead}
          CourseFeePara={mastersProgram[0].BatchCourses.CourseFeePara}
          CourseFeelist1={mastersProgram[0].BatchCourses.CourseFeelist1}
          CourseFeelist2={mastersProgram[0].BatchCourses.CourseFeelist2}
          CourseFeelist3={mastersProgram[0].BatchCourses.CourseFeelist3}
          CourseFeelist4={mastersProgram[0].BatchCourses.CourseFeelist4}
          CourseFeelist5={mastersProgram[0].BatchCourses.CourseFeelist5}
        />
        <LearnSupport
          headForCity={true}
          cityName="24/7 Learner’s Support In Hyderabad"
        />
        <CityFooter cityName="Hyderabad" />
      </main>
    </div>
  );
}
