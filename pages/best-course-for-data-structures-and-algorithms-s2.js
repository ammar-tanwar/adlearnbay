import Head from "next/head";
import React, { useState } from "react";
import Popup from "../Components/Popup/Popup";
import FormOtp from "../Components/FormOtp/FormOtp";
import Navbar from "../Components/CoursePage/Navbar/Navbar";
import { ProgramFee } from "../Components/LightTheme/ProgramFee/ProgramFee";
import { BestDataStructureAlgorithmData } from "../Data/DataStructureAlgorithm";
import HeroSection from "../Components/LightTheme/FirstSection/HeroSection";
import Testimonial from "../Components/LightTheme/SixthSectionFssd/Testimonial";
import SecondSection from "../Components/LightTheme/SecondSection/SecondSection";
import ThirdSection from "../Components/LightTheme/ThirdSection/ThirdSection";
import FourthSection from "../Components/LightTheme/FourthSection/FourthSection";
import SeventhSection from "../Components/LightTheme/SeventhSection/SeventhSection";
import EightSection from "../Components/LightTheme/EightSection/EightSection";
import Batch from "../Components/LightTheme/BatchDetails/Batch";
import SyllabusSection from "../Components/LightTheme/SyllabusSection/SyllabusSection";
import FAQNew from "../Components/LightTheme/FAQNew/FAQNewcer";
import {
  FaqData9,
  DomainFaqData9,
  PaymentFaqData9,
  CapstoneFaqData9,
  jobFaqData9,
  MentorshipFaqData9,
  SupportFaqData9,
} from "../Components/LightTheme/FAQNew/FaqData";

export default function Home({ formotp }) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <Head>
      <title>Best Course for Data Structures and Algorithms</title>
        <meta
          name="description"
          content="Learn Best Course for Data Structures and Algorithms with a chance to work at Maang Companies and participate in live sessions led by tech experts to gain real-time project experience."
        />
        <meta
          name="Keywords"
          content="Best Course for Data Structures and Algorithms, Best Online Course for Data Structures and Algorithms, Best Live Interactive Data Structures and Algorithms Course, Learn Best Course for Data Structures and Algorithms, Master in Best Data Structures and Algorithms Course, Best way to Learn Dsa, Best Online Dsa Course"
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
          deskTopPara="MAANG's Best Interview Preparation Course trained by Top Experts"
          h1="Best Course for "
          hSpan="Data Structures and Algorithms"
          para="Perform real-world industrial projects and use-cases."
          sideImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/dsa-generic.png"
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
          h1="Program Highlights"
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/online+interactive+sessionn.jpg"
          img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/weekend+and+weekday+batch.jpg"
          img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/extra+dout+clearance+sessionn.jpg"
          img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/Multiple+Domain+Selection+Options.jpg"
        />
        <SyllabusSection
          fullStackCont={true}
          formotp={true}
          desc="Learnbay provides Live, Interactive Online Sessions guided by Professionals working in top MNCs. All Best Course for DSA sessions are covered practically with real-time industrial projects and case studies."
          Hours="200+ Hours"
          Projects="12+ projects"
          Module0="Preparatory Classes"
          Module1="Data Structures & Algorithm"
          Module2="System Design"
          Module3="Real-time Projects & Use cases"
        />
        <ProgramFee
          Fee={BestDataStructureAlgorithmData[0].ProgramFee.Fee}
          Emi={BestDataStructureAlgorithmData[0].ProgramFee.Emi}
          formotp={true}
          CourseFeeAndFinancing="DSA Course Fee & Financing"
          para="We are dedicated to making our programs accessible. We are committed to helping you find a way to budget for this program and offer a variety of financing options to make it more economical."
          dataScience={true}
        />
        <Batch
          formotp={true}
          syllabusDesc={BestDataStructureAlgorithmData[0].syllabusDesc}
          syllabus={BestDataStructureAlgorithmData[0].Batch}
          CourseFeeHead="Data Structures and Algorithms Course : Batch Details"
          CourseFeePara={
            BestDataStructureAlgorithmData[0].BatchCourses.CourseFeePara
          }
          CourseFeelist1={
            BestDataStructureAlgorithmData[0].BatchCourses.CourseFeelist1
          }
          CourseFeelist2={
            BestDataStructureAlgorithmData[0].BatchCourses.CourseFeelist2
          }
          CourseFeelist3={
            BestDataStructureAlgorithmData[0].BatchCourses.CourseFeelist3
          }
          CourseFeelist4={
            BestDataStructureAlgorithmData[0].BatchCourses.CourseFeelist4
          }
          CourseFeelist5={
            BestDataStructureAlgorithmData[0].BatchCourses.CourseFeelist5
          }
        />
        <Testimonial formotp={true} />
        <FAQNew
          FaqDatas={FaqData9}
          DomainFaqDatas={DomainFaqData9}
          PaymentFaqDatas={PaymentFaqData9}
          CapstoneFaqDatas={CapstoneFaqData9}
          jobFaqDatas={jobFaqData9}
          MentorshipFaqDatas={MentorshipFaqData9}
          SupportFaqDatas={SupportFaqData9}
        />
        <SeventhSection fullStackCont={true} />
        <EightSection formotp={true} />
      </main>
    </div>
  );
}
