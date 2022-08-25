import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../components/CoursePage/Boxshapedsas/BoxShape";
import Popup from "../components/Popup/Popup";
import Navbar from "../Components/CoursePage/Navbar/Navbar";
import Form from "../components/Form/Form";
import OurExpert from "../components/CoursePage/OurExpert/OurExpert";
import Project from "../components/CoursePage/Projectfswd/Project";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import { FullStackWebCourseData } from "../Data/FullStackWebData";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import CourseReview from "../components/CoursePage/CourseReviewfull/CourseReview";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupport";
import Footer from "../Components/CoursePage/Footer/Footer";
import Certificate from "../components/CoursePage/CertificateTab/CertificateTabWeb";
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
                <title>Full Stack Web Development Course - Learnbay</title>
                <meta name="description" content="Full Stack Web Development Course with IBM certification. Learnbay provide advanced full stack developer course with placement guarantee. Enrol in our full stack web developer course to enhance your career" />
                <meta name="Keywords" content="Full Stack Web Development Course, Full Stack Web Development Course training , Full Stack Web Development Course institute in India, best Full Stack Web Development Course institute, Full Stack Web developer Course ,Full Stack Web developer Course certification, Full Stack Web developer Course training institute , advanced Full Stack Web developer Course , Full Stack Web developer Course with placement guarantee, Full Stack Web developer Course with IBM certification" />
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
                    deskTopPara="Be a demanding Developer to stay ahead"
                    mTopPara="Be a demanding Developer to stay ahead"
                    mTitle="Full Stack Web Development Program"
                    spanMTitleText="Crack MAANG Interviews"
                    title="Full Stack Web Development Program"
                    spanTitleText="Crack MAANG Interviews"
                    desc="Learn ultimate methods from MNC specialists with real-world projects"
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/header-home.webp"
                    width="780"
                    height="603"
                    alt="Full Stack"
                    srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Web+Development+Program+Learnbay.pdf"
                />
                <div className={styles.program}>
                    <ProgramInfo
                        p1="Premium Job"
                        p11="Placement Support"
                        p2="Job Advancement"
                        p22="Skills"
                        p3="Practice With"
                        p33="Real-Time Projects"
                        p4="Financing as low as"
                        p44="₹ 11,800/month"
                    />
                </div>
                <div className="Feature" id="Feature">
                    <BoxShape
                        title="Why Enroll In This Program?"
                        Box1h5="Custom-fit Training"
                        box1desc="Learn latest tools & modules. Become an demanding developer."
                        Box2h5="Interactive Learning"
                        box2desc="100% interactive and live classes. Hybrid learning option also available."
                        Box3h5="Premium Mentoring"
                        box3desc="Take advantage of MAANG web developer simulated mock interviews."
                        Box4h5="Hands-on Experience"
                        box4desc="Gain real-time experience with industrial projects."
                        Box5h5="1-on-1 Dedication"
                        box5desc="Live interactive session with expert for every individual"
                        Box6h5="Assured Interview Call"
                        box6desc="Get job referrals powered by 250+ hiring partners"
                    />
                </div>


                <div className={styles.Feature} id="Feature">
                    <BoxShape1
                        title={FullStackWebCourseData[0].BoxShape.title}
                        Box1h5={FullStackWebCourseData[0].BoxShape.Box1h5}
                        box1desc={FullStackWebCourseData[0].BoxShape.box1desc}
                        Box2h5={FullStackWebCourseData[0].BoxShape.Box2h5}
                        box2desc={FullStackWebCourseData[0].BoxShape.box2desc}
                        Box3h5={FullStackWebCourseData[0].BoxShape.Box3h5}
                        box3desc={FullStackWebCourseData[0].BoxShape.box3desc}
                        Box4h5={FullStackWebCourseData[0].BoxShape.Box4h5}
                        box4desc={FullStackWebCourseData[0].BoxShape.box4desc}
                    />
                </div>
                <CourseReview />
                <Certificate />
                <SyllabusNew
                    syllabus={FullStackWebCourseData[0].syllabus}
                    syllabusDesc={FullStackWebCourseData[0].syllabusDesc}
                    popupHead={FullStackWebCourseData[0].popupHead}
                    CSyllabus="Syllabus"
                    CourseHighlights="Program Highlights"
                    srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
                    hours="300+ Hours"
                    project="12+ Real Time"
                />
                <OurExpert
                    img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/1.png"
                    img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/2.png"
                    img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/3.png"
                    img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/4.png"
                    img5="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/5.png"
                    img6="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/6.png"
                    img7="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/7.png"
                    img8="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/8.png"
                    img9="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/9.png"
                    img10="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/10.png"
                    img11="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/11.png"
                    img12="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/12.png"
                    img13="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/13.png"
                    img14="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/14.png"
                    img15="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/1.png"
                    img16="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/2.png"
                    img17="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/3.png"
                    img18="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/4.png"
                    img19="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/5.png"
                    img21="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/6.png"
                    img22="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/7.png"
                    img23="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/8.png"
                    img20="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/9.png"
                />
                <ProgramFee Fee="₹ 1,20,000 + GST" Emi="₹ 11,800/month"
                    CourseFeeAndFinancing="Program Fee & Financing"

                />
                <div className={styles.ProjectWrapper} id="project">
                    <Project project="12+ Projects" domain="7+" />
                </div>
                <Batch
                    syllabusDesc={FullStackWebCourseData[0].syllabusDesc}
                    syllabus={FullStackWebCourseData[0].batchDetails}
                    CourseFeeHead="Full Stack Web Development: Batch Details"
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
