import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../Components/Domain/FirstSection/FirstSection";
import BoxShape from "../Components/Domain/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import FormOtp from "../Components/FormOtp/FormOtp";
import Navbar from "../Components/CoursePage/Navbar/Navbar";

import BankingProject from "../Components/Domain/Project/BankingProject";
import OurExpert from "../Components/CoursePage/OurExpert/OurExpert";
import SyllabusNew from "../Components/Domain/SyllabusNew/SyllabusNew";
import Footer from "../Components/CoursePage/Footer/Footer";
import LearnSupport from "../Components/Domain/LearnSupport/LearnSupport";
import React, { useState } from "react";
import { MarketingData } from "../Data/Domain";
import SliderTab from "../Components/CoursePage/SliderTab/SliderTabs";
import CourseReview from "../Components/Domain/CourseReview/CourseReview";
import Image from "next/image";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <div>
        <Head>
          <title>Online Data Science Course</title>
          <meta
            name="description"
            content="Want to earn salary hike of 250% ? Our Data Science course 
 will boost salary. Apply Now!"
          />
          <meta
            name="Keywords"
            content="data science course, data science course for working professional, data science course fee, data science course duration, data science course syllabus, data science online course"
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
          <Navbar popup={true} formotp={true} />
          <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
            <div className="leftPopup">
              <div className="whiteP" />
            </div>
            <div className="RightPopup">
              <h5>Apply For Counselling</h5>
              {/* <p>Fill the below Details to get started</p> */}

              <FormOtp popup={true} setTrigger={setPopups} />
            </div>
          </Popup>
          <FirstSection
            formotp={true}
            image={true}
            imagesrc="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/Marketing-domain.png"
            ptop={MarketingData[0].FirstSection.ptop}
            heading1={MarketingData[0].FirstSection.heading1}
            headingSpan1={MarketingData[0].FirstSection.headingSpan1}
            heading2={MarketingData[0].FirstSection.heading2}
            headingSpan2={MarketingData[0].FirstSection.headingSpan2}
            des={MarketingData[0].FirstSection.des}
            h1={MarketingData[0].FirstSection.h1}
            p1={MarketingData[0].FirstSection.p1}
            h2={MarketingData[0].FirstSection.h2}
            p2={MarketingData[0].FirstSection.p2}
            h3={MarketingData[0].FirstSection.h3}
            p3={MarketingData[0].FirstSection.p3}
            withOutRadioForm={true}
          />
          <BoxShape
            formotp={true}
            p={MarketingData[0].BoxShape.p}
            title={MarketingData[0].BoxShape.title}
            box1desc={MarketingData[0].BoxShape.box1desc}
            box2desc={MarketingData[0].BoxShape.box2desc}
            box3desc={MarketingData[0].BoxShape.box3desc}
            box4desc={MarketingData[0].BoxShape.box4desc}
          />
          {/* <CourseDs peanutbtrIMG={true} /> */}
          <div className={styles.section4}>
            <div className={styles.section41}>
              <h2>You’re one step closer to becoming a Data Scientist</h2>
              <p>
                Register for our Data Science & AI Master Program and take your
                career to new heights
              </p>
              <div className={styles.section42}>
                <p>
                  Hands-on
                  <br />
                  <span>Experience</span>
                </p>
                <p>
                  Premium 1-on-1
                  <br />
                  <span> Mentoring</span>
                </p>
                <p>
                  Unlimited
                  <br />
                  <span>Job Interview Calls</span>
                </p>
                <p>
                  250% <br />
                  <span>Salary Hike</span>
                </p>
              </div>
            </div>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/What+makes+us+different+flip-min.png"
                width="519"
                height="350"
                layout="intrinsic"
              />
            </div>
          </div>
          <CourseReview
            formotp={true}
            p1={MarketingData[0].CourseReview.p1}
            p2={MarketingData[0].CourseReview.p2}
            p3={MarketingData[0].CourseReview.p3}
            h1={MarketingData[0].CourseReview.h1}
            h2={MarketingData[0].CourseReview.h2}
            h2p={MarketingData[0].CourseReview.h2p}
            hSRC={MarketingData[0].CourseReview.hSRC}
            rewHead={MarketingData[0].CourseReview.rewHead}
          />
          <SyllabusNew
            formotp={true}
            syllabus={MarketingData[0].syllabus}
            CSyllabus={MarketingData[0].CSyllabus}
            CourseHighlights={MarketingData[0].CourseHighlights}
            syllabusDesc={MarketingData[0].syllabusDesc}
            popupHead={MarketingData[0].popupHead}
            hours={MarketingData[0].hours}
            project={MarketingData[0].project}
          />
          <OurExpert
            H5={MarketingData[0].OurExpert.H5}
            img1={MarketingData[0].OurExpert.img1}
            img2={MarketingData[0].OurExpert.img2}
            img3={MarketingData[0].OurExpert.img3}
            img4={MarketingData[0].OurExpert.img4}
            img5={MarketingData[0].OurExpert.img5}
            img6={MarketingData[0].OurExpert.img6}
            img7={MarketingData[0].OurExpert.img7}
            img8={MarketingData[0].OurExpert.img8}
            img9={MarketingData[0].OurExpert.img9}
            img10={MarketingData[0].OurExpert.img10}
            img11={MarketingData[0].OurExpert.img11}
            img12={MarketingData[0].OurExpert.img12}
            img13={MarketingData[0].OurExpert.img13}
            img14={MarketingData[0].OurExpert.img14}
            img15={MarketingData[0].OurExpert.img15}
            img16={MarketingData[0].OurExpert.img16}
            img17={MarketingData[0].OurExpert.img17}
            img18={MarketingData[0].OurExpert.img18}
            img19={MarketingData[0].OurExpert.img19}
            img21={MarketingData[0].OurExpert.img21}
            img22={MarketingData[0].OurExpert.img22}
            img23={MarketingData[0].OurExpert.img23}
            img20={MarketingData[0].OurExpert.img20}
          />
          <div className={styles.transition}>
            <h1>We’ll make sure your career evolution is seamless</h1>
            <p>
              Here’s how you’ll transition from the start till the end of your
              Learnbay journey:
            </p>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/domainpage/TP.png"
              width="1500px"
              height="700px"
              layout="intrinsic"
            />
          </div>
          <SliderTab />
          <div className={styles.ProjectWrapper} id="project">
            <BankingProject
              formotp={true}
              popupHead={MarketingData[0].Project.popupHead}
              project={MarketingData[0].Project.project}
              domain={MarketingData[0].Project.domain}
              projectTitle={MarketingData[0].Project.projectTitle1}
              props={MarketingData[0].Project}
            />
          </div>
          <LearnSupport />
          <Footer />
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
