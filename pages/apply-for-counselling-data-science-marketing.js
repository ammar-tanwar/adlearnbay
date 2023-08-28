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

        {mobile ? (
          <div className={styles.formq}>
            <div className={styles.forml}>
              <div className={styles.div1}>LEARNBAY</div>
              <h1>Free Profile Review and Career Counseling | By Experts</h1>
              <div className={styles.timeDetail}>
                <p>
                  <MdWatchLater /> 15-20 &nbsp; Mins
                </p>
                <p>
                  {" "}
                  <MdLocationPin />
                  Telephonic Discussion
                </p>
              </div>

              <div>
                <p>
                  Book a session with a career counsellor or course advisor to
                  go through your requirements in further detail.
                </p>
                <p>
                  <strong>TOPICS COVERED IN DISCUSSION:</strong>
                </p>

                <div
                  style={{
                    display: showMe ? "block" : "none",
                  }}
                >
                  <ul>
                    <li>
                      Can a candidate from the non-programming and non-technical
                      domain learn data science?
                    </li>
                    <li>Will your previous domain experience utilized?</li>
                    <li>Course Curriculum</li>
                    <li>Real-Time Projects List</li>
                    <li>
                      How to change the domain and whether your profile is
                      suitable for data science?
                    </li>
                    <li>Career Options in the data science domain</li>
                    <li>Placement Assistance and Job referrals </li>
                  </ul>

                  <p>
                    <strong>Minimum Duration:</strong>&nbsp;15 to 20 minutes.
                  </p>
                  <p>
                    Your queries and doubts will be answered through this
                    session with a professional.
                  </p>
                  <p>Thanks,</p>
                  <p>
                    <strong>Team Learnbay</strong>
                  </p>
                </div>
              </div>

              <a
                className={styles.btnout}
                style={{ marginTop: "20px" }}
                onClick={toggle}
              >
                {showMe ? (
                  <span style={{ color: "#0070f3" }}>
                    Show less
                    <FaArrowUp style={{ marginLeft: "10px" }} />
                  </span>
                ) : (
                  <span style={{ color: "#0070f3" }}>
                    Show more
                    <FaArrowDown style={{ marginLeft: "10px" }} />
                  </span>
                )}
              </a>
            </div>

            <div className={styles.formr}>
              <Form />
            </div>
          </div>
        ) : (
          <div className={styles.formq}>
            <div className={styles.forml}>
              <div className={styles.div1}>LEARNBAY</div>
              <h1>Free Profile Review and Career Counseling | By Experts</h1>
              <div className={styles.timeDetail}>
                <p>
                  <MdWatchLater /> 15-20 &nbsp; Mins
                </p>
                <p>
                  {" "}
                  <MdLocationPin />
                  Telephonic Discussion
                </p>
              </div>

              <div>
                <p>
                  Book a session with a career counsellor or course advisor to
                  go through your requirements in further detail.
                </p>
                <p>
                  <strong>TOPICS COVERED IN DISCUSSION:</strong>
                </p>
                <ul>
                  <li>
                    Can a candidate from the non-programming and non-technical
                    domain learn data science?
                  </li>
                  <li>Will your previous domain experience utilized?</li>
                  <li>Course Curriculum</li>
                  <li>Real-Time Projects List</li>
                  <li>
                    How to change the domain and whether your profile is
                    suitable for data science?
                  </li>
                  <li>Career Options in the data science domain</li>
                  <li>Placement Assistance and Job referrals </li>
                </ul>
                <p>
                  <strong>Minimum Duration:</strong>&nbsp;15 to 20 minutes.
                </p>
                <p>
                  Your queries and doubts will be answered through this session
                  with a professional.
                </p>
                <p>Thanks,</p>
                <p>
                  <strong>Team Learnbay</strong>
                </p>
              </div>
            </div>

            <div className={styles.formr}>
              <Form />
            </div>
          </div>
        )}

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
