import Head from "next/head";
import React, { useState } from "react";
import Popup from "../../Components/Popup/Popup";
import FormOtp from "../../Components/FormOtp/FormOtp";

import Navbar from "../../Components/CoursePage/Navbar/Navbar";
import { ProgramFee } from "../../Components/LightTheme/ProgramFee/ProgramFee";
import { SytstemDesignCourseData } from "../../Data/SystemDesignData";
import HeroSection from "../../Components/LightTheme/FirstSection/HeroSection";
import Testimonial from "../../Components/LightTheme/SixthSectionFssd/Testimonial";
import SecondSection from "../../Components/LightTheme/SecondSection/SecondSection";
import ThirdSection from "../../Components/LightTheme/ThirdSection/ThirdSection";
import ProgramHighlights from "../../Components/LightTheme/ProgramHighlights/ProgramHighlights";
import FourthSection from "../../Components/LightTheme/FourthSection/FourthSection";
import SeventhSection from "../../Components/LightTheme/SeventhSection/SeventhSection";
import EightSection from "../../Components/LightTheme/EightSection/EightSection";
import Batch from "../../Components/LightTheme/BatchDetails/Batch";
import SyllabusSection from "../../Components/LightTheme/SyllabusSection/SyllabusSection";
import FAQNew from "../../Components/LightTheme/FAQNew/FAQNewcer";
import {
  FaqData9,
  DomainFaqData9,
  PaymentFaqData9,
  CapstoneFaqData9,
  jobFaqData9,
  MentorshipFaqData9,
  SupportFaqData9,
} from "../../Components/LightTheme/FAQNew/FaqData";

export default function Home({ formotp }) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <Head>
        <title>Learn System Design Course</title>
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <meta
          name="description"
          content="Learn System Design Course with a chance to work at top product based MNCs Companies and participate in live sessions led by tech experts to gain real-time project experience."
        />
        <meta
          name="Keywords"
          content="system design course, system design courses, system design training, best system design course, learn system design, system design program, system design online course, best course for system design, low level system design course, system design best course, online system design course, live system design course"
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
          deskTopPara="Ace the PRODUCT Interviews to achieve your dream job"
          h1="Learn System Design Course Online"
          hSpan="for Working Professionals"
          para="Work on 12+ real-time projects & get hired at top MNCs with a salary of up to 18LPA, only for Working Professionals."
          sideImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/system-generic.png"
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
          h1="System Design Course Highlights"
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/online+interactive+sessionn.jpg"
          img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/weekend+and+weekday+batch.jpg"
          img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/extra+dout+clearance+sessionn.jpg"
          img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/Multiple+Domain+Selection+Options.jpg"
        />
        <SyllabusSection
          fullStackCont={true}
          formotp={true}
          desc="Learnbay offers System Design Course led by experts working in top MNCs & real-time industrial projects with case studies."
          Hours="200+ Hours"
          Projects="12+ projects"
          Module0="Preparatory Classes"
          Module1="DSA and System Design"
          Module2="Real-time Projects & Use Cases"
          Module3="Interview Preparation: Crack top product based MNCs interviews"
        />
        <ProgramFee
          Fee={SytstemDesignCourseData[0].ProgramFee.Fee}
          Emi={SytstemDesignCourseData[0].ProgramFee.Emi}
          formotp={true}
          CourseFeeAndFinancing={
            SytstemDesignCourseData[0].ProgramFee.CourseFeeAndFinancing
          }
          para="We are dedicated to making our System Design Course accessible.  We are committed to helping you find a way to budget for this Course and offer a variety of financing options to make it more economical."
          dataScience={true}
        />
        <ProgramHighlights
          fullStackCont={true}
          Ques="In what ways can a System Design course benefit an SDE?"
          ans="Our system design course can significantly benefit software developers as it equips them with the necessary knowledge and skills to design and create systems that meet the specific needs and expectations of an organization. System design is a structured process that involves the use of modeling languages to convey information and knowledge in a system structure that adheres to a uniform set of guidelines and criteria. The course covers both high-level and low-level system design, which allows developers to gain a comprehensive understanding of the entire system design process."
          Bot1="The primary emphasis of our system design course is to equip individuals with the skills to construct and expand technically-oriented systems"
          Bot2="System design course can aid in overcoming challenges associated with developing scalable systems that can cater to millions of users"
          Bot3="System design course will ease the process of career transition to product-based companies"
        />
        <Batch
          formotp={true}
          syllabusDesc={SytstemDesignCourseData[0].syllabusDesc}
          syllabus={SytstemDesignCourseData[0].Batch}
          CourseFeeHead="System Design Course: Batch Details"
          CourseFeePara={SytstemDesignCourseData[0].BatchCourses.CourseFeePara}
          CourseFeelist1={
            SytstemDesignCourseData[0].BatchCourses.CourseFeelist1
          }
          CourseFeelist2={
            SytstemDesignCourseData[0].BatchCourses.CourseFeelist2
          }
          CourseFeelist3={
            SytstemDesignCourseData[0].BatchCourses.CourseFeelist3
          }
          CourseFeelist4={
            SytstemDesignCourseData[0].BatchCourses.CourseFeelist4
          }
          CourseFeelist5={
            SytstemDesignCourseData[0].BatchCourses.CourseFeelist5
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
