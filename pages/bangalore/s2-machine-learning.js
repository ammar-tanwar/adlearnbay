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
import { MlCourseData } from "../../Data/bangalore/MlData";
import Certificate from "../../Components/CoursePage/CertificateTab/CertificateTabAdvance";
import Project from "../../Components/CoursePage/Project/Project";
import SliderTab from "../../Components/CoursePage/SliderTab/SliderTabs";
import ProgramWithHighLight from "../../Components/CityComponents/ProgramWithHighLight/ProgramWithHighLight";
import CourseFee from "../../Components/CoursePage/CourseFee/CourseFee";
import ProgramInfo from "../../Components/CoursePage/ProgramInfo/ProgramInfo";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <Head>
        <title>Learn machine learning online course</title>
        <meta
          name="description"
          content="Top Online Machine Learning Institute with 3 years 
of course subscription and Lifetime access to recoded classes"
        />
        <meta
          name="Keywords"
          content="ml course, online ml course, machine learning course with  placement assistance , machine learning course fee, machine learning course, machine learning course duration, online machine learning course"
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
        <Navbar popup={true} jobDesc={true} />
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
          DeskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/BengaluruTopWeb.jpg"
          MobImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/BengaluruTopMob.jpg"
          courseName="Machine Learning Course"
          cityName="In Bangalore"
          ptag="Machine learning is a subfield of artificial intelligence that is widely 
        described as a machine's capability to imitate intelligent human 
        behavior. This course in Bangalore will provide you with hands-on 
        experience with technologies such as R, Python, Tableau, Hadoop, and 
        so on."
        />
        <div className={styles.program1}>
          <ProgramInfo
            p1={MlCourseData[0].ProgramInfo.p1}
            p11={MlCourseData[0].ProgramInfo.p11}
            p2={MlCourseData[0].ProgramInfo.p2}
            p22={MlCourseData[0].ProgramInfo.p22}
            p3={MlCourseData[0].ProgramInfo.p3}
            p33={MlCourseData[0].ProgramInfo.p33}
            p4={MlCourseData[0].ProgramInfo.p4}
            p44={MlCourseData[0].ProgramInfo.p44}
          />
        </div>
        <HiringPatners topHead="Our Hiring Partner's In Bangalore" />
        <div className="Feature" id="Feature">
          <ProgramWithHighLight
            title="Machine Learning Course Features in Bangalore"
            Box1h5={MlCourseData[0].BoxShape.Box1h5}
            box1desc={MlCourseData[0].BoxShape.box1desc}
            Box2h5={MlCourseData[0].BoxShape.Box2h5}
            box2desc={MlCourseData[0].BoxShape.box2desc}
            Box3h5={MlCourseData[0].BoxShape.Box3h5}
            box3desc={MlCourseData[0].BoxShape.box3desc}
            Box4h5={MlCourseData[0].BoxShape.Box4h5}
            box4desc={MlCourseData[0].BoxShape.box4desc}
            HHeading="Course Details"
            Duration="350+ Hours"
            InterviewCalls=" 10"
            Projects="15+"
            CourseFee="₹ 1,05,000 +GST "
            Domain="7+"
          />
        </div>
        <SyllabusNew
          syllabus={MlCourseData[0].syllabus}
          CSyllabus="Machine Learning Course Syllabus In Bangalore"
          CourseHighlights={MlCourseData[0].CourseHighlights}
          syllabusDesc={MlCourseData[0].syllabusDesc}
          popupHead={MlCourseData[0].popupHead}
          hours={MlCourseData[0].hours}
          project={MlCourseData[0].project}
        />
        <CityImage
          DeskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/CenterCityBangaloreWeb.jpg"
          MobImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/CenterCityBangaloreMob.jpg"
          cityName="ಬೆಂಗಳೂರು"
        />
        <OurExpert
          H5="Tools Covered"
          img1={MlCourseData[0].OurExpert.img1}
          img2={MlCourseData[0].OurExpert.img2}
          img3={MlCourseData[0].OurExpert.img3}
          img4={MlCourseData[0].OurExpert.img4}
          img5={MlCourseData[0].OurExpert.img5}
          img6={MlCourseData[0].OurExpert.img6}
          img7={MlCourseData[0].OurExpert.img7}
          img8={MlCourseData[0].OurExpert.img8}
          img9={MlCourseData[0].OurExpert.img9}
          img10={MlCourseData[0].OurExpert.img10}
          img11={MlCourseData[0].OurExpert.img11}
          img12={MlCourseData[0].OurExpert.img12}
          img13={MlCourseData[0].OurExpert.img13}
          img14={MlCourseData[0].OurExpert.img14}
          img15={MlCourseData[0].OurExpert.img15}
          img16={MlCourseData[0].OurExpert.img16}
          img17={MlCourseData[0].OurExpert.img17}
          img18={MlCourseData[0].OurExpert.img18}
          img19={MlCourseData[0].OurExpert.img19}
          img21={MlCourseData[0].OurExpert.img21}
          img22={MlCourseData[0].OurExpert.img22}
          img23={MlCourseData[0].OurExpert.img23}
          img20={MlCourseData[0].OurExpert.img20}
        />
        <Certificate H4="Machine Learning Certification Course In Bangalore" />
        <div className={styles.ProjectWrapper} id="project">
          <Project
            popupHead={MlCourseData[0].Project.popupHead}
            project={MlCourseData[0].Project.project}
            domain={MlCourseData[0].Project.domain}
            projectTitle="Hands-on Projects In Bangalore"
          />
        </div>
        <SliderTab />
        <CourseFee
          syllabusDesc={MlCourseData[0].syllabusDesc}
          syllabus={MlCourseData[0].Batch}
          CourseFeeHead={MlCourseData[0].BatchCourses.CourseFeeHead}
          CourseFeePara={MlCourseData[0].BatchCourses.CourseFeePara}
          CourseFeelist1={MlCourseData[0].BatchCourses.CourseFeelist1}
          CourseFeelist2={MlCourseData[0].BatchCourses.CourseFeelist2}
          CourseFeelist3={MlCourseData[0].BatchCourses.CourseFeelist3}
          CourseFeelist4={MlCourseData[0].BatchCourses.CourseFeelist4}
          CourseFeelist5={MlCourseData[0].BatchCourses.CourseFeelist5}
        />
        <LearnSupport
          headForCity={true}
          cityName="24/7 Learner’s Support In Bangalore"
        />
        <CityFooter cityName="Bangalore" />
      </main>
    </div>
  );
}
