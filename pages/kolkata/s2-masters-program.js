import Head from "next/head";
import Navbar from "../../Components/CoursePage/Navbar/Navbar";
import Form from "../../Components/Form/Form";
import Popup from "../../Components/Popup/Popup";
import styles from "../../styles/Home.module.css";

import React, { useState } from "react";
import CityFooter from "../../Components/CityComponents/CityFooter/CityFooter";
import CityImage from "../../Components/CityComponents/CityImages/CityImage";
import FirstSection from "../../Components/CityComponents/FirstSection/FirstSection";
import HiringPatners from "../../Components/CityComponents/HiringPatnerWithReview/HiringPatners";
import ProgramWithHighLight from "../../Components/CityComponents/ProgramWithHighLight/ProgramWithHighLight";
import Certificate from "../../Components/CoursePage/CertificateTab/CertificateTabAdvance";
import CourseFee from "../../Components/CoursePage/CourseFee/CourseFee";
import FeeSection from "../../Components/CoursePage/FeeSection/Fee";
import LearnSupport from "../../Components/CoursePage/LearnSupport/LearnSupport";
import OurExpert from "../../Components/CoursePage/OurExpert/OurExpert";
import ProgramInfo from "../../Components/CoursePage/ProgramInfo/ProgramInfo";
import Project from "../../Components/CoursePage/Project/Project";
import SliderTab from "../../Components/CoursePage/SliderTab/SliderTabs";
import SyllabusNew from "../../Components/CoursePage/SyllabusNew/SyllabusNew";
import { mastersProgram } from "../../Data/delhi/mastersProgram";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <div>
        <Head>
          <title>Data Science and AI Master’s Program – Learnbay</title>
          <meta
            name="description"
            content="Online Data Science and AI Master’s Program with 100% placement assistance and 
                    get  1:1 Guaranteed interview calls, 20+ Real-time projects, 3+ Capstone projects, 
                    3 years of course subscription ,Lifetime Access to recorded classes and 24/7 
                    Learner’s support."
          />{" "}
          <meta
            name="Keywords"
            content="data science and ai master program, artificial intelligence master's programs, online master's program in artificial intelligence, masters in ai and data science course, masters course artificial intelligence for working professionals, artificial intelligence masters online course, masters program in data science and AI in india, masters course in data science for working professionals, data science masters programs online, best online masters program in artificial intelligence, online masters in ai course,  data science masters course, masters in data science online course, data science and artificial intelligence masters program,  master data science course, masters in data science online program"
          />
          <link
            rel="canonical"
            href="https://www.learnbay.co/data-science-ai-masters-program"
          />
          <link
            rel="icon"
            href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
          />
          {/* <script
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
              "marginBottom":"20",
              "marginRight":"20",
              "position":"right",
              "zIndex":"22222222 !important",
          },
          "brandSetting":{
              "brandName":"Learnbay",
              "brandSubTitle":"The Learner's Path",
              "brandImg":"https://course.learnbay.co/Learnbay-Favicon-L.png",
              "welcomeText":"Hi there! How can I help you?",
 "messageText":"I am looking for course, and free career counselling session.",
              "backgroundColor":"#0a5f54",
              "ctaText":"Start Chat",
              "borderRadius":"25",
              "autoShow":false,
              "phoneNumber":"+918123327570"
          }
        };
            s.onload = function() {
                CreateWhatsappChatWidget(options);
            };
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);`,
          }}
        /> */}
          {/* <script
          src="//code.tidio.co/mgl99n6cbvvabah9x8jj98no83kdozym.js"
          async
        ></script> */}
        </Head>
        <main>
          {" "}
          <Navbar popup={true} dataScience={true} formotp={true} />
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
            formotp={true}
            DeskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/DelhiTopWeb.jpg"
            MobImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/DelhiTopMob.jpg"
            courseName="Data Science and AI Master Program"
            cityName="In Kolkata"
            ptag="Learn from experienced professionals how to ace product-based MNC 
                    interviews and receive IBM Certification. Build your career with Data Science 
                    and AI Master’s Program in Kolkata."
          />
          <div className={styles.program1}>
            <ProgramInfo
              p1={mastersProgram[0].ProgramInfo.p1}
              p11={mastersProgram[0].ProgramInfo.p11}
              p2={mastersProgram[0].ProgramInfo.p2}
              p22={mastersProgram[0].ProgramInfo.p22}
              p3={mastersProgram[0].ProgramInfo.p3}
              p33={mastersProgram[0].ProgramInfo.p33}
              p4={mastersProgram[0].ProgramInfo.p4}
              p44={mastersProgram[0].ProgramInfo.p44}
            />
          </div>
          <HiringPatners topHead="Our Hiring Partner's In Kolkata" />
          <div className="Feature" id="Feature">
            <ProgramWithHighLight
              title={mastersProgram[0].BoxShape.title}
              Box1h5={mastersProgram[0].BoxShape.Box1h5}
              box1desc={mastersProgram[0].BoxShape.box1desc}
              Box2h5={mastersProgram[0].BoxShape.Box2h5}
              box2desc={mastersProgram[0].BoxShape.box2desc}
              Box3h5={mastersProgram[0].BoxShape.Box3h5}
              box3desc={mastersProgram[0].BoxShape.box3desc}
              Box4h5={mastersProgram[0].BoxShape.Box4h5}
              box4desc={mastersProgram[0].BoxShape.box4desc}
              jobGuarantee={true}
              HHeading="Course Details"
              Duration="500+ Hours"
              InterviewCalls="Unlimited"
              Projects="20+"
              CourseFee="₹ 1,29,000 + 18% GST"
              Domain="7+"
            />
          </div>
          <SyllabusNew
            formotp={true}
            syllabus={mastersProgram[0].syllabus}
            CSyllabus="Data Science and AI Master Course Syllabus In Kolkata"
            CourseHighlights={mastersProgram[0].CourseHighlights}
            syllabusDesc={mastersProgram[0].syllabusDesc}
            popupHead={mastersProgram[0].popupHead}
            hours={mastersProgram[0].hours}
            project={mastersProgram[0].project}
          />
          <FeeSection
            formotp={true}
            s2dataScience={true}
            Fee="₹ 1,29,000 + 18% GST"
            FeeEmi="₹ 12,685/month"
            FeeHeading="Program Fee & Financing"
            FeeContent1="0% interest rate"
            FeeContent2="No cost EMI"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="15 days refund policy"
            FeeContent6="No additional cost"
            para="Invest in your future with quality education"
          />
          <CityImage
            formotp={true}
            DeskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/CenterCityDelhiWeb.jpg"
            MobImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/city/CenterCityDelhiMob.jpg"
            cityName="दिल्ली"
          />
          <OurExpert
            H5={mastersProgram[0].OurExpert.H5}
            img1={mastersProgram[0].OurExpert.img1}
            img2={mastersProgram[0].OurExpert.img2}
            img3={mastersProgram[0].OurExpert.img3}
            img4={mastersProgram[0].OurExpert.img4}
            img5={mastersProgram[0].OurExpert.img5}
            img6={mastersProgram[0].OurExpert.img6}
            img7={mastersProgram[0].OurExpert.img7}
            img8={mastersProgram[0].OurExpert.img8}
            img9={mastersProgram[0].OurExpert.img9}
            img10={mastersProgram[0].OurExpert.img10}
            img11={mastersProgram[0].OurExpert.img11}
            img12={mastersProgram[0].OurExpert.img12}
            img13={mastersProgram[0].OurExpert.img13}
            img14={mastersProgram[0].OurExpert.img14}
            img15={mastersProgram[0].OurExpert.img15}
            img16={mastersProgram[0].OurExpert.img16}
            img17={mastersProgram[0].OurExpert.img17}
            img18={mastersProgram[0].OurExpert.img18}
            img19={mastersProgram[0].OurExpert.img19}
            img21={mastersProgram[0].OurExpert.img21}
            img22={mastersProgram[0].OurExpert.img22}
            img23={mastersProgram[0].OurExpert.img23}
            img20={mastersProgram[0].OurExpert.img20}
          />
          <Certificate H4="Master's Program In Kolkata" />
          <div className={styles.ProjectWrapper} id="project">
            <Project
              formotp={true}
              popupHead={mastersProgram[0].Project.popupHead}
              project={mastersProgram[0].Project.project}
              domain={mastersProgram[0].Project.domain}
              projectTitle="Hands-on Projects In Kolkata"
            />
          </div>
          <SliderTab />
          <CourseFee
            formotp={true}
            syllabusDesc={mastersProgram[0].syllabusDesc}
            syllabus={mastersProgram[0].Batch}
            CourseFeeHead={mastersProgram[0].BatchCourses.CourseFeeHead}
            CourseFeePara={mastersProgram[0].BatchCourses.CourseFeePara}
            CourseFeelist1={mastersProgram[0].BatchCourses.CourseFeelist1}
            CourseFeelist2={mastersProgram[0].BatchCourses.CourseFeelist2}
            CourseFeelist3={mastersProgram[0].BatchCourses.CourseFeelist3}
            CourseFeelist4={mastersProgram[0].BatchCourses.CourseFeelist4}
            CourseFeelist5={mastersProgram[0].BatchCourses.CourseFeelist5}
          />
          <LearnSupport
            headForCity={true}
            cityName="24/7 Learner’s Support In Kolkata"
          />
          <CityFooter cityName="Kolkata" />
        </main>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function (botId) {
            var s = document.createElement("script");
            s.async = true;
            s.type = 'text/javascript';
            s.src = "https://app.chat360.io/widget/chatbox/common_scripts/script.js";
            s.onload = function () {
              window.loadChat360Bot(botId);
            };
            s.onerror = function (err) {
              console.error(err);
            };
            document.body.appendChild(s);
          })("4f4d2e98-0778-4fb7-a9c3-af6fd1bedad8");
      `,
        }}
      />
    </>
  );
}
