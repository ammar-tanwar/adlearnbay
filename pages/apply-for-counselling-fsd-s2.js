import Head from "next/head";
import styles from "../styles/Counseling.module.css";
import { React, useState, useEffect } from "react";
import Navbar from "../Components/NavbarA/Navbar";
import Footer from "../Components/CoursePage/Footer/Footer";
import FormOtp from "../Components/FormOtp/FormOtp";
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
      <Navbar radio={true} formotp={true} />

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
                Book a session with a career counsellor or course advisor to go
                through your requirements in further detail.
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
                  Your queries and doubts will be answered through this session
                  with a professional.
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
            <FormOtp eventRadio={true} />
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
                Book a session with a career counsellor or course advisor to go
                through your requirements in further detail.
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
                  How to change the domain and whether your profile is suitable
                  for data science?
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
            <FormOtp eventRadio={true} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Counselling;
