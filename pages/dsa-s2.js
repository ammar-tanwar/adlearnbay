import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../components/CoursePage/Boxshapefssds/BoxShape";
import Popup from "../components/Popup/Popup";
import Navbar from "../Components/CoursePage/Navbar/Navbar";
import Form from "../components/Form/Form";
import Project from "../components/CoursePage/Projectfswd/Project";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import { DsaCourseData } from "../Data/DsaData";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import CourseReview from "../components/CoursePage/CourseReviewdsas/CourseReview";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupport";
import Footer from "../Components/CoursePage/Footer/Footer";
import BoxShape1 from "../Components/CoursePage/BoxshapeFssd/BoxShape";
import React, { useState } from "react";
import Batch from "../Components/CoursePage/BatchDetails/Batch";


export default function Home() {
    const [popups, setPopups] = useState(false);

    const popupShow = () => {
        setPopups(true);
    };
    return (
        <div >
            <Head>
                <title>DSA & System Design</title>
                <meta name="description" content="DSA & System Design" />
                <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
            </Head>
            <main>  <Navbar popup={true} />

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
                    deskTopPara="MAANG's Best Interview Preparation Course trained by Top Experts"
                    mTopPara="MAANG's Best Interview Preparation Course trained by Top Experts"
                    mTitle="Data Structure & Algorithms"
                    spanMTitleText="& System Design"
                    title="Data Structure & Algorithms "
                    spanTitleText="& System Design"
                    desc="Perform real-world industrial projects and use-cases."
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/dsa-header-image.png"
                    width="776"
                    height="682"
                    alt="Full Stack"
                    srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Structure+Algorithm+%26+System+Design+Learnbay.pdf"
                />
                <div className={styles.program}>
                    <ProgramInfo
                        p1="Premium Job"
                        p11="Placement Support"
                        p2="Job Advancement"
                        p22="Skills"
                        p3="Practice with"
                        p33="Real-Time Projects"
                        p4="Financing as low as"
                        p44="₹ 6,883/month"
                    />
                </div>
                <div className="Feature" id="Feature">
                    <BoxShape
                        title="Why Enroll In This Program?"
                        Box1h5="Crack MAANG Interview"
                        box1desc="Learn in-depth DSA and crack interviews in product-based MNCs"
                        Box2h5="1:1 Mentorship"
                        box2desc="Guided by mentors working In MNCs to support you for the tech interviews"
                        Box3h5="Practical Project Experience"
                        box3desc="Gain technical expertise by working on challenging real-world projects"
                        Box4h5="250+ Hiring Partners"
                        box4desc="Get dedicated placement support with 100% Interview Guarantee"
                    />
                </div>


                <div className={styles.Feature} id="Feature">
                    <BoxShape1 />
                </div>
                <CourseReview />
                <SyllabusNew
                    syllabus={DsaCourseData[0].syllabus}
                    syllabusDesc={DsaCourseData[0].syllabusDesc}
                    popupHead={DsaCourseData[0].popupHead}
                    CSyllabus="Syllabus"
                    CourseHighlights="Program Highlights"
                    srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Structure+Algorithm+%26+System+Design+Learnbay.pdf"
                    hours="200+ Hours"
                    project="12+ Real Time"
                />


                <ProgramFee Fee="₹ 70,000 + GST" Emi="₹ 6,883/month"
                    CourseFeeAndFinancing="Program Fee & Financing"
                />
                <div className={styles.ProjectWrapper} id="project">
                    <Project project="12+ Projects" domain="7+" />
                </div>
                <Batch
                    syllabusDesc={DsaCourseData[0].syllabusDesc}
                    syllabus={DsaCourseData[0].batchDetails}
                    CourseFeeHead="Data Structure & Algorithms : Batch Details"
                    CourseFeePara="Online Classroom"
                    CourseFeelist1="Online Interactive Classes"
                    CourseFeelist2="Weekend and Weekday Batches"
                    CourseFeelist3="Extra Doubt Clearance Sessions"
                    CourseFeelist4="Multiple Domain Selection Options"
                    CourseFeelist5="Company-based Mock Interviews"
                />
                <LearnSupport />
                <Footer />
            </main>
        </div>
    );
}
