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

import { JobGuaranteeCourseData } from "../Data/bangalore/JobGuaranteeData";

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
          ProgramData={JobGuaranteeCourseData}
          courseName="100% Placement Assistance Program "
          cityName="In Bangalore"
          ptag="Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured and unstructured data, and apply knowledge from data across a broad range of application domains."
        />

        <HiringPatners
          topHead="Our Hiring Patners In Bangalore"

        />
        <div className={styles.Feature} id="Feature">

          <ProgramWithHighLight
            title="Program Features"
            Box1h5="Custom-fit Training"
            box1desc="Get specially designed modules as per your dream job profile. Learn demanding DS/AI applications."
            Box2h5="Domain Focused"
            box2desc="Obtain cutting-edge skills as per demanding IT-industry standards. Choose from 10+ domains."
            Box3h5="Premium Mentoring"
            box3desc="Experience the latest tips and tricks of mock interviews and CV writing sessions with MAANG Data Science/AI experts."
            Box4h5="Hands-on Experience"
            box4desc="Get diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant establishments."

            HHeading="Course Details"
            Duration="6+ months"
            InterviewCalls="unlimited"
            Projects="20+"
            CourseFee="₹ 1,10,000 +GST"
            Domain="7+"
          />
        </div>

        <SyllabusNew
          syllabus={JobGuaranteeCourseData[0].syllabus}
          CSyllabus="100% Job Assistance Course Syllabus In Bangalore"
          CourseHighlights={JobGuaranteeCourseData[0].CourseHighlights}
          syllabusDesc={JobGuaranteeCourseData[0].syllabusDesc}
          popupHead={JobGuaranteeCourseData[0].popupHead}
          hours={JobGuaranteeCourseData[0].hours}
          project={JobGuaranteeCourseData[0].project}
        />
        <CityImage 
        DeskImg="/CenterCityWeb.jpg"
        MobImg="/CenterCityMob.jpg"
        cityName="ಬೆಂಗಳೂರು"
        
        />

        <OurExpert
          H5={JobGuaranteeCourseData[0].OurExpert.H5}
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
        <Certificate
          H4="100% Job Assistance Program In Bangalore"
        />
        <div className={styles.ProjectWrapper} id="project">
          <Project popupHead={JobGuaranteeCourseData[0].Project.popupHead}
            project={JobGuaranteeCourseData[0].Project.project}
            domain={JobGuaranteeCourseData[0].Project.domain}
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


