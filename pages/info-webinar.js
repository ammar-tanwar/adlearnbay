import React from "react";
import styles from "../styles/InfoWebinar.module.css";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../Components/CoursePage/Navbar/NavbarThankYou";
import Footer from "../Components/CoursePage/Footer/Footer";
import FormOtp from "../Components/WebinarPage/FormOtp/FormOtp";
import cookies from "next-cookies";

const ThankYouFsd = ({ initialName }) => {
  const email = JSON.stringify(initialName);

  return (
    <>
      <div className={styles.main}>
        <Head>
          <title>Info Webinar - Learnbay</title>
          <meta name="description" content="Info Webinar - Learnbay" />
          <link
            rel="icon"
            href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'form_complete',
      'enhanced_conversion_data': {
        "email": ${email}
      }
    });
`,
            }}
          />
        </Head>
        <Navbar radio={true} formotp={true} />
        <section className={styles.mains}>
          <div className={styles.Back}>
            <h4 className={styles.thankh4}>
              Oops!
              <br />
              <span className={styles.thankspan}>
                Registration for masterclass has been closed, however, a
                recording of the webinar is still accessible.
              </span>
            </h4>
            <div>
              <section className={styles.formDomain}>
                <div className={styles.headerDomain}>
                  <h3>Apply for Counselling!</h3>
                </div>
                <FormOtp formotp={true} radio={true} />
              </section>
            </div>
          </div>
        </section>
        <div className={styles.headingH4}>
          <h4>Previous Webinar</h4>
        </div>
        <section className={styles.webinar}>
          <div className={styles.webinarDiv}>
            <h4>Data Science</h4>
            <div className={styles.DivBox}>
              <div className={styles.cards}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/unleashMobile.png"
                  width="300"
                  height="300"
                  layout="intrinsic"
                />
                <a
                  href="https://zoom.us/rec/share/yERjU1QAx-4wCOhItNMagOxzcTuZSmna6OyXPtQyx6fliwnPxk1-Ph2WLtPYVD3S.14CcnJRWJURkxbqE"
                  target="_blank"
                >
                  <button>Watch Now</button>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.webinarDivFull}>
            <h4> </h4>
            <div className={styles.DivBoxFull}>
              <div className={styles.cards}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/upskill-mobile.jpg"
                  width="300"
                  height="300"
                  layout="intrinsic"
                />
                <a
                  href="https://zoom.us/rec/share/ympBsWqJETq9NLDVmEOXJFt3e7AErLd2RNve2AYRXiJb1H7M3C96UsIqBWTBpYcY.owFUE_RaEjyeEmdh"
                  target="_blank"
                >
                  <button>Watch Now</button>
                </a>
              </div>
              <div className={styles.cards}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/LLDMobile.jpg"
                  width="300"
                  height="300"
                  layout="intrinsic"
                />
                <a
                  href="https://zoom.us/rec/share/6WkP9ttRb_VQTH8udGi1BUX9u7x607MoBZKoEFM9YFIN3_RYGV7ch_zivswIzuM9.EjDNUJan9wikYIZC"
                  target="_blank"
                >
                  <button>Watch Now</button>
                </a>
              </div>
              <div className={styles.cards}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/upMobile.jpg"
                  width="300"
                  height="300"
                  layout="intrinsic"
                />
                <a
                  href="https://zoom.us/rec/share/K9jHY0HrZk98gtgckq97T1_BjPrG_nXjdwPcut5vJwijseZ7NT9Tlgio2krODvH7.Y3QOhLgTEubTpYnr"
                  target="_blank"
                >
                  <button>Watch Now</button>
                </a>
              </div>
              <div className={styles.cards}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/TimeMobile.jpg"
                  width="300"
                  height="300"
                  layout="intrinsic"
                />
                <a
                  href="https://zoom.us/rec/share/G71UJ9rcICwpSk0_Kt47TAjC4L0q8RJZF7pgwBKUHtrXy1g7k0e49flnQIqE9OGz.609jPfewXBb_HFU6"
                  target="_blank"
                >
                  <button>Watch Now</button>
                </a>
              </div>
            </div>
          </div>
          {/* <div className={styles.headingH4}>
          <h4>Upcoming Webinar</h4>
          <div className={styles.DivBoxUp}>
            <div className={styles.cards}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/upskill-mobile.jpg"
                width="300"
                height="300"
                layout="intrinsic"
              />
              <button>Register Now</button>
            </div>
          </div>
        </div> */}
        </section>
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
          })("d22aede5-fcaf-423d-ab4c-2e49782f9cc2");
      `,
        }}
      />
    </>
  );
};

export default ThankYouFsd;

ThankYouFsd.getInitialProps = async (ctx) => {
  return {
    initialName: cookies(ctx).CARD || "",
  };
};
