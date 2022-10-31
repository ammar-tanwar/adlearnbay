import Head from "next/head";
import styles from "../styles/Home.module.css";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Navbar from "../Components/CoursePage/Navbar/Navbar";
import CityFooter from "../Components/CityComponents/CityFooter/CityFooter";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupport";
import React, { useState } from "react";
import FirstSection from "../Components/CityComponents/FirstSection/FirstSection";
import HiringPatners from "../Components/CityComponents/HiringPatnerWithReview/HiringPatners";
import SyllabusNew from "../Components/CoursePage/SyllabusNew/SyllabusNew";
import CityImage from "../Components/CityComponents/CityImages/CityImage";
import OurExpert from "../Components/CoursePage/OurExpert/OurExpert";
import Certificate from "../Components/CoursePage/CertificateTab/CertificateTabAdvance";
import Project from "../Components/CoursePage/Project/Project";
import SliderTab from "../Components/CoursePage/SliderTab/SliderTabs";
import ProgramWithHighLight from "../Components/CityComponents/ProgramWithHighLight/ProgramWithHighLight";
import { DataAnalyticsCourseData } from "../Data/bangalore/DataAnalyticsData";
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div >
      <Head>
        <title>
          cityPages
        </title>
        <meta
          name="description"
          content="Advanced Data Science and AI Program with Domain Specialization"
        />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>

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

          DeskImg="/BengaluruWeb.jpg"
          MobImg="/BengaluruMob.jpg"
          ProgramData={DataAnalyticsCourseData}
          courseName="Data Analytic Course"
          cityName="In Bangalore"
          ptag="Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured and unstructured data, and apply knowledge from data across a broad range of application domains."
        />

        <HiringPatners
          topHead="Our Hiring Patners In Bangalore"

        />
        <div className={styles.Feature} id="Feature">

          <ProgramWithHighLight
            title="Program Features"
            Box1h5={DataAnalyticsCourseData[0].BoxShape.Box1h5}
            box1desc={DataAnalyticsCourseData[0].BoxShape.box1desc}
            Box2h5={DataAnalyticsCourseData[0].BoxShape.Box2h5}
            box2desc={DataAnalyticsCourseData[0].BoxShape.box2desc}
            Box3h5={DataAnalyticsCourseData[0].BoxShape.Box3h5}
            box3desc={DataAnalyticsCourseData[0].BoxShape.box3desc}
            Box4h5={DataAnalyticsCourseData[0].BoxShape.Box4h5}
            box4desc={DataAnalyticsCourseData[0].BoxShape.box4desc}

            HHeading="Course Details"
            Duration="4+ months"
            InterviewCalls=" 12+ "
            Projects="8+"
            CourseFee="₹ 65,000 +GST "
            Domain="7+"
          />
        </div>

        <SyllabusNew
          syllabus={DataAnalyticsCourseData[0].syllabus}
          CSyllabus="Data Analytics Course Syllabus In Bangalore"
          CourseHighlights={DataAnalyticsCourseData[0].CourseHighlights}
          syllabusDesc={DataAnalyticsCourseData[0].syllabusDesc}
          popupHead={DataAnalyticsCourseData[0].popupHead}
          hours={DataAnalyticsCourseData[0].hours}
          project={DataAnalyticsCourseData[0].project}
        />
        <CityImage 
        DeskImg="/CenterCityWeb.jpg"
        MobImg="/CenterCityMob.jpg"
        cityName="ಬೆಂಗಳೂರು"
        
        />

        <OurExpert
          H5={DataAnalyticsCourseData[0].OurExpert.H5}
          img1={DataAnalyticsCourseData[0].OurExpert.img1}
          img2={DataAnalyticsCourseData[0].OurExpert.img2}
          img3={DataAnalyticsCourseData[0].OurExpert.img3}
          img4={DataAnalyticsCourseData[0].OurExpert.img4}
          img5={DataAnalyticsCourseData[0].OurExpert.img5}
          img6={DataAnalyticsCourseData[0].OurExpert.img6}
          img7={DataAnalyticsCourseData[0].OurExpert.img7}
          img8={DataAnalyticsCourseData[0].OurExpert.img8}
          img9={DataAnalyticsCourseData[0].OurExpert.img9}
          img10={DataAnalyticsCourseData[0].OurExpert.img10}
          img11={DataAnalyticsCourseData[0].OurExpert.img11}
          img12={DataAnalyticsCourseData[0].OurExpert.img12}
          img13={DataAnalyticsCourseData[0].OurExpert.img13}
          img14={DataAnalyticsCourseData[0].OurExpert.img14}
          img15={DataAnalyticsCourseData[0].OurExpert.img15}
          img16={DataAnalyticsCourseData[0].OurExpert.img16}
          img17={DataAnalyticsCourseData[0].OurExpert.img17}
          img18={DataAnalyticsCourseData[0].OurExpert.img18}
          img19={DataAnalyticsCourseData[0].OurExpert.img19}
          img21={DataAnalyticsCourseData[0].OurExpert.img21}
          img22={DataAnalyticsCourseData[0].OurExpert.img22}
          img23={DataAnalyticsCourseData[0].OurExpert.img23}
          img20={DataAnalyticsCourseData[0].OurExpert.img20}
        />
        <Certificate
          H4="Data Analytics Program In Bangalore"
        />
        <div className={styles.ProjectWrapper} id="project">
          <Project popupHead={DataAnalyticsCourseData[0].Project.popupHead}
            project={DataAnalyticsCourseData[0].Project.project}
            domain={DataAnalyticsCourseData[0].Project.domain}
            projectTitle="Hands-on Projects In Bangalore" />
        </div>
        <SliderTab />
        <LearnSupport
          headForCity={true}
          cityName="24/7 Learner’s Support In Bangalore"
        />
        <CityFooter 
        cityName="Bangalore"/>
      </main>
    </div>
  );
}



