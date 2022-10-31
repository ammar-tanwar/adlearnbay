import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../Components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../Components/CoursePage/Boxshape/BoxShape1";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Navbar from "../Components/CoursePage/Navbar/Navbar";
import Certificate from "../Components/CoursePage/CertificateTab/CertificateTabAdvance";
import Project from "../Components/CoursePage/Project/Project";
import OurExpert from "../Components/CoursePage/OurExpert/OurExpert";
import CourseFee from "../Components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../Components/CoursePage/SyllabusNew/SyllabusNew";
import Footer from "../Components/CoursePage/Footer/Footer";
import { ProgramFee } from "../Components/CoursePage/ProgramFee/ProgramFee";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupport";
import React, { useState } from "react";
import { JobGuaranteeCourseData } from "../Data/JobGuaranteeData";
import SliderTab from "../Components/CoursePage/SliderTab/SliderTabs";
import CourseReview from "../Components/CoursePage/CourseReview/CourseReview";
import DomainFaq from "../Components/CoursePage/DomainFaq/DomainFaq";
import { DomainFaqCourseData1 } from "../Components/CoursePage/DomainFaq/DOmainFaqData";


export default function Home() {
    const [popups, setPopups] = useState(false);

    const popupShow = () => {
        setPopups(true);
    };
    return (
        <div >
            <Head>
                <title>Data Science and AI Master Program</title>
                <meta
                    name="description"
                    content="Data Science and AI Master Program"
                />
                <link
                    rel="canonical"
                    href="https://www.learnbay.co/data-science-ai-masters-program"
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
                <Navbar popup={true} dataScience={true} />
                <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
                    <div className="leftPopup">
                        <div className="whiteP" />
                    </div>
                    <div className="RightPopup">
                        <h5>Apply For Counselling</h5>
                        {/* <p>Fill the below details to get started</p> */}
                        <Form popup={true} setTrigger={setPopups} dataScience={true} />
                    </div>
                </Popup>
                <FirstSection
                    dataScience={true}
                    deskTopPara="Boost your career opportunities "
                    deskTopPara1="by developing relevant skills"
                    mTitle="Data Science and AI Master Program "
                    spanMTitleText="With Unlimited Interview Calls"
                    mTopPara="Boost your career opportunities "
                    mTopPara1="by developing relevant skills"
                    title="Data Science and AI Master Program "
                    spanTitleText="With Unlimited Interview Calls"
                    desc="A complete guide with real-life exercises & domain oriented approach."
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course5.png"
                    width="829"
                    height="646"
                    alt="AiMl Header"
                    srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Master's+Program+%5BWith+Unlimited+Interview+Calls%5D.pdf"
                />
                <div className={styles.program}>
                    <ProgramInfo
                        p1="Aimed for"
                        p11="Working Professionals"
                        p2="35 LPA - 50 LPA"
                        p22="Salary Package"
                        p3="1:1"
                        p33="Career Support"
                        p4="Financing as low as"
                        p44="₹ 10,816/month"
                    />
                </div>


                <div className={styles.Feature} id="Feature">
                    <BoxShape
                        title="Why Enroll In This Program?"
                        Box1h5="Unlimited Interview Calls"
                        box1desc="Get job assistance from industry specialist to crack top product-based companies ineterviews."
                        Box2h5="Select Multiple Domains"
                        box2desc="Obtain cutting-edge skills as per demanding IT-industry standards. Choose from 7+ domains."
                        Box3h5="Premium Mentoring"
                        box3desc="Experience the latest tips and tricks of mock interviews and CV writing sessions with MAANG Data Science/AI experts."
                        Box4h5="Hands-on Experience"
                        box4desc="Perform 3 fresh capstone projects, spanning from advanced level complexity, to earn IBM cerrtification."
                    />
                </div>
                <DomainFaq FaqData={DomainFaqCourseData1} />
                <CourseReview />
                <Certificate />
                <SyllabusNew
                    dataScience={true}
                    syllabus={JobGuaranteeCourseData[0].syllabus}
                    CSyllabus="Syllabus"
                    CourseHighlights="Program Highlights"
                    syllabusDesc={JobGuaranteeCourseData[0].syllabusDesc}
                    popupHead="Download Course Brochure"
                    srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
                    hours="500+ Hours"
                    project="20+ Real Time"
                />
                <OurExpert
                    H5="Tools Covered"
                    img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
                    img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/2.png"
                    img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/3.png"
                    img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/4.png"
                    img5="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/5.png"
                    img6="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/6.png"
                    img7="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/7.png"
                    img8="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/8.png"
                    img9="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/9.png"
                    img10="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/10.png"
                    img11="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/11.png"
                    img12="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/12.png"
                    img13="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/13.png"
                    img14="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/14.png"
                    img15="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/15.png"
                    img16="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/16.png"
                    img17="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/17.png"
                    img18="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/18.png"
                    img19="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/19.png"
                    img21="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/7.png"
                    img22="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/8.png"
                    img23="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/9.png"
                    img20="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/24.jpeg"
                />
                <ProgramFee Fee={JobGuaranteeCourseData[0].ProgramFee.Fee}
                    Emi={JobGuaranteeCourseData[0].ProgramFee.Emi} CourseFeeAndFinancing="Program Fee & Financing"
                    para="We are dedicated to making our programs accessible. We are committed to helping you find a way to budget for this program and offer a variety of financing options to make it more economical." dataScience={true} />
                <SliderTab />
                <div className={styles.ProjectWrapper} id="project">
                    <Project popupHead={JobGuaranteeCourseData[0].Project.popupHead}
                        project={JobGuaranteeCourseData[0].Project.project}
                        domain={JobGuaranteeCourseData[0].Project.domain}
                        projectTitle={JobGuaranteeCourseData[0].Project.projectTitle} />
                </div>

                <CourseFee
                    syllabusDesc={JobGuaranteeCourseData[0].syllabusDesc}
                    syllabus={JobGuaranteeCourseData[0].Batch}

                    CourseFeeHead="Data Science and AI Master Program : Batch Details"
                    CourseFeePara="Online Classroom"
                    CourseFeelist1="Online Interactive Classes"
                    CourseFeelist2="Weekend and Weekday Batches"
                    CourseFeelist3="Extra Clearance Sessions"
                    CourseFeelist4="Multiple Domain & Project Experties Selection Options"
                    CourseFeelist5="Company-based Mock Interviews"
                />
                <LearnSupport />
                <Footer />
            </main>
        </div>
    );
}

