import Head from "next/head";
import React, { useState } from "react";
import Popup from "../../Components/Popup/Popup";
import FormOtp from "../../Components/FormOtp/FormOtp";

import Navbar from "../../Components/CoursePage/Navbar/Navbar";
import { ProgramFee } from "../../Components/LightTheme/ProgramFee/ProgramFee";
import { BlockchainCourseData } from "../../Data/Blockchain";
import HeroSection from "../../Components/LightTheme/FirstSection/HeroSection";
import Testimonial from "../../Components/LightTheme/SixthSectionFssd/Testimonial";
import SecondSection from "../../Components/LightTheme/SecondSection/SecondSection";
import ThirdSection from "../../Components/LightTheme/ThirdSection/ThirdSection";
import FourthSection from "../../Components/LightTheme/FourthSection/FourthSection";
import SeventhSection from "../../Components/LightTheme/SeventhSection/SeventhSection";
import EightSection from "../../Components/LightTheme/EightSection/EightSection";
import Batch from "../../Components/LightTheme/BatchDetails/Batch";
import SyllabusSection from "../../Components/LightTheme/SyllabusSection/SyllabusSection";
import FAQNew from "../../Components/LightTheme/FAQNew/FAQNewcer";
import {
  FaqDataBlockchain,
  DomainFaqDataBlockchain,
  PaymentFaqDataBlockchain,
  CapstoneFaqDataBlockchain,
  jobFaqDataBlockchain,
  MentorshipFaqDataBlockchain,
  SupportFaqDataBlockchain,
} from "../../Components/LightTheme/FAQNew/FaqData";

export default function Home({ formotp }) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <div>
        <Head>
          <title>
            Software Development Course with Specialization in Blockchain -
            Learnbay
          </title>
          <link
            rel="icon"
            href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
          />
          <meta
            name="description"
            content="Enroll in our extensive blockchain specialized software development program to become a skilled blockchain developer."
          />
          <meta
            name="keywords"
            content="Software Development Program with Specialization in Blockchain"
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
                        "marginBottom":"30",
                        "marginRight":"30",
                        "position":"right"
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
                        "phoneNumber":"+919731135221"
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
          <Navbar
            popup={true}
            formotp={true}
            fullstackADS={true}
            brochureButton={true}
            upSkillingHide={true}
          />
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
            fullstackADS={true}
            fullStackCont={true}
            deskTopPara="Ready to lead the blockchain revolution?"
            h1="Software Development Course "
            hSpan="with Specialization in Blockchain"
            para="Work on 12+ real-time projects & get hired at top MNCs with a salary of up to 18LPA, only for Working Professionals."
            sideImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/fssd-generic.jpeg"
          />
          <SecondSection
            fullStackCont={true}
            p1="12+ Practical"
            p11="Project Experience"
            p2="Top Product"
            p22="Based Interviews"
            p3="Industry"
            p33="Certification"
            p4="1:1 Mentorship"
            p44="Dedicated Program"
          />
          <ThirdSection
            formotp={true}
            fullstackADS={true}
            fullStackCont={true}
          />
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
            fullstackADS={true}
            desc="Learnbay's Software Development Course in Blockchain is led by experts from top MNCs, offering real-world projects and case studies."
            Hours="250+ Hours"
            Projects="12+ projects"
            Module0="Programming Fundamentals"
            Module1="Basic & Advanced DSA"
            Module2="System Design"
            Module3="Blockchain Development"
          />
          <ProgramFee
            Fee={BlockchainCourseData[0].ProgramFee.Fee}
            Emi={BlockchainCourseData[0].ProgramFee.Emi}
            formotp={true}
            fullstackADS={true}
            CourseFeeAndFinancing={
              BlockchainCourseData[0].ProgramFee.CourseFeeAndFinancing
            }
            para="We are dedicated to make our Software Development Course with Specialization in Blockchain accessible.  We are committed to helping you find a way to budget for this Course and offer a variety of financing options to make it more economical."
            dataScience={true}
          />
          <Batch
            formotp={true}
            fullstackADS={true}
            syllabusDesc={BlockchainCourseData[0].syllabusDesc}
            syllabus={BlockchainCourseData[0].Batch}
            CourseFeeHead="Blockchain Course: Batch Details"
            CourseFeePara={BlockchainCourseData[0].BatchCourses.CourseFeePara}
            CourseFeelist1={BlockchainCourseData[0].BatchCourses.CourseFeelist1}
            CourseFeelist2={BlockchainCourseData[0].BatchCourses.CourseFeelist2}
            CourseFeelist3={BlockchainCourseData[0].BatchCourses.CourseFeelist3}
            CourseFeelist4={BlockchainCourseData[0].BatchCourses.CourseFeelist4}
            CourseFeelist5={BlockchainCourseData[0].BatchCourses.CourseFeelist5}
          />
          <Testimonial formotp={true} fullstackADS={true} />
          <FAQNew
            FaqDatas={FaqDataBlockchain}
            DomainFaqDatas={DomainFaqDataBlockchain}
            PaymentFaqDatas={PaymentFaqDataBlockchain}
            CapstoneFaqDatas={CapstoneFaqDataBlockchain}
            jobFaqDatas={jobFaqDataBlockchain}
            MentorshipFaqDatas={MentorshipFaqDataBlockchain}
            SupportFaqDatas={SupportFaqDataBlockchain}
          />
          <SeventhSection fullStackCont={true} />
          <EightSection formotp={true} fullstackADS={true} />
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
