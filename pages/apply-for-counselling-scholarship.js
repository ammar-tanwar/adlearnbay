import Head from "next/head";
import { React, useEffect, useState } from "react";
import Navbar from "../Components/NavbarA/Navbar";
import styles from "../styles/Counseling.module.css";

import Footer from "../Components/CoursePage/Footer/Footer";
import Form from "../Components/Form/Form";

function Counselling() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, [mobile]);
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }
  return (
    <>
      <div>
        <Head>
          <title>Learnbay Courses</title>
          <meta name="description" content="Learnbay Courses" />
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
        <Navbar radio={true} />
        <div className={styles.formq}>
          <div className={styles.formlScho}>
            <div className={styles.div1}>LEARNBAY</div>
            <h1>Receive upto 15% Scholarship on your course fee.</h1>
            <div>
              <p>
                Learnbay online scholarship is for inspired and motivated
                individuals who wish to upgrade their career. Give your career a
                lift with this scholarship, this is your chance to Learn and
                lead anywhere!
              </p>
              <p>
                Get your profile reviewed by connecting with one of our
                counsellors now.
              </p>
            </div>
          </div>

          <div className={styles.formr}>
            <Form upSkillingHide={true} />
          </div>
        </div>
        <Footer />
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

export default Counselling;
