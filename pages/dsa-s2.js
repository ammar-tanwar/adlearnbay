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
import { DsaCourseData } from "../Data/DsaData";
import SyllabusNew from "../Components/CoursePage/SyllabusNew/SyllabusNew";
import CourseReview from "../Components/CoursePage/CourseReviewdsas/CourseReview";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupport";
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
        <div >
            <Head>
                <title>DSA & System Design</title>
                <meta name="description" content="DSA & System Design" />
                <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
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
                    <BoxShape1 
                    title={DsaCourseData[0].BoxShape.title}
                    Box1h5={DsaCourseData[0].BoxShape.Box1h5}
                        box1desc={DsaCourseData[0].BoxShape.box1desc}
                        Box2h5={DsaCourseData[0].BoxShape.Box2h5}
                        box2desc={DsaCourseData[0].BoxShape.box2desc}
                        Box3h5={DsaCourseData[0].BoxShape.Box3h5}
                        box3desc={DsaCourseData[0].BoxShape.box3desc}
                        Box4h5={DsaCourseData[0].BoxShape.Box4h5}
                        box4desc={DsaCourseData[0].BoxShape.box4desc}
                    
                    />
                </div>
                <CourseReview />
                <SyllabusNew
                    syllabus={DsaCourseData[0].syllabus}
                    syllabusDesc={DsaCourseData[0].syllabusDesc}
                    popupHead={DsaCourseData[0].popupHead}
                    CSyllabus="Data Structures & Algorithms Syllabus"
                    CourseHighlights="Full Stack Course Highlights"
                    srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Structure+Algorithm+%26+System+Design+Learnbay.pdf"
                    hours="200+ Hours"
                    project="12+ Real Time"
                />


                <ProgramFee Fee="₹ 70,000 + GST" Emi="₹ 6,883/month"
                CourseFeeAndFinancing="Full Stack Course Fee & Financing"
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
