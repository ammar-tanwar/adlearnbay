import Head from "next/head";
import styles from "../styles/Home.module.css";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Navbar from "../Components/CoursePage/Navbar/Navbar";
import Footer from "../Components/CoursePage/Footer/Footer";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupport";
import React, { useState } from "react";
import FirstSection from "../Components/CityComponents/FirstSection/FirstSection";
import ProgramInfo from "../Components/CoursePage/ProgramInfo/ProgramInfo";
import HiringPatners from "../Components/CityComponents/HiringPatnerWithReview/HiringPatners";
import SyllabusNew from "../Components/CoursePage/SyllabusNew/SyllabusNew";
import OurExpert from "../Components/CoursePage/OurExpert/OurExpert";
import { DataScienceCourseData } from "../Data/DataScienceCourse";
import Certificate from "../Components/CoursePage/CertificateTab/CertificateTabAdvance";
import Project from "../Components/CoursePage/Project/Project";
import SliderTab from "../Components/CoursePage/SliderTab/SliderTabs";
import ProgramWithHighLight from "../Components/CityComponents/ProgramWithHighLight/ProgramWithHighLight";

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
        <FirstSection />
        <div className={styles.programCity}>
          <ProgramInfo
            p1={DataScienceCourseData[0].ProgramInfo.p1}
            p11={DataScienceCourseData[0].ProgramInfo.p11}
            p2={DataScienceCourseData[0].ProgramInfo.p2}
            p22={DataScienceCourseData[0].ProgramInfo.p22}
            p3={DataScienceCourseData[0].ProgramInfo.p3}
            p33={DataScienceCourseData[0].ProgramInfo.p33}
            p4={DataScienceCourseData[0].ProgramInfo.p4}
            p44={DataScienceCourseData[0].ProgramInfo.p44}
          />
        </div>
        <HiringPatners />
        <div className={styles.Feature} id="Feature">
        
        <ProgramWithHighLight
          title="Program Features"
          Box1h5="Crack MAANG Interview"
          box1desc="Learn in-depth DSA and crack interviews in product-based MNCs"
          Box2h5="1:1 Mentorship"
          box2desc="Guided by mentors working in MNCs to support you for the tech interviews"
          Box3h5="Practical Project Experience"
          box3desc="Gain technical expertise by working on challenging real-world projects"
          Box4h5="Domain Specialization"
          box4desc="Choose Domain electives on your work experience and work on Live Projects"
        />
      </div>

        <SyllabusNew
          syllabus={DataScienceCourseData[0].syllabus}
          CSyllabus={DataScienceCourseData[0].CSyllabus}
          CourseHighlights={DataScienceCourseData[0].CourseHighlights}
          syllabusDesc={DataScienceCourseData[0].syllabusDesc}
          popupHead={DataScienceCourseData[0].popupHead}
          hours={DataScienceCourseData[0].hours}
          project={DataScienceCourseData[0].project}
        />

        <OurExpert
          H5={DataScienceCourseData[0].OurExpert.H5}
          img1={DataScienceCourseData[0].OurExpert.img1}
          img2={DataScienceCourseData[0].OurExpert.img2}
          img3={DataScienceCourseData[0].OurExpert.img3}
          img4={DataScienceCourseData[0].OurExpert.img4}
          img5={DataScienceCourseData[0].OurExpert.img5}
          img6={DataScienceCourseData[0].OurExpert.img6}
          img7={DataScienceCourseData[0].OurExpert.img7}
          img8={DataScienceCourseData[0].OurExpert.img8}
          img9={DataScienceCourseData[0].OurExpert.img9}
          img10={DataScienceCourseData[0].OurExpert.img10}
          img11={DataScienceCourseData[0].OurExpert.img11}
          img12={DataScienceCourseData[0].OurExpert.img12}
          img13={DataScienceCourseData[0].OurExpert.img13}
          img14={DataScienceCourseData[0].OurExpert.img14}
          img15={DataScienceCourseData[0].OurExpert.img15}
          img16={DataScienceCourseData[0].OurExpert.img16}
          img17={DataScienceCourseData[0].OurExpert.img17}
          img18={DataScienceCourseData[0].OurExpert.img18}
          img19={DataScienceCourseData[0].OurExpert.img19}
          img21={DataScienceCourseData[0].OurExpert.img21}
          img22={DataScienceCourseData[0].OurExpert.img22}
          img23={DataScienceCourseData[0].OurExpert.img23}
          img20={DataScienceCourseData[0].OurExpert.img20}
        />
        <Certificate
          H4="Data Science Certification Program"
        />
        <div className={styles.ProjectWrapper} id="project">
          <Project popupHead={DataScienceCourseData[0].Project.popupHead}
            project={DataScienceCourseData[0].Project.project}
            domain={DataScienceCourseData[0].Project.domain}
            projectTitle={DataScienceCourseData[0].Project.projectTitle} />
        </div>
        <SliderTab />
        <LearnSupport />
        <Footer />
      </main>
    </div>
  );
}
