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

import { FullStackSoftwareCourseData } from "../Data/FullStackSoftware";
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
                <title>Full Stack Software Development Course - Learnbay</title>
                <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
                <meta name="description" content="Full Stack Software Development Course with IBM certification. Learnbay provide advanced full stack Software developer course with placement guarantee. Enrol in our full stack Software developer course to enhance your career" />
                <meta name="Keywords" content="Full Stack Software Development Course, Full Stack Software Development Course training , Full Stack Software Development Course institute in India, best Full Stack Software Development Course institute, Full Stack Software developer Course ,Full Stack Software developer Course certification, Full Stack Software developer Course training institute , advanced Full Stack Software developer Course , Full Stack Software developer Course with placement guarantee, Full Stack Software developer Course with IBM certification" />
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
                    deskTopPara="Ace Your Coding Interview at MAANG and Achieve Your Dream Job"
                    mTopPara="Ace Your Coding Interview at MAANG and Achieve Your Dream Job"
                    mTitle="Full Stack Software Development Program"
                    spanMTitleText="Achieve Your Dream Job"
                    title="Full Stack Software"
                    spanTitleText=" Development Program "
                    desc="Best Interview Prep Course for Top Product Based MNCs"
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course9.png"
                    width="791"
                    height="659"
                    alt="Full Stack"
                    srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
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
                        p44="₹ 10,816/month"
                    />
                </div>
                <div className="Feature" id="Feature">
                    <BoxShape
                        title="Why Enroll In This Program?"
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


                <div className={styles.Feature} id="Feature">
                    <BoxShape1
                        title={FullStackSoftwareCourseData[0].BoxShape.title}
                        Box1h5={FullStackSoftwareCourseData[0].BoxShape.Box1h5}
                        box1desc={FullStackSoftwareCourseData[0].BoxShape.box1desc}
                        Box2h5={FullStackSoftwareCourseData[0].BoxShape.Box2h5}
                        box2desc={FullStackSoftwareCourseData[0].BoxShape.box2desc}
                        Box3h5={FullStackSoftwareCourseData[0].BoxShape.Box3h5}
                        box3desc={FullStackSoftwareCourseData[0].BoxShape.box3desc}
                        Box4h5={FullStackSoftwareCourseData[0].BoxShape.Box4h5}
                        box4desc={FullStackSoftwareCourseData[0].BoxShape.box4desc}
                    />
                </div>
                <CourseReview />
                <SyllabusNew
                    syllabus={FullStackSoftwareCourseData[0].syllabus}
                    syllabusDesc={FullStackSoftwareCourseData[0].syllabusDesc}
                    popupHead={FullStackSoftwareCourseData[0].popupHead}
                    CSyllabus="Syllabus"
                    CourseHighlights="Program Highlights"
                    srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
                    hours="300+ Hours"
                    project="12+ Real Time"
                />

                <ProgramFee Fee="₹ 1,10,000 + GST" Emi="₹10,816"
                    CourseFeeAndFinancing="Program Fee & Financing"

                />
                <div className={styles.ProjectWrapper} id="project">
                    <Project project="12+ Projects" domain="7+" />
                </div>

                <Batch
                    syllabusDesc={FullStackSoftwareCourseData[0].syllabusDesc}
                    syllabus={FullStackSoftwareCourseData[0].batchDetails}

                    CourseFeeHead="Full Stack Software Development : Batch Details"
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
