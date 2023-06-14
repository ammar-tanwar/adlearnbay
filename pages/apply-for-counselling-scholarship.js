import Head from "next/head";
import styles from "../styles/Counseling.module.css";
import { React, useState, useEffect } from "react";
import Navbar from "../Components/NavbarA/Navbar";

import Footer from "../Components/CoursePage/Footer/Footer";
import Form from "../Components/Form/Form";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { MdWatchLater, MdLocationPin } from "react-icons/md";

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
                  "phoneNumber":"+919986049187"
              }
            };
                s.onload = function() {
                    CreateWhatsappChatWidget(options);
                };
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);`,
          }}
        /> */}
        <script
          src="//code.tidio.co/mgl99n6cbvvabah9x8jj98no83kdozym.js"
          async
        ></script>
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
              lift with this scholarship, this is your chance to Learn and lead
              anywhere!
            </p>
            <p>
              Get your profile reviewed by connecting with one of our
              counsellors now.
            </p>
          </div>
        </div>

        <div className={styles.formr}>
          <Form jobPlace={true} jobDesc={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Counselling;
