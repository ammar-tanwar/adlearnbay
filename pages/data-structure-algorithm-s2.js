import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../Components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../Components/CoursePage/Boxshapefssds/BoxShape";
import Popup from "../Components/Popup/Popup";
import Navbar from "../Components/CoursePage/Navbar/Navbar";
import Form from "../Components/Form/Form";
import Project from "../Components/CoursePage/Projectfswd/Project";
import { ProgramFee } from "../Components/CoursePage/ProgramFee/ProgramFee";
import { DataStructureAlgorithmData } from "../Data/DataStructureAlgorithm";
import SyllabusNew from "../Components/CoursePage/SyllabusNew/SyllabusNew";
import CourseReview from "../Components/CoursePage/CourseReviewdsas/CourseReview";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupportfsd";
import Footer from "../Components/CoursePage/Footer/Footerfsd";
import BoxShape1 from "../Components/CoursePage/BoxshapeFssd/BoxShape";
import React, { useState } from "react";
import Batch from "../Components/CoursePage/BatchDetails/Batch";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <Head>
        <title>Data Structure Course Syllabus and DSA Training 2022</title>
        <meta
          name="description"
          content="Best way to learn Data Structures and Algorithms with System Design Course Online, mastering any one coding skill - Interaction in limited batch, No Cost EMI."
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6229dde31ffac05b1d7de6c4/1ftpolgri';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
            `,
          }}
        />
    
      </Head>
      <main>
        {" "}
        <Navbar popup={true} formotp={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <Form popup={true} setTrigger={setPopups} />
          </div>
        </Popup>
        <FirstSection
          formotp={true}
          deskTopPara={DataStructureAlgorithmData[0].FirstSection.deskTopPara}
          mTopPara={DataStructureAlgorithmData[0].FirstSection.mTopPara}
          mTitle={DataStructureAlgorithmData[0].FirstSection.mTitle}
          spanMTitleText={
            DataStructureAlgorithmData[0].FirstSection.spanMTitleText
          }
          title={DataStructureAlgorithmData[0].FirstSection.title}
          spanTitleText={
            DataStructureAlgorithmData[0].FirstSection.spanTitleText
          }
          desc={DataStructureAlgorithmData[0].FirstSection.desc}
          src={DataStructureAlgorithmData[0].FirstSection.src}
          width={DataStructureAlgorithmData[0].FirstSection.width}
          height={DataStructureAlgorithmData[0].FirstSection.height}
          alt={DataStructureAlgorithmData[0].FirstSection.alt}
          srcD={DataStructureAlgorithmData[0].FirstSection.srcD}
        />
        <div className={styles.program}>
          <ProgramInfo
            p1={DataStructureAlgorithmData[0].ProgramInfo.p1}
            p11={DataStructureAlgorithmData[0].ProgramInfo.p11}
            p2={DataStructureAlgorithmData[0].ProgramInfo.p2}
            p22={DataStructureAlgorithmData[0].ProgramInfo.p22}
            p3={DataStructureAlgorithmData[0].ProgramInfo.p3}
            p33={DataStructureAlgorithmData[0].ProgramInfo.p33}
            p4={DataStructureAlgorithmData[0].ProgramInfo.p4}
            p44={DataStructureAlgorithmData[0].ProgramInfo.p44}
          />
        </div>
        <div className="Feature" id="Feature">
          <BoxShape
            title={DataStructureAlgorithmData[0].BoxShape.title}
            Box1h5={DataStructureAlgorithmData[0].BoxShape.Box1h5}
            box1desc={DataStructureAlgorithmData[0].BoxShape.box1desc}
            Box2h5={DataStructureAlgorithmData[0].BoxShape.Box2h5}
            box2desc={DataStructureAlgorithmData[0].BoxShape.box2desc}
            Box3h5={DataStructureAlgorithmData[0].BoxShape.Box3h5}
            box3desc={DataStructureAlgorithmData[0].BoxShape.box3desc}
            Box4h5={DataStructureAlgorithmData[0].BoxShape.Box4h5}
            box4desc={DataStructureAlgorithmData[0].BoxShape.box4desc}
            headh5={DataStructureAlgorithmData[0].BoxShape.headh5}
          />
        </div>
        <div className={styles.Feature} id="Feature">
          <BoxShape1
            formotp={true}
            title={DataStructureAlgorithmData[0].BoxShape1.title}
            Box1h5={DataStructureAlgorithmData[0].BoxShape1.Box1h5}
            box1desc={DataStructureAlgorithmData[0].BoxShape1.box1desc}
            Box2h5={DataStructureAlgorithmData[0].BoxShape1.Box2h5}
            box2desc={DataStructureAlgorithmData[0].BoxShape1.box2desc}
            Box3h5={DataStructureAlgorithmData[0].BoxShape1.Box3h5}
            box3desc={DataStructureAlgorithmData[0].BoxShape1.box3desc}
            Box4h5={DataStructureAlgorithmData[0].BoxShape1.Box4h5}
            box4desc={DataStructureAlgorithmData[0].BoxShape1.box4desc}
          />
        </div>
        <CourseReview formotp={true} />
        <SyllabusNew
          formotp={true}
          syllabusFormotp={true}
          syllabus={DataStructureAlgorithmData[0].syllabus}
          syllabusDesc={DataStructureAlgorithmData[0].syllabusDesc}
          popupHead={DataStructureAlgorithmData[0].popupHead}
          CSyllabus={DataStructureAlgorithmData[0].CSyllabus}
          CourseHighlights={DataStructureAlgorithmData[0].CourseHighlights}
          srcD={DataStructureAlgorithmData[0].srcD}
          hours={DataStructureAlgorithmData[0].hours}
          project={DataStructureAlgorithmData[0].project}
        />
        <ProgramFee
          Fee={DataStructureAlgorithmData[0].ProgramFee.Fee}
          Emi={DataStructureAlgorithmData[0].ProgramFee.Emi}
          formotp={true}
          CourseFeeAndFinancing={
            DataStructureAlgorithmData[0].ProgramFee.CourseFeeAndFinancing
          }
          para="We are dedicated to making our programs accessible. We are committed to helping you find a way to budget for this program and offer a variety of financing options to make it more economical."
          dataScience={true}
        />
        <div className={styles.ProjectWrapper} id="project">
          <Project
            project={DataStructureAlgorithmData[0].Project.project}
            domain={DataStructureAlgorithmData[0].Project.domain}
            formotp={true}
          />
        </div>
        <Batch
          formotp={true}
          syllabusDesc={DataStructureAlgorithmData[0].syllabusDesc}
          syllabus={DataStructureAlgorithmData[0].Batch}
          CourseFeeHead={
            DataStructureAlgorithmData[0].BatchCourses.CourseFeeHead
          }
          CourseFeePara={
            DataStructureAlgorithmData[0].BatchCourses.CourseFeePara
          }
          CourseFeelist1={
            DataStructureAlgorithmData[0].BatchCourses.CourseFeelist1
          }
          CourseFeelist2={
            DataStructureAlgorithmData[0].BatchCourses.CourseFeelist2
          }
          CourseFeelist3={
            DataStructureAlgorithmData[0].BatchCourses.CourseFeelist3
          }
          CourseFeelist4={
            DataStructureAlgorithmData[0].BatchCourses.CourseFeelist4
          }
          CourseFeelist5={
            DataStructureAlgorithmData[0].BatchCourses.CourseFeelist5
          }
        />
        <div className={styles.boxContent}>
          <div className={styles.FirstBox}>
            <p className={styles.FirstP}>
              Why is it important to learn DSA to get into product-based
              companies?
            </p>
            <p className={styles.SecondP}>
              Data structures are generally used to organize, process, retrieve,
              and store data on computers for efficient use. Proper
              understanding of data structures and algorithms helps software
              engineers to write the right code. Data structures and Algorithms
              are an important part of computer science and help to understand
              the problem on a deeper level. They are widely used in artificial
              intelligence, operating systems, graphics and other fields. If the
              programmer is not familiar with data structures and algorithms
              course, he may not be able to write efficient data handling code.
              Hence a programmer who’s trying to switch to product company needs
              to Learn Data structures and algorithms course.
            </p>
          </div>
          <div>
            <div className={styles.InnerBox}>
              <p className={styles.SecondP}>
                Most product based companies looks at how great your DSA skills
                are and how you use it on a daily basis to solve problems and
                for that you require to learn DSA course
              </p>
            </div>
            <div className={styles.InnerBox}>
              <p className={styles.SecondP}>
                Data Structure course can helps one to understand how to apply
                the right data structures and that it is an important step in
                managing your data well and writing efficient code.
              </p>
            </div>
            <div className={styles.InnerBox}>
              <p className={styles.SecondP}>
                DSA course will help the transition to product based companies
                easier as they also prepare you for the interview.
              </p>
            </div>
          </div>
        </div>
        <LearnSupport />
        <Footer
          paraTag="Enroll now for Full Stack and DSA Program (Bangalore) and get master in Data Structures and System Design Skills which will help you to transform your career."
          pTag={true}
        />
      </main>
    </div>
  );
}
