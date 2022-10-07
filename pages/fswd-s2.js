import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../Components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../Components/CoursePage/Boxshapedsas/BoxShape";
import Popup from "../Components/Popup/Popup";
import Navbar from "../Components/CoursePage/Navbar/Navbar";
import Form from "../Components/Form/Form";
import OurExpert from "../Components/CoursePage/OurExpert/OurExpert";
import Project from "../Components/CoursePage/Projectfswd/Project";
import { ProgramFee } from "../Components/CoursePage/ProgramFee/ProgramFee";
import { FullStackWebCourseData } from "../Data/FullStackWebData";
import SyllabusNew from "../Components/CoursePage/SyllabusNew/SyllabusNew";
import CourseReview from "../Components/CoursePage/CourseReviewfull/CourseReview";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupport";
import Footer from "../Components/CoursePage/Footer/Footerfsd";
import Certificate from "../Components/CoursePage/CertificateTab/CertificateTabWeb";
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
                    deskTopPara={FullStackWebCourseData[0].FirstSection.deskTopPara}
                    mTopPara={FullStackWebCourseData[0].FirstSection.mTopPara}
                    mTitle={FullStackWebCourseData[0].FirstSection.mTitle}
                    spanMTitleText={FullStackWebCourseData[0].FirstSection.spanMTitleText}
                    title={FullStackWebCourseData[0].FirstSection.title}
                    spanTitleText={FullStackWebCourseData[0].FirstSection.spanTitleText}
                    desc={FullStackWebCourseData[0].FirstSection.desc}
                    src={FullStackWebCourseData[0].FirstSection.src}
                    width={FullStackWebCourseData[0].FirstSection.width}
                    height={FullStackWebCourseData[0].FirstSection.height}
                    alt={FullStackWebCourseData[0].FirstSection.alt}
                    srcD={FullStackWebCourseData[0].FirstSection.srcD}
                />
                <div className={styles.program}>
                    <ProgramInfo
                        p1={FullStackWebCourseData[0].ProgramInfo.p1}
                        p11={FullStackWebCourseData[0].ProgramInfo.p11}
                        p2={FullStackWebCourseData[0].ProgramInfo.p2}
                        p22={FullStackWebCourseData[0].ProgramInfo.p22}
                        p3={FullStackWebCourseData[0].ProgramInfo.p3}
                        p33={FullStackWebCourseData[0].ProgramInfo.p33}
                        p4={FullStackWebCourseData[0].ProgramInfo.p4}
                        p44={FullStackWebCourseData[0].ProgramInfo.p44}
                    />
                </div>
                <div className="Feature" id="Feature">
                    <BoxShape
                        title={FullStackWebCourseData[0].BoxShape.title}
                        Box1h5={FullStackWebCourseData[0].BoxShape.Box1h5}
                        box1desc={FullStackWebCourseData[0].BoxShape.box1desc}
                        Box2h5={FullStackWebCourseData[0].BoxShape.Box2h5}
                        box2desc={FullStackWebCourseData[0].BoxShape.box2desc}
                        Box3h5={FullStackWebCourseData[0].BoxShape.Box3h5}
                        box3desc={FullStackWebCourseData[0].BoxShape.box3desc}
                        Box4h5={FullStackWebCourseData[0].BoxShape.Box4h5}
                        box4desc={FullStackWebCourseData[0].BoxShape.box4desc}
                        Box5h5={FullStackWebCourseData[0].BoxShape.Box5h5}
                        box5desc={FullStackWebCourseData[0].BoxShape.box5desc}
                        Box6h5={FullStackWebCourseData[0].BoxShape.Box6h5}
                        box6desc={FullStackWebCourseData[0].BoxShape.box6desc}
                    />
                </div>


                <div className={styles.Feature} id="Feature">
                    <BoxShape1
                        title={FullStackWebCourseData[0].BoxShape1.title}
                        Box1h5={FullStackWebCourseData[0].BoxShape1.Box1h5}
                        box1desc={FullStackWebCourseData[0].BoxShape1.box1desc}
                        Box2h5={FullStackWebCourseData[0].BoxShape1.Box2h5}
                        box2desc={FullStackWebCourseData[0].BoxShape1.box2desc}
                        Box3h5={FullStackWebCourseData[0].BoxShape1.Box3h5}
                        box3desc={FullStackWebCourseData[0].BoxShape1.box3desc}
                        Box4h5={FullStackWebCourseData[0].BoxShape1.Box4h5}
                        box4desc={FullStackWebCourseData[0].BoxShape1.box4desc}
                    />
                </div>
                <CourseReview />
                <Certificate />
                <SyllabusNew
                    syllabus={FullStackWebCourseData[0].syllabus}
                    syllabusDesc={FullStackWebCourseData[0].syllabusDesc}
                    popupHead={FullStackWebCourseData[0].popupHead}
                    CSyllabus={FullStackWebCourseData[0].CSyllabus}
                    CourseHighlights={FullStackWebCourseData[0].CourseHighlights}
                    srcD={FullStackWebCourseData[0].srcD}
                    hours={FullStackWebCourseData[0].hours}
                    project={FullStackWebCourseData[0].project}
                />
                <OurExpert
                    img1={FullStackWebCourseData[0].OurExpert.img1}
                    img2={FullStackWebCourseData[0].OurExpert.img2}
                    img3={FullStackWebCourseData[0].OurExpert.img3}
                    img4={FullStackWebCourseData[0].OurExpert.img4}
                    img5={FullStackWebCourseData[0].OurExpert.img5}
                    img6={FullStackWebCourseData[0].OurExpert.img6}
                    img7={FullStackWebCourseData[0].OurExpert.img7}
                    img8={FullStackWebCourseData[0].OurExpert.img8}
                    img9={FullStackWebCourseData[0].OurExpert.img9}
                    img10={FullStackWebCourseData[0].OurExpert.img10}
                    img11={FullStackWebCourseData[0].OurExpert.img11}
                    img12={FullStackWebCourseData[0].OurExpert.img12}
                    img13={FullStackWebCourseData[0].OurExpert.img13}
                    img14={FullStackWebCourseData[0].OurExpert.img14}
                    img15={FullStackWebCourseData[0].OurExpert.img15}
                    img16={FullStackWebCourseData[0].OurExpert.img16}
                    img17={FullStackWebCourseData[0].OurExpert.img17}
                    img18={FullStackWebCourseData[0].OurExpert.img18}
                    img19={FullStackWebCourseData[0].OurExpert.img19}
                    img21={FullStackWebCourseData[0].OurExpert.img21}
                    img22={FullStackWebCourseData[0].OurExpert.img22}
                    img23={FullStackWebCourseData[0].OurExpert.img23}
                    img20={FullStackWebCourseData[0].OurExpert.img20}
                />
                <ProgramFee Fee={FullStackWebCourseData[0].ProgramFee.Fee} Emi={FullStackWebCourseData[0].ProgramFee.Emi}
                    CourseFeeAndFinancing={FullStackWebCourseData[0].ProgramFee.CourseFeeAndFinancing}

                />
                <div className={styles.ProjectWrapper} id="project">
                    <Project project={FullStackWebCourseData[0].Project.project} domain={FullStackWebCourseData[0].Project.domain} />
                </div>
                <Batch
                    syllabusDesc={FullStackWebCourseData[0].syllabusDesc}
                    syllabus={FullStackWebCourseData[0].Batch}
                    CourseFeeHead={FullStackWebCourseData[0].BatchCourses.CourseFeeHead}
                    CourseFeePara={FullStackWebCourseData[0].BatchCourses.CourseFeePara}
                    CourseFeelist1={FullStackWebCourseData[0].BatchCourses.CourseFeelist1}
                    CourseFeelist2={FullStackWebCourseData[0].BatchCourses.CourseFeelist2}
                    CourseFeelist3={FullStackWebCourseData[0].BatchCourses.CourseFeelist3}
                    CourseFeelist4={FullStackWebCourseData[0].BatchCourses.CourseFeelist4}
                    CourseFeelist5={FullStackWebCourseData[0].BatchCourses.CourseFeelist5}
                />
                <LearnSupport />
                <Footer />
            </main>
        </div>
    );
}
