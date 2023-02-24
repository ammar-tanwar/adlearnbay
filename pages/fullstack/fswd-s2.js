import Head from "next/head";
import React, { useState } from "react";
import Popup from "../../Components/Popup/Popup";
import Form from "../../Components/Form/Form";
import FormOtp from "../../Components/FormOtp/FormOtp";
import Navbar from "../../Components/CoursePage/Navbar/Navbar";
import { ProgramFee } from "../../Components/LightTheme/ProgramFee/ProgramFee";
import { FullStackWebCourseData } from "../../Data/FullStackWebData";
import HeroSection from "../../Components/LightTheme/FirstSection/HeroSection";
import Testimonial from "../../Components/LightTheme/SixthSectionFssd/Testimonial";
import SecondSection from "../../Components/LightTheme/SecondSection/SecondSection";
import ThirdSection from "../../Components/LightTheme/ThirdSection/ThirdSection";
import FourthSection from "../../Components/LightTheme/FourthSection/FourthSection";
import SeventhSection from "../../Components/LightTheme/SeventhSection/SeventhSection";
import EightSection from "../../Components/LightTheme/EightSection/EightSection";
import Batch from "../../Components/LightTheme/BatchDetails/Batch";
import SyllabusSection from "../../Components/LightTheme/SyllabusSection/SyllabusSection";
import FAQNew from "../../Components/LightTheme/FAQNew/FAQNewDomain";
import {
  FaqData8,
  PaymentFaqData8,
  CapstoneFaqData8,
  CertificationFaqData8,
  jobFaqData8,
  MentorshipFaqData8,
  SupportFaqData8,
} from "../../Components/LightTheme/FAQNew/FaqData";

export default function Home({ formotp }) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <Head>
        <title>best full stack web development course</title>
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <meta
          name="description"
          content="Learn Full Stack Web Development Course with a chance to work at Maang Companies and participate in live sessions led by tech experts to gain real-time project experience."
        />
        <meta
          name="Keywords"
          content="full stack web development courses, full stack web development course, full stack web development course syllabus, learn web development, web development full course, full stack web development course fees, learn full stack web development course, best full stack web development course, live interactive full stack web development course, online full stack web development course"
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
                         
                        "backgroundColor":"#0a5f54",
                        "ctaText":"Start Chat",
                        "borderRadius":"25",
                        "autoShow":false,
                        "phoneNumber":"+919731135221"
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
        <Navbar popup={true} formotp={true} brochureButton={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <FormOtp setTrigger={setPopups} popup={true} />
          </div>
        </Popup>
        <HeroSection
          formotp={true}
          fullStackCont={true}
          deskTopPara="Be a demanding Developer to stay ahead"
          h1="Full Stack Web Development Course "
          hSpan="Kickstart your Tech Career"
          para="Learn full stack coding course & get hired at top MNCs with a salary of up to 18LPA."
          sideImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/fswd-generic.png"
        />
        <SecondSection
          fullStackCont={true}
          p1="12+ Practical"
          p11="Project Experience"
          p2="Top Product"
          p22="Based Interviews"
          p3="Domain"
          p33="Specialization"
          p4="1:1 Mentorship"
          p44="Dedicated Program"
        />
        <ThirdSection formotp={true} fullStackCont={true} />
        <FourthSection
          fullStackCont={true}
          h1="Full Stack Web Development Course Highlights"
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/online+interactive+sessionn.jpg"
          img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/weekend+and+weekday+batch.jpg"
          img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/extra+dout+clearance+sessionn.jpg"
          img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/Multiple+Domain+Selection+Options.jpg"
        />
        <SyllabusSection
          fullStackCont={true}
          formotp={true}
          desc="Learnbay offers Full Stack Web Development Course led by experts working in top MNCs & real-time industrial projects with case studies."
          Hours="200+ Hours"
          Projects="12+ projects"
          Module0="Preparatory Classes"
          Module1="Web Development Tools"
          Module2="Real-time projects"
          Module3="Interview Preparation: Crack Top Product MNCs"
        />
        <ProgramFee
          Fee={FullStackWebCourseData[0].ProgramFee.Fee}
          Emi={FullStackWebCourseData[0].ProgramFee.Emi}
          formotp={true}
          CourseFeeAndFinancing={
            FullStackWebCourseData[0].ProgramFee.CourseFeeAndFinancing
          }
          para="We are dedicated to making our full stack coding course accessible.  We are committed to helping you find a way to budget for this Course and offer a variety of financing options to make it more economical."
          dataScience={true}
        />
        <Batch
          WebDev={true}
          formotp={true}
          syllabusDesc={FullStackWebCourseData[0].syllabusDesc}
          syllabus={FullStackWebCourseData[0].Batch}
          CourseFeeHead="Full Stack Web Development Course: Batch Details"
          CourseFeePara={FullStackWebCourseData[0].BatchCourses.CourseFeePara}
          CourseFeelist1={FullStackWebCourseData[0].BatchCourses.CourseFeelist1}
          CourseFeelist2={FullStackWebCourseData[0].BatchCourses.CourseFeelist2}
          CourseFeelist3={FullStackWebCourseData[0].BatchCourses.CourseFeelist3}
          CourseFeelist4={FullStackWebCourseData[0].BatchCourses.CourseFeelist4}
          CourseFeelist5={FullStackWebCourseData[0].BatchCourses.CourseFeelist5}
        />
        <Testimonial formotp={true} />
        <FAQNew
          FaqDatas={FaqData8}
          PaymentFaqDatas={PaymentFaqData8}
          CapstoneFaqDatas={CapstoneFaqData8}
          CertificationFaqDatas={CertificationFaqData8}
          jobFaqDatas={jobFaqData8}
          MentorshipFaqDatas={MentorshipFaqData8}
          SupportFaqDatas={SupportFaqData8}
        />
        <SeventhSection fullStackCont={true} />
        <EightSection formotp={true} />
      </main>
    </div>
  );
}
